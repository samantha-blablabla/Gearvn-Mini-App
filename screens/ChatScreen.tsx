import React, { useState, useRef, useEffect } from 'react';
import { ScreenName } from '../types';
import {
    type ChatMessage,
    type QuickReply,
    Intent,
    BookingStep,
    type BookingData,
    processMessage,
    getMainQuickReplies,
    getWaitingState,
    getBookingStepMessages,
    detectIntent,
    getSavedBookings,
} from '../utils/chatEngine';
import type { FAQEntry, PromoEntry, ServiceEntry, StoreEntry, PurchasedProduct } from '../utils/chatKnowledgeBase';

// ─── Welcome Suggestions ───────────────────────────────────────

const WELCOME_SUGGESTIONS = [
    { label: 'Tra cứu đơn hàng', desc: 'Kiểm tra tình trạng giao hàng', icon: 'ph-package', action: 'Tra cứu đơn hàng', bg: 'bg-red-50' },
    { label: 'Bảo hành & Sửa chữa', desc: 'Tra tiến độ bảo hành', icon: 'ph-shield-check', action: 'Tra cứu bảo hành', bg: 'bg-blue-50' },
    { label: 'Đặt lịch dịch vụ', desc: 'Vệ sinh, nâng cấp, sửa chữa', icon: 'ph-wrench', action: 'Đặt lịch dịch vụ', bg: 'bg-amber-50' },
    { label: 'Khuyến mãi đang có', desc: 'Deal hot, giá tốt hôm nay', icon: 'ph-tag', action: 'Có khuyến mãi gì?', bg: 'bg-green-50' },
    { label: 'Chính sách mua hàng', desc: 'Đổi trả, trả góp, ship', icon: 'ph-question', action: 'Chính sách đổi trả', bg: 'bg-purple-50' },
    { label: 'Tìm cửa hàng', desc: 'GearVN gần bạn nhất', icon: 'ph-storefront', action: 'Tìm cửa hàng gần đây', bg: 'bg-teal-50' },
];

// ─── Component ─────────────────────────────────────────────────

