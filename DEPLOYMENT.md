# Hướng Dẫn Deploy (GearVN Sync)

Để deploy dự án lên Cloudflare Pages từ máy mới, bạn chỉ cần làm theo các bước sau:

## 1. Cài Đặt Môi Trường
Sau khi `git pull` code về máy, chạy lệnh sau để cài đặt các thư viện cần thiết (bao gồm cả Wrangler CLI):

```bash
npm install
```

## 2. Xác Thực Tài Khoản Cloudflare (Lần đầu tiên trên máy mới)
Nếu đây là lần đầu bạn chạy trên máy này, bạn cần đăng nhập vào Cloudflare:

```bash
npx wrangler login
```
(Làm theo hướng dẫn trên trình duyệt để cấp quyền)

## 3. Deploy
Để build và deploy phiên bản mới nhất lên Cloudflare, chỉ cần chạy một lệnh duy nhất:

```bash
npm run deploy
```

Lệnh này sẽ tự động:
1.  Build dự án (`npm run build`).
2.  Deploy folder `dist` lên project `gearvn-mini-app` trên Cloudflare.
