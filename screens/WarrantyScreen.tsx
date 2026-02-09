import React, { useState } from 'react';
import { ScreenName } from '../types';

interface WarrantyScreenProps {
  onNavigate: (screen: ScreenName) => void;
  onBack: () => void;
}

const WarrantyScreen: React.FC<WarrantyScreenProps> = ({ onNavigate, onBack }) => {
  const [activeTab, setActiveTab] = useState<'PROCESSING' | 'HISTORY'>('PROCESSING');

  return (
    <div className="min-h-screen bg-background-light pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
            <i className="iconoir-nav-arrow-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-primary text-lg font-bold leading-tight tracking-tight text-center flex-1">Quản lý Bảo hành</h1>
          <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 transition-colors">
            <i className="iconoir-search text-gray-900 text-xl"></i>
          </button>
        </div>
        {/* Tabs */}
        <div className="flex px-4 gap-8">
          <button 
            onClick={() => setActiveTab('PROCESSING')}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 px-2 cursor-pointer transition-all flex-1 ${
                activeTab === 'PROCESSING' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <p className="text-sm font-bold">Đang xử lý</p>
          </button>
          <button 
             onClick={() => setActiveTab('HISTORY')}
             className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 px-2 cursor-pointer transition-all flex-1 ${
                activeTab === 'HISTORY' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <p className="text-sm font-bold">Lịch sử</p>
          </button>
        </div>
      </header>

      <main className="py-4 space-y-4">
        {activeTab === 'PROCESSING' ? (
            <>
                {/* Claim Card 1 */}
                <div className="px-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4 flex gap-4">
                      <div 
                        className="w-24 h-24 bg-center bg-no-repeat bg-contain bg-gray-50 rounded-lg flex-shrink-0 border border-gray-100"
                        style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8cMOAdL1G8lSJI51mJK5TwV9J0bXw-hga_moNy168ChyCKOKHwlRWGamHvWckLQR9jnoK2v6PeSzR7y7e5tSFJ5QK7tPZidZfZ7My854mjchgY1D-7HIpiDfa7nyEvUQ_QVVHliJ6ZwUY1FhB3cZ4T1EY8y_sdtZbewWVxmLQnD2HCk__6FExw2XBRZXTZeUPsgV5jPHLH0Q-F1ViLxUW0jZDoxlhUd073Rp_80jV7avMXWgEfm6tvrB8Qy8HV0nYfpYy0qw5ft8")'}}
                      ></div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-base leading-tight text-gray-900 line-clamp-2">Laptop ASUS ROG Strix G15</h3>
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase whitespace-nowrap ml-2">Đang xử lý</span>
                          </div>
                          <p className="text-gray-500 text-xs mt-1 font-mono">S/N: G513-2023-001</p>
                        </div>
                        <button 
                           onClick={() => onNavigate(ScreenName.WARRANTY_DETAIL)}
                           className="self-end bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Xem chi tiết
                        </button>
                      </div>
                    </div>
                    
                    {/* Stepper */}
                    <div className="px-4 pb-6 pt-2 border-t border-gray-50">
                      <div className="grid grid-cols-[24px_1fr] gap-x-3 gap-y-0">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-white z-10">
                            <i className="iconoir-sync text-[14px] animate-spin"></i>
                          </div>
                          <div className="w-[2px] bg-primary h-full -mt-2 -mb-2"></div>
                        </div>
                        <div className="pb-6 pt-0.5">
                          <p className="text-sm font-bold text-primary leading-none">Đang kiểm tra</p>
                          <p className="text-[11px] text-gray-500 mt-1">Hôm nay, 10:30 • Đang xác định lỗi phần cứng</p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-white z-10">
                            <i className="iconoir-check text-[14px]"></i>
                          </div>
                          <div className="w-[2px] bg-primary h-full -mt-2 -mb-2"></div>
                        </div>
                        <div className="pb-6 pt-0.5">
                          <p className="text-sm font-semibold text-gray-900 leading-none">Đã tiếp nhận</p>
                          <p className="text-[11px] text-gray-500 mt-1">24/10/2023 • Tại Gearvn CMT8, Q.3</p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-white z-10">
                            <i className="iconoir-check text-[14px]"></i>
                          </div>
                        </div>
                        <div className="pt-0.5">
                          <p className="text-sm font-semibold text-gray-900 leading-none">Tạo yêu cầu</p>
                          <p className="text-[11px] text-gray-500 mt-1">23/10/2023 • Qua ứng dụng Gearvn Sync</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Claim Card 2 */}
                <div className="px-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4 flex gap-4">
                      <div 
                        className="w-24 h-24 bg-center bg-no-repeat bg-contain bg-gray-50 rounded-lg flex-shrink-0 border border-gray-100"
                        style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTA8EaIQxO_inNoACJm21LcUNbcyYAvpxsNttev9j449z4qqO211FcMOWg93kehMjlbAUywiXKQdJ8Wc7Qkcyn6d_81ae_cCHsFWRWdS8FXEMASBLOmesxuRNR4CtXhzk3sBTvjhInJBgq1j5FCOIcZGzE8Ey_i18ZEan1DZxYQBWcttzLiCUM8CGKrMWOt00Bgumc0azj6xD1oMb5BlQYDC7OmO49jWask7sdZFX7VeXnC3iWsxu5qeCqbM1_Lt1a1XYxbs-oi4c")'}}
                      ></div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-base leading-tight text-gray-900 line-clamp-2">Bàn phím Akko 3098B Multi-mode</h3>
                            <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase whitespace-nowrap ml-2">Đang sửa chữa</span>
                          </div>
                          <p className="text-gray-500 text-xs mt-1 font-mono">S/N: AK-3098B-V2-0922</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-[10px] text-gray-400">Cập nhật: 21/10/2023</p>
                          <button 
                             onClick={() => onNavigate(ScreenName.WARRANTY_DETAIL)}
                             className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                          >
                              Xem chi tiết
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Tip */}
                <div className="mx-4 p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-start gap-3">
                  <i className="iconoir-info-circle text-primary text-xl"></i>
                  <div className="text-xs leading-relaxed">
                    <p className="font-bold text-primary mb-1">Quy định bảo hành Gearvn</p>
                    <p className="text-gray-600">Thời gian xử lý trung bình từ 3-7 ngày làm việc. Quý khách vui lòng giữ hóa đơn hoặc tin nhắn SMS tiếp nhận.</p>
                  </div>
                </div>
            </>
        ) : (
            <div className="space-y-4">
                {/* History Item 1 */}
                <div className="px-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                    <div className="p-4 flex gap-4">
                      <div 
                        className="w-20 h-20 bg-center bg-no-repeat bg-contain bg-gray-50 rounded-lg flex-shrink-0 border border-gray-100 grayscale"
                        style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhbqn8oEvmnOKeK03rnvsGiy5zDNuKeH7h8xdx21TDPRCcNogKnMH91l1i1V9Fwamut-yi8lxShUUHpzAw5PX3YqaxVPljgnknmrpxFpuaK8s20JBNd4tFLVcB5vP_NXZBG9mtTUee_jHJPFh6RdobW2cjAYF2sFBFoBexOK6HDyti3VrqWuRUHxqcltLLNspakmvS4ykRfE1QlMrN-X9gyb5G3017ppzFHSl3w_0w1X9jSBjamgxel-6e-1aoRvaMQ1tSMWxiK5E")'}}
                      ></div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-sm leading-tight text-gray-900 line-clamp-2">Chuột Logitech G502 HERO</h3>
                             <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase whitespace-nowrap ml-2">Hoàn tất</span>
                          </div>
                          <p className="text-gray-500 text-xs mt-1 font-mono">S/N: 2133LZ03829</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-[10px] text-gray-400">Trả hàng: 10/08/2023</p>
                             <button className="text-gray-500 text-xs font-bold border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                                Chi tiết
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* History Item 2 */}
                <div className="px-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                    <div className="p-4 flex gap-4">
                      <div 
                        className="w-20 h-20 bg-center bg-no-repeat bg-contain bg-gray-50 rounded-lg flex-shrink-0 border border-gray-100 grayscale"
                        style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCo-C2djq42-Z6x61oTMA9jF8wCtl0fUxI1il_o3yjxE24lFoAvdBIHLkvSrfxagrt_oqXEo-q4G3NM8RAmwHWvvodhtVqp-bqLwex9p42Oyis2Jkfd4oBkOdiQj1uM_5zS58jMgGgK6oxyR1Ay1kp070sFlPSTvWZKr3aD7Mh2gIha2tcUM9cDWuf56PxVbSt_7vTj8DEO3oGApZYrPf57ve3yNGUwmDZdceJhI0Vj25mm5SPem41E6_JEZbBhN21F2pMrbm08HvY")'}}
                      ></div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-sm leading-tight text-gray-900 line-clamp-2">Tai nghe HyperX Cloud II</h3>
                             <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase whitespace-nowrap ml-2">Đã hủy</span>
                          </div>
                          <p className="text-gray-500 text-xs mt-1 font-mono">S/N: HPX-C2-9982</p>
                        </div>
                         <div className="flex items-center justify-between mt-2">
                            <p className="text-[10px] text-gray-400">Ngày: 05/06/2023</p>
                             <button className="text-gray-500 text-xs font-bold border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                                Chi tiết
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 
                 <div className="px-12 py-8 flex flex-col items-center justify-center text-center opacity-50">
                    <i className="iconoir-clock text-4xl text-gray-300 mb-2"></i>
                    <p className="text-sm font-medium text-gray-400">Không còn lịch sử bảo hành nào khác trong 12 tháng qua.</p>
                 </div>
            </div>
        )}
      </main>
    </div>
  );
};

export default WarrantyScreen;