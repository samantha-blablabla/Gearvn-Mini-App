import React, { useEffect } from 'react';
import { ScreenName } from '../types';

interface ServiceBookingSuccessScreenProps {
  onNavigate: (screen: ScreenName) => void;
}

const ServiceBookingSuccessScreen: React.FC<ServiceBookingSuccessScreenProps> = ({ onNavigate }) => {
  
  // Optional: Auto-redirect or just a simple mount effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-light flex flex-col items-center justify-center p-6 pb-24 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-green-50 to-transparent pointer-events-none"></div>

      {/* Success Animation Icon */}
      <div className="relative z-10 mb-8 animate-in zoom-in duration-500">
        <div className="size-24 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30">
           <i className="ph ph-check text-5xl text-white"></i>
        </div>
        <div className="absolute inset-0 border-4 border-green-200 rounded-full animate-ping opacity-20"></div>
      </div>

      <div className="text-center mb-8 relative z-10 animate-in slide-in-from-bottom-4 duration-500 delay-100">
         <h1 className="text-[24px] font-black text-text-primary leading-tight">Đặt lịch thành công!</h1>
         <p className="text-text-secondary text-[14px] mt-2 max-w-[280px] mx-auto">
            Cảm ơn bạn đã tin tưởng. Kỹ thuật viên Gearvn sẽ liên hệ xác nhận sớm nhất.
         </p>
      </div>

      {/* Ticket Summary Card */}
      <div className="w-full bg-white rounded-[24px] shadow-soft overflow-hidden relative border border-gray-100 animate-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="bg-primary p-4 text-center">
             <p className="text-white/90 text-[11px] font-bold uppercase tracking-widest">Mã đặt lịch</p>
             <p className="text-white text-[20px] font-black font-mono tracking-wider mt-0.5">BK-202610</p>
          </div>
          
          <div className="p-6 space-y-5">
             <div className="flex items-start gap-4">
                 <div className="size-10 bg-red-50 rounded-[12px] flex items-center justify-center text-primary shrink-0">
                    <i className="ph-fill ph-wrench text-xl"></i>
                 </div>
                 <div>
                    <p className="text-[12px] text-text-secondary font-bold uppercase">Dịch vụ</p>
                    <p className="text-[15px] font-bold text-text-primary mt-0.5">Bảo Hành & Sửa Chữa</p>
                    <p className="text-[13px] text-gray-500">Laptop ASUS ROG Strix G15</p>
                 </div>
             </div>

             <div className="flex items-start gap-4">
                 <div className="size-10 bg-blue-50 rounded-[12px] flex items-center justify-center text-blue-600 shrink-0">
                    <i className="ph-fill ph-calendar-check text-xl"></i>
                 </div>
                 <div>
                    <p className="text-[12px] text-text-secondary font-bold uppercase">Thời gian</p>
                    <p className="text-[15px] font-bold text-text-primary mt-0.5">09:00 - 10/02/2026</p>
                 </div>
             </div>

             <div className="flex items-start gap-4">
                 <div className="size-10 bg-orange-50 rounded-[12px] flex items-center justify-center text-orange-600 shrink-0">
                    <i className="ph-fill ph-storefront text-xl"></i>
                 </div>
                 <div>
                    <p className="text-[12px] text-text-secondary font-bold uppercase">Địa điểm</p>
                    <p className="text-[15px] font-bold text-text-primary mt-0.5">Gearvn Hoàng Hoa Thám</p>
                    <p className="text-[13px] text-gray-500">Q. Tân Bình, TP.HCM</p>
                 </div>
             </div>
          </div>

          {/* Ticket Punch Circles */}
          <div className="absolute top-[84px] -left-3 size-6 bg-background-light rounded-full shadow-inner"></div>
          <div className="absolute top-[84px] -right-3 size-6 bg-background-light rounded-full shadow-inner"></div>
          <div className="absolute top-[94px] left-4 right-4 border-t-2 border-dashed border-gray-100"></div>
      </div>

      {/* Actions */}
      <div className="w-full mt-8 space-y-3 animate-in fade-in duration-700 delay-300">
         <button 
           onClick={() => onNavigate(ScreenName.SERVICE_APPOINTMENTS)}
           className="w-full h-14 bg-primary text-white font-bold rounded-[16px] shadow-lg shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
         >
            Xem lịch hẹn
            <i className="ph ph-arrow-right"></i>
         </button>
         
         <button 
            onClick={() => onNavigate(ScreenName.HOME)}
            className="w-full h-14 bg-white text-gray-600 font-bold rounded-[16px] border border-gray-200 hover:bg-gray-50 flex items-center justify-center active:scale-95 transition-transform"
         >
            Về trang chủ
         </button>
      </div>

    </div>
  );
};

export default ServiceBookingSuccessScreen;

