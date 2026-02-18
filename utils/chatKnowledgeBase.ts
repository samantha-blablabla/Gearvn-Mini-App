// ============================================================
// CHAT KNOWLEDGE BASE — GearVN Mini App
// All responses are STATIC and CURATED. Zero AI hallucination.
// ============================================================

// --- Types ---

export interface FAQEntry {
    id: string;
    keywords: string[];
    question: string;
    answer: string;
    icon: string;
}

export interface PromoEntry {
    id: string;
    keywords: string[];
    name: string;
    price: string;
    oldPrice: string;
    discount: string;
    image: string;
    validUntil: string;
}

export interface ServiceEntry {
    id: string;
    icon: string;
    title: string;
    desc: string;
    color: string;
}

export interface StoreEntry {
    id: string;
    name: string;
    address: string;
    phone: string;
    isOpen: boolean;
    distance: string;
}

// --- FAQ Database ---

export const FAQ_DATABASE: FAQEntry[] = [
    {
        id: 'return-policy',
        keywords: ['đổi trả', 'hoàn tiền', 'trả hàng', 'đổi hàng', 'return', 'refund'],
        question: 'Chính sách đổi trả như thế nào?',
        answer: 'GearVN hỗ trợ đổi trả trong vòng 15 ngày kể từ ngày nhận hàng. Sản phẩm phải còn nguyên seal, đầy đủ phụ kiện và hộp. Liên hệ Hotline 1800 6789 để được hỗ trợ nhanh nhất.',
        icon: 'ph-arrows-counter-clockwise'
    },
    {
        id: 'installment',
        keywords: ['trả góp', 'góp', 'installment', 'mua trả góp', 'chia kỳ'],
        question: 'Trả góp có những hình thức nào?',
        answer: 'GearVN hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng (Visa, Mastercard, JCB) từ 3-12 tháng. Ngoài ra còn có trả góp qua công ty tài chính (Home Credit, FE Credit) với thủ tục nhanh gọn, chỉ cần CCCD.',
        icon: 'ph-credit-card'
    },
    {
        id: 'shipping',
        keywords: ['giao hàng', 'vận chuyển', 'ship', 'freeship', 'phí ship', 'delivery'],
        question: 'Chính sách giao hàng?',
        answer: 'GearVN miễn phí giao hàng cho đơn từ 500.000đ tại TP.HCM và Hà Nội (nội thành). Đơn hàng tỉnh: phí ship từ 20.000-40.000đ tùy khu vực. Thời gian giao: nội thành 2-4h, tỉnh 2-5 ngày.',
        icon: 'ph-truck'
    },
    {
        id: 'payment',
        keywords: ['thanh toán', 'payment', 'chuyển khoản', 'cod', 'tiền mặt', 'thẻ'],
        question: 'Các hình thức thanh toán?',
        answer: 'GearVN chấp nhận: COD (thanh toán khi nhận hàng), chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ (Visa, Mastercard), ví điện tử (MoMo, ZaloPay, VNPay), và trả góp 0% lãi suất.',
        icon: 'ph-wallet'
    },
    {
        id: 'warranty-policy',
        keywords: ['bảo hành', 'warranty', 'chính sách bảo hành', 'thời gian bảo hành'],
        question: 'Chính sách bảo hành?',
        answer: 'Sản phẩm tại GearVN được bảo hành chính hãng từ 12-36 tháng tùy loại. Bảo hành 1 đổi 1 trong 30 ngày đầu nếu lỗi từ nhà sản xuất. Mang sản phẩm + hóa đơn đến bất kỳ cửa hàng GearVN nào.',
        icon: 'ph-shield-check'
    },
    {
        id: 'member-points',
        keywords: ['điểm', 'tích điểm', 'point', 'thành viên', 'member', 'đổi điểm'],
        question: 'Cách tích và sử dụng điểm thưởng?',
        answer: 'Mỗi 10.000đ mua sắm = 1 điểm. Điểm có thể đổi voucher giảm giá hoặc quà tặng tại mục "Phần thưởng" trong app. Hạng Gold (từ 1000 điểm) được ưu đãi FreeShip và giảm thêm 5%.',
        icon: 'ph-star'
    },
];

// --- Promotions Database ---

