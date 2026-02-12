import React, { useState, useRef, useEffect } from 'react';
import { ScreenName } from '../types';

interface ServiceBookingScreenProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

type ServiceType = 'WARRANTY' | 'CLEANING' | 'UPGRADE' | 'SOFTWARE' | null;

// --- REUSABLE COMPONENTS ---

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange, placeholder, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${isOpen ? 'z-50' : 'z-10'}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-[50px] bg-[#F2F2F7] rounded-[12px] px-4 flex items-center justify-between transition-all duration-200 outline-none active:scale-[0.99] ${isOpen ? 'bg-white ring-2 ring-primary/20' : 'hover:bg-[#E5E5EA]'}`}
      >
        <div className="flex items-center gap-2 truncate pr-2">
           {icon && <i className={`ph-regular ${icon} text-gray-500`}></i>}
           <span className={`text-[15px] font-semibold truncate ${value ? 'text-text-primary' : 'text-gray-400'}`}>
             {value || placeholder}
           </span>
        </div>
        <i className={`ph-regular ph-caret-down text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}></i>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl rounded-[14px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top p-1.5">
          <div className="max-h-[250px] overflow-y-auto hide-scrollbar">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`px-3 py-2.5 text-[14px] font-medium cursor-pointer flex items-center justify-between rounded-[10px] transition-all mb-0.5 last:mb-0 ${
                  value === option 
                    ? 'bg-white shadow-sm text-primary font-bold border border-gray-100' 
                    : 'text-text-primary hover:bg-gray-100'
                }`}
              >
                <span className="truncate">{option}</span>
                {value === option && <i className="ph-regular ph-check text-primary"></i>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Custom Rounded Date Picker Component
interface CustomDatePickerProps {
    value: string;
    onChange: (date: string) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    // Initialize view date based on value or today
    const [viewDate, setViewDate] = useState(value ? new Date(value) : new Date());
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay(); // 0 is Sunday

    const handleDateClick = (day: number) => {
        // Create date string manually to avoid timezone issues
        const year = viewDate.getFullYear();
        const month = String(viewDate.getMonth() + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        const dateString = `${year}-${month}-${dayStr}`;
        
        onChange(dateString);
        setIsOpen(false);
    };

    const changeMonth = (offset: number) => {
        const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1);
        setViewDate(newDate);
    };

    const formatDateDisplay = (dateStr: string) => {
        if (!dateStr) return 'Chọn ngày';
        const [year, month, day] = dateStr.split('-');
        return `${day}/${month}/${year}`;
    };

    return (
        <div className={`relative ${isOpen ? 'z-50' : 'z-10'}`} ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full h-[50px] bg-[#F2F2F7] rounded-[12px] px-4 flex items-center justify-between transition-all duration-200 outline-none active:scale-[0.99] ${isOpen ? 'bg-white ring-2 ring-primary/20' : 'hover:bg-[#E5E5EA]'}`}
            >
                <div className="flex items-center gap-2 truncate pr-2">
                    <i className="ph-regular ph-calendar-blank text-gray-500"></i>
                    <span className="text-[15px] font-semibold text-text-primary">
                        {formatDateDisplay(value)}
                    </span>
                </div>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 p-4 bg-white rounded-[24px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 min-w-[300px] animate-in fade-in zoom-in-95 duration-200 z-50">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <button onClick={() => changeMonth(-1)} className="size-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors active:scale-90">
                            <i className="ph-regular ph-caret-left"></i>
                        </button>
                        <span className="text-[15px] font-bold text-gray-900 capitalize">
                            Tháng {viewDate.getMonth() + 1}, {viewDate.getFullYear()}
                        </span>
                        <button onClick={() => changeMonth(1)} className="size-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors active:scale-90">
                            <i className="ph-regular ph-caret-right"></i>
                        </button>
                    </div>

                    {/* Days Header */}
                    <div className="grid grid-cols-7 mb-2 text-center">
                        {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((day, i) => (
                            <span key={i} className={`text-[12px] font-bold w-8 ${i === 0 || i === 6 ? 'text-red-400' : 'text-gray-400'}`}>{day}</span>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-y-1 gap-x-1 justify-items-center">
                        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                            <div key={`empty-${i}`} className="w-9 h-9"></div>
                        ))}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const currentCheckStr = `${viewDate.getFullYear()}-${String(viewDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                            const isSelected = value === currentCheckStr;
                            const isToday = new Date().toISOString().split('T')[0] === currentCheckStr;

                            return (
                                <button
                                    key={day}
                                    onClick={() => handleDateClick(day)}
                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-semibold transition-all active:scale-90 ${
                                        isSelected 
                                            ? 'bg-primary text-white shadow-md shadow-primary/30' 
                                            : isToday 
                                                ? 'bg-primary/10 text-primary font-bold' 
                                                : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    {day}
                                </button>
                            );
                        })}
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                         <button 
                            onClick={() => {onChange(''); setIsOpen(false)}}
                            className="text-[12px] font-bold text-gray-400 hover:text-gray-600 px-2 py-1"
                         >
                            Xóa
                         </button>
                         <button 
                            onClick={() => {
                                const today = new Date();
                                const todayStr = today.toISOString().split('T')[0];
                                onChange(todayStr);
                                setViewDate(today);
                                setIsOpen(false);
                            }}
                            className="text-[12px] font-bold text-primary hover:text-primary-dark px-2 py-1"
                         >
                            Hôm nay
                         </button>
                    </div>
                </div>
            )}
        </div>
    );
};


// --- MAIN SCREEN ---

const ServiceBookingScreen: React.FC<ServiceBookingScreenProps> = ({ onBack, onNavigate }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<ServiceType>(null);
  const [selectedProduct, setSelectedProduct] = useState<number>(1);
  const [locationType, setLocationType] = useState<'STORE' | 'HOME'>('STORE');

  // Form States
  const [selectedStore, setSelectedStore] = useState('Gearvn Hoàng Hoa Thám (Q. Tân Bình)');
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simulate submission and go to Success Screen
      onNavigate(ScreenName.SERVICE_BOOKING_SUCCESS);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const services = [
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
    }
  ];

  const storeOptions = [
    'Gearvn Hoàng Hoa Thám (Q. Tân Bình)',
    'Gearvn Trần Hưng Đạo (Q.1)',
    'Gearvn Kha Vạn Cân (TP. Thủ Đức)',
    'Gearvn Thái Hà (Hà Nội)'
  ];

  const timeOptions = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  return (
    // Reduced bottom padding (pb-32) as we removed the nav offset, but kept enough for the footer
    <div className="min-h-screen bg-background-light pb-32">
      {/* HIG Update: Header with min-height 60px and py-3 */}
      <div className="sticky top-0 z-50 flex items-center bg-white/90 ios-blur px-4 py-3 border-b border-gray-100 justify-between min-h-[60px]">
        <button onClick={handleBack} className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900">
            <i className="ph-regular ph-caret-left text-xl"></i>
        </button>
        <h2 className="text-text-primary text-[17px] font-bold leading-tight flex-1 text-center">Đặt lịch dịch vụ</h2>
        <div className="size-10"></div>
      </div>

      {/* Stepper */}
      <div className="px-6 py-6 bg-white border-b border-gray-50">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-4 left-0 w-full h-1 bg-gray-100 -z-10 rounded-full"></div>
          <div 
            className="absolute top-4 left-0 h-1 bg-primary -z-10 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
          ></div>
          
          <div className="relative flex flex-col items-center gap-2">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-[13px] font-bold ring-4 ring-white shadow-sm transition-colors duration-300 ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
            <span className={`text-[11px] font-semibold transition-colors duration-300 ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>Dịch vụ</span>
          </div>
          <div className="relative flex flex-col items-center gap-2">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-[13px] font-bold ring-4 ring-white shadow-sm transition-colors duration-300 ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
            <span className={`text-[11px] font-semibold transition-colors duration-300 ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>Thiết bị</span>
          </div>
          <div className="relative flex flex-col items-center gap-2">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-[13px] font-bold ring-4 ring-white shadow-sm transition-colors duration-300 ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
            <span className={`text-[11px] font-semibold transition-colors duration-300 ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>Lịch hẹn</span>
          </div>
        </div>
      </div>

      {/* Step 1: Select Service */}
      {step === 1 && (
        <div className="p-5 space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
           <div>
            <h3 className="text-text-primary text-[22px] font-bold leading-tight">Bạn cần hỗ trợ gì?</h3>
            <p className="text-text-secondary text-[14px] mt-1">Chọn loại dịch vụ bạn muốn thực hiện.</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
             {services.map((item) => (
               <div 
                  key={item.id}
                  onClick={() => setSelectedService(item.id as ServiceType)}
                  className={`p-4 rounded-[20px] border-[2px] cursor-pointer transition-all flex items-center gap-4 active:scale-[0.98] ${selectedService === item.id ? 'border-primary bg-primary/5 shadow-md' : 'border-transparent bg-white shadow-soft hover:border-gray-100'}`}
               >
                  <div className={`size-14 rounded-[16px] flex items-center justify-center text-2xl shrink-0 ${item.color}`}>
                     <i className={`ph-fill ${item.icon}`}></i>
                  </div>
                  <div className="flex-1">
                     <h4 className="text-[16px] font-bold text-text-primary">{item.title}</h4>
                     <p className="text-[13px] text-text-secondary mt-0.5 font-medium">{item.desc}</p>
                  </div>
                  <div className={`size-6 rounded-full border-[2px] flex items-center justify-center ${selectedService === item.id ? 'border-primary bg-primary' : 'border-gray-200'}`}>
                     {selectedService === item.id && <i className="ph-regular ph-check text-white text-xs"></i>}
                  </div>
               </div>
             ))}
          </div>

          <div className="bg-orange-50 p-4 rounded-[16px] flex gap-3 border border-orange-100">
             <i className="ph-fill ph-lightbulb text-orange-600 text-xl mt-0.5"></i>
             <p className="text-[13px] text-orange-900 leading-relaxed font-medium">
               Không chắc chắn về lỗi của máy? Chọn "Bảo Hành & Sửa Chữa" để kỹ thuật viên kiểm tra tổng quát.
             </p>
          </div>
        </div>
      )}

      {/* Step 2: Select Device */}
      {step === 2 && (
        <div className="p-5 space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
           <div>
            <h3 className="text-text-primary text-[22px] font-bold leading-tight">Chọn thiết bị</h3>
            <p className="text-text-secondary text-[14px] mt-1">Thiết bị cần sử dụng dịch vụ này.</p>
          </div>

          <div className="relative group">
            <i className="ph-regular ph-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl"></i>
            <input 
              type="text" 
              className="w-full h-12 bg-[#F2F2F7] border-none rounded-[12px] pl-12 pr-4 text-[15px] focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-400 font-semibold text-gray-900" 
              placeholder="Tìm kiếm thiết bị..." 
            />
          </div>

           {/* Product List */}
          <div className="space-y-3">
            {/* Product 1 */}
            <div 
                onClick={() => setSelectedProduct(1)}
                className={`relative flex items-center gap-4 p-4 rounded-[16px] border-[2px] cursor-pointer transition-all shadow-sm active:scale-[0.98] ${selectedProduct === 1 ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:bg-gray-50'}`}
            >
              <div className="size-16 rounded-[12px] bg-white p-1 overflow-hidden shrink-0 border border-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU9t34xmbElpa01q8W52cIXEkseS7SH66iIJ3pQFlHNsyq3U98AjLjiRPSEUW2v8d5MXZo2lm_u0BvScXUVTrinjJ2_8fjpO_vrdPzVpsasNBTT3tpOjrIrxpVeFLLbaMCUEfYzOAiB_4nKAaJ9y71rwA16gFD-uPwMfFCL4Agco7LsQDLjSJuT3qmwTnEpMzhg3KD1wqBa5Kn9WQ1welJlk5pLNEbDvpoDdCMyvWYObGtlKLTJBYAEl6m853wUCbvFRNjAcndUHs" alt="Laptop" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-text-primary font-bold text-[14px] line-clamp-2 leading-snug">Laptop ASUS ROG Strix G15 G513IH</h4>
                <p className="text-text-secondary text-[12px] mt-1 font-medium">S/N: G513-2023-001</p>
              </div>
              <div className="shrink-0 flex items-center justify-center">
                  <div className={`w-6 h-6 rounded-full border-[2px] flex items-center justify-center transition-colors ${selectedProduct === 1 ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                      {selectedProduct === 1 && <i className="ph-regular ph-check text-white text-sm"></i>}
                  </div>
              </div>
            </div>

            {/* Product 2 */}
            <div 
                onClick={() => setSelectedProduct(2)}
                className={`relative flex items-center gap-4 p-4 rounded-[16px] border-[2px] cursor-pointer transition-all shadow-sm active:scale-[0.98] ${selectedProduct === 2 ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:bg-gray-50'}`}
            >
              <div className="size-16 rounded-[12px] bg-[#F9FAFB] p-1 overflow-hidden shrink-0 border border-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhbqn8oEvmnOKeK03rnvsGiy5zDNuKeH7h8xdx21TDPRCcNogKnMH91l1i1V9Fwamut-yi8lxShUUHpzAw5PX3YqaxVPljgnknmrpxFpuaK8s20JBNd4tFLVcB5vP_NXZBG9mtTUee_jHJPFh6RdobW2cjAYF2sFBFoBexOK6HDyti3VrqWuRUHxqcltLLNspakmvS4ykRfE1QlMrN-X9gyb5G3017ppzFHSl3w_0w1X9jSBjamgxel-6e-1aoRvaMQ1tSMWxiK5E" alt="Mouse" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-text-primary font-bold text-[14px] line-clamp-2 leading-snug">Chuột Logitech G502 HERO</h4>
                <p className="text-text-secondary text-[12px] mt-1 font-medium">S/N: 2133LZ03829</p>
              </div>
              <div className="shrink-0 flex items-center justify-center">
                 <div className={`w-6 h-6 rounded-full border-[2px] flex items-center justify-center transition-colors ${selectedProduct === 2 ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                      {selectedProduct === 2 && <i className="ph-regular ph-check text-white text-sm"></i>}
                  </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center py-2">
               <button className="text-primary text-[13px] font-bold flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-[10px] hover:bg-primary/10">
                  <i className="ph-regular ph-plus"></i> Thêm thiết bị khác
               </button>
            </div>
          </div>
          
          <div className="space-y-2 pt-2">
             <label className="block text-[14px] font-bold text-text-primary ml-1">Ghi chú <span className="text-gray-400 font-normal">(Tùy chọn)</span></label>
             <textarea 
                rows={3} 
                className="w-full bg-[#F2F2F7] border-none text-text-primary text-[15px] rounded-[12px] focus:ring-2 focus:ring-primary/20 block p-4 font-semibold placeholder:text-gray-400 resize-none"
                placeholder="Mô tả sơ qua tình trạng máy..."
             ></textarea>
          </div>
        </div>
      )}

      {/* Step 3: Schedule */}
      {step === 3 && (
        <div className="p-5 space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
           <div>
            <h3 className="text-text-primary text-[22px] font-bold leading-tight">Thời gian & Địa điểm</h3>
            <p className="text-text-secondary text-[14px] mt-1">Chọn nơi bạn muốn thực hiện dịch vụ.</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <div 
               onClick={() => setLocationType('STORE')}
               className={`p-4 rounded-[16px] border-[2px] cursor-pointer transition-all flex flex-col items-center text-center gap-2 active:scale-[0.98] ${locationType === 'STORE' ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-primary/50'}`}
             >
                <div className={`p-2.5 rounded-full ${locationType === 'STORE' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                   <i className="ph-regular ph-storefront text-xl"></i>
                </div>
                <span className={`text-[14px] font-bold ${locationType === 'STORE' ? 'text-primary' : 'text-gray-600'}`}>Tại cửa hàng</span>
             </div>
             
             <div 
               onClick={() => setLocationType('HOME')}
               className={`p-4 rounded-[16px] border-[2px] cursor-pointer transition-all flex flex-col items-center text-center gap-2 active:scale-[0.98] ${locationType === 'HOME' ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-primary/50'}`}
             >
                <div className={`p-2.5 rounded-full ${locationType === 'HOME' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                   <i className="ph-regular ph-house-line text-xl"></i>
                </div>
                <span className={`text-[14px] font-bold ${locationType === 'HOME' ? 'text-primary' : 'text-gray-600'}`}>Tại nhà</span>
             </div>
          </div>

          {locationType === 'STORE' && (
             <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="space-y-2">
                   <label className="block text-[14px] font-bold text-text-primary ml-1">Cửa hàng</label>
                   {/* Custom Select for Store */}
                   <CustomSelect 
                      options={storeOptions}
                      value={selectedStore}
                      onChange={setSelectedStore}
                      placeholder="Chọn cửa hàng"
                   />
                </div>
                
                <div className="space-y-2">
                    <label className="block text-[14px] font-bold text-text-primary ml-1">Thời gian hẹn</label>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative z-20">
                             {/* Replaced native input with Custom Rounded DatePicker */}
                             <CustomDatePicker 
                                value={selectedDate}
                                onChange={setSelectedDate}
                             />
                        </div>
                        <div className="relative">
                            {/* Custom Select for Time */}
                            <CustomSelect 
                              options={timeOptions}
                              value={selectedTime}
                              onChange={setSelectedTime}
                              placeholder="09:00"
                           />
                        </div>
                    </div>
                </div>
             </div>
          )}
          
          {locationType === 'HOME' && (
             <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="p-4 border border-gray-200 rounded-[16px] bg-white shadow-sm relative">
                    <div className="flex justify-between items-start mb-2">
                       <span className="flex items-center gap-2 text-[15px] font-bold text-text-primary">
                          <i className="ph-fill ph-map-pin text-primary"></i>
                          Nguyễn Hoàng Nam
                       </span>
                       <button className="text-primary text-[12px] font-bold active:scale-90">Thay đổi</button>
                    </div>
                    <p className="text-[14px] text-text-secondary ml-7">0909 123 456</p>
                    <p className="text-[14px] text-text-secondary ml-7 mt-1">123 Đường 3/2, Phường 11, Quận 10, TP. Hồ Chí Minh</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-[16px] flex gap-3 border border-blue-100">
                   <i className="ph-fill ph-info text-blue-600 text-xl mt-0.5"></i>
                   <p className="text-[13px] text-blue-900 leading-relaxed font-medium">
                     Dịch vụ tại nhà có thể phát sinh thêm phí di chuyển. Kỹ thuật viên sẽ liên hệ xác nhận trước khi đến.
                   </p>
                </div>
             </div>
          )}
        </div>
      )}

      {/* Footer Actions - Subtle Glassmorphism */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/90 backdrop-blur-xl border-t border-gray-200/50 p-4 pb-[calc(env(safe-area-inset-bottom)+16px)] z-40 flex gap-3 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.05)]">
         {step > 1 && (
             <button 
                onClick={handleBack}
                className="w-1/3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-bold h-12 rounded-[14px] transition-all active:scale-95"
             >
                Quay lại
             </button>
         )}
         <button 
            onClick={handleNext} 
            disabled={step === 1 && !selectedService}
            className={`bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-[14px] transition-all active:scale-95 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 ${step > 1 ? 'w-2/3' : 'w-full'} ${(step === 1 && !selectedService) ? 'opacity-50 cursor-not-allowed' : ''}`}
         >
            {step === 3 ? 'Xác nhận đặt lịch' : 'Tiếp tục'}
            <i className={`text-xl ${step === 3 ? 'ph-regular ph-check' : 'ph-regular ph-caret-right'}`}></i>
         </button>
      </div>
    </div>
  );
};

export default ServiceBookingScreen;
