# Hướng Dẫn Thiết Kế & Xử Lý Giao Diện Tràn Viền (Edge-to-Edge System)

Mục tiêu: Loại bỏ cảm giác "đóng hộp" (boxed-in), nội dung (ảnh, bản đồ, nền) chảy tràn xuống dưới các thanh hệ thống (System Bars) nhưng vẫn đảm bảo nút bấm và văn bản không bị che khuất.

#### 1. Nguyên Tắc Cốt Lõi: Safe Area (Vùng An Toàn)
Trước khi làm tràn viền, phải hiểu giới hạn an toàn.
*   **Safe Area là gì?** Là vùng hình chữ nhật đảm bảo nội dung không bị che bởi "tai thỏ" (Notch), Dynamic Island, góc bo tròn, hoặc thanh Home Indicator.
*   **Quy tắc bất di bất dịch:**
    *   **Nền (Background/Image):** Phải **tràn ra ngoài** Safe Area (Full viewport).
    *   **Nội dung (Text/Button/Inputs):** Phải nằm **bên trong** Safe Area.

#### 2. Chiến Lược Xử Lý Status Bar (Thanh Trạng Thái)

Status Bar không nên là một dải màu đặc tách biệt. Hãy coi nó là một lớp kính phủ lên nội dung của bạn. Có 3 kịch bản xử lý chính:

**Kịch bản A: Trong suốt hoàn toàn (Transparent)**
*   **Khi nào dùng:** Màn hình có hình ảnh (Hero Image), Bản đồ, hoặc Video chạy tràn lên tận đỉnh máy.
*   **Xử lý:**
    *   Nền Status bar: `Transparent` (0% opacity).
    *   Nội dung (Giờ, Pin, Sóng): Phải tương phản với ảnh nền.
    *   **Kỹ thuật Scrim (Gradient đen mờ):** Nếu ảnh nền quá sáng hoặc phức tạp, hãy thêm một lớp gradient đen mờ (`linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)`) từ đỉnh xuống khoảng 100px. Điều này giúp text màu trắng trên Status bar luôn dễ đọc mà không cần đổi màu nền cứng.

**Kịch bản B: Hiệu ứng Kính mờ (Blur / Glassmorphism)**
*   **Khi nào dùng:** Khi nội dung bên dưới là văn bản cuộn (Scrollable content) và bạn muốn giữ ngữ cảnh màu sắc nhưng vẫn tách biệt tiêu đề. Đây là phong cách đặc trưng của iOS (Apple gọi là "Liquid Glass" hoặc Ultra Thin Material).
*   **Xử lý:**
    *   Nền Status bar (hoặc Navigation Bar): Màu nền + Opacity thấp (ví dụ: `bg-white/80` hoặc `bg-black/80`) + `Backdrop Blur` (mờ hậu cảnh).
    *   Hiệu ứng: Khi nội dung cuộn bên dưới, màu sắc sẽ nhòe đi qua thanh này, tạo cảm giác chiều sâu (Depth) rất cao cấp.

**Kịch bản C: Chuyển đổi trạng thái động (Dynamic Switching)**
*   **Vấn đề:** Banner đầu trang là ảnh tối (dùng Status Bar trắng), nhưng khi cuộn xuống gặp nền trắng (cần Status Bar đen).
*   **Giải pháp:** Lập trình viên sẽ bắt sự kiện cuộn (Scroll Event). Khi người dùng cuộn qua chiều cao của Banner, Status Bar sẽ chuyển từ `Light Content` sang `Dark Content` (và ngược lại).

#### 3. Chiến Lược Xử Lý Home Indicator (Thanh Điều Hướng Đáy)

Khu vực này thường bị Designer bỏ quên, gây ra một vạch đen hoặc trắng cắt ngang đáy màn hình rất xấu.

*   **iOS:**
    *   Tuyệt đối **không** vẽ nền cứng cho Home Indicator trừ khi đó là Tab Bar cố định.
    *   Với các màn hình chi tiết (Detail View) hoặc Pop-up (Bottom Sheet): Hãy để màu nền của trang (hoặc ảnh) tràn xuống tận đáy vật lý của thiết bị. Thanh Home Indicator sẽ tự động đổi màu (trắng/đen) tương phản với nền.
*   **Android:**
    *   Android hiện đại hỗ trợ "Gesture Navigation" (vuốt giống iOS). Cần set hệ thống `Edge-to-Edge` để nội dung chìm xuống dưới thanh điều hướng này.

#### 4. Hướng Dẫn Triển Khai (Design to Code Handoff)

Để Developer hiểu ý đồ "tràn viền" của bạn, hãy ghi chú (annotate) rõ ràng trong Figma:

**A. Thiết lập trong Figma:**
1.  Đừng cắt Status Bar ra khỏi thiết kế. Hãy dùng một Component Status Bar nằm đè lên trên cùng (Top layer).
2.  Set Constraint cho Status Bar là: `Fixed position when scrolling`.
3.  Tạo biến thể (Variant) cho Status Bar: "Light Mode" (chữ đen) và "Dark Mode" (chữ trắng) để thay vào các màn hình nền tối/sáng tương ứng.

**B. Ghi chú cho Developer (Token & Settings):**

| Thành phần | Yêu cầu Kỹ thuật (Ghi chú vào file thiết kế) | Code Snippet tham khảo (Concept) |
| :--- | :--- | :--- |
| **Android System** | Yêu cầu bật chế độ Edge-to-Edge (Full screen). | `WindowCompat.setDecorFitsSystemWindows(window, false)` |
| **Status Bar BG** | Transparent (Trong suốt). | `statusBarColor = Color.Transparent` |
| **Status Bar Text** | Tự động đảo màu hoặc Set cứng theo theme. | `appearanceLightStatusBars = true/false` |
| **Safe Area (CSS/Tailwind)** | Sử dụng biến môi trường để tránh tai thỏ. | `pt-[env(safe-area-inset-top)]` (Tailwind) |
| **Bottom Navigation** | Nền trong suốt hoặc Blur, không được cắt ngang ảnh. | `navigationBarColor = Color.Transparent` |

**C. Mẹo Web App (PWA/Mobile Web):**
Nếu bạn làm Web App chạy trên Mobile, hãy nhắc Dev thêm thẻ meta này vào HTML để cho phép tràn viền:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```
Sau đó dùng CSS `padding-top: env(safe-area-inset-top)` để đẩy nội dung xuống, tránh bị tai thỏ che mất.

### Tóm lại: Checklist cho giao diện Tràn viền chuẩn
1.  [ ] **Nền:** Đã kéo full kích thước màn hình thiết bị chưa?
2.  [ ] **Safe Area:** Các nút Back, Menu, Search có bị đè lên tai thỏ không? (Cách lề trên ít nhất 44pt - 50pt).
3.  [ ] **Tương phản:** Status Bar đang dùng chữ trắng trên nền tối hay chữ đen trên nền sáng? Có dễ đọc không?
4.  [ ] **Scrim:** Nếu nền là ảnh phức tạp, đã có lớp Gradient mờ lót dưới Status bar chưa?
5.  [ ] **Scroll:** Khi cuộn trang, thanh điều hướng sẽ đổi màu hay dùng hiệu ứng Blur?
