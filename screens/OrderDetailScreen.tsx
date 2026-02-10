import React from 'react';
import { ScreenName } from '../types';

interface OrderDetailScreenProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

const OrderDetailScreen: React.FC<OrderDetailScreenProps> = ({ onBack, onNavigate }) => {
  return (
    // pb-64 to accommodate the solid drawer footer
    <div className="min-h-screen bg-background-light pb-64">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2 active:scale-90">
             <i className="ph-bold ph-caret-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">Thông tin đơn hàng</h1>
        </div>
      </header>
      
      <main className="p-4 space-y-4">
        {/* Order Status & ID */}
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mã đơn hàng</span>
                    <h2 className="text-xl font-black text-gray-900 mt-0.5">GVN-827364</h2>
                    <p className="text-xs text-gray-500 mt-1">Đặt ngày: 15/10/2023 - 14:30</p>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide">Hoàn tất</span>
            </div>

            {/* Mini Timeline */}
            <div className="relative pt-2 pb-2">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full"></div>
                <div className="absolute top-1/2 left-0 w-full h-1 bg-green-500 -translate-y-1/2 rounded-full"></div>
                
                <div className="relative flex justify-between">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-6 rounded-full bg-green-500 border-2 border-white shadow-sm flex items-center justify-center">
                            <i className="ph-bold ph-check text-white text-xs"></i>
                        </div>
                        <span className="text-[10px] font-bold text-gray-800">Đặt hàng</span>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-6 rounded-full bg-green-500 border-2 border-white shadow-sm flex items-center justify-center">
                            <i className="ph-bold ph-check text-white text-xs"></i>
                        </div>
                        <span className="text-[10px] font-bold text-gray-800">Xác nhận</span>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-6 rounded-full bg-green-500 border-2 border-white shadow-sm flex items-center justify-center">
                            <i className="ph-bold ph-check text-white text-xs"></i>
                        </div>
                         <span className="text-[10px] font-bold text-gray-800">Đang giao</span>
                    </div>
                    {/* Step 4 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-6 rounded-full bg-green-500 border-2 border-white shadow-sm flex items-center justify-center">
                            <i className="ph-bold ph-check text-white text-xs"></i>
                        </div>
                         <span className="text-[10px] font-bold text-gray-800">Hoàn tất</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Shipping Info */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-50">
                <div className="size-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <i className="ph-fill ph-map-pin text-xl"></i>
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-900">Địa chỉ nhận hàng</p>
                    <p className="text-xs text-gray-500">Nguyễn Minh Hoàng | 0909 123 456</p>
                </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed pl-13 ml-[52px]">
                123 Đường 3/2, Phường 11, Quận 10, TP. Hồ Chí Minh
            </p>
        </div>

        {/* Products */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                <h3 className="text-sm font-bold text-gray-900">Sản phẩm (3)</h3>
            </div>
            
            {/* Item 1 */}
            <div className="p-4 flex gap-4 border-b border-gray-50">
                <div className="size-16 bg-[#F9FAFB] rounded-lg border border-gray-100 shrink-0 p-1">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU9t34xmbElpa01q8W52cIXEkseS7SH66iIJ3pQFlHNsyq3U98AjLjiRPSEUW2v8d5MXZo2lm_u0BvScXUVTrinjJ2_8fjpO_vrdPzVpsasNBTT3tpOjrIrxpVeFLLbaMCUEfYzOAiB_4nKAaJ9y71rwA16gFD-uPwMfFCL4Agco7LsQDLjSJuT3qmwTnEpMzhg3KD1wqBa5Kn9WQ1welJlk5pLNEbDvpoDdCMyvWYObGtlKLTJBYAEl6m853wUCbvFRNjAcndUHs" className="w-full h-full object-contain mix-blend-multiply" alt="Product" />
                </div>
                <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2">Laptop ASUS ROG Strix G15 G513RC</h4>
                    <div className="flex justify-between items-end mt-2">
                        <p className="text-xs text-gray-500">x1</p>
                        <p className="text-sm font-bold text-gray-900">23.990.000đ</p>
                    </div>
                </div>
            </div>

            {/* Item 2 */}
             <div className="p-4 flex gap-4 border-b border-gray-50">
                <div className="size-16 bg-[#F9FAFB] rounded-lg border border-gray-100 shrink-0 p-1">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZgCdVBaSGN69UV7RN1d8GXknQ0AYGBAtzPHox2F94LrT4a8JG7rXwQt07NWP1RIWgDsaai6gS5XhjkTN68eOGkgKUj8wGqmWX33czp4g8mr3Pn50btwpVH05OBJVC_qp88DWfxWE60OEC1PQURWnr9GDWAq1pvwUUSCDTLl-5X6qvu4atZTyts5FAuT0uok7oAKhO5ekt2KJd6j3kaUQEhCqrGGvWM8GiA5Byq9lcvCWeipBxz1cPOibPOPA47L1PRYA9n_Wi8U" className="w-full h-full object-contain mix-blend-multiply" alt="Product" />
                </div>
                <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2">Chuột Gaming Logitech G102 Lightsync</h4>
                    <div className="flex justify-between items-end mt-2">
                        <p className="text-xs text-gray-500">x1</p>
                        <p className="text-sm font-bold text-gray-900">450.000đ</p>
                    </div>
                </div>
            </div>
            
             {/* Item 3 */}
             <div className="p-4 flex gap-4">
                <div className="size-16 bg-[#F9FAFB] rounded-lg border border-gray-100 shrink-0 p-1">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo-C2djq42-Z6x61oTMA9jF8wCtl0fUxI1il_o3yjxE24lFoAvdBIHLkvSrfxagrt_oqXEo-q4G3NM8RAmwHWvvodhtVqp-bqLwex9p42Oyis2Jkfd4oBkOdiQj1uM_5zS58jMgGgK6oxyR1Ay1kp070sFlPSTvWZKr3aD7Mh2gIha2tcUM9cDWuf56PxVbSt_7vTj8DEO3oGApZYrPf57ve3yNGUwmDZdceJhI0Vj25mm5SPem41E6_JEZbBhN21F2pMrbm08HvY" className="w-full h-full object-contain mix-blend-multiply" alt="Product" />
                </div>
                <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2">Tai nghe HyperX Cloud Earbuds II Red</h4>
                    <div className="flex justify-between items-end mt-2">
                        <p className="text-xs text-gray-500">x1</p>
                        <p className="text-sm font-bold text-gray-900">990.000đ</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm space-y-3">
             <div className="flex justify-between text-sm">
                 <span className="text-gray-500">Tạm tính</span>
                 <span className="font-medium text-gray-900">25.430.000đ</span>
             </div>
             <div className="flex justify-between text-sm">
                 <span className="text-gray-500">Phí vận chuyển</span>
                 <span className="font-medium text-gray-900">0đ</span>
             </div>
             <div className="flex justify-between text-sm">
                 <span className="text-gray-500">Giảm giá thành viên</span>
                 <span className="font-medium text-green-600">-500.000đ</span>
             </div>
             <div className="w-full border-t border-dashed border-gray-200 my-2"></div>
             <div className="flex justify-between items-end">
                 <span className="text-gray-900 font-bold">Tổng thanh toán</span>
                 <div className="text-right">
                    <span className="font-black text-lg text-primary block leading-none">24.930.000đ</span>
                    <span className="text-[10px] text-gray-400 font-medium">(Đã bao gồm VAT)</span>
                 </div>
             </div>
        </div>
        
         <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
             <div className="flex items-center gap-2 text-primary">
                 <i className="ph-fill ph-ticket text-xl"></i>
                 <span className="text-sm font-bold">Hóa đơn điện tử</span>
             </div>
             <button className="text-xs font-bold text-gray-500 hover:text-gray-900 border border-gray-200 px-3 py-1.5 rounded-lg">
                 Tải về
             </button>
         </div>

      </main>

      {/* Footer - Solid Drawer Style */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-50 p-4 pb-[calc(88px+env(safe-area-inset-bottom))] z-30 shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.05)] rounded-t-[24px]">
          <div className="flex gap-3">
            <button 
                onClick={() => onNavigate(ScreenName.SUPPORT)}
                className="flex-1 bg-gray-100 text-gray-800 font-bold py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors active:scale-95"
            >
                <i className="ph-bold ph-chat-circle-text text-xl text-gray-600"></i>
                Hỗ trợ
            </button>
            <button className="flex-1 bg-primary text-white font-bold py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 active:scale-95">
                <i className="ph-bold ph-arrows-clockwise text-xl"></i>
                Mua lại
            </button>
          </div>
      </div>
    </div>
  );
};

export default OrderDetailScreen;