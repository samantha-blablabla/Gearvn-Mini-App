---
description: Apple Human Interface Guidelines (HIG) - Quy chuẩn thiết kế iOS cho GearVN Sync Mini App
---

# 🍎 APPLE HUMAN INTERFACE GUIDELINES (HIG)
## Áp dụng cho GearVN Sync Mini App

> **Nguồn gốc:** https://developer.apple.com/design/human-interface-guidelines
> **Phiên bản:** iOS 18+ (2024-2026)
> **Mục đích:** Đảm bảo Mini App có trải nghiệm ngang tầm native iOS app

---

## 1. NGUYÊN TẮC NỀN TẢNG (Foundations)

### 1.1 Aesthetic Integrity (Tính thẩm mỹ nhất quán)
- Giao diện phải **phản ánh đúng mục đích** của app
- App nghiêm túc (bảo hành, đơn hàng) → sử dụng layout tối giản, ít trang trí
- App giải trí (minigame, rewards) → cho phép nhiều hình ảnh và animation hơn
- **KHÔNG trộn lẫn** phong cách giữa các phần — giữ nhất quán trong từng flow

### 1.2 Consistency (Tính nhất quán)
- Sử dụng **cùng một design token** xuyên suốt app (màu sắc, font size, border-radius, spacing)
- Icon phải cùng **một bộ** (Phosphor Icons) — không trộn nhiều icon library
- Các pattern tương tự phải được xử lý **cùng cách** (tất cả list item dùng chung style card)

### 1.3 Direct Manipulation (Tương tác trực tiếp)
- User thao tác trực tiếp lên nội dung thay vì thông qua control phức tạp
- Cung cấp **phản hồi tức thì** (visual feedback) cho mọi thao tác
- Sử dụng `active:scale-95` hoặc `active:scale-[0.98]` cho touch feedback

### 1.4 Feedback (Phản hồi)
- Mọi action phải có **phản hồi rõ ràng**: visual, textual, hoặc haptic
- Loading states phải luôn được hiển thị (shimmer skeleton, spinner)
- Success/Error states cần **rõ ràng và dễ nhận biết** (màu xanh/đỏ + icon + text)

### 1.5 Metaphors (Ẩn dụ)
- Sử dụng các khái niệm quen thuộc từ thế giới thực
- Tab bar ở dưới = điều hướng chính
- Pull-down = refresh
- Swipe back = quay lại

### 1.6 User Control (Kiểm soát của người dùng)
- User luôn phải **có thể quay lại** (back button luôn có mặt)
- Confirm trước khi thực hiện hành động phá hủy (xóa, hủy)
- Cho phép undo khi có thể

---

## 2. QUY CHUẨN LAYOUT & SPACING

### 2.1 Safe Areas
```css
/* Luôn tôn trọng safe area */
padding-bottom: calc(env(safe-area-inset-bottom) + 8px);  /* Bottom nav */
padding-top: env(safe-area-inset-top);                      /* Status bar */
```

### 2.2 Content Width
- **Max width:** `430px` (iPhone 16 Pro Max)
- **Min width:** `320px` (iPhone SE)
- App container luôn được center trên desktop với `margin: 0 auto`

### 2.3 Spacing System (8pt Grid)
Sử dụng bội số của 4px, ưu tiên 8px:
| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | `4px` | Micro spacing (icon-text gap) |
| `space-2` | `8px` | Tight spacing (trong button, badge) |
| `space-3` | `12px` | Default gap (list items) |
| `space-4` | `16px` | Section padding |
| `space-5` | `20px` | Page padding (p-5) |
| `space-6` | `24px` | Section gap |
| `space-8` | `32px` | Large section breaks |

### 2.4 Content Margins
- **Page padding:** `20px` (p-5) — chuẩn iOS
- **Card internal padding:** `16px - 24px` (p-4 đến p-6)
- **Between sections:** `24px` (space-y-6)
- **Between cards in a list:** `12px` (space-y-3)

---

## 3. QUY CHUẨN TYPOGRAPHY

