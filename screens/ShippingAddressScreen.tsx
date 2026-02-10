import React from 'react';
import { ScreenName } from '../types';

interface ShippingAddressScreenProps {
  onBack: () => void;
}

const ShippingAddressScreen: React.FC<ShippingAddressScreenProps> = ({ onBack }) => {
  return (
    // Increased pb to accommodate both bottom nav and sticky action buttons
    <div className="min-h-screen bg-background-light pb-48">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2 active:scale-90">
             <i className="ph-bold ph-caret-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">Địa chỉ giao hàng</h1>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -mr-2 active:scale-90">
            <i className="ph-bold ph-plus text-gray-900 text-xl"></i>
          </button>
        </div>
      </header>

      <main className="p-4 space-y-4">
        {/* Address Card 1 (Default) */}
        <div className="bg-white rounded-xl p-4 border-2 border-primary/20 shadow-sm relative overflow-hidden group">
           <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-sm">
             Mặc định
           </div>
           
           <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-900 text-base">Nhà Riêng</h3>
           </div>
           
           <div className="space-y-1 mb-4">
              <p className="font-bold text-gray-800 text-sm">Nguyễn Hoàng Nam <span className="text-gray-400 font-normal">|</span> 0909 123 456</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                 123 Đường 3/2, Phường 11, Quận 10, TP. Hồ Chí Minh
              </p>
           </div>

           <div className="flex gap-3 pt-3 border-t border-gray-50">
              <button className="flex-1 py-1.5 text-xs font-bold text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 active:scale-95">
                 <i className="ph-bold ph-pencil-simple text-sm"></i> Sửa
              </button>
              {/* Delete is disabled for default */}
              <button className="flex-1 py-1.5 text-xs font-bold text-gray-300 bg-gray-50 rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                 <i className="ph-bold ph-trash text-sm"></i> Xóa
              </button>
           </div>
        </div>

        {/* Address Card 2 */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm relative overflow-hidden group">
           <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-900 text-base">Công Ty</h3>
           </div>
           
           <div className="space-y-1 mb-4">
              <p className="font-bold text-gray-800 text-sm">Nguyễn Hoàng Nam <span className="text-gray-400 font-normal">|</span> 0909 123 456</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                 Tòa nhà Etown 2, 364 Cộng Hòa, Phường 13, Quận Tân Bình, TP. Hồ Chí Minh
              </p>
           </div>

           <div className="flex gap-3 pt-3 border-t border-gray-50">
              <button className="flex-1 py-1.5 text-xs font-bold text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 active:scale-95">
                 <i className="ph-bold ph-pencil-simple text-sm"></i> Sửa
              </button>
              <button className="flex-1 py-1.5 text-xs font-bold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center gap-2 active:scale-95">
                 <i className="ph-bold ph-trash text-sm"></i> Xóa
              </button>
           </div>
           
           <button className="w-full mt-3 py-2 text-xs font-bold text-primary border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors active:scale-95">
              Thiết lập mặc định
           </button>
        </div>
      </main>
      
      {/* Footer Action - Stacked above BottomNav */}
      <div className="fixed bottom-[calc(64px+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 active:scale-95">
              <i className="ph-bold ph-plus text-lg"></i>
              Thêm địa chỉ mới
          </button>
      </div>
    </div>
  );
};

export default ShippingAddressScreen;