export const PROMOTIONS_DATABASE: PromoEntry[] = [
    {
        id: 'akko-3087',
        keywords: ['akko', 'bàn phím', 'keyboard', '3087'],
        name: 'Bàn phím cơ Akko 3087 v2 Silent',
        price: '1.290.000đ',
        oldPrice: '1.890.000đ',
        discount: '-30%',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSd1nd69GK6is3nD0gxRlGVS3J3a0UN3q1ktLyqehaAgdHAzRxbAKkZUSuYjEnfRKyIrTIDhqdplJAbfXNoEbENObjnu6J6l4aKRP3UkrTNaZyv3Lh6RLfofRg6E7SETigwoqohdj39x2D_KUvaEMAdcIGHE-PzatUm8ZQ3AHAxdGKPpWylXhF7-a-3Ui4qVmexnSHc4zTlg3gTU6IYIEHW2nVsRXxvty3f3FevAiTFAL5AhX4_JTzb5KmVICabzm_jLPIgYldIGs',
        validUntil: '28/02/2026'
    },
    {
        id: 'logitech-superlight',
        keywords: ['logitech', 'chuột', 'mouse', 'superlight', 'g pro'],
        name: 'Chuột Logitech G Pro X Superlight',
        price: '2.890.000đ',
        oldPrice: '3.400.000đ',
        discount: '-15%',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUzMS_n24Fwp6czPZ9FSyMGQgoqr15j7_iRzMtZPfXvKjv2V1Bh1QPXiZ5swUclHLvKVKzw6_2s7jbXrU8O8a8qSh-54o3duNiHWVwrtx5yQkH00HnThBpNjQi44tp3FH1WIb7JQHJ4BlrXkerbPl3YW333krSO6-sGDYNWAxDM34tvTydRmjWFG4cE8fbjZJ7-pt7x6gmvkU8eeFMRLi48ZSxAhnbxrMORGoiLeQD9mO2phJsReQXW3ouefdTmKKs4CcFH73-8yI',
        validUntil: '28/02/2026'
    },
    {
        id: 'hyperx-cloud3',
        keywords: ['tai nghe', 'headset', 'hyperx', 'kingston', 'cloud'],
        name: 'Tai nghe Kingston HyperX Cloud III',
        price: '1.550.000đ',
        oldPrice: '2.600.000đ',
        discount: '-40%',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo-C2djq42-Z6x61oTMA9jF8wCtl0fUxI1il_o3yjxE24lFoAvdBIHLkvSrfxagrt_oqXEo-q4G3NM8RAmwHWvvodhtVqp-bqLwex9p42Oyis2Jkfd4oBkOdiQj1uM_5zS58jMgGgK6oxyR1Ay1kp070sFlPSTvWZKr3aD7Mh2gIha2tcUM9cDWuf56PxVbSt_7vTj8DEO3oGApZYrPf57ve3yNGUwmDZdceJhI0Vj25mm5SPem41E6_JEZbBhN21F2pMrbm08HvY',
        validUntil: '15/03/2026'
    },
    {
        id: 'msi-gf63',
        keywords: ['laptop', 'msi', 'gaming', 'gf63'],
        name: 'Laptop MSI Gaming GF63 Thin',
        price: '15.490.000đ',
        oldPrice: '17.990.000đ',
        discount: '-14%',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU9t34xmbElpa01q8W52cIXEkseS7SH66iIJ3pQFlHNsyq3U98AjLjiRPSEUW2v8d5MXZo2lm_u0BvScXUVTrinjJ2_8fjpO_vrdPzVpsasNBTT3tpOjrIrxpVeFLLbaMCUEfYzOAiB_4nKAaJ9y71rwA16gFD-uPwMfFCL4Agco7LsQDLjSJuT3qmwTnEpMzhg3KD1wqBa5Kn9WQ1welJlk5pLNEbDvpoDdCMyvWYObGtlKLTJBYAEl6m853wUCbvFRNjAcndUHs',
        validUntil: '28/02/2026'
    },
    {
        id: 'lg-monitor',
        keywords: ['màn hình', 'monitor', 'lg', 'ultragear'],
        name: 'Màn hình LG 27\'\' 27GR75Q-B UltraGear',
        price: '6.490.000đ',
        oldPrice: '8.990.000đ',
        discount: '-28%',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZgCdVBaSGN69UV7RN1d8GXknQ0AYGBAtzPHox2F94LrT4a8JG7rXwQt07NWP1RIWgDsaai6gS5XhjkTN68eOGkgKUj8wGqmWX33czp4g8mr3Pn50btwpVH05OBJVC_qp88DWfxWE60OEC1PQURWnr9GDWAq1pvwUUSCDTLl-5X6qvu4atZTyts5FAuT0uok7oAKhO5ekt2KJd6j3kaUQEhCqrGGvWM8GiA5Byq9lcvCWeipBxz1cPOibPOPA47L1PRYA9n_Wi8U',
        validUntil: '15/03/2026'
    },
];

// --- Services Database ---

export const SERVICES_DATABASE: ServiceEntry[] = [
    {
        id: 'WARRANTY',
        icon: 'ph-shield-check',
        title: 'Bảo Hành & Sửa Chữa',
        desc: 'Khắc phục lỗi phần cứng, phần mềm',
        color: 'bg-red-50 text-red-600'
    },
    {
        id: 'CLEANING',
        icon: 'ph-sparkle',
        title: 'Vệ Sinh & Tra Keo',
        desc: 'Bảo dưỡng định kỳ, làm mát máy',
        color: 'bg-blue-50 text-blue-600'
    },
    {
        id: 'UPGRADE',
        icon: 'ph-cpu',
        title: 'Nâng Cấp Linh Kiện',
        desc: 'RAM, SSD, VGA, Phụ kiện...',
        color: 'bg-green-50 text-green-600'
    },
    {
        id: 'SOFTWARE',
        icon: 'ph-desktop',
        title: 'Cài Đặt Phần Mềm',
        desc: 'Windows, Driver, Game...',
        color: 'bg-purple-50 text-purple-600'
    },
];

