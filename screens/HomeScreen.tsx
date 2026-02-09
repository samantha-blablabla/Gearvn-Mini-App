import React from 'react';
import { ScreenName } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ScreenName) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  // Mock data for active warranty - In real app, check if user has active claim
  const activeWarranty = {
    hasActive: true,
    productName: "Laptop ASUS ROG Strix G15",
    status: "Đang sửa chữa",
    lastUpdate: "2h trước",
    progress: 60,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU9t34xmbElpa01q8W52cIXEkseS7SH66iIJ3pQFlHNsyq3U98AjLjiRPSEUW2v8d5MXZo2lm_u0BvScXUVTrinjJ2_8fjpO_vrdPzVpsasNBTT3tpOjrIrxpVeFLLbaMCUEfYzOAiB_4nKAaJ9y71rwA16gFD-uPwMfFCL4Agco7LsQDLjSJuT3qmwTnEpMzhg3KD1wqBa5Kn9WQ1welJlk5pLNEbDvpoDdCMyvWYObGtlKLTJBYAEl6m853wUCbvFRNjAcndUHs"
  };

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
    <div className="pb-28 bg-background-light min-h-screen">
      {/* Red Header Section - Safe Area handled */}
      <div className="bg-primary pt-[calc(env(safe-area-inset-top)+12px)] px-5 pb-24 rounded-b-[40px] relative overflow-hidden shadow-glow z-10">
         {/* Decorative background elements */}
         <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

         <div className="flex justify-between items-center relative z-10">
            <div>
               <h1 className="text-white font-black text-[26px] tracking-tight leading-none">GEARVN MEMBER</h1>
               <p className="text-white/80 text-[13px] font-medium mt-1.5">Xin chào, Nguyễn Minh Hoàng</p>
            </div>
            <div className="flex gap-3">
               <button className="bg-white/10 backdrop-blur-md size-11 flex items-center justify-center rounded-full text-white hover:bg-white/20 transition-all active:scale-95 relative border border-white/5">
                  <i className="ph-bold ph-bell text-2xl"></i>
                  <span className="absolute top-2.5 right-3 size-2.5 bg-yellow-400 rounded-full border-2 border-primary"></span>
               </button>
            </div>
         </div>
      </div>

      {/* Membership Card - Floating - Radius 24px */}
      <div className="px-5 -mt-16 relative z-20">
          <div className="w-full bg-gradient-to-br from-[#2C2C2E] to-[#1C1C1E] rounded-[24px] shadow-2xl shadow-black/20 text-white p-6 border border-white/10 relative overflow-hidden group">
             {/* Card Gloss */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
             
             {/* Top Row: Name & Rank */}
             <div className="flex justify-between items-start mb-6">
                <div>
                   <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-1.5">Tên thành viên</p>
                   <h2 className="font-bold text-[18px] leading-tight">Nguyễn Minh Hoàng</h2>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1.5 rounded-full shadow-lg shadow-yellow-500/20 flex items-center gap-1.5 border border-white/20">
                   <i className="ph-fill ph-star text-white text-xs"></i>
                   <span className="text-[11px] font-black text-white uppercase tracking-wide">Gold</span>
                </div>
             </div>

             {/* Points */}
             <div className="mb-6">
                <div className="flex items-baseline gap-1.5">
                   <span className="text-[40px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-none">1,250</span>
                   <span className="text-[13px] font-medium text-gray-400">điểm</span>
                </div>
             </div>

             {/* Progress Bar */}
             <div className="mb-6 relative">
                <div className="flex justify-between items-end mb-2.5">
                   <span className="text-[12px] font-medium text-gray-300">Tiến độ lên <span className="text-blue-300 font-bold">Diamond</span></span>
                   <span className="text-[12px] font-bold text-gray-400">45%</span>
                </div>
                <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                   <div className="h-full bg-gradient-to-r from-primary to-orange-500 w-[45%] rounded-full shadow-[0_0_12px_rgba(236,19,19,0.6)]"></div>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 flex items-center gap-1 font-medium">
                   Cần thêm <span className="text-white font-bold">1,500</span> điểm để thăng hạng
                </p>
             </div>

             {/* Bottom Row: ID & QR */}
             <div className="flex justify-between items-end pt-5 border-t border-white/10">
                <div className="flex flex-col gap-1">
                   <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Mã thành viên</p>
                   <p className="text-[13px] font-mono text-gray-200 tracking-wider font-bold">070XFJBR6LTDK</p>
                </div>
                <button 
                  onClick={() => onNavigate(ScreenName.POINTS_POLICY)}
                  className="flex items-center gap-2 text-[11px] font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-[14px] transition-all active:scale-95 border border-white/5"
                >
                   Xem QR <i className="ph-bold ph-qr-code text-lg"></i>
                </button>
             </div>
          </div>
      </div>

      <main className="max-w-md mx-auto pt-6 pb-6">
        
        {/* Warranty Tracking Widget - Card Radius 20px */}
        {activeWarranty.hasActive && (
          <div 
            onClick={() => onNavigate(ScreenName.WARRANTY_DETAIL)}
            className="mx-5 mb-6 bg-white rounded-[20px] p-5 shadow-soft relative overflow-hidden cursor-pointer active:scale-[0.98] transition-all group border border-transparent hover:border-orange-100"
          >
             {/* Background decoration */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

             {/* Header */}
             <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2.5">
                   <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                   </div>
                   <span className="text-[12px] font-bold text-orange-600 uppercase tracking-wide">Bảo hành đang xử lý</span>
                </div>
                <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full">
                   <i className="ph-bold ph-clock"></i> {activeWarranty.lastUpdate}
                </span>
             </div>

             {/* Main Content */}
             <div className="flex gap-4">
                {/* Image */}
                <div className="size-[72px] rounded-[14px] bg-[#F9FAFB] p-2 flex items-center justify-center shrink-0 border border-gray-100">
                   <img src={activeWarranty.image} className="w-full h-full object-contain mix-blend-multiply" alt="Product" />
                </div>
                
                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                   <h3 className="font-bold text-text-primary text-[15px] leading-snug line-clamp-1 mb-2.5">{activeWarranty.productName}</h3>
                   
                   {/* Progress with Status Text */}
                   <div className="space-y-2">
                      <div className="flex justify-between items-end">
                         <span className="text-[11px] font-semibold text-text-secondary">Tiến độ</span>
                         <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wide">{activeWarranty.status}</span>
                      </div>
                      <div className="h-2 w-full bg-orange-50 rounded-full overflow-hidden">
                         <div 
                            className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full relative"
                            style={{ width: `${activeWarranty.progress}%` }}
                         >
                            <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-l from-white/20 to-transparent"></div>
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* Arrow */}
                <div className="flex items-center justify-center pl-1">
                    <div className="size-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                        <i className="ph-bold ph-caret-right text-lg"></i>
                    </div>
                </div>
             </div>
          </div>
        )}

        {/* Quick Actions - Grid 2 - Touch target optimized */}
        <div className="px-5 py-2 grid grid-cols-2 gap-4">
          <div 
            onClick={() => onNavigate(ScreenName.CREATE_WARRANTY)}
            className="bg-white p-4 rounded-[20px] flex flex-col gap-3 shadow-soft active:scale-95 transition-all cursor-pointer border border-transparent hover:border-gray-100"
          >
            <div className="size-11 rounded-[14px] bg-red-50 flex items-center justify-center">
              <i className="ph-bold ph-wrench text-primary text-2xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-[15px] text-text-primary">Gửi Bảo Hành</h3>
              <p className="text-[12px] text-text-secondary mt-0.5 font-medium">Hỗ trợ nhanh 24/7</p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate(ScreenName.ORDER_SEARCH)}
            className="bg-white p-4 rounded-[20px] flex flex-col gap-3 shadow-soft active:scale-95 transition-all cursor-pointer border border-transparent hover:border-gray-100"
          >
            <div className="size-11 rounded-[14px] bg-blue-50 flex items-center justify-center">
              <i className="ph-bold ph-package text-blue-600 text-2xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-[15px] text-text-primary">Tra Cứu Đơn</h3>
              <p className="text-[12px] text-text-secondary mt-0.5 font-medium">Theo dõi vận chuyển</p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate(ScreenName.HOT_DEALS)}
            className="bg-white p-4 rounded-[20px] flex flex-col gap-3 shadow-soft active:scale-95 transition-all cursor-pointer border border-transparent hover:border-gray-100"
          >
            <div className="size-11 rounded-[14px] bg-orange-50 flex items-center justify-center">
              <i className="ph-bold ph-fire text-orange-500 text-2xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-[15px] text-text-primary">Khuyến Mãi</h3>
              <p className="text-[12px] text-text-secondary mt-0.5 font-medium">Săn deal hot</p>
            </div>
          </div>

          <div 
             onClick={() => onNavigate(ScreenName.SUPPORT)}
             className="bg-white p-4 rounded-[20px] flex flex-col gap-3 shadow-soft active:scale-95 transition-all cursor-pointer border border-transparent hover:border-gray-100"
          >
            <div className="size-11 rounded-[14px] bg-green-50 flex items-center justify-center">
              <i className="ph-bold ph-storefront text-green-600 text-2xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-[15px] text-text-primary">Cửa Hàng</h3>
              <p className="text-[12px] text-text-secondary mt-0.5 font-medium">Tìm chi nhánh gần nhất</p>
            </div>
          </div>
        </div>

        {/* Hot Deals - Section Header Typography */}
        <div className="py-6">
          <div className="px-5 flex justify-between items-center mb-5">
            <h2 className="text-[20px] font-extrabold flex items-center gap-2 text-text-primary tracking-tight">
              Hot Deals 
              <i className="ph-bold ph-fire text-primary animate-pulse text-2xl"></i>
            </h2>
            <button 
              onClick={() => onNavigate(ScreenName.HOT_DEALS)}
              className="text-primary text-[13px] font-bold flex items-center hover:underline gap-1 py-1"
            >
              Xem tất cả
              <i className="ph-bold ph-caret-right text-sm"></i>
            </button>
          </div>
          
          <div className="flex overflow-x-auto gap-4 px-5 pb-4 hide-scrollbar snap-x snap-mandatory flex-nowrap">
            {hotDeals.map((deal) => (
              <div key={deal.id} className="min-w-[170px] w-[170px] bg-white rounded-[18px] overflow-hidden border border-transparent shadow-soft flex-shrink-0 snap-start active:scale-[0.98] transition-transform">
                <div className="relative h-44 w-full bg-[#F9FAFB] flex items-center justify-center p-5">
                  <img src={deal.image} alt={deal.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                  <div className="absolute top-2.5 left-2.5 bg-primary text-white text-[11px] font-black px-2 py-0.5 rounded-[6px] shadow-sm">{deal.discount}</div>
                </div>
                <div className="p-3.5">
                  <h4 className="text-[13px] font-bold line-clamp-2 min-h-[36px] text-text-primary leading-snug">{deal.name}</h4>
                  <div className="mt-2.5">
                    <p className="text-primary font-bold text-[15px]">{deal.price}</p>
                    <p className="text-[11px] text-text-secondary line-through font-medium">{deal.oldPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Promo */}
        <div className="px-5 py-2 mb-8">
          <div className="w-full h-36 rounded-[24px] bg-gradient-to-r from-primary to-orange-600 overflow-hidden flex items-center justify-between p-6 relative shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform">
            <div className="relative z-10 text-white">
              <h3 className="text-[20px] font-black leading-tight">THÁNG VÀNG<br/>BẢO TRÌ PC</h3>
              <p className="text-[10px] font-bold opacity-90 mt-2 uppercase tracking-widest bg-white/20 inline-block px-2.5 py-1 rounded-lg backdrop-blur-sm">Ưu đãi giảm 50% vệ sinh PC</p>
            </div>
            <div className="relative z-10">
              <i className="ph-bold ph-gear text-white text-7xl opacity-40 rotate-12"></i>
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