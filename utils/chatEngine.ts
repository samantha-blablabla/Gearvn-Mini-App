// ============================================================
// CHAT ENGINE — GearVN Mini App
// Decision Tree + Structured Data Lookup. No AI generation.
// ============================================================

import {
    FAQ_DATABASE,
    PROMOTIONS_DATABASE,
    SERVICES_DATABASE,
    STORES_DATABASE,
    PURCHASED_PRODUCTS,
    type FAQEntry,
    type PromoEntry,
    type ServiceEntry,
    type StoreEntry,
    type PurchasedProduct,
} from './chatKnowledgeBase';

// --- Types ---

export enum Intent {
    ORDER_LOOKUP = 'ORDER_LOOKUP',
    WARRANTY_LOOKUP = 'WARRANTY_LOOKUP',
    SERVICE_BOOKING = 'SERVICE_BOOKING',
    PROMOTIONS = 'PROMOTIONS',
    FAQ = 'FAQ',
    STORE_FINDER = 'STORE_FINDER',
    GREETING = 'GREETING',
    FAREWELL = 'FAREWELL',
    UNKNOWN = 'UNKNOWN',
}

export type MessageSender = 'user' | 'bot';

export interface ChatMessage {
    id: string;
    sender: MessageSender;
    text?: string;
    type: 'text' | 'order-card' | 'warranty-card' | 'service-list' | 'promo-list' | 'faq-card' | 'store-list' | 'escalation' | 'quick-replies' | 'booking-services' | 'booking-devices' | 'booking-notes' | 'booking-locations' | 'booking-stores' | 'booking-dates' | 'booking-times' | 'booking-summary' | 'booking-success';
    data?: any;
    timestamp: number;
}

export interface QuickReply {
    label: string;
    icon: string;
    action: string; // Will be used as message input
}

// --- Mock Order Data ---

interface MockOrder {
    id: string;
    date: string;
    status: 'COMPLETED' | 'SHIPPING' | 'PROCESSING' | 'CANCELLED';
    statusText: string;
    productName: string;
    total: string;
    image: string;
}

const MOCK_ORDERS: MockOrder[] = [
    {
        id: 'GVN-910293',
        date: '02/11/2023',
        status: 'SHIPPING',
        statusText: 'Đang giao hàng',
        productName: 'Bàn phím cơ AKKO 3087 v2 Steam Engine',
        total: '1.290.000đ',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTA8EaIQxO_inNoACJm21LcUNbcyYAvpxsNttev9j449z4qqO211FcMOWg93kehMjlbAUywiXKQdJ8Wc7Qkcyn6d_81ae_cCHsFWRWdS8FXEMASBLOmesxuRNR4CtXhzk3sBTvjhInJBgq1j5FCOIcZGzE8Ey_i18ZEan1DZxYQBWcttzLiCUM8CGKrMWOt00Bgumc0azj6xD1oMb5BlQYDC7OmO49jWask7sdZFX7VeXnC3iWsxu5qeCqbM1_Lt1a1XYxbs-oi4c'
    },
    {
        id: 'GVN-112233',
        date: '05/11/2023',
        status: 'PROCESSING',
        statusText: 'Đang xử lý',
        productName: 'Màn hình LG 24GN650-B 144Hz IPS',
        total: '4.990.000đ',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZgCdVBaSGN69UV7RN1d8GXknQ0AYGBAtzPHox2F94LrT4a8JG7rXwQt07NWP1RIWgDsaai6gS5XhjkTN68eOGkgKUj8wGqmWX33czp4g8mr3Pn50btwpVH05OBJVC_qp88DWfxWE60OEC1PQURWnr9GDWAq1pvwUUSCDTLl-5X6qvu4atZTyts5FAuT0uok7oAKhO5ekt2KJd6j3kaUQEhCqrGGvWM8GiA5Byq9lcvCWeipBxz1cPOibPOPA47L1PRYA9n_Wi8U'
    },
    {
        id: 'GVN-334455',
        date: '10/01/2024',
        status: 'COMPLETED',
        statusText: 'Đã giao',
        productName: 'Laptop ASUS ROG Strix G15 G513IH',
        total: '22.990.000đ',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU9t34xmbElpa01q8W52cIXEkseS7SH66iIJ3pQFlHNsyq3U98AjLjiRPSEUW2v8d5MXZo2lm_u0BvScXUVTrinjJ2_8fjpO_vrdPzVpsasNBTT3tpOjrIrxpVeFLLbaMCUEfYzOAiB_4nKAaJ9y71rwA16gFD-uPwMfFCL4Agco7LsQDLjSJuT3qmwTnEpMzhg3KD1wqBa5Kn9WQ1welJlk5pLNEbDvpoDdCMyvWYObGtlKLTJBYAEl6m853wUCbvFRNjAcndUHs'
    },
];