// --- Purchased Products (Customer's owned devices) ---

export interface PurchasedProduct {
    id: string;
    name: string;
    serialNumber: string;
    image: string;
    purchaseDate: string;
}

export const PURCHASED_PRODUCTS: PurchasedProduct[] = [
    {
        id: 'prod-1',
        name: 'Laptop ASUS ROG Strix G15 G513IH',
        serialNumber: 'G513-2023-001',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU9t34xmbElpa01q8W52cIXEkseS7SH66iIJ3pQFlHNsyq3U98AjLjiRPSEUW2v8d5MXZo2lm_u0BvScXUVTrinjJ2_8fjpO_vrdPzVpsasNBTT3tpOjrIrxpVeFLLbaMCUEfYzOAiB_4nKAaJ9y71rwA16gFD-uPwMfFCL4Agco7LsQDLjSJuT3qmwTnEpMzhg3KD1wqBa5Kn9WQ1welJlk5pLNEbDvpoDdCMyvWYObGtlKLTJBYAEl6m853wUCbvFRNjAcndUHs',
        purchaseDate: '10/01/2024'
    },
    {
        id: 'prod-2',
        name: 'Chuột Logitech G502 HERO',
        serialNumber: '2133LZ03829',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUzMS_n24Fwp6czPZ9FSyMGQgoqr15j7_iRzMtZPfXvKjv2V1Bh1QPXiZ5swUclHLvKVKzw6_2s7jbXrU8O8a8qSh-54o3duNiHWVwrtx5yQkH00HnThBpNjQi44tp3FH1WIb7JQHJ4BlrXkerbPl3YW333krSO6-sGDYNWAxDM34tvTydRmjWFG4cE8fbjZJ7-pt7x6gmvkU8eeFMRLi48ZSxAhnbxrMORGoiLeQD9mO2phJsReQXW3ouefdTmKKs4CcFH73-8yI',
        purchaseDate: '15/09/2023'
    },
    {
        id: 'prod-3',
        name: 'Bàn phím cơ AKKO 3087 v2 Steam Engine',
        serialNumber: 'AKKO-2023-456',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTA8EaIQxO_inNoACJm21LcUNbcyYAvpxsNttev9j449z4qqO211FcMOWg93kehMjlbAUywiXKQdJ8Wc7Qkcyn6d_81ae_cCHsFWRWdS8FXEMASBLOmesxuRNR4CtXhzk3sBTvjhInJBgq1j5FCOIcZGzE8Ey_i18ZEan1DZxYQBWcttzLiCUM8CGKrMWOt00Bgumc0azj6xD1oMb5BlQYDC7OmO49jWask7sdZFX7VeXnC3iWsxu5qeCqbM1_Lt1a1XYxbs-oi4c',
        purchaseDate: '02/11/2023'
    },
    {
        id: 'prod-4',
        name: 'Màn hình LG 24GN650-B 144Hz IPS',
        serialNumber: 'LG24-2023-789',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZgCdVBaSGN69UV7RN1d8GXknQ0AYGBAtzPHox2F94LrT4a8JG7rXwQt07NWP1RIWgDsaai6gS5XhjkTN68eOGkgKUj8wGqmWX33czp4g8mr3Pn50btwpVH05OBJVC_qp88DWfxWE60OEC1PQURWnr9GDWAq1pvwUUSCDTLl-5X6qvu4atZTyts5FAuT0uok7oAKhO5ekt2KJd6j3kaUQEhCqrGGvWM8GiA5Byq9lcvCWeipBxz1cPOibPOPA47L1PRYA9n_Wi8U',
        purchaseDate: '05/11/2023'
    },
];

// --- Store Database ---

export const STORES_DATABASE: StoreEntry[] = [
    {
        id: 'store-hht',
        name: 'GearVN Hoàng Hoa Thám',
        address: '78-80-82 Hoàng Hoa Thám, P.12, Q. Tân Bình, TP.HCM',
        phone: '1800 6789',
        isOpen: true,
        distance: '1.2 km'
    },
    {
        id: 'store-thd',
        name: 'GearVN Trần Hưng Đạo',
        address: '261-263 Trần Hưng Đạo, P. Cô Giang, Q.1, TP.HCM',
        phone: '1800 6789',
        isOpen: true,
        distance: '3.5 km'
    },
    {
        id: 'store-kvc',
        name: 'GearVN Kha Vạn Cân',
        address: '905 Kha Vạn Cân, P. Linh Chiểu, TP. Thủ Đức, TP.HCM',
        phone: '1800 6789',
        isOpen: true,
        distance: '8.1 km'
    },
    {
        id: 'store-th',
        name: 'GearVN Thái Hà',
        address: '50 Thái Hà, Q. Đống Đa, Hà Nội',
        phone: '1800 6789',
        isOpen: false,
        distance: '—'
    },
];
