import React from 'react';
import { ScreenName } from '../types';

interface ServiceAppointmentsScreenProps {
  onBack: () => void;
}

const ServiceAppointmentsScreen: React.FC<ServiceAppointmentsScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light pb-24">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2">
             <i className="iconoir-nav-arrow-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">Lịch hẹn dịch vụ</h1>
        </div>
      </header>

      <main className="p-4 space-y-4">
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-12 text-center opacity-60">
           <div className="size-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <i className="iconoir-calendar text-4xl text-gray-400"></i>
           </div>
           <p className="text-gray-900 font-bold text-base">Chưa có lịch hẹn nào</p>
           <p className="text-gray-500 text-sm mt-1 max-w-[200px]">Bạn có thể đặt lịch vệ sinh PC, bảo dưỡng tại cửa hàng.</p>
           <button className="mt-6 px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20">
              Đặt lịch ngay
           </button>
        </div>
        
        {/* Example Item (Commented out for now, can be enabled when data exists) */}
        {/* 
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4">
           <div className="flex flex-col items-center justify-center bg-blue-50 w-16 rounded-lg text-blue-600">
              <span className="text-xs font-bold uppercase">Tháng 10</span>
              <span className="text-2xl font-black">25</span>
           </div>
           <div className="flex-1">
              <h3 className="font-bold text-gray-900">Vệ sinh Laptop Gaming</h3>
              <p className="text-sm text-gray-500 mt-0.5">09:30 - Gearvn Hoàng Hoa Thám</p>
              <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded bg-green-100 text-green-700 uppercase">Đã hoàn thành</span>
           </div>
        </div>
        */}
      </main>
    </div>
  );
};

export default ServiceAppointmentsScreen;