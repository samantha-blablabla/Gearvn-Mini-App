import React from 'react';
import { ScreenName } from '../types';

interface SupportScreenProps {
  onBack: () => void;
}

const SupportScreen: React.FC<SupportScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light flex flex-col pb-24">
       <header className="sticky top-0 z-50 bg-white/80 ios-blur border-b border-gray-100">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="size-10"></div> {/* Spacer for alignment */}
          <h1 className="text-lg font-bold tracking-tight text-gray-900">Liên hệ hỗ trợ</h1>
          {/* Removed Bell Button as requested */}
          <div className="size-10"></div> {/* Spacer to keep title centered */}
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="px-4 pt-6 pb-4">
          <h2 className="text-2xl font-extrabold tracking-tight leading-tight text-gray-900">Chúng tôi có thể giúp gì cho bạn?</h2>
          <p className="text-gray-500 mt-1 text-sm">Chọn một kênh để nhận hỗ trợ tức thì</p>
        </div>

        <div className="grid grid-cols-2 gap-3 px-4 py-2">
          <div className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="size-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <i className="ph-bold ph-phone text-primary text-3xl"></i>
            </div>
            <p className="font-bold text-base text-gray-900">Hotline</p>
            <p className="text-primary font-bold text-sm mt-1">1800 6789</p>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">Hỗ trợ 24/7</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="size-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-3">
              <i className="ph-bold ph-chat-circle text-blue-500 text-3xl"></i>
            </div>
            <p className="font-bold text-base text-gray-900">Zalo OA</p>
            <p className="text-gray-500 text-sm mt-1">Gearvn Official</p>
            <p className="text-[10px] text-green-500 mt-1 uppercase tracking-wider font-semibold">Phản hồi: &lt; 5p</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="size-14 bg-purple-500/10 rounded-full flex items-center justify-center mb-3">
              <i className="ph-bold ph-messenger-logo text-purple-500 text-3xl"></i>
            </div>
            <p className="font-bold text-base text-gray-900">Messenger</p>
            <p className="text-gray-500 text-sm mt-1">Trực tuyến</p>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">Chat trực tiếp</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="size-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-3">
              <i className="ph-bold ph-shield-check text-orange-500 text-3xl"></i>
            </div>
            <p className="font-bold text-base text-gray-900">Bảo Hành</p>
            <p className="text-gray-500 text-sm mt-1">Tra cứu trạng thái</p>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">Xử lý nhanh</p>
          </div>
        </div>

        <div className="mt-8 px-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold tracking-tight text-gray-900">Tìm Cửa Hàng</h3>
            <button className="text-primary text-sm font-bold hover:underline">Xem Tất Cả</button>
          </div>
          
          <div className="relative mb-4">
            <i className="ph-bold ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
            <input type="text" className="w-full h-12 bg-white border border-gray-200 rounded-xl pl-10 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder:text-gray-400" placeholder="Tìm theo quận, huyện hoặc thành phố" />
          </div>

          <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJLc5LGeTunaZ-MmOtloph1t_jj2O4wA7BD7LS2Tg-ec7XsIB0ToDxvTS8WvyQ2Bxgg7rqGxPUF3TVkT0Gjwu_etT2gpDfzcvnS7wShUsckptlDe0fcgiWRvRIqGV_N0wyNu2zqn9Es-oyUBxB3zXMDRH1R-bQ-9fy_81WYSDLg-CudVmZcsdUQ3hkUG5V2-YK49FurMiGEecstVqtWcQ8jeGPUgk_8kSMvFvg9F_zP38CBbfiPY-DorkGR7mJXZXi-95oSoodb6A")'}}></div>
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button className="size-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                <i className="ph-bold ph-crosshair text-gray-700 text-xl"></i>
              </button>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex flex-col items-center">
                <div className="size-10 bg-primary rounded-full border-4 border-white shadow-xl flex items-center justify-center overflow-hidden animate-bounce">
                  <i className="ph-bold ph-storefront text-white text-xl"></i>
                </div>
                <div className="w-2 h-1 bg-black/30 rounded-full blur-[2px] mt-1"></div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">ĐANG MỞ CỬA</span>
                  <span className="text-xs text-gray-400 font-medium">1.2 km gần đây</span>
                </div>
                <h4 className="font-bold text-base text-gray-900">Gearvn Hoàng Hoa Thám</h4>
                <p className="text-sm text-gray-500 mt-1">78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <button className="flex items-center justify-center gap-2 h-10 border border-primary text-primary font-bold rounded-lg text-sm hover:bg-primary/5 transition-colors">
                <i className="ph-bold ph-phone text-sm"></i> Gọi Cửa Hàng
              </button>
              <button className="flex items-center justify-center gap-2 h-10 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 shadow-md shadow-primary/20 transition-colors">
                <i className="ph-bold ph-map-pin text-sm"></i> Chỉ Đường
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 px-4">
           <h3 className="text-xl font-bold tracking-tight mb-4 text-gray-900">Câu Hỏi Thường Gặp</h3>
           <div className="space-y-3">
             <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
               <div className="flex items-center gap-3">
                 <i className="ph-bold ph-question text-gray-400 text-xl"></i>
                 <span className="text-sm font-medium text-gray-900">Chính Sách Đổi Trả</span>
               </div>
               <i className="ph-bold ph-caret-right text-gray-300"></i>
             </div>
             <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
               <div className="flex items-center gap-3">
                 <i className="ph-bold ph-truck text-gray-400 text-xl"></i>
                 <span className="text-sm font-medium text-gray-900">Theo Dõi Giao Hàng</span>
               </div>
               <i className="ph-bold ph-caret-right text-gray-300"></i>
             </div>
             <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
               <div className="flex items-center gap-3">
                 <i className="ph-bold ph-wallet text-gray-400 text-xl"></i>
                 <span className="text-sm font-medium text-gray-900">Trả Góp & Thanh Toán</span>
               </div>
               <i className="ph-bold ph-caret-right text-gray-300"></i>
             </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default SupportScreen;