// --- Mock Warranty Data ---

interface MockWarranty {
    id: string;
    productName: string;
    serialNumber: string;
    status: 'PROCESSING' | 'REPAIRING' | 'COMPLETED';
    statusText: string;
    submittedDate: string;
    estimatedDate: string;
}

const MOCK_WARRANTIES: MockWarranty[] = [
    {
        id: 'BH-001',
        productName: 'Laptop ASUS ROG Strix G15',
        serialNumber: 'G513-2023-001',
        status: 'REPAIRING',
        statusText: 'Đang sửa chữa',
        submittedDate: '15/01/2024',
        estimatedDate: '25/01/2024'
    },
    {
        id: 'BH-002',
        productName: 'Chuột Logitech G502 HERO',
        serialNumber: '2133LZ03829',
        status: 'COMPLETED',
        statusText: 'Hoàn tất',
        submittedDate: '10/12/2023',
        estimatedDate: '18/12/2023'
    },
];

// --- Intent Detection (Keyword Matching) ---

interface IntentRule {
    intent: Intent;
    keywords: string[];
    patterns: RegExp[];
}

const INTENT_RULES: IntentRule[] = [
    {
        intent: Intent.ORDER_LOOKUP,
        keywords: ['đơn hàng', 'đơn', 'tracking', 'theo dõi đơn', 'tra cứu đơn', 'mã đơn', 'tình trạng đơn', 'giao hàng chưa', 'đơn của tôi'],
        patterns: [/GVN-\d+/i, /gvn\d+/i]
    },
    {
        intent: Intent.WARRANTY_LOOKUP,
        keywords: ['bảo hành', 'sửa chữa', 'serial', 'tra bảo hành', 'tiến độ bảo hành', 'máy hỏng', 'lỗi máy'],
        patterns: [/BH-\d+/i, /^[A-Z0-9]{4,}-\d{4}-\d{3}$/i]
    },
    {
        intent: Intent.SERVICE_BOOKING,
        keywords: ['đặt lịch', 'dịch vụ', 'vệ sinh', 'tra keo', 'nâng cấp', 'cài đặt', 'sửa máy', 'bảo dưỡng', 'thay ram', 'thay ssd', 'cài win', 'cài windows', 'làm sạch', 'upgrade'],
        patterns: []
    },
    {
        intent: Intent.PROMOTIONS,
        keywords: ['khuyến mãi', 'giảm giá', 'deal', 'sale', 'ưu đãi', 'flash sale', 'hot deal', 'giá rẻ', 'combo', 'mã giảm', 'voucher', 'coupon', 'đang giảm'],
        patterns: []
    },
    {
        intent: Intent.FAQ,
        keywords: ['đổi trả', 'hoàn tiền', 'trả góp', 'thanh toán', 'giao hàng', 'ship', 'freeship', 'chính sách', 'điểm', 'tích điểm', 'thành viên'],
        patterns: []
    },
    {
        intent: Intent.STORE_FINDER,
        keywords: ['cửa hàng', 'gần đây', 'chi nhánh', 'địa chỉ', 'showroom', 'store', 'tìm cửa hàng', 'ở đâu'],
        patterns: []
    },
    {
        intent: Intent.GREETING,
        keywords: ['xin chào', 'hello', 'hi', 'hey', 'chào', 'alo', 'help', 'giúp', 'hỗ trợ'],
        patterns: []
    },
    {
        intent: Intent.FAREWELL,
        keywords: ['cảm ơn', 'cám ơn', 'thank', 'thanks', 'bye', 'tạm biệt', 'không cần', 'xong rồi', 'ok rồi', 'ổn rồi', 'đủ rồi', 'hết rồi', 'không nữa', 'thôi nhé', 'chào nhé', 'tạm nhé'],
        patterns: []
    },
];

