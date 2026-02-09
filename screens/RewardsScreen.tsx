import React from 'react';
import { ScreenName } from '../types';

interface RewardsScreenProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

const RewardsScreen: React.FC<RewardsScreenProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 h-14 flex items-center justify-between">
          <button onClick={onBack} className="size-10 flex items-center justify-center -ml-2 text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
             <i className="iconoir-nav-arrow-left text-xl"></i>
          </button>
          <h1 className="text-base font-bold text-gray-900">Ưu đãi Gearvn</h1>
          <button 
            onClick={() => onNavigate(ScreenName.MY_REWARDS)}
            className="size-10 flex items-center justify-center -mr-2 text-gray-900 hover:bg-gray-50 rounded-full transition-colors"
          >
            <i className="iconoir-clock text-xl"></i>
          </button>
      </header>

      <main className="py-4 space-y-5">
        {/* Points Card */}
        <div className="px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
             <div className="p-5 relative z-10">
                 <div className="flex justify-between items-start">
                     <div>
                         <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Điểm tích lũy</p>
                         <h2 className="text-3xl font-black text-gray-900">1,500 <span className="text-sm font-bold text-gray-400">pts</span></h2>
                     </div>
                     <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-md shadow-yellow-500/20 flex items-center gap-1">
                         <i className="iconoir-star-solid text-xs"></i> Gold
                     </div>
                 </div>
             </div>
             
             {/* Ticket Separator */}
             <div className="relative h-px w-full">
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 size-4 bg-gray-50 rounded-full shadow-inner border-r border-gray-100"></div>
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-4 bg-gray-50 rounded-full shadow-inner border-l border-gray-100"></div>
                 <div className="w-full border-t border-dashed border-gray-200"></div>
             </div>

             <div className="p-4 bg-gray-50/50 flex justify-between items-center">
                 <p className="text-xs text-gray-500 font-medium">600 pts sắp hết hạn vào 31/12</p>
                 <button 
                   onClick={() => onNavigate(ScreenName.POINTS_POLICY)}
                   className="text-primary text-xs font-bold flex items-center gap-1 hover:underline"
                 >
                     Chính sách <i className="iconoir-nav-arrow-right"></i>
                 </button>
             </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4 shadow-lg shadow-primary/20">
            <i className="iconoir-view-grid text-lg"></i>
            <p className="text-xs font-bold">Tất cả</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white border border-gray-200 px-4 text-gray-600 hover:bg-gray-50 transition-colors">
            <div className="size-4 bg-gray-600 rounded flex items-center justify-center text-white">
                <i className="iconoir-tag text-[10px]"></i>
            </div>
            <p className="text-xs font-bold">Voucher</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white border border-gray-200 px-4 text-gray-600 hover:bg-gray-50 transition-colors">
             <i className="iconoir-gamepad text-lg"></i>
            <p className="text-xs font-bold">Gaming Gear</p>
          </button>
        </div>

        {/* Exclusive Rewards */}
        <div className="px-4">
             <div className="flex justify-between items-end mb-3">
                 <h2 className="text-gray-900 text-lg font-bold">Phần thưởng độc quyền</h2>
                 <button 
                   onClick={() => onNavigate(ScreenName.ALL_REWARDS)}
                   className="text-primary text-xs font-bold hover:underline"
                 >
                   Xem tất cả
                 </button>
             </div>
             
             <div className="grid grid-cols-2 gap-3">
                 {/* Card 1 */}
                 <div 
                   onClick={() => onNavigate(ScreenName.REWARD_DETAIL)}
                   className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex flex-col gap-3 group active:scale-95 transition-transform"
                 >
                     <div className="aspect-square rounded-lg bg-gray-900 relative overflow-hidden flex items-center justify-center">
                         <div className="text-center text-white z-10">
                             <p className="text-2xl font-black leading-none">500k</p>
                             <p className="text-[8px] font-bold tracking-widest uppercase opacity-80">Gear Voucher</p>
                         </div>
                         <div className="absolute top-2 right-2 bg-primary text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm">HOT</div>
                     </div>
                     <div className="flex flex-col flex-1">
                         <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight mb-2">Voucher Gearvn Giảm 500k</h3>
                         <div className="mt-auto">
                             <div className="flex items-center gap-1 text-primary mb-3">
                                 <i className="iconoir-star-solid text-sm"></i>
                                 <span className="text-sm font-bold">1,000 pts</span>
                             </div>
                             <button className="w-full py-2 rounded-lg border border-primary text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                                 Redeem
                             </button>
                         </div>
                     </div>
                 </div>

                 {/* Card 2 */}
                 <div 
                   onClick={() => onNavigate(ScreenName.REWARD_DETAIL)}
                   className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex flex-col gap-3 group active:scale-95 transition-transform"
                 >
                     <div className="aspect-square rounded-lg bg-gray-100 relative overflow-hidden p-2">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc6rKjJV94Z1kEYvyWr89qdHmJy49TALaJySpbqGswpa-z4K9NUdxyjdHD2rH70GkcBFmt-6tT05ziQr9ySayAPjjXZf0zplER6t6FBUZW77UAew6aXuBRnov1aZpDB9fBvZgtdPV6NmGGlDIGEu4NmxMK_lqWCUIZ_pYN0vF5aGT_DG7f8higX7slcVqHf_e64FOnynh29OOFdH46RsmBlB6jK3Pl2zgEQrX7txAgO8nSdfhoC60vFczsSxrOfy9md7p_rn1-RgE" className="w-full h-full object-contain mix-blend-multiply" />
                     </div>
                     <div className="flex flex-col flex-1">
                         <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight mb-2">Chuột Asus ROG Keris</h3>
                         <div className="mt-auto">
                             <div className="flex items-center gap-1 text-primary mb-3">
                                 <i className="iconoir-star-solid text-sm"></i>
                                 <span className="text-sm font-bold">5,000 pts</span>
                             </div>
                             <button className="w-full py-2 rounded-lg border border-primary text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                                 Redeem
                             </button>
                         </div>
                     </div>
                 </div>
                 
                  {/* Card 3 */}
                 <div 
                   onClick={() => onNavigate(ScreenName.REWARD_DETAIL)}
                   className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex flex-col gap-3 group active:scale-95 transition-transform"
                 >
                     <div className="aspect-square rounded-lg bg-cyan-50 relative overflow-hidden p-2">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDoZRrsq9N8R5mjVohetAH2Mwl6zUizXDfIKjAGiPUgFJH01fXenvcW51ngPMDIOyg8eqpNqkYEtMw5mtbo8o-lroFtxamsSPfiP8KBYN3u5xSqduimdonRLNPgrpT0rWNSwevtSprA8z2amlYlJQVQe9oKdJbxDaSHrjYY9QAt0iwBp85n1GJqxb0Z-8zVJG3B1ckrzML3TYWCsx_Jt5eQ9YWp5kpcBIrQTaI2J24mFoAmG9XasP-eiEfmX32uxjuz1v0XVpnbWY" className="w-full h-full object-contain mix-blend-multiply" />
                     </div>
                     <div className="flex flex-col flex-1">
                         <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight mb-2">Bàn phím Akko 3068v2</h3>
                         <div className="mt-auto">
                             <div className="flex items-center gap-1 text-primary mb-3">
                                 <i className="iconoir-star-solid text-sm"></i>
                                 <span className="text-sm font-bold">3,500 pts</span>
                             </div>
                             <button className="w-full py-2 rounded-lg border border-primary text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                                 Redeem
                             </button>
                         </div>
                     </div>
                 </div>

                 {/* Card 4 */}
                 <div 
                   onClick={() => onNavigate(ScreenName.REWARD_DETAIL)}
                   className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex flex-col gap-3 group active:scale-95 transition-transform"
                 >
                     <div className="aspect-square rounded-lg bg-[#EAE8E4] relative overflow-hidden flex items-center justify-center">
                         <div className="border border-dashed border-gray-400 p-2 rounded w-3/4 text-center">
                            <p className="text-xl font-mono text-gray-700">TEN %</p>
                            <p className="text-[6px] uppercase tracking-widest text-gray-500">Discount</p>
                         </div>
                     </div>
                     <div className="flex flex-col flex-1">
                         <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight mb-2">Voucher Giảm 10% Linh kiện</h3>
                         <div className="mt-auto">
                             <div className="flex items-center gap-1 text-primary mb-3">
                                 <i className="iconoir-star-solid text-sm"></i>
                                 <span className="text-sm font-bold">500 pts</span>
                             </div>
                             <button className="w-full py-2 rounded-lg border border-primary text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                                 Redeem
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
      </main>
    </div>
  );
};

export default RewardsScreen;