import React from 'react';
import { ScreenName } from '../types';

interface HelpCenterScreenProps {
  onBack: () => void;
}

const HelpCenterScreen: React.FC<HelpCenterScreenProps> = ({ onBack }) => {
  return (
    // Increased pb to accommodate both bottom nav and sticky action buttons
    <div className="min-h-screen bg-background-light pb-48">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2 active:scale-90">
             <i className="ph-bold ph-caret-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">Trung tâm trợ giúp</h1>
        </div>
      </header>

      <main className="p-4 space-y-6">
        
        {/* Search */}
        <div className="relative">
           <i className="ph-bold ph-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
           <input 
              type="text" 
              placeholder="Bạn cần giúp gì?" 
              className="w-full h-12 rounded-xl border border-gray-200 pl-11 pr-4 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 text-sm font-medium"
           />
        </div>

        {/* Categories */}
        <div>
           <h3 className="font-bold text-gray-900 mb-3">Chủ đề phổ biến</h3>
           <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer active:scale-95">
                 <div className="size-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <i className="ph-bold ph-shield-check text-xl"></i>
                 </div>
                 <span className="text-sm font-bold text-gray-800">Bảo hành</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer active:scale-95">
                 <div className="size-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <i className="ph-bold ph-truck text-xl"></i>
                 </div>
                 <span className="text-sm font-bold text-gray-800">Vận chuyển</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer active:scale-95">
                 <div className="size-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                    <i className="ph-bold ph-wallet text-xl"></i>
                 </div>
                 <span className="text-sm font-bold text-gray-800">Thanh toán</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer active:scale-95">
                 <div className="size-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                    <i className="ph-bold ph-user text-xl"></i>
                 </div>
                 <span className="text-sm font-bold text-gray-800">Tài khoản</span>
              </div>
           </div>
        </div>

        {/* FAQ List */}
        <div>
           <h3 className="font-bold text-gray-900 mb-3">Câu hỏi thường gặp</h3>
           <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="p-4 border-b border-gray-50 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                 <span className="text-sm font-medium text-gray-800">Làm thế nào để đổi trả hàng?</span>
                 <i className="ph-bold ph-caret-right text-gray-300"></i>
              </div>
              <div className="p-4 border-b border-gray-50 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                 <span className="text-sm font-medium text-gray-800">Chính sách bảo hành màn hình?</span>
                 <i className="ph-bold ph-caret-right text-gray-300"></i>
              </div>
              <div className="p-4 border-b border-gray-50 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                 <span className="text-sm font-medium text-gray-800">Thời gian giao hàng bao lâu?</span>
                 <i className="ph-bold ph-caret-right text-gray-300"></i>
              </div>
              <div className="p-4 border-b border-gray-50 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                 <span className="text-sm font-medium text-gray-800">Tôi có được kiểm hàng trước không?</span>
                 <i className="ph-bold ph-caret-right text-gray-300"></i>
              </div>
              <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                 <span className="text-sm font-medium text-gray-800">Cách sử dụng điểm tích lũy?</span>
                 <i className="ph-bold ph-caret-right text-gray-300"></i>
              </div>
           </div>
        </div>
      </main>

       {/* Floating Footer - Stacked above BottomNav */}
       <div className="fixed bottom-[calc(64px+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <p className="text-center text-xs text-gray-500 mb-3">Vẫn chưa tìm thấy câu trả lời?</p>
          <div className="flex gap-3">
            <button className="flex-1 bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors active:scale-95">
                <i className="ph-bold ph-chat-circle text-lg"></i>
                Chat ngay
            </button>
            <button className="flex-1 bg-primary text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 active:scale-95">
                <i className="ph-bold ph-phone text-lg"></i>
                Gọi hotline
            </button>
          </div>
       </div>
    </div>
  );
};

export default HelpCenterScreen;