export function detectIntent(message: string): { intent: Intent; extractedData?: string } {
    const normalized = message.toLowerCase().trim();

    // 1. Check patterns first (e.g. GVN-XXXXX order codes)
    for (const rule of INTENT_RULES) {
        for (const pattern of rule.patterns) {
            const match = message.match(pattern);
            if (match) {
                return { intent: rule.intent, extractedData: match[0].toUpperCase() };
            }
        }
    }

    // 2. Check keywords
    for (const rule of INTENT_RULES) {
        for (const keyword of rule.keywords) {
            if (normalized.includes(keyword)) {
                return { intent: rule.intent };
            }
        }
    }

    // 3. Smart code detection — try to match ANY known code pattern
    const cleanInput = normalized.replace(/\s/g, '').toUpperCase();

    // BH-xxx → always warranty
    if (/^BH-\d+$/i.test(cleanInput)) {
        return { intent: Intent.WARRANTY_LOOKUP, extractedData: cleanInput };
    }
    // GVN-xxx → always order
    if (/^GVN-\d+$/i.test(cleanInput)) {
        return { intent: Intent.ORDER_LOOKUP, extractedData: cleanInput };
    }
    // Serial-like pattern (e.g. G513-2023-001)
    if (/^[A-Z]\d{3}-\d{4}-\d{3}$/i.test(cleanInput)) {
        return { intent: Intent.WARRANTY_LOOKUP, extractedData: cleanInput };
    }
    // Generic alphanumeric code — try both lookups
    if (/^[A-Z]{2,4}-?\d{3,}$/i.test(cleanInput)) {
        // Try warranty first (shorter codes like BH-xxx)
        const asWarranty = lookupWarranty(cleanInput);
        if (asWarranty) return { intent: Intent.WARRANTY_LOOKUP, extractedData: cleanInput };
        // Then order
        const asOrder = lookupOrder(cleanInput);
        if (asOrder) return { intent: Intent.ORDER_LOOKUP, extractedData: cleanInput };
        // Fallback to order lookup (let the error message guide user)
        return { intent: Intent.ORDER_LOOKUP, extractedData: cleanInput };
    }

    return { intent: Intent.UNKNOWN };
}

// --- Data Lookup Functions ---

export function lookupOrder(code: string): MockOrder | null {
    return MOCK_ORDERS.find(o => o.id.toUpperCase() === code.toUpperCase()) || null;
}

export function lookupWarranty(codeOrSerial: string): MockWarranty | null {
    const upper = codeOrSerial.toUpperCase();
    return MOCK_WARRANTIES.find(w =>
        w.id.toUpperCase() === upper ||
        w.serialNumber.toUpperCase() === upper
    ) || null;
}

export function searchFAQ(query: string): FAQEntry[] {
    const normalized = query.toLowerCase();
    return FAQ_DATABASE.filter(faq =>
        faq.keywords.some(kw => normalized.includes(kw)) ||
        normalized.includes(faq.question.toLowerCase())
    );
}

export function searchPromotions(query?: string): PromoEntry[] {
    if (!query) return PROMOTIONS_DATABASE;
    const normalized = query.toLowerCase();
    const filtered = PROMOTIONS_DATABASE.filter(p =>
        p.keywords.some(kw => normalized.includes(kw)) ||
        p.name.toLowerCase().includes(normalized)
    );
    return filtered.length > 0 ? filtered : PROMOTIONS_DATABASE;
}

export function getServices(): ServiceEntry[] {
    return SERVICES_DATABASE;
}

export function getStores(): StoreEntry[] {
    return STORES_DATABASE;
}

// --- Message Builder Helpers ---

let messageIdCounter = 0;
function createId(): string {
    return `msg-${Date.now()}-${++messageIdCounter}`;
}

function textMsg(text: string): ChatMessage {
    return { id: createId(), sender: 'bot', type: 'text', text, timestamp: Date.now() };
}

// --- Contextual Quick Reply Helpers ---

function orderFollowUpReplies(): QuickReply[] {
    return [
        { label: 'Tra đơn khác', icon: 'ph-package', action: 'Tra cứu đơn hàng' },
        { label: 'Bảo hành SP này', icon: 'ph-shield-check', action: 'Tra cứu bảo hành' },
        { label: 'Chat với Tư vấn viên', icon: 'ph-chats', action: 'Chat với Tư vấn viên' },
    ];
}

function warrantyFollowUpReplies(): QuickReply[] {
    return [
        { label: 'Tra BH khác', icon: 'ph-shield-check', action: 'Tra cứu bảo hành' },
        { label: 'Tìm cửa hàng', icon: 'ph-storefront', action: 'Tìm cửa hàng gần đây' },
        { label: 'Chat với Tư vấn viên', icon: 'ph-chats', action: 'Chat với Tư vấn viên' },
    ];
}

