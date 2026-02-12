import React from 'react';
import { ScreenName } from '../types';

interface ProfileScreenProps {
  onNavigate: (screen: ScreenName) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate }) => {
  return (
    <div className="pb-28 bg-background-light min-h-screen">
       
       {/* Top Header Area - Red Background */}
       <div className="bg-primary pt-[calc(env(safe-area-inset-top)+20px)] pb-24 px-5 rounded-b-[40px] relative z-0 shadow-glow">
          <div className="flex items-start justify-between mb-4 text-white">
             <div>
               <h1 className="text-[26px] font-bold tracking-tight">Tài Khoản</h1>
               <p className="text-white/80 text-[13px] font-medium mt-1">Thông tin tài khoản thành viên</p>
             </div>
             <div className="flex gap-2">
                <button className="bg-white/10 backdrop-blur-md size-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                   <i className="ph ph-dots-three text-xl"></i>
                </button>
             </div>
          </div>
       </div>

       {/* Membership Card - Floating Overlap */}
       <div className="px-5 -mt-16 relative z-10">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-[24px] p-5 shadow-2xl shadow-emerald-900/20 text-white flex items-center gap-5 border border-white/10">
             <div className="relative">
                <div className="size-[72px] rounded-full border-4 border-white/20 p-0.5">
                   <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVd1HV2wKD9yXgv2a5L7IGSP53x7tMn60VW6nAZpkLlTDF2x_901FRy48SIFR4OkXlVTl3Wa8x_1oWtxE0Xec8Dp1kd8lQfDTN-oQYKUG2uA68agU8pXoA4zC20mg_i8XKjcUS6-Hg4idX4Qo5n66gqHzR6nBiE_e17LwDahIFB8-dTlNHks5QBVlBNZkqn3SbVflE__XE9Dx8D8cclQg88hDmqlc4wnRfxe02J2lUSc2l49otXehCrHkQxUtXiv_JDHuZ2LZFFME" 
                    className="w-full h-full rounded-full object-cover bg-white"
                    alt="Avatar"
                   />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white flex items-center gap-0.5 shadow-sm">
                   <i className="ph-fill ph-crown text-xs"></i>
                </div>
             </div>
             
             <div className="flex-1">
                <div className="flex justify-between items-start">
                   <div>
                      <h2 className="font-bold text-[20px] leading-tight">Sam Nguyễn</h2>
                      <p className="text-emerald-100 text-[13px] font-medium opacity-90">sam.nguyen@gearvn.com</p>
                   </div>
                   <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-[8px] text-[11px] font-bold uppercase flex items-center gap-1 border border-white/10">
                      <i className="ph-fill ph-star text-yellow-300 text-xs"></i> G-PRO
                   </span>
                </div>
                <p className="font-bold text-[24px] mt-1.5 tracking-tight">35.326 <span className="text-[13px] font-medium opacity-80">điểm</span></p>
             </div>
          </div>
       </div>

       <main className="px-5 mt-6 space-y-5">
          
          {/* Order Status Section */}
          <div className="bg-white rounded-[20px] p-5 shadow-soft border border-gray-100">
             <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-text-primary text-[16px]">Đơn hàng của tôi</h3>
                <button 
                  onClick={() => onNavigate(ScreenName.HISTORY)}
                  className="text-primary text-[13px] font-bold hover:underline"
                >
                  Xem tất cả
                </button>
             </div>
             
             <div className="grid grid-cols-3 gap-2">
                <button onClick={() => onNavigate(ScreenName.HISTORY)} className="flex flex-col items-center gap-2.5 group">
                   <div className="size-14 bg-red-50 rounded-[18px] flex items-center justify-center text-primary group-active:scale-95 transition-transform">
                      <i className="ph ph-clock text-2xl"></i>
                   </div>
                   <span className="text-[12px] font-medium text-text-secondary">Đang xử lý</span>
                </button>
                
                <button onClick={() => onNavigate(ScreenName.HISTORY)} className="flex flex-col items-center gap-2.5 group">
                   <div className="size-14 bg-red-50 rounded-[18px] flex items-center justify-center text-primary group-active:scale-95 transition-transform">
                      <i className="ph ph-truck text-2xl"></i>
                   </div>
                   <span className="text-[12px] font-medium text-text-secondary">Đang giao</span>
                </button>

                <button onClick={() => onNavigate(ScreenName.HISTORY)} className="flex flex-col items-center gap-2.5 group relative">
                   <div className="size-14 bg-red-50 rounded-[18px] flex items-center justify-center text-primary group-active:scale-95 transition-transform">
                      <i className="ph ph-check-circle text-2xl"></i>
                   </div>
                   <span className="text-[12px] font-medium text-text-secondary">Hoàn thành</span>
                   <div className="absolute -top-1 right-3 bg-primary text-white text-[10px] font-bold size-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">3</div>
                </button>
             </div>
          </div>

          {/* History Section */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-soft border border-gray-100">
             <div className="px-5 pt-5 pb-2">
                <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Lịch sử</h3>
             </div>
             
             <button 
                onClick={() => onNavigate(ScreenName.SERVICE_APPOINTMENTS)}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-50"
             >
                <div className="size-10 bg-red-50 rounded-[12px] flex items-center justify-center text-primary shrink-0">
                   <i className="ph ph-calendar-blank text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-semibold text-text-primary text-[15px]">Lịch hẹn dịch vụ</p>
                   <p className="text-[12px] text-text-secondary mt-0.5">Xem các lịch hẹn đã đặt</p>
                </div>
                <i className="ph ph-caret-right text-gray-300"></i>
             </button>

             <button 
                onClick={() => onNavigate(ScreenName.HISTORY)}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 active:bg-gray-100 transition-colors"
             >
                <div className="size-10 bg-red-50 rounded-[12px] flex items-center justify-center text-primary shrink-0">
                   <i className="ph ph-shopping-bag text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-semibold text-text-primary text-[15px]">Lịch sử mua hàng</p>
                   <p className="text-[12px] text-text-secondary mt-0.5">Xem các đơn hàng đã hoàn thành</p>
                </div>
                <i className="ph ph-caret-right text-gray-300"></i>
             </button>
          </div>

          {/* Support Section */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-soft border border-gray-100">
             <div className="px-5 pt-5 pb-2">
                <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Hỗ trợ</h3>
             </div>
             
             <button 
                onClick={() => onNavigate(ScreenName.SUPPORT)}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-50"
             >
                <div className="size-10 bg-red-50 rounded-[12px] flex items-center justify-center text-primary shrink-0">
                   <i className="ph ph-chat-circle text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-semibold text-text-primary text-[15px]">Liên hệ hỗ trợ</p>
                   <p className="text-[12px] text-text-secondary mt-0.5">Chat với GearVN</p>
                </div>
                <i className="ph ph-caret-right text-gray-300"></i>
             </button>

             <button 
                onClick={() => { /* Logic to follow or link */ }}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-50"
             >
                <div className="size-10 bg-red-50 rounded-[12px] flex items-center justify-center text-primary shrink-0">
                   <i className="ph ph-users text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-semibold text-text-primary text-[15px]">Theo dõi GearVN</p>
                   <p className="text-[12px] text-text-secondary mt-0.5">Nhận thông báo ưu đãi</p>
                </div>
                <i className="ph ph-caret-right text-gray-300"></i>
             </button>
             
             <button 
                onClick={() => onNavigate(ScreenName.PRIVACY_POLICY)}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-50"
             >
                <div className="size-10 bg-red-50 rounded-[12px] flex items-center justify-center text-primary shrink-0">
                   <i className="ph ph-shield-check text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-semibold text-text-primary text-[15px]">Chính sách bảo mật</p>
                   <p className="text-[12px] text-text-secondary mt-0.5">Quyền riêng tư & bảo mật</p>
                </div>
                <i className="ph ph-caret-right text-gray-300"></i>
             </button>

             <button 
                onClick={() => onNavigate(ScreenName.TERMS_OF_SERVICE)}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 active:bg-gray-100 transition-colors"
             >
                <div className="size-10 bg-red-50 rounded-[12px] flex items-center justify-center text-primary shrink-0">
                   <i className="ph ph-file-text text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-semibold text-text-primary text-[15px]">Điều khoản dịch vụ</p>
                   <p className="text-[12px] text-text-secondary mt-0.5">Điều khoản sử dụng</p>
                </div>
                <i className="ph ph-caret-right text-gray-300"></i>
             </button>
          </div>
          
          <div className="flex flex-col items-center gap-2 py-6">
              <div className="flex items-center gap-2 text-primary font-bold text-xl">
                 <i className="ph ph-lightning"></i> GEARVN
              </div>
              <p className="text-[12px] text-gray-400 font-medium">GearVN Member • Version 1.1.3</p>
              
              <button className="text-gray-400 text-[13px] font-bold mt-2 hover:text-primary transition-colors py-2 px-4">
                  Đăng xuất
              </button>
          </div>
       </main>
    </div>
  );
};

export default ProfileScreen;

