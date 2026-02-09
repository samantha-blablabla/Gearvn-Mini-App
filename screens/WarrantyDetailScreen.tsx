import React from 'react';
import { ScreenName } from '../types';

interface WarrantyDetailScreenProps {
  onBack: () => void;
}

const WarrantyDetailScreen: React.FC<WarrantyDetailScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2">
             <i className="iconoir-nav-arrow-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">Chi tiết bảo hành</h1>
        </div>
      </header>
      
      <main className="p-4 space-y-4">
        {/* Product Info */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex gap-4">
           <div 
              className="w-20 h-20 bg-center bg-no-repeat bg-contain bg-gray-50 rounded-lg flex-shrink-0 border border-gray-100"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8cMOAdL1G8lSJI51mJK5TwV9J0bXw-hga_moNy168ChyCKOKHwlRWGamHvWckLQR9jnoK2v6PeSzR7y7e5tSFJ5QK7tPZidZfZ7My854mjchgY1D-7HIpiDfa7nyEvUQ_QVVHliJ6ZwUY1FhB3cZ4T1EY8y_sdtZbewWVxmLQnD2HCk__6FExw2XBRZXTZeUPsgV5jPHLH0Q-F1ViLxUW0jZDoxlhUd073Rp_80jV7avMXWgEfm6tvrB8Qy8HV0nYfpYy0qw5ft8")'}}
            ></div>
            <div>
                <h2 className="font-bold text-gray-900 text-sm line-clamp-2">Laptop ASUS ROG Strix G15 G513IH-HN015W</h2>
                <p className="text-gray-500 text-xs mt-1 font-mono">S/N: G513-2023-001</p>
                <span className="inline-block mt-2 bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">Đang xử lý</span>
            </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="iconoir-clock text-primary text-xl"></i>
                Tiến độ xử lý
            </h3>
            
            <div className="relative pl-2 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-[2px] before:bg-gray-100">
                {/* Step 1 (Latest) */}
                <div className="relative flex gap-4">
                    <div className="z-10 flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white shadow-sm">
                             <i className="iconoir-sync text-base animate-spin"></i>
                        </div>
                    </div>
                    <div>
                        <p className="text-primary font-bold text-sm">Đang kiểm tra</p>
                        <p className="text-gray-500 text-xs mt-0.5">Hôm nay, 10:30</p>
                        <p className="text-gray-600 text-xs mt-1 bg-gray-50 p-2 rounded-lg border border-gray-100">Kỹ thuật viên đang kiểm tra lỗi phần cứng (Màn hình xanh) theo mô tả của khách hàng.</p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-4">
                    <div className="z-10 flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center border-4 border-white shadow-sm">
                             <i className="iconoir-check text-base"></i>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-900 font-bold text-sm">Đã tiếp nhận sản phẩm</p>
                        <p className="text-gray-500 text-xs mt-0.5">24/10/2023, 15:20</p>
                        <p className="text-gray-600 text-xs mt-1">Tiếp nhận tại Gearvn CMT8. Phụ kiện kèm theo: Sạc, Box.</p>
                    </div>
                </div>

                 {/* Step 3 */}
                <div className="relative flex gap-4">
                    <div className="z-10 flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center border-4 border-white shadow-sm">
                             <i className="iconoir-check text-base"></i>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-900 font-bold text-sm">Tạo yêu cầu bảo hành</p>
                        <p className="text-gray-500 text-xs mt-0.5">23/10/2023, 09:15</p>
                        <p className="text-gray-600 text-xs mt-1">Yêu cầu được tạo qua ứng dụng Gearvn Sync.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Info Grid */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm space-y-3">
             <h3 className="font-bold text-gray-900 mb-2">Thông tin chung</h3>
             <div className="flex justify-between py-2 border-b border-gray-50 text-sm">
                 <span className="text-gray-500">Mã phiếu</span>
                 <span className="font-medium text-gray-900">BH-231024-001</span>
             </div>
             <div className="flex justify-between py-2 border-b border-gray-50 text-sm">
                 <span className="text-gray-500">Ngày gửi</span>
                 <span className="font-medium text-gray-900">24/10/2023</span>
             </div>
             <div className="flex justify-between py-2 border-b border-gray-50 text-sm">
                 <span className="text-gray-500">Dự kiến hoàn thành</span>
                 <span className="font-medium text-gray-900">31/10/2023</span>
             </div>
             <div className="flex justify-between py-2 text-sm">
                 <span className="text-gray-500">Nơi tiếp nhận</span>
                 <span className="font-medium text-gray-900 text-right">Gearvn Hoàng Hoa Thám<br/><span className="text-xs text-gray-400 font-normal">78-80-82 Hoàng Hoa Thám, Tân Bình</span></span>
             </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 flex gap-3 z-50">
          <button className="flex-1 bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
              <i className="iconoir-chat-bubble"></i>
              Chat hỗ trợ
          </button>
          <button className="flex-1 bg-primary text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              <i className="iconoir-phone"></i>
              Gọi hotline
          </button>
      </div>
    </div>
  );
};

export default WarrantyDetailScreen;