function promoFollowUpReplies(): QuickReply[] {
    return [
        { label: 'Tìm cửa hàng', icon: 'ph-storefront', action: 'Tìm cửa hàng gần đây' },
        { label: 'Chính sách trả góp', icon: 'ph-credit-card', action: 'Chính sách trả góp' },
        { label: 'Đặt dịch vụ', icon: 'ph-wrench', action: 'Đặt lịch dịch vụ' },
    ];
}

function faqFollowUpReplies(): QuickReply[] {
    return [
        { label: 'Hỏi thêm', icon: 'ph-chat-dots', action: 'Chính sách đổi trả' },
        { label: 'Đặt dịch vụ', icon: 'ph-wrench', action: 'Đặt lịch dịch vụ' },
        { label: 'Chat với Tư vấn viên', icon: 'ph-chats', action: 'Chat với Tư vấn viên' },
    ];
}

function storeFollowUpReplies(): QuickReply[] {
    return [
        { label: 'Đặt lịch dịch vụ', icon: 'ph-wrench', action: 'Đặt lịch dịch vụ' },
        { label: 'Xem khuyến mãi', icon: 'ph-tag', action: 'Có khuyến mãi gì?' },
    ];
}

// --- Order Status Messages ---

function getOrderStatusMessage(order: MockOrder): string {
    switch (order.status) {
        case 'SHIPPING':
            return `🚚 Đơn hàng **${order.id}** đang trên đường đến bạn! Thường sẽ giao trong **1-2 ngày** tới.\n\nBạn nhớ giữ điện thoại để nhận hàng và kiểm tra sản phẩm trước khi ký nhận nhé!`;
        case 'PROCESSING':
            return `⏳ Đơn hàng **${order.id}** đang được kho GearVN xử lý và đóng gói. Dự kiến sẽ bàn giao cho đơn vị vận chuyển trong hôm nay hoặc ngày mai.\n\nMình sẽ cập nhật ngay khi có mã vận chuyển!`;
        case 'COMPLETED':
            return `✅ Đơn hàng **${order.id}** đã được giao thành công vào ngày **${order.date}**.\n\nHy vọng bạn hài lòng với **${order.productName}**! Nếu gặp vấn đề gì, GearVN hỗ trợ bảo hành nhanh chóng nhé.`;
        case 'CANCELLED':
            return `❌ Đơn hàng **${order.id}** đã bị huỷ. Nếu bạn đã thanh toán, GearVN sẽ hoàn tiền trong **3-5 ngày** làm việc.\n\nBạn có muốn đặt lại đơn hàng không?`;
        default:
            return `Đây là thông tin đơn hàng **${order.id}** của bạn. Nếu cần hỗ trợ gì thêm, mình luôn ở đây!`;
    }
}

// --- Warranty Status Messages ---

function getWarrantyStatusMessage(warranty: MockWarranty): string {
    switch (warranty.status) {
        case 'REPAIRING':
            return `🔧 Máy **${warranty.productName}** đang được kỹ thuật viên kiểm tra và sửa chữa. Dự kiến hoàn tất vào ngày **${warranty.estimatedDate}**.\n\nGearVN sẽ liên hệ bạn ngay khi máy sửa xong!`;
        case 'COMPLETED':
            return `✅ **${warranty.productName}** đã sửa xong và sẵn sàng để nhận lại!\n\nBạn có thể mang theo CMND/CCCD đến cửa hàng GearVN gần nhất để nhận máy. Nhớ kiểm tra máy tại chỗ trước khi ra về nhé!`;
        case 'PROCESSING':
            return `📋 Máy **${warranty.productName}** đã được tiếp nhận và đang chờ kỹ thuật viên kiểm tra. GearVN sẽ liên hệ nếu cần thêm thông tin từ bạn.\n\nDự kiến có kết quả trước ngày **${warranty.estimatedDate}**.`;
        default:
            return `Đây là thông tin bảo hành của **${warranty.productName}**. Nếu cần hỗ trợ thêm, mình luôn sẵn sàng!`;
    }
}

// --- Main Message Processor ---