### 3.1 Font Family
- **Primary:** Inter (thay thế SF Pro trên web)
- **Fallback:** system-ui, -apple-system, sans-serif
- **Rendering:** `-webkit-font-smoothing: antialiased`

### 3.2 Type Scale (iOS Dynamic Type Mapping)
| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| **Large Title** | `34px` | `800 (ExtraBold)` | `1.1` | Welcome screen headers |
| **Title 1** | `28px` | `700 (Bold)` | `1.2` | Page section headers |
| **Title 2** | `22px` | `700` | `1.25` | Card titles |
| **Title 3** | `20px` | `600 (SemiBold)` | `1.3` | Sub-section headers |
| **Headline** | `17px` | `600-700` | `1.3` | Navigation titles, header bars |
| **Body** | `15px-16px` | `400-500` | `1.5` | Main content text |
| **Callout** | `14px` | `500-600` | `1.4` | Secondary labels, card subtitles |
| **Subhead** | `13px` | `500-600` | `1.4` | Metadata, timestamps |
| **Footnote** | `12px` | `500` | `1.3` | Auxiliary info, helper text |
| **Caption 1** | `11px` | `500-600` | `1.2` | Badges, tags, small labels |
| **Caption 2** | `10px` | `600-700` | `1.2` | Tab bar labels, micro badges |

### 3.3 Font Weight Rules
- **Navigation titles:** `font-bold` (700)
- **Card titles:** `font-bold` (700)
- **Body text:** `font-medium` (500)
- **Secondary text:** `font-medium` (500)
- **Buttons:** `font-bold` (700)
- **Badges/Tags:** `font-bold` hoặc `font-black` (700-900)

### 3.4 Text Truncation
- Sử dụng `line-clamp-2` cho product names / titles dài
- Sử dụng `truncate` cho single-line metadata
- **KHÔNG** cắt text quan trọng (giá, trạng thái)

---

## 4. QUY CHUẨN MÀU SẮC

### 4.1 Color Palette (GearVN Branded)
```javascript
// Tailwind config
colors: {
  primary: "#E30019",         // GearVN Red — CTA buttons, active states
  "primary-dark": "#C40016",  // Pressed/hover state
  "background-light": "#F2F4F6",  // iOS system gray background
  "background-dark": "#1C1C1E",   // Dark mode background
  "card-white": "#FFFFFF",        // Card surfaces
  "text-primary": "#111827",      // Primary text (gray-900)
  "text-secondary": "#6B7280",    // Secondary text (gray-500)
}
```

### 4.2 Semantic Colors (iOS System Colors)
| Purpose | Color | Tailwind Class |
|---------|-------|---------------|
| **Success** | `#22C55E` | `text-green-500`, `bg-green-50` |
| **Warning** | `#F59E0B` | `text-amber-500`, `bg-amber-50` |
| **Error/Destructive** | `#EF4444` | `text-red-500`, `bg-red-50` |
| **Info** | `#3B82F6` | `text-blue-500`, `bg-blue-50` |
| **Disabled** | `#D1D5DB` | `text-gray-300`, `bg-gray-100` |

### 4.3 Status Badge Colors
| Status | Background | Text | Usage |
|--------|-----------|------|-------|
| Hoàn thành | `bg-green-100` | `text-green-700` | Đơn hàng, bảo hành |
| Đang xử lý | `bg-orange-100` | `text-orange-600` | Trạng thái pending |
| Đang giao | `bg-blue-100` | `text-blue-600` | Shipping |
| Đã hủy | `bg-red-100` | `text-red-600` | Cancelled |
| Mới | `bg-purple-100` | `text-purple-600` | New items |

### 4.4 Color Rules
- **Tint color** (primary red) chỉ dùng cho: active tab, CTA buttons, links, badges quan trọng
- **Background:** Luôn dùng `#F2F4F6` (system grouped background), KHÔNG dùng pure white cho background
- **Cards:** Pure white `#FFFFFF` trên nền gray
- **Contrast ratio:** Tối thiểu `4.5:1` cho text, `3:1` cho large text

---

