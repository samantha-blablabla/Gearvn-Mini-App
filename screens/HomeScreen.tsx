import React from 'react';
import { ScreenName } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ScreenName) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const hotDeals = [
    {
      id: 1,
      name: "Bàn phím cơ Akko 3087 v2 Silent",
      price: "1.290.000đ",
      oldPrice: "1.890.000đ",
      discount: "-30%",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSd1nd69GK6is3nD0gxRlGVS3J3a0UN3q1ktLyqehaAgdHAzRxbAKkZUSuYjEnfRKyIrTIDhqdplJAbfXNoEbENObjnu6J6l4aKRP3UkrTNaZyv3Lh6RLfofRg6E7SETigwoqohdj39x2D_KUvaEMAdcIGHE-PzatUm8ZQ3AHAxdGKPpWylXhF7-a-3Ui4qVmexnSHc4zTlg3gTU6IYIEHW2nVsRXxvty3f3FevAiTFAL5AhX4_JTzb5KmVICabzm_jLPIgYldIGs"
    },
    {
      id: 2,
      name: "Chuột Logitech G Pro X Superlight",
      price: "2.890.000đ",
      oldPrice: "3.400.000đ",
      discount: "-15%",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUzMS_n24Fwp6czPZ9FSyMGQgoqr15j7_iRzMtZPfXvKjv2V1Bh1QPXiZ5swUclHLvKVKzw6_2s7jbXrU8O8a8qSh-54o3duNiHWVwrtx5yQkH00HnThBpNjQi44tp3FH1WIb7JQHJ4BlrXkerbPl3YW333krSO6-sGDYNWAxDM34tvTydRmjWFG4cE8fbjZJ7-pt7x6gmvkU8eeFMRLi48ZSxAhnbxrMORGoiLeQD9mO2phJsReQXW3ouefdTmKKs4CcFH73-8yI"
    },
    {
      id: 3,
      name: "Tai nghe Kingston HyperX Cloud III",
      price: "1.550.000đ",
      oldPrice: "2.600.000đ",
      discount: "-40%",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo-C2djq42-Z6x61oTMA9jF8wCtl0fUxI1il_o3yjxE24lFoAvdBIHLkvSrfxagrt_oqXEo-q4G3NM8RAmwHWvvodhtVqp-bqLwex9p42Oyis2Jkfd4oBkOdiQj1uM_5zS58jMgGgK6oxyR1Ay1kp070sFlPSTvWZKr3aD7Mh2gIha2tcUM9cDWuf56PxVbSt_7vTj8DEO3oGApZYrPf57ve3yNGUwmDZdceJhI0Vj25mm5SPem41E6_JEZbBhN21F2pMrbm08HvY"
    },
    {
      id: 4,
      name: "Laptop MSI Gaming GF63 Thin",
      price: "15.490.000đ",
      oldPrice: "17.990.000đ",
      discount: "-14%",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU9t34xmbElpa01q8W52cIXEkseS7SH66iIJ3pQFlHNsyq3U98AjLjiRPSEUW2v8d5MXZo2lm_u0BvScXUVTrinjJ2_8fjpO_vrdPzVpsasNBTT3tpOjrIrxpVeFLLbaMCUEfYzOAiB_4nKAaJ9y71rwA16gFD-uPwMfFCL4Agco7LsQDLjSJuT3qmwTnEpMzhg3KD1wqBa5Kn9WQ1welJlk5pLNEbDvpoDdCMyvWYObGtlKLTJBYAEl6m853wUCbvFRNjAcndUHs"
    }
  ];

  return (
    <div className="pb-24 bg-background-light min-h-screen">
      {/* Red Header Section */}
      <div className="bg-primary pt-[calc(env(safe-area-inset-top)+16px)] px-5 pb-24 rounded-b-[32px] relative overflow-hidden shadow-lg shadow-primary/20">
         {/* Decorative background elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl -ml-12 -mb-12 pointer-events-none"></div>

         <div className="flex justify-between items-center relative z-10">
            <div>
               <h1 className="text-white font-black text-2xl tracking-tight">GEARVN MEMBER</h1>
               <p className="text-white/80 text-xs font-medium mt-1">Xin chào, Nguyễn Minh Hoàng</p>
            </div>
            <div className="flex gap-3">
               <button className="bg-white/20 backdrop-blur-md size-10 flex items-center justify-center rounded-full text-white hover:bg-white/30 transition-colors">
                  <i className="iconoir-bell text-xl"></i>
                  <span className="absolute top-2 right-2 size-2.5 bg-yellow-400 rounded-full border-2 border-primary"></span>
               </button>
            </div>
         </div>
      </div>

      {/* Membership Card - Floating */}
      <div className="px-4 -mt-16 relative z-20">
          <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl shadow-gray-900/10 text-white p-5 border border-white/10 relative overflow-hidden group">
             {/* Card Gloss */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
             
             {/* Top Row: Name & Rank */}
             <div className="flex justify-between items-start mb-6">
                <div>
                   <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Tên thành viên</p>
                   <h2 className="font-bold text-lg leading-tight">Nguyễn Minh Hoàng</h2>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1 rounded-full shadow-lg shadow-yellow-500/20 flex items-center gap-1.5 border border-white/20">
                   <i className="iconoir-star-solid text-white text-xs"></i>
                   <span className="text-[10px] font-black text-white uppercase tracking-wide">Gold</span>
                </div>
             </div>

             {/* Points */}
             <div className="mb-6">
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">1,250</span>
                   <span className="text-sm font-medium text-gray-400">điểm</span>
                </div>
             </div>

             {/* Progress Bar */}
             <div className="mb-6 relative">
                <div className="flex justify-between items-end mb-2">
                   <span className="text-[11px] font-medium text-gray-300">Tiến độ lên <span className="text-blue-300 font-bold">Diamond</span></span>
                   <span className="text-[10px] font-bold text-gray-500">45%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                   <div className="h-full bg-gradient-to-r from-primary to-orange-500 w-[45%] rounded-full shadow-[0_0_10px_rgba(236,19,19,0.5)]"></div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1.5 flex items-center gap-1">
                   Cần thêm <span className="text-white font-bold">1,500</span> điểm để thăng hạng
                </p>
             </div>

             {/* Bottom Row: ID & QR */}
             <div className="flex justify-between items-end pt-4 border-t border-white/10">
                <div className="flex flex-col gap-1">
                   <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Mã thành viên</p>
                   <p className="text-sm font-mono text-gray-200 tracking-wider">070XFJBR6LTDK</p>
                </div>
                <button 
                  onClick={() => onNavigate(ScreenName.POINTS_POLICY)}
                  className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-colors backdrop-blur-md active:scale-95 border border-white/5"
                >
                   Xem QR <i className="iconoir-qr-code text-base"></i>
                </button>
             </div>
          </div>
      </div>

      <main className="max-w-md mx-auto pt-4">
        {/* Quick Actions */}
        <div className="px-4 py-2 grid grid-cols-2 gap-3">
          <div 
            onClick={() => onNavigate(ScreenName.CREATE_WARRANTY)}
            className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col gap-3 shadow-sm active:scale-95 transition-all cursor-pointer hover:shadow-md"
          >
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <i className="iconoir-wrench text-primary text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-sm">Gửi Bảo Hành</h3>
              <p className="text-[11px] text-gray-500 mt-0.5">Hỗ trợ nhanh 24/7</p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate(ScreenName.HISTORY)}
            className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col gap-3 shadow-sm active:scale-95 transition-all cursor-pointer hover:shadow-md"
          >
            <div className="size-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <i className="iconoir-box text-blue-500 text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-sm">Tra Cứu Đơn</h3>
              <p className="text-[11px] text-gray-500 mt-0.5">Theo dõi vận chuyển</p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate(ScreenName.REWARDS)}
            className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col gap-3 shadow-sm active:scale-95 transition-all cursor-pointer hover:shadow-md"
          >
            <div className="size-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <i className="iconoir-medal text-orange-500 text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-sm">Tích Điểm</h3>
              <p className="text-[11px] text-gray-500 mt-0.5">Quản lý voucher</p>
            </div>
          </div>

          <div 
             onClick={() => onNavigate(ScreenName.SUPPORT)}
             className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col gap-3 shadow-sm active:scale-95 transition-all cursor-pointer hover:shadow-md"
          >
            <div className="size-10 rounded-lg bg-green-500/10 flex items-center justify-center">
              <i className="iconoir-shop text-green-500 text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-sm">Cửa Hàng</h3>
              <p className="text-[11px] text-gray-500 mt-0.5">Tìm chi nhánh gần nhất</p>
            </div>
          </div>
        </div>

        {/* Hot Deals */}
        <div className="py-4">
          <div className="px-4 flex justify-between items-center mb-4">
            <h2 className="text-xl font-extrabold flex items-center gap-2 text-gray-900">
              Hot Deals 
              <i className="iconoir-fire text-primary animate-pulse text-xl"></i>
            </h2>
            <button 
              onClick={() => onNavigate(ScreenName.HOT_DEALS)}
              className="text-primary text-sm font-bold flex items-center hover:underline gap-1"
            >
              Xem tất cả
              <i className="iconoir-nav-arrow-right text-sm"></i>
            </button>
          </div>
          
          <div className="flex overflow-x-auto gap-4 px-4 pb-4 hide-scrollbar snap-x snap-mandatory flex-nowrap">
            {hotDeals.map((deal) => (
              <div key={deal.id} className="min-w-[160px] w-[160px] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex-shrink-0 snap-start">
                <div className="relative h-40 w-full bg-[#F3F4F6] flex items-center justify-center p-4">
                  <img src={deal.image} alt={deal.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                  <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-black px-1.5 py-0.5 rounded shadow-sm">{deal.discount}</div>
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-bold line-clamp-2 min-h-[32px] text-gray-800">{deal.name}</h4>
                  <div className="mt-2">
                    <p className="text-primary font-bold text-sm">{deal.price}</p>
                    <p className="text-[10px] text-gray-400 line-through font-medium">{deal.oldPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Promo */}
        <div className="px-4 py-2 mb-8">
          <div className="w-full h-32 rounded-xl bg-gradient-to-r from-primary to-orange-500 overflow-hidden flex items-center justify-between p-6 relative shadow-lg shadow-orange-500/20">
            <div className="relative z-10 text-white">
              <h3 className="text-lg font-black leading-tight">THÁNG VÀNG<br/>BẢO TRÌ PC</h3>
              <p className="text-[10px] font-medium opacity-90 mt-1 uppercase tracking-widest bg-white/20 inline-block px-2 py-0.5 rounded">Ưu đãi giảm 50% vệ sinh PC</p>
            </div>
            <div className="relative z-10">
              <i className="iconoir-settings text-white text-6xl opacity-40 rotate-12"></i>
            </div>
            <div className="absolute -right-4 -bottom-4 size-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute top-0 left-10 size-16 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;