export function processMessage(
    userText: string,
    conversationContext?: { waitingFor?: Intent }
): ChatMessage[] {
    const responses: ChatMessage[] = [];
    const { intent, extractedData } = detectIntent(userText);

    // If we're waiting for an order code — but try warranty cross-lookup too
    if (conversationContext?.waitingFor === Intent.ORDER_LOOKUP) {
        const code = extractedData || userText.trim().toUpperCase();
        const order = lookupOrder(code);
        if (order) {
            responses.push(textMsg('Tìm thấy đơn hàng của bạn rồi! 📦'));
            responses.push({
                id: createId(), sender: 'bot', type: 'order-card',
                data: order, timestamp: Date.now()
            });
            responses.push(textMsg(getOrderStatusMessage(order)));
            responses.push({
                id: createId(), sender: 'bot', type: 'quick-replies',
                data: orderFollowUpReplies(), timestamp: Date.now()
            });
        } else {
            // Cross-lookup: maybe it's a warranty code?
            const warranty = lookupWarranty(code);
            if (warranty) {
                responses.push(textMsg(`Mã **${code}** không phải mã đơn hàng, nhưng mình tìm thấy thông tin **bảo hành** cho mã này! 🛡️`));
                responses.push({
                    id: createId(), sender: 'bot', type: 'warranty-card',
                    data: warranty, timestamp: Date.now()
                });
                responses.push(textMsg(getWarrantyStatusMessage(warranty)));
                responses.push({
                    id: createId(), sender: 'bot', type: 'quick-replies',
                    data: warrantyFollowUpReplies(), timestamp: Date.now()
                });
            } else {
                responses.push(textMsg(`Mình không tìm thấy mã **"${code}"** trong hệ thống đơn hàng lẫn bảo hành. Bạn kiểm tra lại nhé!\n\n💡 Mã đơn: **GVN-XXXXXX** | Mã BH: **BH-XXX** | Serial: in trên tem máy`));
                responses.push({
                    id: createId(), sender: 'bot', type: 'escalation',
                    text: 'Cần hỗ trợ thêm?',
                    data: {},
                    timestamp: Date.now()
                });
            }
        }
        return responses;
    }

    // If we're waiting for a warranty code — but try order cross-lookup too
    if (conversationContext?.waitingFor === Intent.WARRANTY_LOOKUP) {
        const code = extractedData || userText.trim().toUpperCase();
        const warranty = lookupWarranty(code);
        if (warranty) {
            responses.push(textMsg('Tìm thấy thông tin bảo hành rồi! 🛡️'));
            responses.push({
                id: createId(), sender: 'bot', type: 'warranty-card',
                data: warranty, timestamp: Date.now()
            });
            responses.push(textMsg(getWarrantyStatusMessage(warranty)));
            responses.push({
                id: createId(), sender: 'bot', type: 'quick-replies',
                data: warrantyFollowUpReplies(), timestamp: Date.now()
            });
        } else {
            // Cross-lookup: maybe it's an order code?
            const order = lookupOrder(code);
            if (order) {
                responses.push(textMsg(`Mã **${code}** không phải mã bảo hành, nhưng mình tìm thấy **đơn hàng** với mã này! 📦`));
                responses.push({
                    id: createId(), sender: 'bot', type: 'order-card',
                    data: order, timestamp: Date.now()
                });
                responses.push(textMsg(getOrderStatusMessage(order)));
                responses.push({
                    id: createId(), sender: 'bot', type: 'quick-replies',
                    data: orderFollowUpReplies(), timestamp: Date.now()
                });
            } else {
                responses.push(textMsg(`Mình không tìm thấy mã **"${code}"** trong hệ thống bảo hành lẫn đơn hàng. Bạn kiểm tra lại nhé!\n\n💡 Mã BH: **BH-XXX** | Serial: in trên tem máy | Mã đơn: **GVN-XXXXXX**`));
                responses.push({
                    id: createId(), sender: 'bot', type: 'escalation',
                    text: 'Cần hỗ trợ thêm?',
                    data: {},
                    timestamp: Date.now()
                });
            }
        }
        return responses;
    }

    switch (intent) {
        case Intent.ORDER_LOOKUP: {
            if (extractedData) {
                const order = lookupOrder(extractedData);
                if (order) {
                    responses.push(textMsg('Tìm thấy đơn hàng của bạn rồi! 📦'));
                    responses.push({
                        id: createId(), sender: 'bot', type: 'order-card',
                        data: order, timestamp: Date.now()
                    });
                    responses.push(textMsg(getOrderStatusMessage(order)));
                    responses.push({
                        id: createId(), sender: 'bot', type: 'quick-replies',
                        data: orderFollowUpReplies(), timestamp: Date.now()
                    });
                } else {
                    responses.push(textMsg(`Mình không tìm thấy đơn hàng **"${extractedData}"**. Bạn kiểm tra lại mã nhé!\n\n💡 Mã đơn có dạng **GVN-XXXXXX**.`));
                }
            } else {
                responses.push(textMsg('Để tra cứu đơn hàng, bạn cho mình **mã đơn hàng** nhé! 📦\n\nMã đơn có dạng **GVN-XXXXXX**, ví dụ: GVN-910293. Bạn có thể tìm mã này trong email xác nhận đơn hàng hoặc SMS từ GearVN.'));
            }
            break;
        }

        case Intent.WARRANTY_LOOKUP: {
            if (extractedData) {
                const warranty = lookupWarranty(extractedData);
                if (warranty) {
                    responses.push(textMsg('Tìm thấy thông tin bảo hành rồi! 🛡️'));
                    responses.push({
                        id: createId(), sender: 'bot', type: 'warranty-card',
                        data: warranty, timestamp: Date.now()
                    });
                    responses.push(textMsg(getWarrantyStatusMessage(warranty)));
                    responses.push({
                        id: createId(), sender: 'bot', type: 'quick-replies',
                        data: warrantyFollowUpReplies(), timestamp: Date.now()
                    });
                } else {
                    responses.push(textMsg(`Mình không tìm thấy mã **"${extractedData}"**. Bạn kiểm tra lại nhé!\n\n💡 Mã BH dạng **BH-XXX**, Serial thường in trên tem máy.`));
                }
            } else {
                responses.push(textMsg('Để tra cứu bảo hành, bạn cho mình **mã bảo hành** hoặc **số Serial** nhé! 🛡️\n\nVí dụ:\n• Mã BH: **BH-001**\n• Serial: **G513-2023-001** (in trên tem dán ở thân máy)'));
            }
            break;
        }

        case Intent.SERVICE_BOOKING: {
            responses.push(textMsg('Mình sẽ giúp bạn đặt lịch dịch vụ ngay tại đây! 🔧\n\nGearVN có đội ngũ kỹ thuật viên chuyên nghiệp, thời gian xử lý nhanh chóng. Trước tiên, bạn cần dịch vụ gì?'));
            responses.push({
                id: createId(), sender: 'bot', type: 'booking-services',
                data: getServices(), timestamp: Date.now()
            });
            break;
        }

        case Intent.PROMOTIONS: {
            const promos = searchPromotions(userText);
            responses.push(textMsg(`Tin vui cho bạn! 🎉 GearVN đang có **${promos.length} deal cực hot** — giảm giá sâu cho nhiều sản phẩm công nghệ. Lướt qua xem có gì ưng không nhé!`));
            responses.push({
                id: createId(), sender: 'bot', type: 'promo-list',
                data: promos, timestamp: Date.now()
            });
            responses.push(textMsg('💳 GearVN hỗ trợ **trả góp 0%** cho đơn từ 3 triệu và **freeship** toàn quốc cho đơn từ 500K. Đừng bỏ lỡ nhé!'));
            responses.push({
                id: createId(), sender: 'bot', type: 'quick-replies',
                data: promoFollowUpReplies(), timestamp: Date.now()
            });
            break;
        }

        case Intent.FAQ: {
            const results = searchFAQ(userText);
            if (results.length > 0) {
                responses.push(textMsg('Mình tìm thấy thông tin liên quan đây! 📚'));
                results.forEach(faq => {
                    responses.push({
                        id: createId(), sender: 'bot', type: 'faq-card',
                        data: faq, timestamp: Date.now()
                    });
                });
                responses.push(textMsg('Hy vọng thông tin trên giúp ích cho bạn! Nếu cần giải đáp thêm, cứ hỏi mình nhé 😊'));
                responses.push({
                    id: createId(), sender: 'bot', type: 'quick-replies',
                    data: faqFollowUpReplies(), timestamp: Date.now()
                });
            } else {
                responses.push(textMsg('Mình chưa tìm thấy câu trả lời phù hợp cho câu hỏi này 🤔\n\nBạn thử diễn đạt cách khác, hoặc chat trực tiếp với Tư vấn viên để được hỗ trợ nhanh nhất nhé!'));
                responses.push({
                    id: createId(), sender: 'bot', type: 'escalation',
                    text: 'Cần hỗ trợ thêm?',
                    data: {},
                    timestamp: Date.now()
                });
            }
            break;
        }

        case Intent.STORE_FINDER: {
            const stores = getStores();
            const openCount = stores.filter(s => s.isOpen).length;
            responses.push(textMsg(`🏪 GearVN hiện có **${stores.length} cửa hàng**, trong đó **${openCount} cửa hàng đang mở cửa**. Dưới đây là danh sách chi tiết:`));
            responses.push({
                id: createId(), sender: 'bot', type: 'store-list',
                data: stores, timestamp: Date.now()
            });
            responses.push(textMsg('📞 Bạn có thể gọi trực tiếp để kiểm tra tình trạng sản phẩm tại cửa hàng trước khi đến nhé!'));
            responses.push({
                id: createId(), sender: 'bot', type: 'quick-replies',
                data: storeFollowUpReplies(), timestamp: Date.now()
            });
            break;
        }

        case Intent.GREETING: {
            responses.push(textMsg('Xin chào! 👋 Mình là **GearBot** — trợ lý của GearVN.\n\nMình có thể giúp bạn tra đơn hàng, kiểm tra bảo hành, đặt lịch dịch vụ, và nhiều thứ khác nữa. Bạn cần gì nhé?'));
            responses.push({
                id: createId(), sender: 'bot', type: 'quick-replies',
                data: getMainQuickReplies(),
                timestamp: Date.now()
            });
            break;
        }

        case Intent.FAREWELL: {
            responses.push(textMsg('Cảm ơn bạn đã liên hệ GearVN! 🙏\n\nHy vọng mình đã giúp được bạn. Chúc bạn một ngày tuyệt vời nhé! Nếu cần hỗ trợ bất cứ lúc nào, cứ quay lại — mình luôn ở đây. 👋'));
            break;
        }

        case Intent.UNKNOWN:
        default: {
            responses.push(textMsg('Mình chưa hiểu rõ ý bạn lắm 🤔\n\nBạn có thể thử chọn một trong các chủ đề bên dưới, hoặc mô tả chi tiết hơn để mình hỗ trợ nhé!'));
            responses.push({
                id: createId(), sender: 'bot', type: 'quick-replies',
                data: getMainQuickReplies(),
                timestamp: Date.now()
            });
            break;
        }
    }

    return responses;
}

