import React from 'react';
import { ScreenName } from '../types';

interface AllRewardsScreenProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

const AllRewardsScreen: React.FC<AllRewardsScreenProps> = ({ onBack, onNavigate }) => {
  const rewards = [
    { id: 1, title: 'Voucher Gearvn Giảm 500k', points: '1,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByAz0__BShKOu2rzRggtsrNWb08DZnzgbSs9KTJV2_tV5J3omBUtJC-ntKYmFVOtLi_dj7HhwZUOwYajp4D3TPE8ogOnjQ69QXIo14rBz6lshTSE5RgzX5EDKd4LYkx98kR3b3QUnh3-MZwBbSAFZxxzVaB2UV6g4GJ-H5CGlUqsfQgQgMJjh6qek08UR6idEsIKqL95_XD3IHTEGKqPhrbdktuB1GwNgfqmSdtCiqhOtTUPc4GTGY_0PASa7evstFY1GE6_rJfZs' },
    { id: 2, title: 'Chuột Asus ROG Keris', points: '5,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc6rKjJV94Z1kEYvyWr89qdHmJy49TALaJySpbqGswpa-z4K9NUdxyjdHD2rH70GkcBFmt-6tT05ziQr9ySayAPjjXZf0zplER6t6FBUZW77UAew6aXuBRnov1aZpDB9fBvZgtdPV6NmGGlDIGEu4NmxMK_lqWCUIZ_pYN0vF5aGT_DG7f8higX7slcVqHf_e64FOnynh29OOFdH46RsmBlB6jK3Pl2zgEQrX7txAgO8nSdfhoC60vFczsSxrOfy9md7p_rn1-RgE' },
    { id: 3, title: 'Bàn phím Akko 3068v2', points: '3,500', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDoZRrsq9N8R5mjVohetAH2Mwl6zUizXDfIKjAGiPUgFJH01fXenvcW51ngPMDIOyg8eqpNqkYEtMw5mtbo8o-lroFtxamsSPfiP8KBYN3u5xSqduimdonRLNPgrpT0rWNSwevtSprA8z2amlYlJQVQe9oKdJbxDaSHrjYY9QAt0iwBp85n1GJqxb0Z-8zVJG3B1ckrzML3TYWCsx_Jt5eQ9YWp5kpcBIrQTaI2J24mFoAmG9XasP-eiEfmX32uxjuz1v0XVpnbWY' },
    { id: 4, title: 'Voucher Giảm 10% Linh kiện', points: '500', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAJ-JtpYigBJmdqwql3Wbm8Y0JLXtp93JiVSWJkd8MrJ1PF_OQkjfCNTpLQmp3jt-wI2kxtSGqYmHwUAaYoJpcSiHM8480ml4usrpAsNEpbQx4Xmo62DxMLpyzKZmmPIxNswnLpn46pO1M_xOPoBD7kBaNl1xLpV5s8FZa7FAu0-moaySB7MXsQSPGfSqMbwabiaPKwwcmYzxPFVGyzvt5NGPABxI5Ul7wjbmvvzC7XWn4b_bFsmu8Q03w3-O2MKrKiwXFcjNNNX0' },
    { id: 5, title: 'Nón kết Gearvn Limited', points: '800', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhbqn8oEvmnOKeK03rnvsGiy5zDNuKeH7h8xdx21TDPRCcNogKnMH91l1i1V9Fwamut-yi8lxShUUHpzAw5PX3YqaxVPljgnknmrpxFpuaK8s20JBNd4tFLVcB5vP_NXZBG9mtTUee_jHJPFh6RdobW2cjAYF2sFBFoBexOK6HDyti3VrqWuRUHxqcltLLNspakmvS4ykRfE1QlMrN-X9gyb5G3017ppzFHSl3w_0w1X9jSBjamgxel-6e-1aoRvaMQ1tSMWxiK5E' },
    { id: 6, title: 'Voucher Giảm 50k', points: '100', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo-C2djq42-Z6x61oTMA9jF8wCtl0fUxI1il_o3yjxE24lFoAvdBIHLkvSrfxagrt_oqXEo-q4G3NM8RAmwHWvvodhtVqp-bqLwex9p42Oyis2Jkfd4oBkOdiQj1uM_5zS58jMgGgK6oxyR1Ay1kp070sFlPSTvWZKr3aD7Mh2gIha2tcUM9cDWuf56PxVbSt_7vTj8DEO3oGApZYrPf57ve3yNGUwmDZdceJhI0Vj25mm5SPem41E6_JEZbBhN21F2pMrbm08HvY' },
  ];

  return (
    <div className="min-h-screen bg-background-light pb-24">
       <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2">
             <i className="ph-bold ph-caret-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">Tất cả phần thưởng</h1>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -mr-2">
             <i className="ph-bold ph-magnifying-glass text-gray-900 text-xl"></i>
          </button>
        </div>
      </header>
      
      <main className="p-4 grid grid-cols-2 gap-4">
         {rewards.map((item) => (
             <div 
             key={item.id}
             onClick={() => onNavigate(ScreenName.REWARD_DETAIL)}
             className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow h-full"
          >
            <div className="relative">
              <div 
                className="aspect-video bg-center bg-cover bg-gray-100" 
                style={{backgroundImage: `url("${item.image}")`}}
              ></div>
            </div>
            <div className="p-3 flex flex-col flex-1">
              <h3 className="text-gray-900 text-sm font-bold leading-snug line-clamp-2 h-[40px] mb-1">{item.title}</h3>
              <div className="mt-auto">
                 <div className="flex items-center gap-1 mb-3">
                   <i className="ph-fill ph-star text-primary text-[16px]"></i>
                   <p className="text-primary text-sm font-bold">{item.points} pts</p>
                 </div>
                 <button className="w-full py-2 bg-white border border-primary text-primary rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                     Redeem
                 </button>
              </div>
            </div>
          </div>
         ))}
      </main>
    </div>
  );
};

export default AllRewardsScreen;