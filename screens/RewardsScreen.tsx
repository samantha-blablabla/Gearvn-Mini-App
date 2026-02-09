import React from 'react';
import { ScreenName } from '../types';

interface RewardsScreenProps {
  onBack: () => void;
}

const RewardsScreen: React.FC<RewardsScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light pb-24">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2">
             <i className="iconoir-nav-arrow-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">Ưu đãi Gearvn</h1>
          <div className="flex items-center justify-end w-10 -mr-2">
            <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors">
              <i className="iconoir-clock text-gray-900 text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Points Card */}
        <div className="p-4">
          <div className="relative overflow-hidden bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
            <div className="flex justify-between items-center relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary">
                  <i className="iconoir-star-solid text-3xl"></i>
                </div>
                <div>
                  <p className="text-primary text-[24px] font-bold leading-none">1,500 pts</p>
                  <p className="text-gray-500 text-sm mt-1 font-medium">Hạng thành viên: Gold Member</p>
                </div>
              </div>
              <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                  Đổi quà
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-dashed border-gray-200 flex justify-between items-center text-xs">
              <span className="text-gray-500">600 pts sắp hết hạn vào 31/12</span>
              <button className="text-primary font-bold flex items-center hover:underline gap-1">
                  Xem chi tiết <i className="iconoir-nav-arrow-right text-[14px]"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 px-4 py-2 overflow-x-auto hide-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-md shadow-primary/20 transition-transform active:scale-95">
            <i className="iconoir-view-grid text-[20px]"></i>
            <p className="text-sm font-bold">Tất cả</p>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-gray-200 px-5 transition-transform active:scale-95 hover:bg-gray-50">
            <i className="iconoir-tag text-[20px] text-gray-600"></i>
            <p className="text-sm font-medium text-gray-700">Voucher</p>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-gray-200 px-5 transition-transform active:scale-95 hover:bg-gray-50">
            <i className="iconoir-gamepad text-[20px] text-gray-600"></i>
            <p className="text-sm font-medium text-gray-700">Gaming Gear</p>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-gray-200 px-5 transition-transform active:scale-95 hover:bg-gray-50">
            <i className="iconoir-cpu text-[20px] text-gray-600"></i>
            <p className="text-sm font-medium text-gray-700">Linh kiện</p>
          </button>
        </div>

        {/* Rewards Grid */}
        <div className="px-4 pt-6 pb-2 flex justify-between items-end">
          <h2 className="text-gray-900 text-xl font-bold">Phần thưởng độc quyền</h2>
          <button className="text-primary text-sm font-bold">Xem tất cả</button>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 pt-0">
          {/* Item 1 */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
            <div className="relative">
              <div 
                className="aspect-video bg-center bg-cover bg-gray-100" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByAz0__BShKOu2rzRggtsrNWb08DZnzgbSs9KTJV2_tV5J3omBUtJC-ntKYmFVOtLi_dj7HhwZUOwYajp4D3TPE8ogOnjQ69QXIo14rBz6lshTSE5RgzX5EDKd4LYkx98kR3b3QUnh3-MZwBbSAFZxxzVaB2UV6g4GJ-H5CGlUqsfQgQgMJjh6qek08UR6idEsIKqL95_XD3IHTEGKqPhrbdktuB1GwNgfqmSdtCiqhOtTUPc4GTGY_0PASa7evstFY1GE6_rJfZs")'}}
              ></div>
              <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase shadow-sm">Hot</div>
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-gray-900 text-sm font-bold leading-snug line-clamp-2">Voucher Gearvn Giảm 500k</h3>
              <div className="mt-2 flex items-center gap-1">
                <i className="iconoir-star-solid text-primary text-[16px]"></i>
                <p className="text-primary text-sm font-bold">1,000 pts</p>
              </div>
              <button className="mt-3 w-full py-2 bg-white border border-primary text-primary rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                  Redeem
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
            <div className="relative">
              <div 
                className="aspect-video bg-center bg-contain bg-no-repeat bg-[#1a1a1a]"
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBc6rKjJV94Z1kEYvyWr89qdHmJy49TALaJySpbqGswpa-z4K9NUdxyjdHD2rH70GkcBFmt-6tT05ziQr9ySayAPjjXZf0zplER6t6FBUZW77UAew6aXuBRnov1aZpDB9fBvZgtdPV6NmGGlDIGEu4NmxMK_lqWCUIZ_pYN0vF5aGT_DG7f8higX7slcVqHf_e64FOnynh29OOFdH46RsmBlB6jK3Pl2zgEQrX7txAgO8nSdfhoC60vFczsSxrOfy9md7p_rn1-RgE")'}}
              ></div>
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-gray-900 text-sm font-bold leading-snug line-clamp-2">Chuột Asus ROG Keris</h3>
              <div className="mt-2 flex items-center gap-1">
                <i className="iconoir-star-solid text-primary text-[16px]"></i>
                <p className="text-primary text-sm font-bold">5,000 pts</p>
              </div>
              <button className="mt-3 w-full py-2 bg-white border border-primary text-primary rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                  Redeem
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
            <div className="relative">
               <div 
                className="aspect-video bg-center bg-contain bg-no-repeat bg-[#e0f1f1]"
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDoZRrsq9N8R5mjVohetAH2Mwl6zUizXDfIKjAGiPUgFJH01fXenvcW51ngPMDIOyg8eqpNqkYEtMw5mtbo8o-lroFtxamsSPfiP8KBYN3u5xSqduimdonRLNPgrpT0rWNSwevtSprA8z2amlYlJQVQe9oKdJbxDaSHrjYY9QAt0iwBp85n1GJqxb0Z-8zVJG3B1ckrzML3TYWCsx_Jt5eQ9YWp5kpcBIrQTaI2J24mFoAmG9XasP-eiEfmX32uxjuz1v0XVpnbWY")'}}
              ></div>
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-gray-900 text-sm font-bold leading-snug line-clamp-2">Bàn phím Akko 3068v2</h3>
              <div className="mt-2 flex items-center gap-1">
                <i className="iconoir-star-solid text-primary text-[16px]"></i>
                <p className="text-primary text-sm font-bold">3,500 pts</p>
              </div>
              <button className="mt-3 w-full py-2 bg-white border border-primary text-primary rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                  Redeem
              </button>
            </div>
          </div>

           {/* Item 4 */}
           <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
            <div className="relative">
               <div 
                className="aspect-video bg-center bg-cover bg-gray-100"
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAJ-JtpYigBJmdqwql3Wbm8Y0JLXtp93JiVSWJkd8MrJ1PF_OQkjfCNTpLQmp3jt-wI2kxtSGqYmHwUAaYoJpcSiHM8480ml4usrpAsNEpbQx4Xmo62DxMLpyzKZmmPIxNswnLpn46pO1M_xOPoBD7kBaNl1xLpV5s8FZa7FAu0-moaySB7MXsQSPGfSqMbwabiaPKwwcmYzxPFVGyzvt5NGPABxI5Ul7wjbmvvzC7XWn4b_bFsmu8Q03w3-O2MKrKiwXFcjNNNX0")'}}
              ></div>
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-gray-900 text-sm font-bold leading-snug line-clamp-2">Voucher Giảm 10% Linh kiện</h3>
              <div className="mt-2 flex items-center gap-1">
                <i className="iconoir-star-solid text-primary text-[16px]"></i>
                <p className="text-primary text-sm font-bold">500 pts</p>
              </div>
              <button className="mt-3 w-full py-2 bg-white border border-primary text-primary rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                  Redeem
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RewardsScreen;