// --- Quick Replies ---

export function getMainQuickReplies(): QuickReply[] {
    return [
        { label: 'Tra đơn hàng', icon: 'ph-package', action: 'Tra cứu đơn hàng' },
        { label: 'Bảo hành', icon: 'ph-shield-check', action: 'Tra cứu bảo hành' },
        { label: 'Đặt dịch vụ', icon: 'ph-wrench', action: 'Đặt lịch dịch vụ' },
        { label: 'Khuyến mãi', icon: 'ph-tag', action: 'Có khuyến mãi gì?' },
        { label: 'FAQ', icon: 'ph-question', action: 'Chính sách đổi trả' },
        { label: 'Cửa hàng', icon: 'ph-storefront', action: 'Tìm cửa hàng gần đây' },
    ];
}

export function getWelcomeMessages(): ChatMessage[] {
    return [
        textMsg('Xin chào! 👋 Mình là **GearBot** — trợ lý ảo của GearVN. Mình có thể giúp bạn:'),
        textMsg('📦 Tra đơn hàng · 🛡️ Bảo hành · 🔧 Dịch vụ · 🏷️ Khuyến mãi · ❓ FAQ · 🏪 Cửa hàng'),
        {
            id: createId(), sender: 'bot', type: 'quick-replies',
            data: getMainQuickReplies(),
            timestamp: Date.now()
        },
    ];
}

