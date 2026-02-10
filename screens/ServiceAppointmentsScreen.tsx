import React from 'react';
import { ScreenName } from '../types';

interface ServiceAppointmentsScreenProps {
  onBack: () => void;
}

const ServiceAppointmentsScreen: React.FC<ServiceAppointmentsScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light pb-24">
      <header className="sticky top-0 z-50 bg-white/90 ios-blur border-b border-gray-100">
        <div className="flex items-center p-4 justify-between h-14">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900">
             <i className="ph-bold ph-caret-left text-xl"></i>
          </button>
          <h1 className="text-[17px] font-bold leading-tight tracking-tight flex-1 text-center text-text-primary">Lịch hẹn dịch vụ</h1>
          <div className="size-10"></div>
        </div>
      </header>

      <main className="p-5 space-y-4">
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-20 text-center">
           <div className="size-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <i className="ph-fill ph-calendar-blank text-5xl text-gray-300"></i>
           </div>
           <h3 className="text-text-primary font-bold text-[18px]">Chưa có lịch hẹn nào</h3>
           <p className="text-text-secondary text-[14px] mt-2 max-w-[240px] leading-relaxed">Bạn có thể đặt lịch vệ sinh PC, bảo dưỡng thiết bị tại cửa hàng Gearvn gần nhất.</p>
           <button className="mt-8 px-8 h-12 bg-primary text-white rounded-[14px] font-bold text-[15px] shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 flex items-center gap-2">
              <i className="ph-bold ph-plus"></i>
              Đặt lịch ngay
           </button>
        </div>
        
        {/* Example Item (Commented out) */}
        {/* 
        <div className="bg-white p-5 rounded-[20px] shadow-soft flex gap-4 border border-transparent active:scale-[0.98] transition-transform">
           <div className="flex flex-col items-center justify-center bg-blue-50 w-[70px] rounded-[14px] text-blue-600 shrink-0">
              <span className="text-[11px] font-bold uppercase tracking-wider">Tháng 10</span>
              <span className="text-3xl font-black leading-none mt-0.5">25</span>
           </div>
           <div className="flex-1 py-1">
              <h3 className="font-bold text-text-primary text-[15px] leading-tight">Vệ sinh Laptop Gaming</h3>
              <p className="text-[13px] text-text-secondary mt-1 flex items-center gap-1">
                 <i className="ph-fill ph-clock"></i> 09:30 • Gearvn Hoàng Hoa Thám
              </p>
              <span className="inline-block mt-3 text-[10px] font-bold px-2.5 py-1 rounded-[6px] bg-green-100 text-green-700 uppercase tracking-wide">Đã hoàn thành</span>
           </div>
        </div>
        */}
      </main>
    </div>
  );
};

export default ServiceAppointmentsScreen;