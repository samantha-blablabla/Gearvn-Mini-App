import React from 'react';
import { ScreenName } from '../types';

interface SupportScreenProps {
  onBack: () => void;
  onNavigate?: (screen: ScreenName) => void;
}

const SupportScreen: React.FC<SupportScreenProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="min-h-screen bg-background-light flex flex-col pb-24">
      {/* HIG Update: Min height 60px and py-3 for airy header */}
      <header className="sticky top-0 z-50 bg-white/90 ios-blur border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3 min-h-[60px]">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900">
            <i className="ph ph-caret-left text-xl"></i>
          </button>
          <h1 className="text-[17px] font-bold tracking-tight text-text-primary flex-1 text-center">Liên hệ hỗ trợ</h1>
          <div className="size-10"></div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="px-5 pt-6 pb-4">
          <h2 className="text-[24px] font-black tracking-tight leading-tight text-text-primary">Chúng tôi có thể giúp gì cho bạn?</h2>
          <p className="text-text-secondary mt-1.5 text-[14px]">Chọn một kênh để nhận hỗ trợ tức thì</p>
        </div>

        {/* GearBot Chat Card */}
        <div className="px-5 py-2">
          <button
            onClick={() => onNavigate?.(ScreenName.CHAT)}
            className="w-full bg-gradient-to-r from-primary to-[#ff4d4d] p-4 rounded-[20px] flex items-center gap-4 shadow-lg shadow-primary/20 active:scale-[0.98] transition-all text-white text-left"
          >
            <div className="size-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <i className="ph-fill ph-robot text-3xl"></i>
            </div>
            <div className="flex-1">
              <p className="font-bold text-[16px]">Chat với GearBot</p>
              <p className="text-[13px] opacity-80 mt-0.5">Tra đơn · Bảo hành · Dịch vụ · FAQ</p>
            </div>
            <i className="ph ph-caret-right text-xl opacity-60"></i>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 px-5 py-2">
          <div className="bg-white p-5 rounded-[20px] flex flex-col items-center text-center shadow-soft cursor-pointer active:scale-95 transition-all border border-transparent hover:border-gray-100">
            <div className="size-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <i className="ph-fill ph-phone text-primary text-3xl"></i>
            </div>
            <p className="font-bold text-[16px] text-text-primary">Hotline</p>
            <p className="text-primary font-bold text-[14px] mt-0.5">1800 6789</p>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider font-bold">Hỗ trợ 24/7</p>
          </div>
          <div className="bg-white p-5 rounded-[20px] flex flex-col items-center text-center shadow-soft cursor-pointer active:scale-95 transition-all border border-transparent hover:border-gray-100">
            <div className="size-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-3">
              <i className="ph-fill ph-chat-circle text-blue-500 text-3xl"></i>
            </div>
            <p className="font-bold text-[16px] text-text-primary">Zalo OA</p>
            <p className="text-text-secondary text-[14px] mt-0.5">Gearvn Official</p>
            <p className="text-[11px] text-green-500 mt-1 uppercase tracking-wider font-bold">Phản hồi: &lt; 5p</p>
          </div>
          <div className="bg-white p-5 rounded-[20px] flex flex-col items-center text-center shadow-soft cursor-pointer active:scale-95 transition-all border border-transparent hover:border-gray-100">
            <div className="size-14 bg-purple-500/10 rounded-full flex items-center justify-center mb-3">
              <i className="ph-fill ph-messenger-logo text-purple-500 text-3xl"></i>
            </div>
            <p className="font-bold text-[16px] text-text-primary">Messenger</p>
            <p className="text-text-secondary text-[14px] mt-0.5">Trực tuyến</p>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider font-bold">Chat trực tiếp</p>
          </div>
          <div className="bg-white p-5 rounded-[20px] flex flex-col items-center text-center shadow-soft cursor-pointer active:scale-95 transition-all border border-transparent hover:border-gray-100">
            <div className="size-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-3">
              <i className="ph-fill ph-shield-check text-orange-500 text-3xl"></i>
            </div>
            <p className="font-bold text-[16px] text-text-primary">Bảo Hành</p>
            <p className="text-text-secondary text-[14px] mt-0.5">Tra cứu trạng thái</p>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider font-bold">Xử lý nhanh</p>
          </div>
        </div>

        <div className="mt-8 px-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[18px] font-bold tracking-tight text-text-primary">Tìm Cửa Hàng</h3>
            <button className="text-primary text-[13px] font-bold hover:underline">Xem Tất Cả</button>
          </div>

          <div className="relative mb-5">
            <i className="ph ph-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
            <input type="text" className="w-full h-12 bg-white border border-gray-200 rounded-[14px] pl-11 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent text-[15px] placeholder:text-gray-400" placeholder="Tìm theo quận, huyện hoặc thành phố" />
          </div>

          <div className="relative w-full h-64 rounded-[24px] overflow-hidden shadow-lg border border-gray-100 group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJLc5LGeTunaZ-MmOtloph1t_jj2O4wA7BD7LS2Tg-ec7XsIB0ToDxvTS8WvyQ2Bxgg7rqGxPUF3TVkT0Gjwu_etT2gpDfzcvnS7wShUsckptlDe0fcgiWRvRIqGV_N0wyNu2zqn9Es-oyUBxB3zXMDRH1R-bQ-9fy_81WYSDLg-CudVmZcsdUQ3hkUG5V2-YK49FurMiGEecstVqtWcQ8jeGPUgk_8kSMvFvg9F_zP38CBbfiPY-DorkGR7mJXZXi-95oSoodb6A")' }}></div>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="size-11 bg-white rounded-[12px] shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95">
                <i className="ph ph-crosshair text-gray-700 text-xl"></i>
              </button>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex flex-col items-center">
                <div className="size-12 bg-primary rounded-full border-4 border-white shadow-xl flex items-center justify-center overflow-hidden animate-bounce">
                  <i className="ph-fill ph-storefront text-white text-xl"></i>
                </div>
                <div className="w-3 h-1.5 bg-black/30 rounded-full blur-[2px] mt-1"></div>
              </div>
            </div>
          </div>

          <div className="mt-5 bg-white p-5 rounded-[20px] shadow-soft border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-green-100 text-green-600 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">ĐANG MỞ CỬA</span>
                  <span className="text-[12px] text-text-secondary font-medium">1.2 km gần đây</span>
                </div>
                <h4 className="font-bold text-[16px] text-text-primary">Gearvn Hoàng Hoa Thám</h4>
                <p className="text-[13px] text-text-secondary mt-1">78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-5">
              <button className="flex items-center justify-center gap-2 h-11 border border-primary text-primary font-bold rounded-[12px] text-[14px] hover:bg-primary/5 transition-colors active:scale-95">
                <i className="ph ph-phone text-lg"></i> Gọi Cửa Hàng
              </button>
              <button className="flex items-center justify-center gap-2 h-11 bg-primary text-white font-bold rounded-[12px] text-[14px] hover:bg-primary/90 shadow-lg shadow-primary/20 transition-colors active:scale-95">
                <i className="ph ph-map-pin text-lg"></i> Chỉ Đường
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 px-5 pb-8">
          <h3 className="text-[18px] font-bold tracking-tight mb-4 text-text-primary">Câu Hỏi Thường Gặp</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-white rounded-[16px] border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <i className="ph ph-question text-gray-400 text-xl"></i>
                <span className="text-[14px] font-semibold text-text-primary">Chính Sách Đổi Trả</span>
              </div>
              <i className="ph ph-caret-right text-gray-300"></i>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-[16px] border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <i className="ph ph-truck text-gray-400 text-xl"></i>
                <span className="text-[14px] font-semibold text-text-primary">Theo Dõi Giao Hàng</span>
              </div>
              <i className="ph ph-caret-right text-gray-300"></i>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-[16px] border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <i className="ph ph-wallet text-gray-400 text-xl"></i>
                <span className="text-[14px] font-semibold text-text-primary">Trả Góp & Thanh Toán</span>
              </div>
              <i className="ph ph-caret-right text-gray-300"></i>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportScreen;