// Determine if after this intent, we should wait for a code
export function getWaitingState(intent: Intent): Intent | undefined {
    if (intent === Intent.ORDER_LOOKUP) return Intent.ORDER_LOOKUP;
    if (intent === Intent.WARRANTY_LOOKUP) return Intent.WARRANTY_LOOKUP;
    return undefined;
}

// ============================================================
// BOOKING STATE MACHINE
// ============================================================

export enum BookingStep {
    SELECT_SERVICE = 'SELECT_SERVICE',
    SELECT_DEVICE = 'SELECT_DEVICE',
    ADD_NOTES = 'ADD_NOTES',
    SELECT_LOCATION = 'SELECT_LOCATION',
    SELECT_STORE = 'SELECT_STORE',
    SELECT_DATE = 'SELECT_DATE',
    SELECT_TIME = 'SELECT_TIME',
    CONFIRM = 'CONFIRM',
    DONE = 'DONE',
}

export interface BookingData {
    service?: ServiceEntry;
    device?: PurchasedProduct;
    notes?: string;
    locationType?: 'STORE' | 'HOME';
    store?: StoreEntry;
    date?: string;
    time?: string;
    bookingId?: string;
}

export function getBookingStepMessages(step: BookingStep, data: BookingData): ChatMessage[] {
    const msgs: ChatMessage[] = [];

    switch (step) {
        case BookingStep.SELECT_SERVICE:
            msgs.push(textMsg('Mình sẽ giúp bạn đặt lịch dịch vụ ngay! \nTrước tiên, bạn cần dịch vụ gì? 👇'));
            msgs.push({
                id: createId(), sender: 'bot', type: 'booking-services',
                data: getServices(), timestamp: Date.now()
            });
            break;

        case BookingStep.SELECT_DEVICE:
            msgs.push(textMsg(`Đã chọn **${data.service?.title}** ✅\nBạn muốn thực hiện trên thiết bị nào?`));
            msgs.push({
                id: createId(), sender: 'bot', type: 'booking-devices',
                data: PURCHASED_PRODUCTS, timestamp: Date.now()
            });
            break;

        case BookingStep.ADD_NOTES:
            msgs.push(textMsg(`Đã chọn **${data.device?.name}** ✅\nBạn mô tả sơ qua tình trạng máy nhé! (hoặc bấm Bỏ qua)`));
            msgs.push({
                id: createId(), sender: 'bot', type: 'booking-notes',
                data: null, timestamp: Date.now()
            });
            break;

        case BookingStep.SELECT_LOCATION:
            msgs.push(textMsg('Bạn muốn thực hiện dịch vụ ở đâu?'));
            msgs.push({
                id: createId(), sender: 'bot', type: 'booking-locations',
                data: null, timestamp: Date.now()
            });
            break;

        case BookingStep.SELECT_STORE:
            msgs.push(textMsg('Chọn cửa hàng GearVN:'));
            msgs.push({
                id: createId(), sender: 'bot', type: 'booking-stores',
                data: STORES_DATABASE.filter(s => s.isOpen), timestamp: Date.now()
            });
            break;

        case BookingStep.SELECT_DATE:
            msgs.push(textMsg(`📍 **${data.locationType === 'STORE' ? data.store?.name : 'Tại nhà'}** ✅\nChọn ngày hẹn nhé:`));
            msgs.push({
                id: createId(), sender: 'bot', type: 'booking-dates',
                data: generateAvailableDates(), timestamp: Date.now()
            });
            break;

        case BookingStep.SELECT_TIME:
            msgs.push(textMsg(`📅 Ngày **${data.date}** ✅\nChọn giờ hẹn:`));
            msgs.push({
                id: createId(), sender: 'bot', type: 'booking-times',
                data: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'],
                timestamp: Date.now()
            });
            break;

        case BookingStep.CONFIRM: {
            msgs.push(textMsg('✅ Xác nhận lịch hẹn của bạn:'));
            msgs.push({
                id: createId(), sender: 'bot', type: 'booking-summary',
                data: data, timestamp: Date.now()
            });
            break;
        }

        case BookingStep.DONE: {
            const bookingId = generateBookingId();
            const updatedData = { ...data, bookingId };
            saveBooking(updatedData);
            msgs.push({
                id: createId(), sender: 'bot', type: 'booking-success',
                data: updatedData, timestamp: Date.now()
            });
            msgs.push(textMsg('Bạn cần mình hỗ trợ thêm gì không? 😊'));
            msgs.push({
                id: createId(), sender: 'bot', type: 'quick-replies',
                data: getMainQuickReplies(), timestamp: Date.now()
            });
            break;
        }
    }

    return msgs;
}