## 5. QUY CHUẨN COMPONENTS

### 5.1 Navigation Bar (Header)
```
Chiều cao: 44px content + safe area
Background: white/95 + backdrop-blur(20px)
Position: sticky top-0 z-50
Border: border-b border-gray-100
Title: 17px font-bold, centered
Back button: 40x40 rounded-full, border, shadow-sm
```
**Rules:**
- Title luôn **centered**
- Back button ở **bên trái**, action button ở **bên phải**
- Sử dụng `ios-blur` class cho frosted glass effect
- Back icon: `ph-caret-left` (KHÔNG dùng arrow-left)

### 5.2 Tab Bar (Bottom Navigation)
```
Position: fixed bottom-0
Background: white/95 + ios-blur
Border: border-t border-gray-200
Padding: pt-2 pb-[calc(env(safe-area-inset-bottom)+8px)]
Max width: 430px, centered
Z-index: 40
```
**Rules:**
- Tối đa **5 tabs** (theo HIG)
- Icon: `24px`, Label: `10px font-bold`
- Active state: filled icon (`ph-fill`) + primary color
- Inactive state: outline icon (`ph-bold`) + `gray-400`
- Center FAB button nếu cần special action
- **Ẩn tab bar** khi vào full-screen flows (booking, create form, game)

### 5.3 Cards
```
Background: white
Border-radius: 20px - 24px (rounded-[20px] hoặc rounded-[24px])
Padding: 16px - 24px
Shadow: shadow-soft (0 4px 20px -2px rgba(0,0,0,0.05))
Border: border border-transparent (default), hover:border-gray-100
```
**Rules:**
- Tất cả card dùng **cùng border-radius** (20px hoặc 24px)
- Touch feedback: `active:scale-[0.98] transition-transform`
- Image container trong card: `bg-[#F9FAFB] rounded-[14px]`
- Product images: `object-contain mix-blend-multiply`

### 5.4 Buttons
| Type | Style | Usage |
|------|-------|-------|
| **Primary CTA** | `bg-primary text-white rounded-[14px] h-12 font-bold shadow-lg shadow-primary/20` | Main actions |
| **Secondary** | `bg-primary/10 text-primary rounded-[10px] font-bold` | Sub-actions |
| **Ghost/Icon** | `size-10 rounded-full bg-white border border-gray-200 shadow-sm` | Nav buttons |
| **Destructive** | `bg-red-500 text-white rounded-[14px]` | Delete, cancel |
| **Disabled** | `bg-gray-200 text-gray-400 rounded-[14px] cursor-not-allowed` | Inactive |

**Rules:**
- Minimum touch target: **44x44 points** (size-10 = 40px minimum, size-11 = 44px)
- Touch feedback: `active:scale-95 transition-all`
- Hover: `hover:bg-primary/90` (subtle)
- CTA buttons chiều cao: `48px` (h-12)

### 5.5 Input Fields
```
Height: 48px (h-12)
Background: bg-[#F9FAFB]
Border: border border-gray-200
Border-radius: 14px (rounded-[14px])
Padding: px-4
Font: text-[15px] font-medium
Focus: focus:ring-2 focus:ring-primary focus:border-transparent
Placeholder: placeholder:text-gray-400
```

### 5.6 Badges & Tags
```
Font: text-[10px] - text-[11px] font-bold uppercase
Padding: px-2 py-0.5
Border-radius: rounded-[6px]
```
- Notification dot: `w-2 h-2 bg-primary rounded-full border border-white`
- Count badge: `h-5 w-5 rounded-full bg-yellow-400 text-[10px]`

### 5.7 Lists & Grouped Content
- **Grouped style:** Cards trên nền gray (iOS Grouped Table View)
- Gap giữa items: `space-y-3`
- Separator trong cùng group: `border-b border-gray-50` hoặc `divide-y divide-gray-50`
- Chevron indicator: `ph-caret-right text-gray-300` ở bên phải cho navigable items

