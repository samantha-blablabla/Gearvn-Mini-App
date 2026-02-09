import React, { useState } from 'react';
import { ScreenName } from '../types';

interface PointsPolicyScreenProps {
  onBack: () => void;
}

const PointsPolicyScreen: React.FC<PointsPolicyScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'QR' | 'BENEFITS'>('QR');

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-gray-900 to-gray-50 z-0"></div>

      {/* Header */}
      <div className="relative z-10 pt-[calc(env(safe-area-inset-top)+16px)] px-4 mb-6">
         <div className="flex items-center justify-between text-white mb-6">
            <button onClick={onBack} className="bg-white/10 backdrop-blur-md size-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors">
              <i className="iconoir-nav-arrow-left text-xl"></i>
            </button>
            <h1 className="font-bold text-lg tracking-wide">Member Pass</h1>
            <div className="size-10"></div> {/* Spacer */}
         </div>

         {/* Premium Black Card Design */}
         <div className="w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-6 text-white shadow-2xl shadow-gray-900/50 border border-white/10 relative overflow-hidden group">
            {/* Holographic Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none opacity-60"></div>
            
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Total Points</p>
                        <h2 className="text-4xl font-black tracking-tighter bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">35,326</h2>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-600 to-yellow-400 px-3 py-1 rounded-full shadow-lg shadow-yellow-900/40 border border-white/10">
                            <i className="iconoir-star-solid text-white text-xs"></i>
                            <span className="text-[10px] font-black text-white uppercase tracking-wider">G-PRO</span>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-2">
                   <div className="flex justify-between text-xs font-medium text-gray-400 mb-2">
                      <span>Current</span>
                      <span>Next: <span className="text-white font-bold">G-VIP</span></span>
                   </div>
                   <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                       <div className="h-full bg-gradient-to-r from-primary via-red-500 to-orange-500 w-[70%] rounded-full shadow-[0_0_15px_rgba(236,19,19,0.6)] relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-[shimmer_2s_infinite]"></div>
                       </div>
                   </div>
                   <p className="text-[10px] text-gray-500 mt-2 text-right">Cần thêm <span className="text-white font-bold">14,674</span> điểm</p>
                </div>
            </div>
         </div>
      </div>

      {/* Floating Tab Switcher */}
      <div className="px-4 relative z-20 -mt-4">
        <div className="bg-white p-1.5 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 flex relative">
           <button 
             onClick={() => setActiveTab('QR')}
             className={`flex-1 py-3 text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 relative z-10 ${activeTab === 'QR' ? 'text-white' : 'text-gray-500 hover:bg-gray-50'}`}
           >
             <i className="iconoir-qr-code"></i> Tích điểm
           </button>
           <button 
             onClick={() => setActiveTab('BENEFITS')}
             className={`flex-1 py-3 text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 relative z-10 ${activeTab === 'BENEFITS' ? 'text-white' : 'text-gray-500 hover:bg-gray-50'}`}
           >
             <i className="iconoir-crown"></i> Quyền lợi
           </button>
           
           {/* Animated Background Pill */}
           <div 
             className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-primary rounded-xl shadow-md shadow-primary/30 transition-all duration-300 ease-out ${activeTab === 'QR' ? 'left-1.5' : 'left-[calc(50%+3px)]'}`}
           ></div>
        </div>
      </div>

      {/* Content */}
      <main className="p-4 relative z-10">
        {activeTab === 'QR' ? (
           <div className="animate-in fade-in zoom-in-95 duration-300">
               {/* Ticket Style Container */}
               <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 relative">
                   {/* Top Part: QR */}
                   <div className="p-8 pb-10 flex flex-col items-center justify-center bg-white">
                        <div className="border-4 border-gray-900 rounded-2xl p-2 mb-4">
                             <img 
                                src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=070XFJBR6LTDK" 
                                alt="Member QR" 
                                className="w-52 h-52 mix-blend-multiply"
                            />
                        </div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Mã thành viên</p>
                        <h3 className="text-2xl font-mono font-black text-gray-900 tracking-wider">070XFJBR6LTDK</h3>
                   </div>

                   {/* Ticket Cutout Effect */}
                   <div className="relative h-6 bg-gray-50 flex items-center">
                        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-200 rounded-full shadow-inner"></div>
                         <div className="w-full border-t-2 border-dashed border-gray-300"></div>
                        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-200 rounded-full shadow-inner"></div>
                   </div>

                   {/* Bottom Part: Info */}
                   <div className="bg-gray-50 p-6 flex justify-between items-center">
                        <div>
                            <p className="text-xs text-gray-500">Ngày tham gia</p>
                            <p className="font-bold text-gray-900">20/10/2023</p>
                        </div>
                        <div className="h-8 w-px bg-gray-200"></div>
                        <div className="text-right">
                             <p className="text-xs text-gray-500">Trạng thái</p>
                             <p className="font-bold text-green-600 flex items-center gap-1 justify-end">
                                <span className="size-2 bg-green-500 rounded-full animate-pulse"></span> Active
                             </p>
                        </div>
                   </div>
               </div>
               
               <p className="text-center text-gray-400 text-xs mt-6 font-medium">
                  Đưa mã này cho nhân viên thu ngân để tích điểm
               </p>
           </div>
        ) : (
           <div className="animate-in slide-in-from-bottom-4 duration-300 pb-8">
              <div className="relative pl-4">
                  {/* Vertical Line */}
                  <div className="absolute left-[27px] top-4 bottom-0 w-0.5 bg-gray-200"></div>

                  {/* Rank 1: Silver (Passed) */}
                  <div className="relative flex gap-4 mb-8 opacity-60 grayscale">
                      <div className="relative z-10 flex flex-col items-center">
                          <div className="size-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                              <div className="size-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                  <i className="iconoir-medal text-gray-500 text-xl"></i>
                              </div>
                          </div>
                      </div>
                      <div className="pt-1 flex-1">
                          <h3 className="text-lg font-bold text-gray-900">Silver Member</h3>
                          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm mt-2">
                              <p className="text-sm text-gray-500 flex items-center gap-2"><i className="iconoir-check text-green-500"></i> Tích điểm 1%</p>
                          </div>
                      </div>
                  </div>

                  {/* Rank 2: Gold (Current) */}
                  <div className="relative flex gap-4 mb-8">
                      <div className="relative z-10 flex flex-col items-center">
                           {/* Static Ring for Current Rank - Removed animate-ping */}
                          <div className="absolute inset-0 bg-yellow-400/10 rounded-2xl"></div>
                          <div className="size-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-md shadow-yellow-500/20 flex items-center justify-center border-2 border-white relative z-10">
                              <i className="iconoir-star-solid text-white text-2xl"></i>
                          </div>
                      </div>
                      <div className="pt-1 flex-1">
                          <div className="flex justify-between items-center mb-1">
                             <h3 className="text-lg font-black text-gray-900">Gold Member</h3>
                             <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-yellow-200">Hiện tại</span>
                          </div>
                          <div className="bg-white rounded-xl border border-gray-100 shadow-md overflow-hidden">
                              <div className="p-3 border-b border-gray-50 flex items-center gap-3">
                                  <div className="size-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                      <i className="iconoir-percentage"></i>
                                  </div>
                                  <div>
                                      <p className="text-sm font-bold text-gray-900">Tích điểm 1.2%</p>
                                      <p className="text-[11px] text-gray-500">Mọi đơn hàng</p>
                                  </div>
                              </div>
                              <div className="p-3 border-b border-gray-50 flex items-center gap-3">
                                  <div className="size-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                                      <i className="iconoir-gift"></i>
                                  </div>
                                  <div>
                                      <p className="text-sm font-bold text-gray-900">Sinh nhật</p>
                                      <p className="text-[11px] text-gray-500">Voucher 200k</p>
                                  </div>
                              </div>
                              <div className="p-3 flex items-center gap-3">
                                  <div className="size-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                      <i className="iconoir-delivery-truck"></i>
                                  </div>
                                  <div>
                                      <p className="text-sm font-bold text-gray-900">Freeship</p>
                                      <p className="text-[11px] text-gray-500">Đơn > 500k nội thành</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Rank 3: Diamond (Locked) */}
                  <div className="relative flex gap-4 opacity-70">
                      <div className="relative z-10 flex flex-col items-center">
                          <div className="size-14 rounded-2xl bg-gray-100 border-2 border-gray-200 border-dashed flex items-center justify-center">
                              <i className="iconoir-lock text-gray-400 text-xl"></i>
                          </div>
                      </div>
                      <div className="pt-1 flex-1">
                          <h3 className="text-lg font-bold text-gray-500">Diamond Member</h3>
                          <div className="bg-white/50 p-3 rounded-xl border border-gray-200 border-dashed mt-2">
                               <div className="flex items-center gap-3 mb-2">
                                  <i className="iconoir-lock text-gray-400 text-sm"></i>
                                  <p className="text-sm font-medium text-gray-500">Tích điểm 1.5%</p>
                               </div>
                               <div className="flex items-center gap-3">
                                  <i className="iconoir-lock text-gray-400 text-sm"></i>
                                  <p className="text-sm font-medium text-gray-500">Đặc quyền Service VIP</p>
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

export default PointsPolicyScreen;