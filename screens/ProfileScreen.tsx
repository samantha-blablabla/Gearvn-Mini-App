import React from 'react';
import { ScreenName } from '../types';

interface ProfileScreenProps {
  onNavigate: (screen: ScreenName) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate }) => {
  return (
    <div className="pb-24 bg-background-light min-h-screen">
       {/* Fake Status Bar */}
      <div className="sticky top-0 z-50 bg-white/80 ios-blur px-6 py-3 flex justify-between items-center border-b border-gray-100">
        <span className="text-sm font-bold text-gray-900">9:41</span>
        <div className="flex gap-1.5 items-center text-gray-900">
          <i className="iconoir-signal text-sm"></i>
          <i className="iconoir-wifi text-sm"></i>
          <i className="iconoir-battery-full text-sm"></i>
        </div>
      </div>

      <main className="pb-8">
        {/* Header Profile */}
        <div className="bg-white px-6 py-8 rounded-b-[2rem] shadow-sm border-b border-gray-100">
          <div className="flex flex-col items-center">
            <div className="relative group cursor-pointer">
              <div className="size-28 rounded-full border-4 border-primary/10 p-1">
                 <div className="w-full h-full rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVd1HV2wKD9yXgv2a5L7IGSP53x7tMn60VW6nAZpkLlTDF2x_901FRy48SIFR4OkXlVTl3Wa8x_1oWtxE0Xec8Dp1kd8lQfDTN-oQYKUG2uA68agU8pXoA4zC20mg_i8XKjcUS6-Hg4idX4Qo5n66gqHzR6nBiE_e17LwDahIFB8-dTlNHks5QBVlBNZkqn3SbVflE__XE9Dx8D8cclQg88hDmqlc4wnRfxe02J2lUSc2l49otXehCrHkQxUtXiv_JDHuZ2LZFFME")'}}></div>
              </div>
              <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full border-2 border-white shadow-md">
                <i className="iconoir-edit text-xs block"></i>
              </div>
            </div>
            
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900">Nguyễn Hoàng Nam</h1>
            <p className="text-primary font-bold text-sm flex items-center gap-1 mt-1 bg-primary/5 px-3 py-1 rounded-full">
                <i className="iconoir-crown text-sm"></i>
                Thành viên Vàng
            </p>

            <div className="mt-8 w-full grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Điểm tích lũy</p>
                <p className="text-2xl font-black text-primary mt-1">2,450</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Mã giảm giá</p>
                <p className="text-2xl font-black text-primary mt-1">12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="mt-6 px-4 space-y-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
             <button onClick={() => onNavigate(ScreenName.HISTORY)} className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <i className="iconoir-shopping-bag text-xl"></i>
                  </div>
                  <span className="font-bold text-[15px] text-gray-800">Lịch sử mua hàng</span>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>

             <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <i className="iconoir-map-pin text-xl"></i>
                  </div>
                  <span className="font-bold text-[15px] text-gray-800">Địa chỉ giao hàng</span>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>

             <button 
                onClick={() => onNavigate(ScreenName.SUPPORT)}
                className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors border-b border-gray-50"
             >
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <i className="iconoir-headset text-xl"></i>
                  </div>
                  <span className="font-bold text-[15px] text-gray-800">Liên hệ Gearvn</span>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>

             <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <i className="iconoir-settings text-xl"></i>
                  </div>
                  <span className="font-bold text-[15px] text-gray-800">Cài đặt</span>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
             <button onClick={() => onNavigate(ScreenName.WARRANTY)} className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <i className="iconoir-shield-check text-xl"></i>
                  </div>
                  <span className="font-bold text-[15px] text-gray-800">Thông tin bảo hành</span>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>
             <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <i className="iconoir-help-circle text-xl"></i>
                  </div>
                  <span className="font-bold text-[15px] text-gray-800">Trung tâm trợ giúp</span>
                </div>
                <i className="iconoir-nav-arrow-right text-gray-300"></i>
             </button>
          </div>

          <button className="w-full mt-4 py-4 px-6 flex items-center justify-center gap-2 text-primary font-bold active:bg-gray-50 transition-colors bg-white rounded-2xl border border-gray-100 shadow-sm">
             <i className="iconoir-log-out text-xl"></i>
             Đăng xuất
          </button>
          
          <p className="text-center text-xs text-gray-400 font-medium">Phiên bản 4.2.0 (Sync 1.0)</p>
        </div>
      </main>
    </div>
  );
};

export default ProfileScreen;