### 5.8 Action Sheets & Modals
- Background overlay: `bg-black/50` với `backdrop-blur`
- Modal: `rounded-t-[28px]` (bottom sheet) hoặc `rounded-[24px]` (center)
- Handle bar (bottom sheet): `w-10 h-1 bg-gray-300 rounded-full mx-auto`
- Animation: slide up từ bottom

### 5.9 Empty States
- Centered layout
- Icon lớn (48-64px) trong circle background nhạt
- Title: bold, 16-18px
- Description: text-secondary, 14px
- CTA button nếu applicable

---

## 6. QUY CHUẨN TOUCH & INTERACTION

### 6.1 Touch Targets
- **Minimum:** `44x44 points` cho tất cả interactive elements
- Sử dụng padding để mở rộng touch area nếu visual size nhỏ hơn
- Khoảng cách tối thiểu giữa 2 touch targets: `8px`

### 6.2 Gestures
| Gesture | Usage |
|---------|-------|
| **Tap** | Primary action trên buttons, links, cards |
| **Long Press** | Context menu, preview |
| **Swipe Back** | Navigate back (edge swipe) |
| **Swipe Horizontal** | Carousel, tabs |
| **Pull Down** | Refresh content |
| **Scroll** | Browse lists, pages |

### 6.3 Touch Feedback CSS
```css
/* Card press */
.card-interactive {
  @apply active:scale-[0.98] transition-transform cursor-pointer;
}

/* Button press */
.btn-press {
  @apply active:scale-95 transition-all;
}

/* Icon button press */
.icon-btn-press {
  @apply active:scale-90 transition-all;
}
```

### 6.4 Prevent Default Mobile Behaviors
```css
body {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  overscroll-behavior-y: none;
}
img {
  -webkit-user-drag: none;
  pointer-events: none;
}
input, textarea {
  user-select: text;
  -webkit-user-select: text;
}
```

---

## 7. QUY CHUẨN ANIMATION & MOTION

### 7.1 Duration Guidelines
| Type | Duration | Easing |
|------|----------|--------|
| **Micro** (button press, toggle) | `100-200ms` | `ease-out` |
| **Small** (fade, color change) | `200-300ms` | `ease-in-out` |
| **Medium** (slide, expand) | `300-400ms` | `ease-in-out` hoặc spring |
| **Large** (page transition, modal) | `400-500ms` | `cubic-bezier(0.32, 0.72, 0, 1)` |

### 7.2 iOS Spring Animation
```javascript
// Framer Motion spring presets (nếu dùng)
const iosSpring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1
};
```

### 7.3 Tailwind Transition Classes
```
transition-all duration-300    → Default cho hầu hết elements
transition-transform           → Cho scale effects
transition-colors duration-200 → Cho color changes
```

### 7.4 Animation Rules
- ✅ Animate: `transform`, `opacity`, `filter`, `clip-path`
- ❌ KHÔNG animate: `width`, `height`, `top`, `left`, `margin`, `padding`
- Luôn dùng `will-change` cẩn thận cho complex animations
- Sử dụng `@media (prefers-reduced-motion: reduce)` để tắt animation cho accessibility
- Scroll vào view: scroll-to-top khi navigate (`window.scrollTo(0, 0)`)

---

## 8. QUY CHUẨN NAVIGATION

### 8.1 Navigation Types
| Pattern | Usage | Implementation |
|---------|-------|---------------|
| **Tab Bar** | Chuyển giữa các section chính | BottomNav component (max 5 tabs) |
| **Hierarchical** | Drill-down vào chi tiết | Push screen + back button |
| **Modal** | Full-screen form, popup | Overlay/slide-up |
| **Flat** | Ngang hàng, swipe | Horizontal scroll, tabs |

### 8.2 Back Navigation Rules
- **Luôn có back button** trên mọi screen không phải root tab
- Back button phải đưa user về đúng screen trước đó (origin tracking)
- Label back button nên reflect screen trước: "← Trang chủ" hoặc just "←"
- Sub-screens phải **highlight đúng tab cha** trên bottom nav

### 8.3 State Preservation
- Khi quay lại từ sub-screen, **giữ nguyên scroll position** và filter state nếu có thể
- Tab switching KHÔNG reset state (user expects to come back to where they were)

