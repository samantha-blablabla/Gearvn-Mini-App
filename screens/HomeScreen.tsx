import React, { useState } from 'react';
import { ScreenName } from '../types';

interface HomeScreenProps {
    onNavigate: (screen: ScreenName) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Mock data for active warranty
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
        }
    ];

    return (
        <div className="relative min-h-screen bg-background-light overflow-hidden pb-40">

            {/* 1. Header */}
            <header
                className="sticky top-0 z-50 px-5 flex justify-between items-center bg-background-light/80 backdrop-blur-xl border-b border-gray-100/50"
                style={{ paddingTop: 'calc(env(safe-area-inset-top) + 8px)', paddingBottom: '10px' }}
            >
                <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-text-secondary tracking-wide">Good Afternoon,</span>
                    <span className="text-[20px] font-bold tracking-tight leading-tight text-text-primary">Minh Hoàng</span>
                </div>
                <div className="flex gap-2.5">
                    <button
                        onClick={() => onNavigate(ScreenName.ORDER_SEARCH)}
                        className="size-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform text-gray-600"
                    >
                        <i className="ph ph-magnifying-glass text-xl"></i>
                    </button>
                    <button className="size-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform text-gray-600">
                        <i className="ph ph-scan text-xl"></i>
                    </button>
                    <button className="size-10 rounded-full bg-gray-100 flex items-center justify-center active:scale-95 transition-transform text-gray-600 relative">
                        <i className="ph ph-bell text-xl"></i>
                        <span className="absolute top-2 right-2 size-2.5 bg-red-500 rounded-full border-2 border-background-light"></span>
                    </button>
                </div>
            </header>

            {/* 2. Video Background + Floating Card */}
            <div className="relative overflow-hidden">
                {/* Video Background Layer */}
                <div className="absolute inset-0 z-0">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        {/* <source src="/asset/promo.mp4" type="video/mp4" /> */}
                    </video>
                    {/* Fallback gradient bg when no video source */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
                    {/* Dark overlay for card readability */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Floating Flip Card */}
                <div className="relative z-10 px-5 pt-5 pb-6">
                    <div className="w-full h-[240px] perspective-1000">
                        <div
                            className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}
                        >
                            {/* FRONT FACE */}
                            <div className="absolute inset-0 w-full h-full backface-hidden rounded-[24px] bg-gradient-to-br from-[#E30019] to-[#8a000f] p-5 text-white overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15 mix-blend-overlay"></div>
                                <div className="absolute -right-6 -bottom-8 text-[120px] font-black opacity-[0.06] leading-none tracking-tighter select-none">GEAR<br />VN</div>

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <img src="https://gearvn.com/wp-content/uploads/2019/06/Logo-Gearvn-White.png" className="h-6 object-contain" alt="Gearvn" />
                                        <button className="bg-white/15 backdrop-blur-md p-2 rounded-[10px] border border-white/10 active:scale-95 transition-transform">
                                            <i className="ph ph-qr-code text-xl"></i>
                                        </button>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <h2 className="text-[28px] font-extrabold leading-none tracking-tight">Gold</h2>
                                                <p className="text-[13px] font-bold opacity-80 mt-0.5">Member</p>
                                                <div className="flex items-center gap-2 text-yellow-300 mt-1.5">
                                                    <i className="ph-fill ph-lightning text-lg"></i>
                                                    <span className="text-[16px] font-bold font-mono">1,250 <span className="text-[10px] opacity-70">PTS</span></span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[11px] font-medium opacity-60 mb-1">Your Stamps</p>
                                                <button
                                                    onClick={() => setIsFlipped(true)}
                                                    className="bg-white/15 backdrop-blur-md p-2 rounded-[10px] border border-white/10 active:scale-95 transition-transform"
                                                >
                                                    <i className="ph ph-arrows-clockwise text-xl"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-3 h-1 w-full bg-black/20 rounded-full overflow-hidden">
                                            <div className="h-full w-[62%] bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.6)]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BACK FACE */}
                            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-[24px] bg-gradient-to-br from-gray-200 to-gray-300 p-1 overflow-hidden shadow-2xl shadow-black/40">
                                <div className="w-full h-full bg-[#f0f1f3] rounded-[20px] relative overflow-hidden p-5 flex flex-col">
                                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
                                        backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                                        backgroundSize: '12px 12px'
                                    }}></div>

                                    <div className="relative z-10 flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-gray-800 text-[14px] uppercase tracking-wider flex items-center gap-1.5">
                                            <i className="ph ph-cpu text-primary"></i> Quyền lợi
                                        </h3>
                                        <button
                                            onClick={() => setIsFlipped(false)}
                                            className="bg-gray-200 p-1.5 rounded-[8px] active:scale-95 transition-transform"
                                        >
                                            <i className="ph ph-arrows-clockwise text-lg text-gray-600"></i>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-4 gap-2 flex-1">
                                        <div className="bg-white rounded-[14px] p-2 flex flex-col items-center justify-center shadow-sm relative">
                                            <div className="absolute top-1.5 right-1.5 size-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                            <i className="ph-fill ph-truck text-xl text-gray-800 mb-1"></i>
                                            <span className="text-[9px] font-bold text-gray-600">FreeShip</span>
                                        </div>
                                        <div className="bg-white rounded-[14px] p-2 flex flex-col items-center justify-center shadow-sm relative">
                                            <div className="absolute top-1.5 right-1.5 size-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                            <i className="ph-fill ph-percent text-xl text-gray-800 mb-1"></i>
                                            <span className="text-[9px] font-bold text-gray-600">-5% Gear</span>
                                        </div>
                                        <div className="bg-white rounded-[14px] p-2 flex flex-col items-center justify-center shadow-sm relative">
                                            <div className="absolute top-1.5 right-1.5 size-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                            <i className="ph-fill ph-wrench text-xl text-gray-800 mb-1"></i>
                                            <span className="text-[9px] font-bold text-gray-600">Vệ sinh</span>
                                        </div>
                                        <div className="bg-gray-100 rounded-[14px] p-2 flex flex-col items-center justify-center opacity-50 grayscale">
                                            <i className="ph-fill ph-cake text-xl text-gray-500 mb-1"></i>
                                            <span className="text-[9px] font-bold text-gray-500">Sinh nhật</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Content Sections */}
            <div className="px-5 pt-5">
                <div className="mb-5">
                    <h2 className="text-[18px] font-semibold text-text-primary">Dịch vụ nổi bật</h2>
                </div>

                {/* Quick Services Grid */}
                <div className="grid grid-cols-4 gap-3 mb-8">
                    <button onClick={() => onNavigate(ScreenName.HOT_DEALS)} className="flex flex-col items-center gap-2 group">
                        <div className="size-14 rounded-[20px] bg-white shadow-soft flex items-center justify-center text-orange-500 group-active:scale-95 transition-transform border border-transparent group-hover:border-orange-100">
                            <i className="ph-fill ph-fire text-2xl"></i>
                        </div>
                        <span className="text-[11px] font-bold text-text-secondary text-center">Hot Deals</span>
                    </button>
                    <button onClick={() => onNavigate(ScreenName.HISTORY)} className="flex flex-col items-center gap-2 group">
                        <div className="size-14 rounded-[20px] bg-white shadow-soft flex items-center justify-center text-blue-500 group-active:scale-95 transition-transform border border-transparent group-hover:border-blue-100">
                            <i className="ph-fill ph-package text-2xl"></i>
                        </div>
                        <span className="text-[11px] font-bold text-text-secondary text-center">Đơn hàng</span>
                    </button>
                    <button onClick={() => onNavigate(ScreenName.SUPPORT)} className="flex flex-col items-center gap-2 group">
                        <div className="size-14 rounded-[20px] bg-white shadow-soft flex items-center justify-center text-green-500 group-active:scale-95 transition-transform border border-transparent group-hover:border-green-100">
                            <i className="ph-fill ph-chat-circle text-2xl"></i>
                        </div>
                        <span className="text-[11px] font-bold text-text-secondary text-center">Hỗ trợ</span>
                    </button>
                    <button onClick={() => onNavigate(ScreenName.WARRANTY)} className="flex flex-col items-center gap-2 group">
                        <div className="size-14 rounded-[20px] bg-white shadow-soft flex items-center justify-center text-red-500 group-active:scale-95 transition-transform border border-transparent group-hover:border-red-100">
                            <i className="ph-fill ph-shield-check text-2xl"></i>
                        </div>
                        <span className="text-[11px] font-bold text-text-secondary text-center">Bảo hành</span>
                    </button>
                </div>

                {/* Warranty Status Widget */}
                {activeWarranty.hasActive && (
                    <div onClick={() => onNavigate(ScreenName.WARRANTY_DETAIL)} className="mb-8 bg-white p-4 rounded-[20px] shadow-soft border border-orange-100/50 flex items-center gap-4 active:scale-[0.98] transition-transform">
                        <div className="size-12 rounded-[12px] bg-orange-50 flex items-center justify-center text-orange-500 relative shrink-0">
                            <div className="absolute top-0 right-0 size-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
                            <i className="ph ph-wrench text-xl"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold text-orange-600 uppercase tracking-wide mb-0.5">Đang xử lý</p>
                            <p className="text-[14px] font-semibold text-text-primary line-clamp-1">{activeWarranty.productName}</p>
                            <p className="text-[12px] text-text-secondary mt-0.5">Cập nhật: {activeWarranty.lastUpdate}</p>
                        </div>
                        <i className="ph ph-caret-right text-gray-300"></i>
                    </div>
                )}

                {/* Trending Section */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-[18px] font-semibold text-text-primary flex items-center gap-2">
                            Xu hướng
                            <span className="bg-red-100 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-[4px]">HOT</span>
                        </h2>
                        <button
                            onClick={() => onNavigate(ScreenName.HOT_DEALS)}
                            className="text-[13px] font-medium text-primary flex items-center gap-1 active:opacity-70 group"
                        >
                            <span className="group-hover:underline">Xem thêm</span>
                            <i className="ph ph-caret-right text-xs"></i>
                        </button>
                    </div>
                    <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory">
                        {hotDeals.map((deal) => (
                            <div key={deal.id} className="min-w-[160px] bg-white rounded-[18px] p-3 shadow-soft snap-start border border-gray-100">
                                <div className="h-32 bg-[#F9FAFB] rounded-[14px] mb-3 flex items-center justify-center p-2 relative">
                                    <img src={deal.image} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                                    <div className="absolute top-2 left-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px]">{deal.discount}</div>
                                </div>
                                <h4 className="text-[13px] font-bold text-text-primary line-clamp-2 h-[36px] leading-snug">{deal.name}</h4>
                                <div className="mt-2">
                                    <p className="text-primary font-bold text-[15px]">{deal.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Banner Promo */}
                <div className="w-full h-32 rounded-[24px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden flex items-center justify-between p-6 relative shadow-lg shadow-gray-500/10 active:scale-[0.98] transition-transform">
                    <div className="relative z-10 text-white">
                        <h3 className="text-[18px] font-black leading-tight">BUILD PC<br />NHẬN QUÀ</h3>
                        <p className="text-[10px] font-bold opacity-70 mt-2 uppercase tracking-widest border border-white/20 inline-block px-2.5 py-1 rounded-lg">Xem chi tiết</p>
                    </div>
                    <div className="relative z-10">
                        <i className="ph-fill ph-desktop-tower text-white text-6xl opacity-20 rotate-12"></i>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeScreen;
