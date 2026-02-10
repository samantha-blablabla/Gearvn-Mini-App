import React, { useState } from 'react';
import { ScreenName } from '../types';

interface PointsPolicyScreenProps {
  onBack: () => void;
}

const PointsPolicyScreen: React.FC<PointsPolicyScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'QR' | 'BENEFITS'>('QR');

  return (
    <div className="min-h-screen bg-background-light pb-24">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-900 to-background-light z-0"></div>

      {/* Header */}
      <div className="relative z-10 pt-[calc(env(safe-area-inset-top)+16px)] px-5 mb-6">
         <div className="flex items-center justify-between text-white mb-6">
            <button onClick={onBack} className="bg-white/10 backdrop-blur-md size-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors active:scale-90">
              <i className="ph-bold ph-caret-left text-2xl"></i>
            </button>
            <h1 className="font-bold text-[17px] tracking-wide">Member Pass</h1>
            <div className="size-10"></div> {/* Spacer */}
         </div>

         {/* Premium Black Card Design */}
         <div className="w-full bg-gradient-to-br from-[#2C2C2E] via-[#1C1C1E] to-black rounded-[24px] p-6 text-white shadow-2xl shadow-black/40 border border-white/10 relative overflow-hidden group">
            {/* Holographic Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none opacity-60"></div>
            
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5">Total Points</p>
                        <h2 className="text-[40px] font-black tracking-tighter bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-none">35,326</h2>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-600 to-yellow-400 px-3 py-1 rounded-full shadow-lg shadow-yellow-900/40 border border-white/10">
                            <i className="ph-fill ph-star text-white text-xs"></i>
                            <span className="text-[11px] font-black text-white uppercase tracking-wider">G-PRO</span>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-2">
                   <div className="flex justify-between text-[11px] font-medium text-gray-400 mb-2">
                      <span>Current</span>
                      <span>Next: <span className="text-white font-bold">G-VIP</span></span>
                   </div>
                   <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                       <div className="h-full bg-gradient-to-r from-primary via-red-500 to-orange-500 w-[70%] rounded-full shadow-[0_0_15px_rgba(236,19,19,0.6)] relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-[shimmer_2s_infinite]"></div>
                       </div>
                   </div>
                   <p className="text-[11px] text-gray-500 mt-2 text-right">Cần thêm <span className="text-white font-bold">14,674</span> điểm</p>
                </div>
            </div>
         </div>
      </div>

      {/* Floating Tab Switcher */}
      <div className="px-5 relative z-20 -mt-4">
        <div className="bg-white p-1.5 rounded-[18px] shadow-lg shadow-gray-200/50 border border-gray-100 flex relative">
           <button 
             onClick={() => setActiveTab('QR')}
             className={`flex-1 h-12 text-[14px] font-bold rounded-[14px] flex items-center justify-center gap-2 transition-all duration-300 relative z-10 ${activeTab === 'QR' ? 'text-white' : 'text-gray-500 hover:bg-gray-50'}`}
           >
             <i className="ph-bold ph-qr-code text-lg"></i> Tích điểm
           </button>
           <button 
             onClick={() => setActiveTab('BENEFITS')}
             className={`flex-1 h-12 text-[14px] font-bold rounded-[14px] flex items-center justify-center gap-2 transition-all duration-300 relative z-10 ${activeTab === 'BENEFITS' ? 'text-white' : 'text-gray-500 hover:bg-gray-50'}`}
           >
             <i className="ph-bold ph-crown text-lg"></i> Quyền lợi
           </button>
           
           {/* Animated Background Pill */}
           <div 
             className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-primary rounded-[14px] shadow-md shadow-primary/30 transition-all duration-300 ease-out ${activeTab === 'QR' ? 'left-1.5' : 'left-[calc(50%+3px)]'}`}
           ></div>
        </div>
      </div>

      {/* Content */}
      <main className="p-5 relative z-10">
        {activeTab === 'QR' ? (
           <div className="animate-in fade-in zoom-in-95 duration-300">
               {/* Ticket Style Container */}
               <div className="bg-white rounded-[24px] overflow-hidden shadow-soft relative">
                   {/* Top Part: QR */}
                   <div className="p-8 pb-10 flex flex-col items-center justify-center bg-white">
                        <div className="border-[3px] border-gray-900 rounded-[20px] p-2 mb-6">
                             <img 
                                src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=070XFJBR6LTDK" 
                                alt="Member QR" 
                                className="w-52 h-52 mix-blend-multiply"
                            />
                        </div>
                        <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-1.5">Mã thành viên</p>
                        <h3 className="text-2xl font-mono font-black text-gray-900 tracking-wider">070XFJBR6LTDK</h3>
                   </div>

                   {/* Ticket Cutout Effect */}
                   <div className="relative h-6 bg-gray-50 flex items-center">
                        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 size-8 bg-background-light rounded-full shadow-inner"></div>
                         <div className="w-full border-t-2 border-dashed border-gray-300"></div>
                        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 size-8 bg-background-light rounded-full shadow-inner"></div>
                   </div>

                   {/* Bottom Part: Stats */}
                   <div className="bg-gray-50 p-6 flex justify-between items-center">
                       <div className="text-center flex-1 border-r border-gray-200">
                           <p className="text-[11px] text-gray-500 font-bold uppercase mb-1">Hạng</p>
                           <p className="text-[16px] font-black text-gray-900">GOLD</p>
                       </div>
                       <div className="text-center flex-1 border-r border-gray-200">
                           <p className="text-[11px] text-gray-500 font-bold uppercase mb-1">Điểm</p>
                           <p className="text-[16px] font-black text-primary">1,250</p>
                       </div>
                       <div className="text-center flex-1">
                           <p className="text-[11px] text-gray-500 font-bold uppercase mb-1">Hết hạn</p>
                           <p className="text-[16px] font-black text-gray-900">31/12</p>
                       </div>
                   </div>
               </div>
               
               <p className="text-center text-text-secondary text-[12px] mt-6 px-8 leading-relaxed">
                  Mã QR được tự động làm mới mỗi 60 giây để bảo mật. Vui lòng không chụp ảnh màn hình.
               </p>
           </div>
        ) : (
           <div className="animate-in slide-in-from-bottom-4 duration-300 pb-8">
              {/* Next Rank Goal Card */}
              <div className="mb-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-[20px] p-5 text-white shadow-xl shadow-gray-900/20 relative overflow-hidden border border-white/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                  <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                           <div className="size-10 bg-white/10 rounded-[12px] flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-inner">
                               <i className="ph-bold ph-lock-key text-xl text-primary"></i>
                           </div>
                           <div>
                               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Mục tiêu tiếp theo</p>
                               <h3 className="font-black text-[18px] text-white">Diamond Member</h3>
                           </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm bg-black/20 p-3 rounded-[12px] border border-white/5">
                               <span className="text-gray-300 font-medium text-[13px]">Tích điểm</span>
                               <div className="flex items-center gap-2">
                                   <span className="text-gray-500 line-through text-[12px] font-medium">1.2%</span>
                                   <i className="ph-bold ph-arrow-right text-xs text-gray-500"></i>
                                   <span className="text-green-400 font-bold text-[13px]">1.5%</span>
                               </div>
                          </div>
                           <div className="flex items-center justify-between text-sm bg-black/20 p-3 rounded-[12px] border border-white/5">
                               <span className="text-gray-300 font-medium text-[13px]">Đặc quyền</span>
                               <span className="text-white font-bold flex items-center gap-1 text-[13px]"><i className="ph-fill ph-crown text-xs text-yellow-500"></i> Service VIP</span>
                          </div>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-gray-400 bg-white/5 p-2.5 rounded-[10px]">
                           <i className="ph-bold ph-info"></i>
                           <p>Cần thêm <span className="text-white font-bold">14,674</span> điểm để mở khóa quyền lợi này</p>
                      </div>
                  </div>
              </div>

              {/* Current Benefits List */}
              <div className="bg-white rounded-[24px] p-6 shadow-soft animate-in fade-in zoom-in-95 duration-300 space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="size-12 rounded-[14px] bg-yellow-100 flex items-center justify-center text-yellow-600 shrink-0">
                            <i className="ph-bold ph-percent text-2xl"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-[16px]">Giảm giá đặc quyền</h3>
                            <p className="text-gray-500 text-[13px] mt-1 leading-relaxed">Giảm 5% cho phụ kiện và 2% cho Laptop/PC khi mua trực tiếp tại cửa hàng.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="size-12 rounded-[14px] bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                            <i className="ph-bold ph-cake text-2xl"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-[16px]">Quà sinh nhật</h3>
                            <p className="text-gray-500 text-[13px] mt-1 leading-relaxed">Nhận ngay voucher 500k và quà lưu niệm trong tháng sinh nhật.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="size-12 rounded-[14px] bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                            <i className="ph-bold ph-truck text-2xl"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-[16px]">Miễn phí vận chuyển</h3>
                            <p className="text-gray-500 text-[13px] mt-1 leading-relaxed">Freeship cho mọi đơn hàng nội thành và hỗ trợ 50% phí ship ngoại thành.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="size-12 rounded-[14px] bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                            <i className="ph-bold ph-wrench text-2xl"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-[16px]">Ưu tiên bảo hành</h3>
                            <p className="text-gray-500 text-[13px] mt-1 leading-relaxed">Được ưu tiên xử lý bảo hành nhanh trong 24h và mượn thiết bị thay thế.</p>
                        </div>
                    </div>
               </div>
           </div>
        )}
      </main>
    </div>
  );
};

export default PointsPolicyScreen;