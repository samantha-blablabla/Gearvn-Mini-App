import React, { useState } from 'react';
import { ScreenName } from '../types';

interface WarrantyScreenProps {
  onNavigate: (screen: ScreenName) => void;
  onBack: () => void;
}

const WarrantyScreen: React.FC<WarrantyScreenProps> = ({ onNavigate, onBack }) => {
  const [activeTab, setActiveTab] = useState<'PROCESSING' | 'HISTORY'>('PROCESSING');

  return (
    // Increased pb to account for taller bottom nav
    <div className="min-h-screen bg-background-light pb-40">
      {/* Header - HIG Update: Increased height via py-3 and min-h */}
      <header className="sticky top-0 z-50 bg-white/90 ios-blur border-b border-gray-200">
        <div className="flex items-center px-4 py-3 min-h-[60px] justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900">
            <i className="ph-bold ph-caret-left text-xl"></i>
          </button>
          <h1 className="text-text-primary text-[17px] font-bold leading-tight tracking-tight text-center flex-1">Quản lý Bảo hành</h1>
          <div className="size-10"></div>
        </div>
        {/* Tabs - Height 48px for touch */}
        <div className="flex px-4 gap-8">
          <button
            onClick={() => setActiveTab('PROCESSING')}
            className={`flex flex-col items-center justify-center border-b-[3px] h-12 px-2 cursor-pointer transition-all flex-1 ${activeTab === 'PROCESSING' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            <p className="text-[14px] font-bold">Đang xử lý</p>
          </button>
          <button
            onClick={() => setActiveTab('HISTORY')}
            className={`flex flex-col items-center justify-center border-b-[3px] h-12 px-2 cursor-pointer transition-all flex-1 ${activeTab === 'HISTORY' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            <p className="text-[14px] font-bold">Lịch sử</p>
          </button>
        </div>
      </header>

      <main className="py-6 space-y-5">
        {activeTab === 'PROCESSING' ? (
          <>
            {/* Claim Card 1 */}
            <div className="px-5">
              <div className="bg-white rounded-[20px] shadow-soft overflow-hidden border border-transparent">
                <div className="p-5">
                  <div className="flex flex-col">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-[15px] leading-tight text-text-primary line-clamp-2">Laptop ASUS ROG Strix G15</h3>
                        <span className="bg-primary/10 text-primary text-[11px] font-bold px-2 py-0.5 rounded-[6px] uppercase whitespace-nowrap">Đang xử lý</span>
                      </div>
                      <p className="text-text-secondary text-[12px] mt-1.5 font-mono font-medium">S/N: G513-2023-001</p>
                    </div>
                    <button
                      onClick={() => onNavigate(ScreenName.WARRANTY_DETAIL)}
                      className="self-start mt-3 bg-primary text-white text-[13px] font-bold px-4 h-9 rounded-[10px] hover:bg-primary/90 transition-colors active:scale-95 shadow-lg shadow-primary/20"
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>

                {/* Stepper */}
                <div className="px-5 pb-6 pt-3 border-t border-gray-50">
                  <div className="grid grid-cols-[24px_1fr] gap-x-4 gap-y-0">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                      <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white z-10 shadow-sm">
                        <i className="ph-bold ph-arrows-clockwise text-[14px] animate-spin"></i>
                      </div>
                      <div className="w-[2px] bg-primary h-full -mt-2 -mb-2 opacity-30"></div>
                    </div>
                    <div className="pb-7 pt-0.5">
                      <p className="text-[14px] font-bold text-primary leading-none">Đang kiểm tra</p>
                      <p className="text-[12px] text-text-secondary mt-1.5 leading-snug">Hôm nay, 10:30 • Đang xác định lỗi phần cứng</p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                      <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white z-10 shadow-sm">
                        <i className="ph-bold ph-check text-[14px]"></i>
                      </div>
                      <div className="w-[2px] bg-primary h-full -mt-2 -mb-2 opacity-30"></div>
                    </div>
                    <div className="pb-7 pt-0.5">
                      <p className="text-[14px] font-semibold text-text-primary leading-none">Đã tiếp nhận</p>
                      <p className="text-[12px] text-text-secondary mt-1.5 leading-snug">24/10/2023 • Tại Gearvn CMT8, Q.3</p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                      <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white z-10 shadow-sm">
                        <i className="ph-bold ph-check text-[14px]"></i>
                      </div>
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[14px] font-semibold text-text-primary leading-none">Tạo yêu cầu</p>
                      <p className="text-[12px] text-text-secondary mt-1.5 leading-snug">23/10/2023 • Qua ứng dụng Gearvn Sync</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Claim Card 2 */}
            <div className="px-5">
              <div className="bg-white rounded-[20px] shadow-soft border border-transparent overflow-hidden">
                <div className="p-5">
                  <div className="flex flex-col">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-[15px] leading-tight text-text-primary line-clamp-2">Bàn phím Akko 3098B Multi-mode</h3>
                        <span className="bg-orange-100 text-orange-600 text-[11px] font-bold px-2 py-0.5 rounded-[6px] uppercase whitespace-nowrap">Đang sửa chữa</span>
                      </div>
                      <p className="text-text-secondary text-[12px] mt-1.5 font-mono font-medium">S/N: AK-3098B-V2-0922</p>
                      <p className="text-[11px] text-text-secondary font-medium mt-1">Cập nhật: 21/10/2023</p>
                    </div>
                    <button
                      onClick={() => onNavigate(ScreenName.WARRANTY_DETAIL)}
                      className="self-start mt-3 bg-primary text-white text-[13px] font-bold px-4 h-9 rounded-[10px] hover:bg-primary/90 transition-colors active:scale-95 shadow-lg shadow-primary/20"
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Tip */}
            <div className="mx-5 p-4 bg-primary/5 border border-primary/10 rounded-[16px] flex items-start gap-3">
              <i className="ph-fill ph-info text-primary text-xl mt-0.5"></i>
              <div className="text-[13px] leading-relaxed">
                <p className="font-bold text-primary mb-1">Quy định bảo hành Gearvn</p>
                <p className="text-text-secondary">Thời gian xử lý trung bình từ 3-7 ngày làm việc. Quý khách vui lòng giữ hóa đơn hoặc tin nhắn SMS tiếp nhận.</p>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {/* History Item 1 */}
            <div className="px-5">
              <div className="bg-white rounded-[20px] shadow-soft border border-transparent overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                <div className="p-5">
                  <div className="flex flex-col">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-[14px] leading-tight text-text-primary line-clamp-2">Chuột Logitech G502 HERO</h3>
                        <span className="bg-green-100 text-green-700 text-[11px] font-bold px-2 py-0.5 rounded-[6px] uppercase whitespace-nowrap">Hoàn tất</span>
                      </div>
                      <p className="text-text-secondary text-[12px] mt-1.5 font-mono font-medium">S/N: 2133LZ03829</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[11px] text-text-secondary font-medium">Trả hàng: 10/08/2023</p>
                      <button className="text-text-secondary text-[12px] font-bold border border-gray-200 px-3 h-8 rounded-[8px] hover:bg-gray-50 transition-colors">
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* History Item 2 */}
            <div className="px-5">
              <div className="bg-white rounded-[20px] shadow-soft border border-transparent overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                <div className="p-5">
                  <div className="flex flex-col">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-[14px] leading-tight text-text-primary line-clamp-2">Tai nghe Kingston HyperX Cloud III</h3>
                        <span className="bg-green-100 text-green-700 text-[11px] font-bold px-2 py-0.5 rounded-[6px] uppercase whitespace-nowrap">Hoàn tất</span>
                      </div>
                      <p className="text-text-secondary text-[12px] mt-1.5 font-mono font-medium">S/N: KHX-H3CL/WR</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[11px] text-text-secondary font-medium">Trả hàng: 05/06/2023</p>
                      <button className="text-text-secondary text-[12px] font-bold border border-gray-200 px-3 h-8 rounded-[8px] hover:bg-gray-50 transition-colors">
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default WarrantyScreen;