interface ChatScreenProps {
    onBack: () => void;
    onNavigate: (screen: ScreenName) => void;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ onBack, onNavigate }) => {
    // View state
    const [hasStartedChat, setHasStartedChat] = useState(false);

    // Chat state
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [waitingFor, setWaitingFor] = useState<Intent | undefined>(undefined);

    // Booking state machine
    const [bookingStep, setBookingStep] = useState<BookingStep | null>(null);
    const [bookingData, setBookingData] = useState<BookingData>({});

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomAnchorRef = useRef<HTMLDivElement>(null);

    // ─── Helpers ───────────────────────────────────────────────

    const scrollToBottom = (smooth = true) => {
        requestAnimationFrame(() => {
            bottomAnchorRef.current?.scrollIntoView({
                behavior: smooth ? 'smooth' : 'instant',
                block: 'end',
            });
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    let messageIdCounter = 0;
    const createId = () => `msg-${Date.now()}-${++messageIdCounter}-${Math.random().toString(36).slice(2, 6)}`;

    const addBotMessages = (newMsgs: ChatMessage[], callback?: () => void) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, ...newMsgs]);
            setIsTyping(false);
            callback?.();
        }, 500 + Math.random() * 300);
    };

    const addUserSelection = (text: string) => {
        const userMsg: ChatMessage = {
            id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
            sender: 'user',
            type: 'text',
            text,
            timestamp: Date.now(),
        };
        setMessages(prev => [...prev, userMsg]);
    };

    // ─── Start Chat from Welcome ──────────────────────────────

    const handleStartChat = (action: string) => {
        setHasStartedChat(true);

        const greetingMsg: ChatMessage = {
            id: createId(),
            sender: 'bot',
            type: 'text',
            text: 'Xin chào! 👋 Mình là **GearBot** — trợ lý GearVN. Để mình hỗ trợ bạn nhé!',
            timestamp: Date.now(),
        };
        const userMsg: ChatMessage = {
            id: `user-${Date.now()}`,
            sender: 'user',
            type: 'text',
            text: action,
            timestamp: Date.now(),
        };
        setMessages([greetingMsg, userMsg]);

        // Process the action
        setIsTyping(true);
        setTimeout(() => {
            const { intent } = detectIntent(action);

            if (intent === Intent.SERVICE_BOOKING) {
                setBookingStep(BookingStep.SELECT_SERVICE);
                const msgs = getBookingStepMessages(BookingStep.SELECT_SERVICE, {});
                setMessages(prev => [...prev, ...msgs]);
                setIsTyping(false);
                return;
            }

            const botResponses = processMessage(action, {});
            const startsBooking = botResponses.some(m => m.type === 'booking-services');
            if (startsBooking) {
                setBookingStep(BookingStep.SELECT_SERVICE);
                setBookingData({});
            }

            const nextWaiting = getWaitingState(intent);
            const hasDataCard = botResponses.some(m => m.type === 'order-card' || m.type === 'warranty-card');
            if (hasDataCard) setWaitingFor(undefined);
            else if (nextWaiting) setWaitingFor(nextWaiting);

            setMessages(prev => [...prev, ...botResponses]);
            setIsTyping(false);
        }, 700);
    };

    const handleStartFreeChat = () => {
        setHasStartedChat(true);
        const greetingMsg: ChatMessage = {
            id: createId(),
            sender: 'bot',
            type: 'text',
            text: 'Xin chào! 👋 Mình là **GearBot** — trợ lý GearVN. Mình có thể giúp gì cho bạn?',
            timestamp: Date.now(),
        };
        const qrMsg: ChatMessage = {
            id: createId(),
            sender: 'bot',
            type: 'quick-replies',
            data: getMainQuickReplies(),
            timestamp: Date.now(),
        };
        setMessages([greetingMsg, qrMsg]);
        setTimeout(() => inputRef.current?.focus(), 300);
    };

    const handleResetChat = () => {
        setHasStartedChat(false);
        setMessages([]);
        setInputText('');
        setWaitingFor(undefined);
        setBookingStep(null);
        setBookingData({});
        setIsTyping(false);
    };

    // ─── Send Message ──────────────────────────────────────────

    const sendMessage = (text: string) => {
        if (!text.trim()) return;

        const userMsg: ChatMessage = {
            id: `user-${Date.now()}`,
            sender: 'user',
            type: 'text',
            text: text.trim(),
            timestamp: Date.now(),
        };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');

        // If we're in booking notes step, treat text as notes
        if (bookingStep === BookingStep.ADD_NOTES) {
            const updated = { ...bookingData, notes: text.trim() };
            setBookingData(updated);
            const nextStep = BookingStep.SELECT_LOCATION;
            setBookingStep(nextStep);
            addBotMessages(getBookingStepMessages(nextStep, updated));
            return;
        }

        // Normal flow
        setIsTyping(true);
        setTimeout(() => {
            const { intent } = detectIntent(text);

            if (intent === Intent.SERVICE_BOOKING && !bookingStep) {
                setBookingStep(BookingStep.SELECT_SERVICE);
                const msgs = getBookingStepMessages(BookingStep.SELECT_SERVICE, {});
                setMessages(prev => [...prev, ...msgs]);
                setIsTyping(false);
                setWaitingFor(undefined);
                return;
            }

            const botResponses = processMessage(text, { waitingFor });

            const startsBooking = botResponses.some(m => m.type === 'booking-services');
            if (startsBooking) {
                setBookingStep(BookingStep.SELECT_SERVICE);
                setBookingData({});
            }

            const nextWaiting = getWaitingState(intent);
            const hasDataCard = botResponses.some(m =>
                m.type === 'order-card' || m.type === 'warranty-card'
            );
            if (hasDataCard) {
                setWaitingFor(undefined);
            } else if (nextWaiting) {
                setWaitingFor(nextWaiting);
            } else {
                setWaitingFor(undefined);
            }

            setMessages(prev => [...prev, ...botResponses]);
            setIsTyping(false);
        }, 600 + Math.random() * 400);
    };

    const handleQuickReply = (action: string) => sendMessage(action);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(inputText);
        }
    };

    // ─── Booking Flow Handlers ─────────────────────────────────

    const handleBookingServiceSelect = (service: ServiceEntry) => {
        addUserSelection(service.title);
        const updated = { ...bookingData, service };
        setBookingData(updated);
        const nextStep = BookingStep.SELECT_DEVICE;
        setBookingStep(nextStep);
        addBotMessages(getBookingStepMessages(nextStep, updated));
    };

    const handleBookingDeviceSelect = (device: PurchasedProduct) => {
        addUserSelection(device.name);
        const updated = { ...bookingData, device };
        setBookingData(updated);
        const nextStep = BookingStep.ADD_NOTES;
        setBookingStep(nextStep);
        addBotMessages(getBookingStepMessages(nextStep, updated));
    };

    const handleBookingSkipNotes = () => {
        addUserSelection('Bỏ qua');
        const updated = { ...bookingData, notes: '' };
        setBookingData(updated);
        const nextStep = BookingStep.SELECT_LOCATION;
        setBookingStep(nextStep);
        addBotMessages(getBookingStepMessages(nextStep, updated));
    };

    const handleBookingLocationSelect = (locationType: 'STORE' | 'HOME') => {
        addUserSelection(locationType === 'STORE' ? '🏪 Tại cửa hàng' : '🏠 Tại nhà');
        const updated = { ...bookingData, locationType };
        setBookingData(updated);
        if (locationType === 'STORE') {
            const nextStep = BookingStep.SELECT_STORE;
            setBookingStep(nextStep);
            addBotMessages(getBookingStepMessages(nextStep, updated));
        } else {
            const nextStep = BookingStep.SELECT_DATE;
            setBookingStep(nextStep);
            addBotMessages(getBookingStepMessages(nextStep, updated));
        }
    };

    const handleBookingStoreSelect = (store: StoreEntry) => {
        addUserSelection(`📍 ${store.name}`);
        const updated = { ...bookingData, store };
        setBookingData(updated);
        const nextStep = BookingStep.SELECT_DATE;
        setBookingStep(nextStep);
        addBotMessages(getBookingStepMessages(nextStep, updated));
    };

    const handleBookingDateSelect = (date: string) => {
        addUserSelection(`📅 ${date}`);
        const updated = { ...bookingData, date };
        setBookingData(updated);
        const nextStep = BookingStep.SELECT_TIME;
        setBookingStep(nextStep);
        addBotMessages(getBookingStepMessages(nextStep, updated));
    };

    const handleBookingTimeSelect = (time: string) => {
        addUserSelection(`🕐 ${time}`);
        const updated = { ...bookingData, time };
        setBookingData(updated);
        const nextStep = BookingStep.CONFIRM;
        setBookingStep(nextStep);
        addBotMessages(getBookingStepMessages(nextStep, updated));
    };

    const handleBookingConfirm = () => {
        addUserSelection('✅ Xác nhận đặt lịch');
        const nextStep = BookingStep.DONE;
        setBookingStep(null);
        addBotMessages(getBookingStepMessages(nextStep, bookingData), () => {
            setBookingData({});
        });
    };

    const handleBookingCancel = () => {
        addUserSelection('❌ Huỷ');
        setBookingStep(null);
        setBookingData({});
        addBotMessages([
            {
                id: createId(),
                sender: 'bot',
                type: 'text',
                text: 'Đã huỷ đặt lịch. Bạn cần mình hỗ trợ gì khác không? 😊',
                timestamp: Date.now()
            },
            {
                id: createId(),
                sender: 'bot',
                type: 'quick-replies',
                data: getMainQuickReplies(),
                timestamp: Date.now()
            },
        ]);
    };

    // ═══════════════════════════════════════════════════════════
    //  CARD RENDERERS
    // ═══════════════════════════════════════════════════════════

    const renderOrderCard = (data: any) => (
        <div className="bg-white rounded-[18px] overflow-hidden shadow-sm border border-gray-100 max-w-[280px]">
            <div className="flex gap-3 p-3">
                <div className="size-14 bg-gray-50 rounded-[12px] shrink-0 overflow-hidden p-1 border border-gray-100">
                    <img src={data.image} alt={data.productName} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold text-gray-400">{data.id}</p>
                    <p className="text-[13px] font-bold text-gray-900 line-clamp-2 leading-tight mt-0.5">{data.productName}</p>
                </div>
            </div>
            <div className="px-3 pb-3 flex items-center justify-between">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${data.status === 'SHIPPING' ? 'bg-blue-100 text-blue-600' :
                    data.status === 'COMPLETED' ? 'bg-green-100 text-green-600' :
                        data.status === 'CANCELLED' ? 'bg-red-100 text-red-600' :
                            'bg-orange-100 text-orange-600'
                    }`}>
                    {data.status === 'SHIPPING' ? '🚚' : data.status === 'COMPLETED' ? '✅' : '⏳'} {data.statusText}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">{data.date}</span>
            </div>
            <div className="border-t border-gray-100 px-3 py-2 flex justify-between items-center bg-gray-50/50">
                <span className="text-[13px] font-bold text-primary">{data.total}</span>
            </div>
        </div>
    );

    const renderWarrantyCard = (data: any) => (
        <div className="bg-white rounded-[18px] overflow-hidden shadow-sm border border-gray-100 max-w-[280px]">
            <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                    <div className={`size-8 rounded-full flex items-center justify-center text-sm ${data.status === 'REPAIRING' ? 'bg-orange-100 text-orange-600' :
                        data.status === 'COMPLETED' ? 'bg-green-100 text-green-600' :
                            'bg-blue-100 text-blue-600'
                        }`}>
                        <i className={`ph-fill ${data.status === 'REPAIRING' ? 'ph-wrench' :
                            data.status === 'COMPLETED' ? 'ph-check-circle' :
                                'ph-clock'
                            }`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold text-gray-900">{data.productName}</p>
                        <p className="text-[11px] text-gray-400 font-medium">S/N: {data.serialNumber}</p>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-[12px] p-2.5 space-y-1.5">
                    <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">Mã BH</span>
                        <span className="font-bold text-gray-900">{data.id}</span>
                    </div>
                    <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">Trạng thái</span>
                        <span className={`font-bold ${data.status === 'REPAIRING' ? 'text-orange-600' :
                            data.status === 'COMPLETED' ? 'text-green-600' : 'text-blue-600'
                            }`}>{data.statusText}</span>
                    </div>
                    <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">Ngày gửi</span>
                        <span className="font-medium text-gray-700">{data.submittedDate}</span>
                    </div>
                    <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">Dự kiến</span>
                        <span className="font-medium text-gray-700">{data.estimatedDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderServiceList = (data: ServiceEntry[]) => (
        <div className="space-y-2 max-w-[300px]">
            {data.map((svc) => (
                <button
                    key={svc.id}
                    onClick={() => onNavigate(ScreenName.SERVICE_BOOKING)}
                    className="w-full bg-white rounded-[14px] p-3 flex items-center gap-3 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform text-left"
                >
                    <div className={`size-10 rounded-[10px] flex items-center justify-center text-lg ${svc.color}`}>
                        <i className={`ph-fill ${svc.icon}`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold text-gray-900">{svc.title}</p>
                        <p className="text-[11px] text-gray-500 font-medium">{svc.desc}</p>
                    </div>
                    <i className="ph ph-caret-right text-gray-300"></i>
                </button>
            ))}
        </div>
    );

    // ── Booking UI Cards ───────────────────────────────────────

    const renderBookingServices = (data: ServiceEntry[]) => (
        <div className="space-y-2 max-w-[300px]">
            {data.map((svc) => (
                <button
                    key={svc.id}
                    onClick={() => handleBookingServiceSelect(svc)}
                    className="w-full bg-white rounded-[14px] p-3 flex items-center gap-3 shadow-sm border border-gray-100 active:scale-[0.97] transition-transform text-left hover:border-primary/30"
                >
                    <div className={`size-10 rounded-[10px] flex items-center justify-center text-lg ${svc.color}`}>
                        <i className={`ph-fill ${svc.icon}`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold text-gray-900">{svc.title}</p>
                        <p className="text-[11px] text-gray-500 font-medium">{svc.desc}</p>
                    </div>
                    <i className="ph ph-caret-right text-gray-300"></i>
                </button>
            ))}
        </div>
    );

    const renderBookingDevices = (data: PurchasedProduct[]) => (
        <div className="space-y-2 max-w-[300px]">
            {data.map((device) => (
                <button
                    key={device.id}
                    onClick={() => handleBookingDeviceSelect(device)}
                    className="w-full bg-white rounded-[14px] p-3 flex items-center gap-3 shadow-sm border border-gray-100 active:scale-[0.97] transition-transform text-left hover:border-primary/30"
                >
                    <div className="size-10 bg-gray-100 rounded-[10px] flex items-center justify-center shrink-0">
                        <i className="ph-fill ph-laptop text-gray-500 text-lg"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold text-gray-900 line-clamp-1">{device.name}</p>
                        <p className="text-[11px] text-gray-400 font-medium">S/N: {device.serialNumber}</p>
                        <p className="text-[10px] text-gray-400">Mua: {device.purchaseDate}</p>
                    </div>
                </button>
            ))}
        </div>
    );

    const renderBookingNotes = () => (
        <div className="max-w-[280px]">
            <button
                onClick={handleBookingSkipNotes}
                className="bg-white text-gray-500 border border-gray-200 text-[12px] font-bold px-4 py-2 rounded-full hover:bg-gray-50 active:scale-95 transition-all"
            >
                ⏭️ Bỏ qua
            </button>
            <p className="text-[10px] text-gray-400 mt-2 italic">Hoặc gõ mô tả phía dưới rồi gửi</p>
        </div>
    );

    const renderBookingLocations = () => (
        <div className="flex gap-2 max-w-[300px]">
            <button
                onClick={() => handleBookingLocationSelect('STORE')}
                className="flex-1 bg-white rounded-[14px] p-4 flex flex-col items-center gap-2 shadow-sm border border-gray-100 active:scale-[0.97] transition-transform hover:border-primary/30"
            >
                <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="ph-fill ph-storefront text-primary text-2xl"></i>
                </div>
                <p className="text-[13px] font-bold text-gray-900">Tại cửa hàng</p>
                <p className="text-[10px] text-gray-500">Mang máy đến GearVN</p>
            </button>
            <button
                onClick={() => handleBookingLocationSelect('HOME')}
                className="flex-1 bg-white rounded-[14px] p-4 flex flex-col items-center gap-2 shadow-sm border border-gray-100 active:scale-[0.97] transition-transform hover:border-primary/30"
            >
                <div className="size-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <i className="ph-fill ph-house text-green-600 text-2xl"></i>
                </div>
                <p className="text-[13px] font-bold text-gray-900">Tại nhà</p>
                <p className="text-[10px] text-gray-500">KTV đến tận nơi</p>
            </button>
        </div>
    );

    const renderBookingStores = (data: StoreEntry[]) => (
        <div className="space-y-2 max-w-[300px]">
            {data.map((store) => (
                <button
                    key={store.id}
                    onClick={() => handleBookingStoreSelect(store)}
                    className="w-full bg-white rounded-[14px] p-3 flex items-center gap-3 shadow-sm border border-gray-100 active:scale-[0.97] transition-transform text-left hover:border-primary/30"
                >
                    <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <i className="ph-fill ph-map-pin text-primary text-lg"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold text-gray-900">{store.name}</p>
                        <p className="text-[11px] text-gray-500 line-clamp-1">{store.address}</p>
                    </div>
                </button>
            ))}
        </div>
    );

    const renderBookingDates = (data: { label: string; value: string }[]) => (
        <div className="flex flex-wrap gap-1.5 max-w-[320px]">
            {data.map((d) => (
                <button
                    key={d.value}
                    onClick={() => handleBookingDateSelect(d.value)}
                    className="bg-white border border-gray-200 text-[12px] font-bold px-3 py-2 rounded-[10px] hover:bg-primary/5 hover:border-primary/30 active:scale-95 transition-all text-gray-700"
                >
                    📅 {d.label}
                </button>
            ))}
        </div>
    );

    const renderBookingTimes = (data: string[]) => (
        <div className="flex flex-wrap gap-1.5 max-w-[320px]">
            {data.map((t) => (
                <button
                    key={t}
                    onClick={() => handleBookingTimeSelect(t)}
                    className="bg-white border border-gray-200 text-[12px] font-bold px-3 py-2 rounded-[10px] hover:bg-primary/5 hover:border-primary/30 active:scale-95 transition-all text-gray-700"
                >
                    🕐 {t}
                </button>
            ))}
        </div>
    );

    const renderBookingSummary = (data: BookingData) => (
        <div className="bg-white rounded-[16px] overflow-hidden border border-gray-200 max-w-[300px]">
            <div className="p-3.5 space-y-3">
                <div className="flex items-center gap-2">
                    <i className="ph ph-clipboard-text text-gray-400 text-lg"></i>
                    <p className="text-[13px] font-bold text-gray-700">Xác nhận lịch hẹn</p>
                </div>
                <div className="bg-gray-50 rounded-[12px] p-3 space-y-2">
                    <div className="flex justify-between text-[12px]">
                        <span className="text-gray-400">Dịch vụ</span>
                        <span className="font-bold text-gray-800">{data.service?.title}</span>
                    </div>
                    <div className="flex justify-between text-[12px]">
                        <span className="text-gray-400">Thiết bị</span>
                        <span className="font-semibold text-gray-700 text-right max-w-[160px] truncate">{data.device?.name}</span>
                    </div>
                    {data.notes && (
                        <div className="flex justify-between text-[12px]">
                            <span className="text-gray-400">Ghi chú</span>
                            <span className="text-gray-600 text-right max-w-[160px] line-clamp-2">{data.notes}</span>
                        </div>
                    )}
                    <div className="flex justify-between text-[12px]">
                        <span className="text-gray-400">Địa điểm</span>
                        <span className="font-semibold text-gray-700">
                            {data.locationType === 'STORE' ? data.store?.name : '🏠 Tại nhà'}
                        </span>
                    </div>
                    <div className="flex justify-between text-[12px]">
                        <span className="text-gray-400">Ngày giờ</span>
                        <span className="font-bold text-gray-900">{data.date} — {data.time}</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-100 px-3 py-2.5 flex gap-2">
                <button
                    onClick={handleBookingCancel}
                    className="flex-1 text-gray-500 text-[12px] font-semibold py-2 rounded-[10px] border border-gray-200 active:scale-95 transition-transform hover:bg-gray-50"
                >
                    Huỷ bỏ
                </button>
                <button
                    onClick={handleBookingConfirm}
                    className="flex-[2] bg-gray-900 text-white text-[12px] font-bold py-2 rounded-[10px] active:scale-95 transition-transform"
                >
                    Xác nhận đặt lịch
                </button>
            </div>
        </div>
    );

    const renderBookingSuccess = (data: BookingData) => (
        <div className="bg-white rounded-[16px] overflow-hidden border border-green-200 max-w-[300px]">
            <div className="p-4 text-center">
                <div className="size-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className="ph-fill ph-check text-green-600 text-xl"></i>
                </div>
                <p className="text-[15px] font-bold text-gray-900">Đặt lịch thành công!</p>
                <p className="text-[11px] text-gray-400 mt-0.5">GearVN sẽ liên hệ xác nhận qua SĐT</p>
            </div>
            <div className="mx-3 bg-green-50 rounded-[12px] p-2.5 text-center">
                <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Mã lịch hẹn</p>
                <p className="text-[17px] font-black text-green-700 tracking-wider mt-0.5">{data.bookingId}</p>
            </div>
            <div className="p-3 space-y-1.5 mt-1">
                <div className="flex justify-between text-[12px]">
                    <span className="text-gray-400">Dịch vụ</span>
                    <span className="font-bold text-gray-800">{data.service?.title}</span>
                </div>
                <div className="flex justify-between text-[12px]">
                    <span className="text-gray-400">Thiết bị</span>
                    <span className="font-semibold text-gray-700 text-right max-w-[160px] truncate">{data.device?.name}</span>
                </div>
                <div className="flex justify-between text-[12px]">
                    <span className="text-gray-400">Ngày giờ</span>
                    <span className="font-bold text-gray-900">{data.date} — {data.time}</span>
                </div>
            </div>
            <div className="border-t border-gray-100 p-2.5">
                <button
                    onClick={() => onNavigate(ScreenName.SERVICE_BOOKING)}
                    className="w-full text-[12px] font-bold text-gray-600 py-2 rounded-[10px] border border-gray-200 active:scale-95 transition-transform hover:bg-gray-50 flex items-center justify-center gap-1.5"
                >
                    <i className="ph ph-calendar-check text-sm"></i>
                    Xem lịch hẹn
                </button>
            </div>
        </div>
    );

    // ── Other Card Renderers ───────────────────────────────────

    const renderPromoList = (data: PromoEntry[]) => (
        <div className="flex gap-2 overflow-x-auto pb-1 max-w-[320px] hide-scrollbar">
            {data.map((promo) => (
                <div key={promo.id} className="bg-white rounded-[14px] overflow-hidden shadow-sm border border-gray-100 shrink-0 w-[160px]">
                    <div className="relative h-24 bg-gray-50 flex items-center justify-center p-3">
                        <img src={promo.image} alt={promo.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                        <span className="absolute top-1.5 left-1.5 bg-primary text-white text-[10px] font-black px-1.5 py-0.5 rounded-md">{promo.discount}</span>
                    </div>
                    <div className="p-2.5">
                        <p className="text-[11px] font-bold text-gray-900 line-clamp-2 leading-tight h-[28px]">{promo.name}</p>
                        <p className="text-[13px] font-bold text-primary mt-1">{promo.price}</p>
                        <p className="text-[10px] text-gray-400 line-through">{promo.oldPrice}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderFAQCard = (data: FAQEntry) => (
        <div className="bg-white rounded-[14px] p-3 shadow-sm border border-gray-100 max-w-[300px]">
            <div className="flex items-start gap-2.5">
                <div className="size-8 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <i className={`ph-fill ${data.icon} text-blue-600`}></i>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-gray-900 mb-1.5">{data.question}</p>
                    <p className="text-[12px] text-gray-600 leading-relaxed">{data.answer}</p>
                </div>
            </div>
        </div>
    );

    const renderStoreList = (data: StoreEntry[]) => (
        <div className="space-y-2 max-w-[300px]">
            {data.map((store) => (
                <div key={store.id} className="bg-white rounded-[14px] p-3 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-1.5">
                        <p className="text-[13px] font-bold text-gray-900">{store.name}</p>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${store.isOpen ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'
                            }`}>{store.isOpen ? 'Mở cửa' : 'Đã đóng'}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{store.address}</p>
                    <div className="flex items-center gap-3 mt-2">
                        <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
                            <i className="ph ph-map-pin"></i> {store.distance}
                        </span>
                        <span className="text-[11px] text-primary font-bold flex items-center gap-1 cursor-pointer">
                            <i className="ph ph-phone"></i> {store.phone}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderEscalation = (msg: ChatMessage) => (
        <div className="bg-orange-50 rounded-[14px] p-3 border border-orange-100 max-w-[280px]">
            <p className="text-[12px] text-orange-900 font-medium mb-2">{msg.text}</p>
            <div className="flex gap-2">
                <button className="flex-1 bg-primary text-white text-[12px] font-bold py-2 rounded-[10px] text-center active:scale-95 transition-transform flex items-center justify-center gap-1.5 shadow-sm shadow-primary/20">
                    <i className="ph-fill ph-chats text-sm"></i>
                    Chat với Tư vấn viên
                </button>
            </div>
        </div>
    );

    const renderQuickReplies = (data: QuickReply[]) => (
        <div className="flex flex-wrap gap-1.5 max-w-[320px]">
            {data.map((qr, i) => (
                <button
                    key={i}
                    onClick={() => handleQuickReply(qr.action)}
                    className="bg-white border border-primary/20 text-primary text-[12px] font-bold px-3 py-1.5 rounded-full hover:bg-primary/5 active:scale-95 transition-all flex items-center gap-1.5"
                >
                    <i className={`ph ${qr.icon} text-sm`}></i>
                    {qr.label}
                </button>
            ))}
        </div>
    );

    // ─── Message Renderer ──────────────────────────────────────

    const renderMessage = (msg: ChatMessage) => {
        const isUser = msg.sender === 'user';

        return (
            <div key={msg.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
                {!isUser && (
                    <div className="size-7 bg-primary rounded-full flex items-center justify-center shrink-0 mr-2 mt-1">
                        <i className="ph-fill ph-robot text-white text-xs"></i>
                    </div>
                )}
                <div className="max-w-[85%]">
                    {msg.type === 'text' && (
                        <div className={`px-3.5 py-2.5 rounded-[18px] ${isUser
                            ? 'bg-primary text-white rounded-br-[6px]'
                            : 'bg-gray-100 text-gray-900 rounded-bl-[6px]'
                            }`}>
                            <p className="text-[14px] leading-relaxed font-medium whitespace-pre-wrap"
                                dangerouslySetInnerHTML={{
                                    __html: (msg.text || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                }}
                            />
                        </div>
                    )}
                    {msg.type === 'order-card' && renderOrderCard(msg.data)}
                    {msg.type === 'warranty-card' && renderWarrantyCard(msg.data)}
                    {msg.type === 'service-list' && renderServiceList(msg.data)}
                    {msg.type === 'promo-list' && renderPromoList(msg.data)}
                    {msg.type === 'faq-card' && renderFAQCard(msg.data)}
                    {msg.type === 'store-list' && renderStoreList(msg.data)}
                    {msg.type === 'escalation' && renderEscalation(msg)}
                    {msg.type === 'quick-replies' && renderQuickReplies(msg.data)}

                    {msg.type === 'booking-services' && renderBookingServices(msg.data)}
                    {msg.type === 'booking-devices' && renderBookingDevices(msg.data)}
                    {msg.type === 'booking-notes' && renderBookingNotes()}
                    {msg.type === 'booking-locations' && renderBookingLocations()}
                    {msg.type === 'booking-stores' && renderBookingStores(msg.data)}
                    {msg.type === 'booking-dates' && renderBookingDates(msg.data)}
                    {msg.type === 'booking-times' && renderBookingTimes(msg.data)}
                    {msg.type === 'booking-summary' && renderBookingSummary(msg.data)}
                    {msg.type === 'booking-success' && renderBookingSuccess(msg.data)}
                </div>
            </div>
        );
    };

    // ═══════════════════════════════════════════════════════════
    //  WELCOME VIEW — Lovi-inspired landing
    // ═══════════════════════════════════════════════════════════

    if (!hasStartedChat) {
        const recentBookings = getSavedBookings().slice(-2).reverse();

        return (
            <div className="min-h-screen bg-[#F8F8FA] flex flex-col">
                {/* Header */}
                <header
                    className="flex items-center justify-between px-5"
                    style={{ paddingTop: 'calc(env(safe-area-inset-top) + 12px)', paddingBottom: '8px' }}
                >
                    <button
                        onClick={onBack}
                        className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 active:scale-90 transition-all"
                    >
                        <i className="ph ph-caret-left text-xl text-gray-500"></i>
                    </button>
                    <button
                        className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 active:scale-90 transition-all"
                        onClick={onBack}
                    >
                        <i className="ph ph-x text-xl text-gray-500"></i>
                    </button>
                </header>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6">
                    {/* Avatar + Greeting */}
                    <div className="flex flex-col items-center pt-6 pb-8">
                        <div className="size-[88px] bg-white rounded-full flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] mb-5">
                            <i className="ph-fill ph-robot text-primary text-[40px]"></i>
                        </div>
                        <h1 className="text-[24px] font-bold text-gray-900 text-center leading-snug">
                            Xin chào! 👋{'\n'}
                            Mình là <span className="text-primary">GearBot</span>
                        </h1>
                        <p className="text-[14px] text-gray-400 mt-2 text-center font-medium">
                            Trợ lý hỗ trợ của GearVN
                        </p>
                    </div>

                    {/* Suggestions */}
                    <div>
                        <p className="text-[13px] text-gray-400 font-medium mb-3">Bắt đầu chat</p>
                        <div className="grid grid-cols-2 gap-2.5">
                            {WELCOME_SUGGESTIONS.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleStartChat(s.action)}
                                    className={`${s.bg} rounded-[16px] p-3.5 text-left active:scale-[0.97] transition-all duration-150`}
                                >
                                    <p className="text-[13px] font-bold text-gray-800 leading-snug">{s.label}</p>
                                    <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{s.desc}</p>
                                    <div className="flex justify-end mt-2.5">
                                        <i className="ph ph-arrow-up-right text-gray-400 text-sm"></i>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Recent Bookings (History) */}
                    {recentBookings.length > 0 && (
                        <div className="mt-6 mb-4">
                            <p className="text-[13px] text-gray-400 font-medium mb-3">Lịch sử</p>
                            <div className="space-y-2">
                                {recentBookings.map((b, i) => (
                                    <div
                                        key={i}
                                        className="bg-white rounded-[14px] p-3.5 border border-gray-100"
                                    >
                                        <p className="text-[13px] font-bold text-gray-900">{b.service?.title || 'Dịch vụ'}</p>
                                        <p className="text-[11px] text-gray-400 mt-0.5">
                                            {b.date} — {b.time}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Input Tap Area */}
                <div
                    className="px-5 py-3"
                    style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 12px)' }}
                >
                    <button
                        onClick={handleStartFreeChat}
                        className="w-full h-[48px] bg-white border border-gray-200 rounded-full flex items-center px-4 active:scale-[0.98] transition-transform"
                    >
                        <span className="text-[14px] text-gray-400 font-medium flex-1 text-left">Nhắn tin cho GearBot...</span>
                        <div className="size-8 bg-primary rounded-full flex items-center justify-center shadow-sm">
                            <i className="ph-fill ph-paper-plane-tilt text-white text-sm"></i>
                        </div>
                    </button>
                </div>
            </div>
        );
    }

    // ═══════════════════════════════════════════════════════════
    //  CHAT VIEW — Standard messaging UI
    // ═══════════════════════════════════════════════════════════

    return (
        <div className="min-h-screen bg-[#F2F4F6] flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
                <div
                    className="flex items-center px-4 justify-between"
                    style={{ paddingTop: 'calc(env(safe-area-inset-top) + 8px)', paddingBottom: '10px' }}
                >
                    <button
                        onClick={onBack}
                        className="flex items-center justify-center size-10 rounded-full bg-gray-100 active:scale-90 transition-transform text-gray-700"
                    >
                        <i className="ph ph-caret-left text-xl"></i>
                    </button>
                    <div className="flex items-center gap-2.5">
                        <div className="size-9 bg-primary rounded-full flex items-center justify-center shadow-md shadow-primary/20">
                            <i className="ph-fill ph-robot text-white text-lg"></i>
                        </div>
                        <div>
                            <p className="text-[15px] font-bold text-gray-900 leading-tight">GearBot</p>
                            <p className="text-[11px] text-green-500 font-semibold flex items-center gap-1">
                                <span className="size-1.5 bg-green-500 rounded-full inline-block"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleResetChat}
                        className="flex items-center justify-center size-10 rounded-full bg-gray-100 active:scale-90 transition-transform text-gray-700"
                    >
                        <i className="ph ph-arrow-counter-clockwise text-lg"></i>
                    </button>
                </div>
            </header>

            {/* Messages Area */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-4"
                style={{ paddingBottom: '80px' }}
            >
                {messages.map(renderMessage)}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="flex justify-start mb-3">
                        <div className="size-7 bg-primary rounded-full flex items-center justify-center shrink-0 mr-2 mt-1">
                            <i className="ph-fill ph-robot text-white text-xs"></i>
                        </div>
                        <div className="bg-gray-100 rounded-[18px] rounded-bl-[6px] px-4 py-3">
                            <div className="flex gap-1">
                                <span className="size-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                <span className="size-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                <span className="size-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Scroll anchor */}
                <div ref={bottomAnchorRef} className="h-px" />
            </div>

            {/* Input Area */}
            <div
                className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/95 backdrop-blur-xl border-t border-gray-200/50 z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
                style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 8px)' }}
            >
                <div className="flex items-center gap-2 px-3 py-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={
                            bookingStep === BookingStep.ADD_NOTES ? 'Mô tả tình trạng máy...' :
                                waitingFor === Intent.ORDER_LOOKUP ? 'Nhập mã đơn (VD: GVN-910293)...' :
                                    waitingFor === Intent.WARRANTY_LOOKUP ? 'Nhập mã BH hoặc Serial...' :
                                        'Nhắn tin cho GearBot...'
                        }
                        className="flex-1 h-10 bg-gray-100 rounded-full px-4 text-[14px] font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <button
                        onClick={() => sendMessage(inputText)}
                        disabled={!inputText.trim() || isTyping}
                        className={`size-10 rounded-full flex items-center justify-center transition-all active:scale-90 ${inputText.trim() && !isTyping
                            ? 'bg-primary text-white shadow-md shadow-primary/20'
                            : 'bg-gray-100 text-gray-400'
                            }`}
                    >
                        <i className="ph-fill ph-paper-plane-tilt text-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
