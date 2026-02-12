import React from 'react';
import { ScreenName } from '../types';

interface RewardsScreenProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

const RewardsScreen: React.FC<RewardsScreenProps> = ({ onBack, onNavigate }) => {
  return (
    // Increased pb to account for taller bottom nav
    <div className="min-h-screen bg-background-light pb-40">
      {/* Header - HIG Update: Increased height via py-3 and min-h */}
      <header className="sticky top-0 z-50 bg-white/90 ios-blur border-b border-gray-100 px-4 py-3 min-h-[60px] flex items-center justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900">
             <i className="ph-regular ph-caret-left text-xl"></i>
          </button>
          <h1 className="text-[17px] font-bold text-text-primary">Ưu đãi Gearvn</h1>
          <button 
            onClick={() => onNavigate(ScreenName.MY_REWARDS)}
            className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900"
          >
            <i className="ph-regular ph-clock-counter-clockwise text-xl"></i>
          </button>
      </header>

      <main className="py-6 space-y-6">
        {/* Points Card */}
        <div className="px-5">
          <div className="bg-white rounded-[24px] shadow-soft overflow-hidden relative border border-transparent">
             <div className="p-6 relative z-10">
                 <div className="flex justify-between items-start">
                     <div>
                         <p className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-1">Điểm tích lũy</p>
                         <h2 className="text-[32px] font-black text-text-primary tracking-tight">1,500 <span className="text-[14px] font-bold text-gray-400">pts</span></h2>
                     </div>
                     <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-lg shadow-yellow-500/20 flex items-center gap-1.5">
                         <i className="ph-fill ph-star text-xs"></i> Gold
                     </div>
                 </div>
             </div>
             
             {/* Ticket Separator */}
             <div className="relative h-px w-full">
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 size-5 bg-background-light rounded-full shadow-inner"></div>
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-5 bg-background-light rounded-full shadow-inner"></div>
                 <div className="w-full border-t border-dashed border-gray-200"></div>
             </div>

             <div className="p-5 bg-gray-50/50 flex justify-between items-center">
                 <p className="text-[12px] text-text-secondary font-medium">600 pts sắp hết hạn vào 31/12</p>
                 <button 
                   onClick={() => onNavigate(ScreenName.POINTS_POLICY)}
                   className="text-primary text-[12px] font-bold flex items-center gap-1 hover:underline"
                 >
                     Chính sách <i className="ph-regular ph-caret-right"></i>
                 </button>
             </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 px-5 overflow-x-auto hide-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-[12px] bg-primary text-white px-5 shadow-lg shadow-primary/20 active:scale-95 transition-transform">
            <i className="ph-regular ph-squares-four text-lg"></i>
            <p className="text-[13px] font-bold">Tất cả</p>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-[12px] bg-white border border-gray-200 px-5 text-gray-600 hover:bg-gray-50 transition-colors active:scale-95">
            <div className="size-4 bg-gray-600 rounded flex items-center justify-center text-white">
                <i className="ph-regular ph-tag text-[10px]"></i>
            </div>
            <p className="text-[13px] font-bold">Voucher</p>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-[12px] bg-white border border-gray-200 px-5 text-gray-600 hover:bg-gray-50 transition-colors active:scale-95">
             <i className="ph-regular ph-game-controller text-lg"></i>
            <p className="text-[13px] font-bold">Gaming Gear</p>
          </button>
        </div>

        {/* Exclusive Rewards */}
        <div className="px-5">
             <div className="flex justify-between items-end mb-4">
                 <h2 className="text-text-primary text-[18px] font-bold tracking-tight">Phần thưởng độc quyền</h2>
                 <button 
                   onClick={() => onNavigate(ScreenName.ALL_REWARDS)}
                   className="text-primary text-[13px] font-bold hover:underline"
                 >
                   Xem tất cả
                 </button>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                 {/* Card 1 */}
                 <div 
                   onClick={() => onNavigate(ScreenName.REWARD_DETAIL)}
                   className="bg-white rounded-[20px] p-4 shadow-soft flex flex-col gap-4 group active:scale-[0.97] transition-all border border-transparent hover:border-gray-100"
                 >
                     <div className="aspect-square rounded-[16px] bg-gray-900 relative overflow-hidden flex items-center justify-center shadow-inner">
                         <div className="text-center text-white z-10">
                             <p className="text-[28px] font-black leading-none">500k</p>
                             <p className="text-[10px] font-bold tracking-widest uppercase opacity-80 mt-1">Gear Voucher</p>
                         </div>
                         <div className="absolute top-2.5 right-2.5 bg-primary text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm">HOT</div>
                     </div>
                     <div className="flex flex-col flex-1">
                         <h3 className="text-[14px] font-bold text-text-primary line-clamp-2 leading-snug mb-2">Voucher Gearvn Giảm 500k</h3>
                         <div className="mt-auto">
                             <div className="flex items-center gap-1.5 text-primary mb-3">
                                 <i className="ph-fill ph-star text-sm"></i>
                                 <span className="text-[13px] font-bold">1,000 pts</span>
                             </div>
                             <button className="w-full h-9 rounded-[10px] border border-primary text-primary text-[12px] font-bold hover:bg-primary hover:text-white transition-colors">
                                 Redeem
                             </button>
                         </div>
                     </div>
                 </div>

                 {/* Card 2 */}
                 <div 
                   onClick={() => onNavigate(ScreenName.REWARD_DETAIL)}
                   className="bg-white rounded-[20px] p-4 shadow-soft flex flex-col gap-4 group active:scale-[0.97] transition-all border border-transparent hover:border-gray-100"
                 >
                     <div className="aspect-square rounded-[16px] bg-[#F9FAFB] relative overflow-hidden p-3 border border-gray-50">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc6rKjJV94Z1kEYvyWr89qdHmJy49TALaJySpbqGswpa-z4K9NUdxyjdHD2rH70GkcBFmt-6tT05ziQr9ySayAPjjXZf0zplER6t6FBUZW77UAew6aXuBRnov1aZpDB9fBvZgtdPV6NmGGlDIGEu4NmxMK_lqWCUIZ_pYN0vF5aGT_DG7f8higX7slcVqHf_e64FOnynh29OOFdH46RsmBlB6jK3Pl2zgEQrX7txAgO8nSdfhoC60vFczsSxrOfy9md7p_rn1-RgE" className="w-full h-full object-contain mix-blend-multiply" />
                     </div>
                     <div className="flex flex-col flex-1">
                         <h3 className="text-[14px] font-bold text-text-primary line-clamp-2 leading-snug mb-2">Chuột Asus ROG Keris</h3>
                         <div className="mt-auto">
                             <div className="flex items-center gap-1.5 text-primary mb-3">
                                 <i className="ph-fill ph-star text-sm"></i>
                                 <span className="text-[13px] font-bold">5,000 pts</span>
                             </div>
                             <button className="w-full h-9 rounded-[10px] border border-primary text-primary text-[12px] font-bold hover:bg-primary hover:text-white transition-colors">
                                 Redeem
                             </button>
                         </div>
                     </div>
                 </div>
                 
                  {/* Card 3 */}
                 <div 
                   onClick={() => onNavigate(ScreenName.REWARD_DETAIL)}
                   className="bg-white rounded-[20px] p-4 shadow-soft flex flex-col gap-4 group active:scale-[0.97] transition-all border border-transparent hover:border-gray-100"
                 >
                     <div className="aspect-square rounded-[16px] bg-cyan-50 relative overflow-hidden p-3 border border-cyan-100/50">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDoZRrsq9N8R5mjVohetAH2Mwl6zUizXDfIKjAGiPUgFJH01fXenvcW51ngPMDIOyg8eqpNqkYEtMw5mtbo8o-lroFtxamsSPfiP8KBYN3u5xSqduimdonRLNPgrpT0rWNSwevtSprA8z2amlYlJQVQe9oKdJbxDaSHrjYY9QAt0iwBp85n1GJqxb0Z-8zVJG3B1ckrzML3TYWCsx_Jt5eQ9YWp5kpcBIrQTaI2J24mFoAmG9XasP-eiEfmX32uxjuz1v0XVpnbWY" className="w-full h-full object-contain mix-blend-multiply" />
                     </div>
                     <div className="flex flex-col flex-1">
                         <h3 className="text-[14px] font-bold text-text-primary line-clamp-2 leading-snug mb-2">Bàn phím Akko 3068v2</h3>
                         <div className="mt-auto">
                             <div className="flex items-center gap-1.5 text-primary mb-3">
                                 <i className="ph-fill ph-star text-sm"></i>
                                 <span className="text-[13px] font-bold">3,500 pts</span>
                             </div>
                             <button className="w-full h-9 rounded-[10px] border border-primary text-primary text-[12px] font-bold hover:bg-primary hover:text-white transition-colors">
                                 Redeem
                             </button>
                         </div>
                     </div>
                 </div>

                 {/* Card 4 */}
                 <div 
                   onClick={() => onNavigate(ScreenName.REWARD_DETAIL)}
                   className="bg-white rounded-[20px] p-4 shadow-soft flex flex-col gap-4 group active:scale-[0.97] transition-all border border-transparent hover:border-gray-100"
                 >
                     <div className="aspect-square rounded-[16px] bg-[#EAE8E4] relative overflow-hidden flex items-center justify-center shadow-inner">
                         <div className="border-[1.5px] border-dashed border-gray-400 p-2 rounded-[8px] w-3/4 text-center">
                            <p className="text-xl font-mono font-bold text-gray-700">TEN %</p>
                            <p className="text-[8px] uppercase tracking-widest text-gray-500 mt-1">Discount</p>
                         </div>
                     </div>
                     <div className="flex flex-col flex-1">
                         <h3 className="text-[14px] font-bold text-text-primary line-clamp-2 leading-snug mb-2">Voucher Giảm 10% Linh kiện</h3>
                         <div className="mt-auto">
                             <div className="flex items-center gap-1.5 text-primary mb-3">
                                 <i className="ph-fill ph-star text-sm"></i>
                                 <span className="text-[13px] font-bold">500 pts</span>
                             </div>
                             <button className="w-full h-9 rounded-[10px] border border-primary text-primary text-[12px] font-bold hover:bg-primary hover:text-white transition-colors">
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
