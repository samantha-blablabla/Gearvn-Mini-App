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
        <div className="relative min-h-screen bg-black overflow-hidden">

            {/* 1. Immersive Background Layer (Tech-Verse) */}
            <div className="absolute top-0 left-0 w-full h-[70vh] z-0 overflow-hidden pointer-events-none">
                {/* Abstract Tech Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCiUj36XN7t7Hn76W0s55_yF0l7q7dC7z7wWw7pL9q8yD4v0x1jG4h3nF7kQ9w8e5rT6yU2iO4pL1aS3dF8gH5jK0lZ2xX4cV9bN7mQ1wE6rT5yU8iO3pL0aS2dF7gH5jK0lZ2xX4cV9bN7mQ1wE6rT5yU8iO3pL0aS2dF7gH4jK9lZ1xX3cV8bN6mQ0wE5r')`, // Placeholder for tech abstract
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
                {/* Red Overlay Gradient for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-primary/10 to-black"></div>
                {/* Animated Particles/Fog Effect (CSS Simulation) */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60 animate-pulse"></div>
            </div>

            {/* 2. Transparent Header - HIG Update: Increased top padding */}
            <div
                className="absolute top-0 left-0 right-0 z-20 px-5 flex justify-between items-center text-white"
                style={{ paddingTop: 'calc(env(safe-area-inset-top) + 4px)' }}
            >
                <div className="flex flex-col mt-2"> {/* Reduced margin-top */}
                    <span className="text-[13px] font-medium opacity-80 tracking-wide">Good Afternoon,</span>
                    <span className="text-[20px] font-bold tracking-tight leading-none">Minh Hoàng</span>
                </div>
                <div className="flex gap-3">
                    <button className="size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 active:scale-95 transition-transform">
                        <i className="ph ph-scan text-xl"></i>
                    </button>
                    <button className="size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 active:scale-95 transition-transform relative">
                        <i className="ph ph-bell text-xl"></i>
                        <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border border-black/50"></span>
                    </button>
                </div>
            </div>

            {/* 3. The "G-Core" 3D Flip Card Container */}
            <div className="relative z-10 w-full h-[400px] flex flex-col items-center justify-center perspective-1000 mt-14">

                {/* Card Element */}
                <div
                    className={`w-[340px] h-[200px] relative transform-style-3d transition-transform duration-700 ease-in-out shadow-[0_20px_50px_-12px_rgba(227,0,25,0.3)] ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                    {/* FRONT FACE: Identity */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-[24px] bg-gradient-to-br from-[#E30019] to-[#8a000f] p-6 text-white overflow-hidden border border-white/10">
                        {/* Texture & Branding */}
                        <div className="absolute -right-4 -bottom-12 text-[100px] font-black opacity-10 leading-none tracking-tighter select-none">GEAR<br />UP</div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <img src="https://gearvn.com/wp-content/uploads/2019/06/Logo-Gearvn-White.png" className="h-6 object-contain" alt="Gearvn" /> {/* Text Logo simulation */}
                                <div className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-[6px] border border-white/10">
                                    <i className="ph ph-qr-code text-lg"></i>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-end gap-2 mb-1">
                                    <h2 className="text-[28px] font-extrabold leading-none tracking-tight">GOLD</h2>
                                    <span className="text-[12px] font-bold opacity-80 mb-1">MEMBER</span>
                                </div>
                                <div className="flex items-center gap-2 text-yellow-300 mb-3">
                                    <i className="ph-fill ph-lightning text-lg"></i>
                                    <span className="text-[16px] font-bold font-mono">1,250 PTS</span>
                                </div>

                                {/* Slim Progress */}
                                <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden">
                                    <div className="h-full w-[60%] bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BACK FACE: Mainboard Benefits */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-[24px] bg-gradient-to-br from-gray-300 to-gray-400 p-1 overflow-hidden border border-gray-400 shadow-inner">
                        {/* Metal Texture */}
                        <div className="w-full h-full bg-[#E5E7EB] rounded-[20px] relative overflow-hidden p-4 flex flex-col">
                            {/* Circuit Lines Decoration */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                                backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                                backgroundSize: '10px 10px'
                            }}></div>

                            <div className="relative z-10 flex justify-between items-center mb-3">
                                <h3 className="font-bold text-gray-800 text-[14px] uppercase tracking-wider flex items-center gap-1">
                                    <i className="ph ph-cpu text-primary"></i> CORE BENEFITS
                                </h3>
                                <span className="text-[9px] font-mono text-gray-500">v1.1.3 // ONLINE</span>
                            </div>

                            {/* Chip Grid */}
                            <div className="grid grid-cols-2 gap-2 flex-1">
                                {/* Active Chip */}
                                <div className="bg-white/80 border border-white rounded-[12px] p-2 flex flex-col items-center justify-center shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
                                    <i className="ph-fill ph-truck text-2xl text-gray-800 mb-1 group-active:scale-90 transition-transform"></i>
                                    <span className="text-[10px] font-bold text-gray-700">FreeShip</span>
                                </div>

                                {/* Active Chip */}
                                <div className="bg-white/80 border border-white rounded-[12px] p-2 flex flex-col items-center justify-center shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
                                    <i className="ph-fill ph-percent text-2xl text-gray-800 mb-1 group-active:scale-90 transition-transform"></i>
                                    <span className="text-[10px] font-bold text-gray-700">-5% Gear</span>
                                </div>

                                {/* Active Chip */}
                                <div className="bg-white/80 border border-white rounded-[12px] p-2 flex flex-col items-center justify-center shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
                                    <i className="ph-fill ph-wrench text-2xl text-gray-800 mb-1 group-active:scale-90 transition-transform"></i>
                                    <span className="text-[10px] font-bold text-gray-700">Vệ sinh PC</span>
                                </div>

                                {/* Inactive Chip */}
                                <div className="bg-gray-200/50 border border-gray-200 rounded-[12px] p-2 flex flex-col items-center justify-center opacity-60 grayscale">
                                    <i className="ph-fill ph-cake text-2xl text-gray-500 mb-1"></i>
                                    <span className="text-[10px] font-bold text-gray-500">Sinh nhật</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Flip Trigger Button - Connected to card */}
                <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="mt-6 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white/80 text-[12px] font-semibold hover:bg-white/10 transition-colors active:scale-95"
                >
                    <i className="ph ph-arrows-left-right"></i>
                    {isFlipped ? 'Xem mặt trước' : 'Quyền lợi của tôi'}
                </button>
            </div>

            {/* 4. Sliding Bottom Sheet (The Content Layer) - HIG Update: Reduced mt to 5 to push content up */}
            <div className="relative z-20 mt-5 bg-background-light min-h-screen rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pb-40">
                {/* Sheet Handle */}
                <div className="w-full flex justify-center pt-3 pb-1">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
                </div>

                <div className="px-5 pt-4">
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="text-[18px] font-semibold text-text-primary">Dịch vụ nổi bật</h2>
                        <button onClick={() => onNavigate(ScreenName.ORDER_SEARCH)} className="text-primary text-[13px] font-bold">Tra cứu đơn</button>
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

                    {/* Warranty Status Widget (Mini) */}
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

        </div>
    );
};

export default HomeScreen;
