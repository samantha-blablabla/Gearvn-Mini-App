import React from 'react';
import { ScreenName } from '../types';

interface HotDealsScreenProps {
  onBack: () => void;
}

const HotDealsScreen: React.FC<HotDealsScreenProps> = ({ onBack }) => {
  const allDeals = [
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
    },
    {
        id: 5,
        name: "Màn hình LG 27'' 27GR75Q-B UltraGear",
        price: "6.490.000đ",
        oldPrice: "8.990.000đ",
        discount: "-28%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZgCdVBaSGN69UV7RN1d8GXknQ0AYGBAtzPHox2F94LrT4a8JG7rXwQt07NWP1RIWgDsaai6gS5XhjkTN68eOGkgKUj8wGqmWX33czp4g8mr3Pn50btwpVH05OBJVC_qp88DWfxWE60OEC1PQURWnr9GDWAq1pvwUUSCDTLl-5X6qvu4atZTyts5FAuT0uok7oAKhO5ekt2KJd6j3kaUQEhCqrGGvWM8GiA5Byq9lcvCWeipBxz1cPOibPOPA47L1PRYA9n_Wi8U"
    },
    {
        id: 6,
        name: "Tay cầm Sony DualSense Wireless - Midnight Black",
        price: "1.490.000đ",
        oldPrice: "1.890.000đ",
        discount: "-21%",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc6rKjJV94Z1kEYvyWr89qdHmJy49TALaJySpbqGswpa-z4K9NUdxyjdHD2rH70GkcBFmt-6tT05ziQr9ySayAPjjXZf0zplER6t6FBUZW77UAew6aXuBRnov1aZpDB9fBvZgtdPV6NmGGlDIGEu4NmxMK_lqWCUIZ_pYN0vF5aGT_DG7f8higX7slcVqHf_e64FOnynh29OOFdH46RsmBlB6jK3Pl2zgEQrX7txAgO8nSdfhoC60vFczsSxrOfy9md7p_rn1-RgE"
    }
  ];

  return (
    <div className="min-h-screen bg-background-light pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2">
             <i className="ph-bold ph-caret-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">Hot Deals</h1>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -mr-2">
             <i className="ph-bold ph-magnifying-glass text-gray-900 text-xl"></i>
          </button>
        </div>
      </header>

      <main className="p-4">
        <div className="grid grid-cols-2 gap-4">
            {allDeals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full">
                <div className="relative h-40 w-full bg-[#F3F4F6] flex items-center justify-center p-4">
                  <img src={deal.image} alt={deal.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                  <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-black px-1.5 py-0.5 rounded shadow-sm">{deal.discount}</div>
                </div>
                <div className="p-3 flex-1 flex flex-col">
                  {/* Fixed height for title to align rows */}
                  <h4 className="text-xs font-bold line-clamp-2 text-gray-800 leading-snug h-[32px] mb-2">{deal.name}</h4>
                  <div className="mt-auto">
                    <p className="text-primary font-bold text-sm">{deal.price}</p>
                    <p className="text-[10px] text-gray-400 line-through font-medium">{deal.oldPrice}</p>
                    <button className="w-full mt-2 bg-primary/10 text-primary text-xs font-bold py-1.5 rounded hover:bg-primary hover:text-white transition-colors">
                        Mua ngay
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default HotDealsScreen;