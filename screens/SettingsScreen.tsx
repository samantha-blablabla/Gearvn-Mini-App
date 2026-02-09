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
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2">
             <i className="ph-bold ph-caret-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">Cài đặt</h1>
        </div>
      </header>

      <main className="p-4 space-y-6">
        
        {/* Section: Account */}
        <div>
           <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Tài khoản & Bảo mật</h3>
           <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors border-b border-gray-50">
                 <div className="flex items-center gap-3">
                    <i className="ph-bold ph-lock text-gray-500 text-lg"></i>
                    <span className="text-sm font-medium text-gray-900">Đổi mật khẩu</span>
                 </div>
                 <i className="ph-bold ph-caret-right text-gray-300"></i>
              </button>
              
              <div className="flex items-center justify-between p-4 border-b border-gray-50">
                 <div className="flex items-center gap-3">
                    <i className="ph-bold ph-scan text-gray-500 text-lg"></i>
                    <span className="text-sm font-medium text-gray-900">Đăng nhập sinh trắc học</span>
                 </div>
                 <button 
                    onClick={() => setBiometricEnabled(!biometricEnabled)}
                    className={`w-11 h-6 rounded-full relative transition-colors duration-200 ease-in-out focus:outline-none ${biometricEnabled ? 'bg-primary' : 'bg-gray-200'}`}
                 >
                    <span className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${biometricEnabled ? 'translate-x-5' : 'translate-x-0'}`}></span>
                 </button>
              </div>

              <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors">
                 <div className="flex items-center gap-3">
                    <i className="ph-bold ph-user-check text-gray-500 text-lg"></i>
                    <span className="text-sm font-medium text-gray-900">Liên kết tài khoản</span>
                 </div>
                 <span className="text-xs text-gray-400 mr-1">Google, Facebook</span>
                 <i className="ph-bold ph-caret-right text-gray-300"></i>
              </button>
           </div>
        </div>

        {/* Section: App */}
        <div>
           <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Ứng dụng</h3>
           <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between p-4 border-b border-gray-50">
                 <div className="flex items-center gap-3">
                    <i className="ph-bold ph-bell text-gray-500 text-lg"></i>
                    <span className="text-sm font-medium text-gray-900">Thông báo</span>
                 </div>
                 <button 
                    onClick={() => setNotifEnabled(!notifEnabled)}
                    className={`w-11 h-6 rounded-full relative transition-colors duration-200 ease-in-out focus:outline-none ${notifEnabled ? 'bg-primary' : 'bg-gray-200'}`}
                 >
                    <span className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${notifEnabled ? 'translate-x-5' : 'translate-x-0'}`}></span>
                 </button>
              </div>

              <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors border-b border-gray-50">
                 <div className="flex items-center gap-3">
                    <i className="ph-bold ph-globe text-gray-500 text-lg"></i>
                    <span className="text-sm font-medium text-gray-900">Ngôn ngữ</span>
                 </div>
                 <span className="text-xs text-gray-500 mr-2">Tiếng Việt</span>
                 <i className="ph-bold ph-caret-right text-gray-300"></i>
              </button>
              
               <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors">
                 <div className="flex items-center gap-3">
                    <i className="ph-bold ph-moon text-gray-500 text-lg"></i>
                    <span className="text-sm font-medium text-gray-900">Giao diện</span>
                 </div>
                 <span className="text-xs text-gray-500 mr-2">Sáng</span>
                 <i className="ph-bold ph-caret-right text-gray-300"></i>
              </button>
           </div>
        </div>

        {/* Section: Legal */}
        <div>
           <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Thông tin khác</h3>
           <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors border-b border-gray-50">
                 <div className="flex items-center gap-3">
                    <i className="ph-bold ph-file-text text-gray-500 text-lg"></i>
                    <span className="text-sm font-medium text-gray-900">Điều khoản sử dụng</span>
                 </div>
                 <i className="ph-bold ph-caret-right text-gray-300"></i>
              </button>
              
              <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors">
                 <div className="flex items-center gap-3">
                    <i className="ph-bold ph-shield-check text-gray-500 text-lg"></i>
                    <span className="text-sm font-medium text-gray-900">Chính sách bảo mật</span>
                 </div>
                 <i className="ph-bold ph-caret-right text-gray-300"></i>
              </button>
           </div>
        </div>

        <div className="pt-4 flex justify-center">
            <button className="text-red-500 text-sm font-bold flex items-center gap-2 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
                <i className="ph-bold ph-trash text-base"></i>
                Yêu cầu xóa tài khoản
            </button>
        </div>

      </main>
    </div>
  );
};

export default SettingsScreen;