### 8.4 Screen Transition
- Forward navigation: slide from right
- Back navigation: slide from left
- Modal: slide from bottom
- Tab switch: crossfade (instant hoặc rất nhanh)

---

## 9. QUY CHUẨN SCROLL & CONTENT

### 9.1 Scroll Behavior
```css
::-webkit-scrollbar { display: none; }
* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```
- Ẩn scrollbar để giống native app
- Sử dụng `overflow-x-hidden` trên app container
- Horizontal scroll cho carousels: `overflow-x-auto`, `scroll-snap-x`

### 9.2 Sticky Headers
- Navigation bar: `sticky top-0 z-50`
- Section headers (nếu cần): `sticky top-[56px] z-30`
- Sử dụng `ios-blur` (backdrop-filter: blur(20px)) cho sticky elements

### 9.3 Content Padding
- Bottom padding cho pages có tab bar: `pb-24` (đủ cho tab bar height + spacing)
- Bottom padding cho pages KHÔNG có tab bar: `pb-8` hoặc `pb-safe`

---

## 10. QUY CHUẨN ICON

### 10.1 Icon Library
- **Phosphor Icons** (https://phosphoricons.com/)
- Consistent weight: `ph-bold` (inactive), `ph-fill` (active/selected)

### 10.2 Icon Sizes
| Context | Size | Class |
|---------|------|-------|
| **Tab bar** | `24px` | `text-[24px]` |
| **Navigation action** | `20px` | `text-xl` |
| **In-card icon** | `20-24px` | `text-xl` đến `text-2xl` |
| **Feature/hero icon** | `28-40px` | `text-3xl` đến `text-4xl` |
| **Empty state** | `48-64px` | `text-5xl` đến `text-6xl` |

### 10.3 Icon Colors
- Active/Selected: `text-primary` (#E30019)
- Inactive: `text-gray-400`
- On dark/colored BG: `text-white`
- Semantic: match semantic color (green for success, etc.)

---

## 11. QUY CHUẨN IMAGES

### 11.1 Product Images
```
Container: bg-[#F9FAFB] rounded-[14px] border border-gray-100
Image: object-contain mix-blend-multiply
Aspect: Flexible, typically square or 4:3
Padding: p-1 to p-5 depending on size
```

### 11.2 Banner Images
- Full-width, rounded corners (`rounded-[20px]`)
- Overlay gradient nếu có text: `bg-gradient-to-r from-black/60 to-transparent`

### 11.3 Avatar
- Rounded: `rounded-full`
- Sizes: `size-10` (small), `size-16` (medium), `size-20` (large)
- Border: `ring-4 ring-white` hoặc `border-2 border-white`

---

## 12. QUY CHUẨN SHADOW & DEPTH

### 12.1 Shadow System
```javascript
boxShadow: {
  'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',   // Cards, containers
  'glow': '0 4px 15px -3px rgba(227, 0, 25, 0.2)',  // Primary CTA glow
  'lg': standard Tailwind shadow-lg,                  // Elevated elements
  'sm': standard Tailwind shadow-sm,                  // Subtle elevation
}
```

### 12.2 Z-Index Scale
| Layer | Z-Index | Elements |
|-------|---------|----------|
| Content | `z-0` - `z-10` | Cards, images |
| Floating | `z-20` - `z-30` | FAB, floating elements |
| Sticky | `z-40` | Tab bar |
| Header | `z-50` | Navigation bar |
| Overlay | `z-[60]` | Floating game button |
| Modal | `z-[70]` - `z-[80]` | Modals, sheets |
| Toast | `z-[90]` | Notifications |
| Critical | `z-[100]` | System alerts |

---

## 13. QUY CHUẨN BORDER RADIUS

### 13.1 Radius System (Cong theo ngữ cảnh)
| Element | Radius | Class |
|---------|--------|-------|
| **Page-level cards** | `20-24px` | `rounded-[20px]` / `rounded-[24px]` |
| **Buttons (CTA)** | `14px` | `rounded-[14px]` |
| **Input fields** | `14px` | `rounded-[14px]` |
| **Inner containers** | `14px` | `rounded-[14px]` |
| **Small buttons/badges** | `6-10px` | `rounded-[6px]` / `rounded-[10px]` |
| **Full round** | `9999px` | `rounded-full` |
| **Bottom sheet** | `28px top` | `rounded-t-[28px]` |
| **FAB button** | `16px` | `rounded-[16px]` |

### 13.2 Nested Radius Rule
Khi nest elements, **inner radius = outer radius - padding**.
VD: Card `rounded-[20px]` padding `16px` → inner element `rounded-[14px]`

---

## 14. ACCESSIBILITY (Trợ năng)

### 14.1 Bắt buộc
- Tất cả images phải có `alt` text
- Interactive elements phải có `aria-label` nếu không có visible text
- Color KHÔNG phải indicator duy nhất (luôn kèm text/icon)
- Focus states rõ ràng cho keyboard navigation
- `prefers-reduced-motion` support

### 14.2 Touch Accessibility
- Touch target tối thiểu: `44x44 points`
- Không dựa hoàn toàn vào gesture — luôn có alternative (button)
- Text phải đọc được ở zoom 200%

---

## 15. PERFORMANCE RULES

### 15.1 Rendering
- Sử dụng `transform` và `opacity` cho animations (GPU-accelerated)
- Tránh layout thrashing (batch DOM reads/writes)
- Lazy load images dưới fold
- Virtual scrolling cho lists dài (>50 items)

### 15.2 Assets
- Image format: WebP preferred, fallback JPEG
- Sử dụng CDN URLs cho product images
- Font: preconnect to Google Fonts

### 15.3 React
- Tránh re-render không cần thiết (React.memo cho heavy components)
- useCallback cho event handlers truyền vào children
- Tách components hợp lý — mỗi screen là 1 file

---

## 16. CHECKLIST TRƯỚC KHI SHIP

Mỗi screen/component mới phải pass:

- [ ] Touch targets ≥ 44x44pt
- [ ] Back navigation hoạt động đúng
- [ ] Tab bar highlight đúng tab cha
- [ ] Scroll to top khi navigate
- [ ] Bottom padding đủ cho tab bar (pb-24) hoặc content không bị che
- [ ] Text không bị cắt unexpected (truncate/line-clamp đúng chỗ)
- [ ] Loading/empty states được handle
- [ ] Active/press feedback trên mọi button và card
- [ ] Consistent border-radius với design system
- [ ] Colors đúng semantic meaning
- [ ] Font sizes đúng theo type scale
- [ ] Sticky header có blur effect
- [ ] Images có alt text
- [ ] Không scroll ngang bất ngờ (overflow-x-hidden)

---

## 17. COMPONENT TEMPLATE (Quick Reference)

### Standard Screen Template
```tsx
const ScreenName: React.FC<Props> = ({ onBack, onNavigate }) => {
  return (
    <div className="min-h-screen bg-background-light pb-24">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 ios-blur border-b border-gray-100">
        <div className="flex items-center p-4 justify-between h-14">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900">
            <i className="ph-bold ph-caret-left text-xl"></i>
          </button>
          <h1 className="text-[17px] font-bold leading-tight tracking-tight flex-1 text-center text-text-primary">
            Screen Title
          </h1>
          <div className="size-10"></div> {/* Spacer for center alignment */}
        </div>
      </header>

      {/* Content */}
      <main className="p-5 space-y-6">
        {/* Cards, lists, content here */}
      </main>
    </div>
  );
};
```

### Standard Card Template
```tsx
<div className="bg-white rounded-[20px] p-4 shadow-soft border border-transparent active:scale-[0.98] transition-transform cursor-pointer">
  {/* Card content */}
</div>
```

### Standard CTA Button
```tsx
<button className="w-full h-12 bg-primary text-white font-bold rounded-[14px] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95">
  Button Label
  <i className="ph-bold ph-arrow-right"></i>
</button>
```