// Generate next 7 available dates
function generateAvailableDates(): { label: string; value: string }[] {
    const dates: { label: string; value: string }[] = [];
    const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const now = new Date();

    for (let i = 1; i <= 7; i++) {
        const d = new Date(now);
        d.setDate(d.getDate() + i);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const dayName = dayNames[d.getDay()];
        dates.push({
            label: `${dayName} ${day}/${month}`,
            value: `${day}/${month}/${d.getFullYear()}`
        });
    }
    return dates;
}

// Generate booking ID
function generateBookingId(): string {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const seq = String(Math.floor(Math.random() * 900) + 100);
    return `SVC-${y}${m}${d}-${seq}`;
}

// Save booking to localStorage
function saveBooking(data: BookingData): void {
    try {
        const existing = JSON.parse(localStorage.getItem('gearvn_bookings') || '[]');
        existing.push({
            ...data,
            createdAt: new Date().toISOString(),
        });
        localStorage.setItem('gearvn_bookings', JSON.stringify(existing));
    } catch (e) {
        console.error('Failed to save booking:', e);
    }
}

// Get saved bookings
export function getSavedBookings(): (BookingData & { createdAt: string })[] {
    try {
        return JSON.parse(localStorage.getItem('gearvn_bookings') || '[]');
    } catch {
        return [];
    }
}
