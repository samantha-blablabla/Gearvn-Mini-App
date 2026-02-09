import React from 'react';
import { ScreenName } from '../types';

interface ProfileScreenProps {
  onNavigate: (screen: ScreenName) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate }) => {
  return (
    <div className="pb-24 bg-background-light min-h-screen">
       
       {/* Top Header Area - Red Background */}
       <div className="bg-primary pt-[calc(env(safe-area-inset-top)+20px)] pb-24 px-4 rounded-b-[24px] relative z-0">
          <div className="flex items-start justify-between mb-4 text-white">
             <div>
               <h1 className="text-2xl font-bold">Tài Khoản</h1>
               <p className="text-white/80 text-sm mt-1">Thông tin tài khoản thành viên</p>
             </div>
             <div className="flex gap-2">
                <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors">
                   <i className="iconoir-more-horiz text-xl"></i>
                </button>
             </div>
          </div>
       </div>

       {/* Membership Card - Floating Overlap */}
       <div className="px-4 -mt-16 relative z-10">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-4 shadow-lg text-white flex items-center gap-4">
             <div className="relative">
                <div className="size-16 rounded-full border-2 border-white/30 p-0.5">
                   <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVd1HV2wKD9yXgv2a5L7IGSP53x7tMn60VW6nAZpkLlTDF2x_901FRy48SIFR4OkXlVTl3Wa8x_1oWtxE0Xec8Dp1kd8lQfDTN-oQYKUG2uA68agU8pXoA4zC20mg_i8XKjcUS6-Hg4idX4Qo5n66gqHzR6nBiE_e17LwDahIFB8-dTlNHks5QBVlBNZkqn3SbVflE__XE9Dx8D8cclQg88hDmqlc4wnRfxe02J2lUSc2l49otXehCrHkQxUtXiv_JDHuZ2LZFFME" 
                    className="w-full h-full rounded-full object-cover bg-white"
                    alt="Avatar"
                   />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white flex items-center gap-0.5 shadow-sm">
                   <i className="iconoir-crown text-xs"></i>
                </div>
             </div>
             
             <div className="flex-1">
                <div className="flex justify-between items-start">
                   <div>
                      <h2 className="font-bold text-lg leading-tight">Sam Nguyễn</h2>
                      <p className="text-emerald-100 text-sm">0929033523</p>
                   </div>
                   <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                      <i className="iconoir-star-solid text-yellow-300"></i> G-PRO
                   </span>
                </div>
                <p className="font-extrabold text-xl mt-1">35.326 <span className="text-sm font-medium opacity-80">điểm</span></p>
             </div>
          </div>
       </div>

       <main className="px-4 mt-4 space-y-4">
          
          {/* Order Status Section */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
             <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 text-[15px]">Đơn hàng của tôi</h3>
                <button 
                  onClick={() => onNavigate(ScreenName.HISTORY)}
                  className="text-primary text-xs font-bold hover:underline"
                >
                  Xem tất cả
                </button>
             </div>
             
             <div className="grid grid-cols-3 gap-2">
                <button onClick={() => onNavigate(ScreenName.HISTORY)} className="flex flex-col items-center gap-2 group">
                   <div className="size-12 bg-red-50 rounded-full flex items-center justify-center text-primary group-active:scale-95 transition-transform">
                      <i className="iconoir-clock text-2xl"></i>
                   </div>
                   <span className="text-xs font-medium text-gray-600">Đang xử lý</span>
                </button>
                
                <button onClick={() => onNavigate(ScreenName.HISTORY)} className="flex flex-col items-center gap-2 group">
                   <div className="size-12 bg-red-50 rounded-full flex items-center justify-center text-primary group-active:scale-95 transition-transform">
                      <i className="iconoir-delivery-truck text-2xl"></i>
                   </div>
                   <span className="text-xs font-medium text-gray-600">Đang giao</span>
                </button>

                <button onClick={() => onNavigate(ScreenName.HISTORY)} className="flex flex-col items-center gap-2 group relative">
                   <div className="size-12 bg-red-50 rounded-full flex items-center justify-center text-primary group-active:scale-95 transition-transform">
                      <i className="iconoir-check-circle text-2xl"></i>
                   </div>
                   <span className="text-xs font-medium text-gray-600">Hoàn thành</span>
                   <div className="absolute top-0 right-2 bg-primary text-white text-[10px] font-bold size-5 rounded-full flex items-center justify-center border-2 border-white">3</div>
                </button>
             </div>
          </div>

          {/* History Section */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
             <div className="px-4 pt-4 pb-2">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Lịch sử</h3>
             </div>
             
             <button 
                onClick={() => onNavigate(ScreenName.SERVICE_APPOINTMENTS)}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-50"
             >
                <div className="size-10 bg-red-50 rounded-full flex items-center justify-center text-primary shrink-0">
                   <i className="iconoir-calendar text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-bold text-gray-900 text-sm">Lịch hẹn dịch vụ</p>
                   <p className="text-xs text-gray-500 mt-0.5">Xem các lịch hẹn đã đặt</p>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>

             <button 
                onClick={() => onNavigate(ScreenName.HISTORY)}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors"
             >
                <div className="size-10 bg-red-50 rounded-full flex items-center justify-center text-primary shrink-0">
                   <i className="iconoir-shopping-bag text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-bold text-gray-900 text-sm">Lịch sử mua hàng</p>
                   <p className="text-xs text-gray-500 mt-0.5">Xem các đơn hàng đã hoàn thành</p>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>
          </div>

          {/* Support Section */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
             <div className="px-4 pt-4 pb-2">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Hỗ trợ</h3>
             </div>
             
             <button 
                onClick={() => onNavigate(ScreenName.SUPPORT)}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-50"
             >
                <div className="size-10 bg-red-50 rounded-full flex items-center justify-center text-primary shrink-0">
                   <i className="iconoir-chat-bubble text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-bold text-gray-900 text-sm">Liên hệ hỗ trợ</p>
                   <p className="text-xs text-gray-500 mt-0.5">Chat với GearVN</p>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>

             <button 
                onClick={() => { /* Logic to follow or link */ }}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-50"
             >
                <div className="size-10 bg-red-50 rounded-full flex items-center justify-center text-primary shrink-0">
                   <i className="iconoir-group text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-bold text-gray-900 text-sm">Theo dõi GearVN</p>
                   <p className="text-xs text-gray-500 mt-0.5">Nhận thông báo ưu đãi</p>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>
             
             <button 
                onClick={() => onNavigate(ScreenName.PRIVACY_POLICY)}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-50"
             >
                <div className="size-10 bg-red-50 rounded-full flex items-center justify-center text-primary shrink-0">
                   <i className="iconoir-shield-check text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-bold text-gray-900 text-sm">Chính sách bảo mật</p>
                   <p className="text-xs text-gray-500 mt-0.5">Quyền riêng tư & bảo mật</p>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>

             <button 
                onClick={() => onNavigate(ScreenName.TERMS_OF_SERVICE)}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors"
             >
                <div className="size-10 bg-red-50 rounded-full flex items-center justify-center text-primary shrink-0">
                   <i className="iconoir-page text-xl"></i>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-bold text-gray-900 text-sm">Điều khoản dịch vụ</p>
                   <p className="text-xs text-gray-500 mt-0.5">Điều khoản sử dụng</p>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>
          </div>
          
          <div className="flex flex-col items-center gap-2 py-4">
              <div className="flex items-center gap-2 text-primary font-bold text-lg">
                 <i className="iconoir-flash"></i> GEARVN
              </div>
              <p className="text-xs text-gray-400">GearVN Member • Version 1.1.3</p>
              
              <button className="text-gray-400 text-xs font-bold mt-2 hover:text-primary transition-colors">
                  Đăng xuất
              </button>
          </div>
       </main>
    </div>
  );
};

export default ProfileScreen;