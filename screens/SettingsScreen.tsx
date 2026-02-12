import React, { useState } from 'react';
import { ScreenName } from '../types';

interface SettingsScreenProps {
  onBack: () => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  const [notifEnabled, setNotifEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-background-light pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 ios-blur border-b border-gray-100">
        <div className="flex items-center p-4 justify-between h-14">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900">
             <i className="ph-regular ph-caret-left text-xl"></i>
          </button>
          <h1 className="text-[17px] font-bold leading-tight tracking-tight flex-1 text-center text-text-primary">Cài đặt</h1>
          <div className="size-10"></div>
        </div>
      </header>

      <main className="p-5 space-y-6">
        
        {/* Section: Account */}
        <div>
           <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Tài khoản & Bảo mật</h3>
           <div className="bg-white rounded-[20px] overflow-hidden shadow-soft border border-transparent">
              <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors border-b border-gray-50 h-[60px]">
                 <div className="flex items-center gap-3.5">
                    <div className="size-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <i className="ph-regular ph-lock text-lg"></i>
                    </div>
                    <span className="text-[15px] font-medium text-text-primary">Đổi mật khẩu</span>
                 </div>
                 <i className="ph-regular ph-caret-right text-gray-300"></i>
              </button>
              
              <div className="flex items-center justify-between p-4 border-b border-gray-50 h-[60px]">
                 <div className="flex items-center gap-3.5">
                    <div className="size-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                        <i className="ph-regular ph-scan text-lg"></i>
                    </div>
                    <span className="text-[15px] font-medium text-text-primary">Sinh trắc học</span>
                 </div>
                 <button 
                    onClick={() => setBiometricEnabled(!biometricEnabled)}
                    className={`w-[50px] h-[30px] rounded-full relative transition-colors duration-300 ease-in-out focus:outline-none ${biometricEnabled ? 'bg-green-500' : 'bg-gray-200'}`}
                 >
                    <span className={`absolute left-[2px] top-[2px] size-[26px] rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${biometricEnabled ? 'translate-x-[20px]' : 'translate-x-0'}`}></span>
                 </button>
              </div>

              <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors h-[60px]">
                 <div className="flex items-center gap-3.5">
                    <div className="size-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                        <i className="ph-regular ph-user-check text-lg"></i>
                    </div>
                    <span className="text-[15px] font-medium text-text-primary">Liên kết tài khoản</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-[13px] text-text-secondary">Google</span>
                    <i className="ph-regular ph-caret-right text-gray-300"></i>
                 </div>
              </button>
           </div>
        </div>

        {/* Section: App */}
        <div>
           <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Ứng dụng</h3>
           <div className="bg-white rounded-[20px] overflow-hidden shadow-soft border border-transparent">
              <div className="flex items-center justify-between p-4 border-b border-gray-50 h-[60px]">
                 <div className="flex items-center gap-3.5">
                    <div className="size-8 rounded-full bg-red-50 flex items-center justify-center text-primary">
                        <i className="ph-regular ph-bell text-lg"></i>
                    </div>
                    <span className="text-[15px] font-medium text-text-primary">Thông báo</span>
                 </div>
                 <button 
                    onClick={() => setNotifEnabled(!notifEnabled)}
                    className={`w-[50px] h-[30px] rounded-full relative transition-colors duration-300 ease-in-out focus:outline-none ${notifEnabled ? 'bg-green-500' : 'bg-gray-200'}`}
                 >
                    <span className={`absolute left-[2px] top-[2px] size-[26px] rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${notifEnabled ? 'translate-x-[20px]' : 'translate-x-0'}`}></span>
                 </button>
              </div>

              <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors border-b border-gray-50 h-[60px]">
                 <div className="flex items-center gap-3.5">
                    <div className="size-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <i className="ph-regular ph-globe text-lg"></i>
                    </div>
                    <span className="text-[15px] font-medium text-text-primary">Ngôn ngữ</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <span className="text-[13px] text-text-secondary">Tiếng Việt</span>
                     <i className="ph-regular ph-caret-right text-gray-300"></i>
                 </div>
              </button>
              
               <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors h-[60px]">
                 <div className="flex items-center gap-3.5">
                    <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        <i className="ph-regular ph-moon text-lg"></i>
                    </div>
                    <span className="text-[15px] font-medium text-text-primary">Giao diện</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-[13px] text-text-secondary">Sáng</span>
                    <i className="ph-regular ph-caret-right text-gray-300"></i>
                 </div>
              </button>
           </div>
        </div>

        {/* Section: Legal */}
        <div>
           <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-3 ml-2">Thông tin khác</h3>
           <div className="bg-white rounded-[20px] overflow-hidden shadow-soft border border-transparent">
              <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors border-b border-gray-50 h-[60px]">
                 <div className="flex items-center gap-3.5">
                    <span className="text-[15px] font-medium text-text-primary pl-1">Điều khoản sử dụng</span>
                 </div>
                 <i className="ph-regular ph-caret-right text-gray-300"></i>
              </button>
              
              <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors h-[60px]">
                 <div className="flex items-center gap-3.5">
                    <span className="text-[15px] font-medium text-text-primary pl-1">Chính sách bảo mật</span>
                 </div>
                 <i className="ph-regular ph-caret-right text-gray-300"></i>
              </button>
           </div>
        </div>

        <div className="pt-4 flex justify-center pb-8">
            <button className="text-red-500 text-[14px] font-bold flex items-center gap-2 hover:bg-red-50 px-6 py-3 rounded-[14px] transition-colors active:scale-95">
                <i className="ph-regular ph-trash text-lg"></i>
                Yêu cầu xóa tài khoản
            </button>
        </div>

      </main>
    </div>
  );
};

export default SettingsScreen;
