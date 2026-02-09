import React, { useState } from 'react';
import { ScreenName } from '../types';

interface CreateWarrantyScreenProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

const CreateWarrantyScreen: React.FC<CreateWarrantyScreenProps> = ({ onBack, onNavigate }) => {
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<number>(1);
  const [shippingMethod, setShippingMethod] = useState<'store' | 'pickup'>('store');

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simulate submission
      onNavigate(ScreenName.WARRANTY);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-background-light pb-32">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-white/90 ios-blur p-4 border-b border-gray-100 justify-between h-14">
        <button onClick={handleBack} className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors -ml-2 active:scale-90">
            <i className="ph-bold ph-caret-left text-text-primary text-2xl"></i>
        </button>
        <h2 className="text-text-primary text-[17px] font-bold leading-tight flex-1 text-center pr-8">Tạo yêu cầu bảo hành</h2>
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
            <span className={`text-[11px] font-bold transition-colors duration-300 ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>Sản phẩm</span>
          </div>
          <div className="relative flex flex-col items-center gap-2">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-[13px] font-bold ring-4 ring-white shadow-sm transition-colors duration-300 ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
            <span className={`text-[11px] font-bold transition-colors duration-300 ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>Mô tả lỗi</span>
          </div>
          <div className="relative flex flex-col items-center gap-2">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-[13px] font-bold ring-4 ring-white shadow-sm transition-colors duration-300 ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
            <span className={`text-[11px] font-bold transition-colors duration-300 ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>Gửi hàng</span>
          </div>
        </div>
      </div>

      {/* Step 1: Select Product */}
      {step === 1 && (
        <div className="p-5 space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
          <div>
            <h3 className="text-text-primary text-[22px] font-extrabold leading-tight">Chọn sản phẩm</h3>
            <p className="text-text-secondary text-[14px] mt-1">Vui lòng chọn sản phẩm bạn muốn yêu cầu bảo hành từ lịch sử mua hàng.</p>
          </div>

          <div className="relative group">
            <i className="ph-bold ph-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
            <input 
              type="text" 
              className="w-full h-12 bg-white border-none rounded-[14px] pl-12 pr-4 text-[15px] shadow-sm focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-gray-400 font-medium" 
              placeholder="Tìm kiếm theo tên sản phẩm, mã đơn..." 
            />
          </div>

          {/* Product List */}
          <div className="space-y-3">
            {/* Product 1 */}
            <div 
                onClick={() => setSelectedProduct(1)}
                className={`relative flex items-center gap-4 p-4 rounded-[16px] border-[2px] cursor-pointer transition-all shadow-sm active:scale-[0.98] ${selectedProduct === 1 ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:bg-gray-50'}`}
            >
              <div className="size-20 rounded-[12px] bg-white p-1 overflow-hidden shrink-0 border border-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU9t34xmbElpa01q8W52cIXEkseS7SH66iIJ3pQFlHNsyq3U98AjLjiRPSEUW2v8d5MXZo2lm_u0BvScXUVTrinjJ2_8fjpO_vrdPzVpsasNBTT3tpOjrIrxpVeFLLbaMCUEfYzOAiB_4nKAaJ9y71rwA16gFD-uPwMfFCL4Agco7LsQDLjSJuT3qmwTnEpMzhg3KD1wqBa5Kn9WQ1welJlk5pLNEbDvpoDdCMyvWYObGtlKLTJBYAEl6m853wUCbvFRNjAcndUHs" alt="Laptop" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-text-primary font-bold text-[14px] line-clamp-2 leading-snug">Laptop ASUS ROG Strix G15 G513IH-HN015W</h4>
                <p className="text-text-secondary text-[12px] mt-1 font-medium">Ngày mua: 15/05/2023</p>
                <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-[6px] bg-green-100 text-green-700 uppercase">Còn bảo hành 12 tháng</span>
              </div>
              <div className="shrink-0 flex items-center justify-center">
                  <div className={`w-6 h-6 rounded-full border-[2px] flex items-center justify-center transition-colors ${selectedProduct === 1 ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                      {selectedProduct === 1 && <i className="ph-bold ph-check text-white text-sm"></i>}
                  </div>
              </div>
            </div>

            {/* Product 2 */}
            <div 
                onClick={() => setSelectedProduct(2)}
                className={`relative flex items-center gap-4 p-4 rounded-[16px] border-[2px] cursor-pointer transition-all shadow-sm active:scale-[0.98] ${selectedProduct === 2 ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:bg-gray-50'}`}
            >
              <div className="size-20 rounded-[12px] bg-[#F9FAFB] p-1 overflow-hidden shrink-0 border border-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZgCdVBaSGN69UV7RN1d8GXknQ0AYGBAtzPHox2F94LrT4a8JG7rXwQt07NWP1RIWgDsaai6gS5XhjkTN68eOGkgKUj8wGqmWX33czp4g8mr3Pn50btwpVH05OBJVC_qp88DWfxWE60OEC1PQURWnr9GDWAq1pvwUUSCDTLl-5X6qvu4atZTyts5FAuT0uok7oAKhO5ekt2KJd6j3kaUQEhCqrGGvWM8GiA5Byq9lcvCWeipBxz1cPOibPOPA47L1PRYA9n_Wi8U" alt="Keyboard" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-text-primary font-bold text-[14px] line-clamp-2 leading-snug">Bàn phím cơ Corsair K70 RGB MK.2 Low Profile</h4>
                <p className="text-text-secondary text-[12px] mt-1 font-medium">Ngày mua: 02/01/2023</p>
                <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-[6px] bg-gray-100 text-gray-500 uppercase">Hết hạn bảo hành</span>
              </div>
              <div className="shrink-0 flex items-center justify-center">
                  <div className={`w-6 h-6 rounded-full border-[2px] flex items-center justify-center transition-colors ${selectedProduct === 2 ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                      {selectedProduct === 2 && <i className="ph-bold ph-check text-white text-sm"></i>}
                  </div>
              </div>
            </div>

            {/* Product 3 */}
            <div 
                onClick={() => setSelectedProduct(3)}
                className={`relative flex items-center gap-4 p-4 rounded-[16px] border-[2px] cursor-pointer transition-all shadow-sm active:scale-[0.98] ${selectedProduct === 3 ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:bg-gray-50'}`}
            >
              <div className="size-20 rounded-[12px] bg-[#F9FAFB] p-1 overflow-hidden shrink-0 border border-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhbqn8oEvmnOKeK03rnvsGiy5zDNuKeH7h8xdx21TDPRCcNogKnMH91l1i1V9Fwamut-yi8lxShUUHpzAw5PX3YqaxVPljgnknmrpxFpuaK8s20JBNd4tFLVcB5vP_NXZBG9mtTUee_jHJPFh6RdobW2cjAYF2sFBFoBexOK6HDyti3VrqWuRUHxqcltLLNspakmvS4ykRfE1QlMrN-X9gyb5G3017ppzFHSl3w_0w1X9jSBjamgxel-6e-1aoRvaMQ1tSMWxiK5E" alt="Mouse" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-text-primary font-bold text-[14px] line-clamp-2 leading-snug">Chuột Logitech G502 HERO High Performance</h4>
                <p className="text-text-secondary text-[12px] mt-1 font-medium">Ngày mua: 10/11/2022</p>
                <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-[6px] bg-green-100 text-green-700 uppercase">Còn bảo hành 2 tháng</span>
              </div>
              <div className="shrink-0 flex items-center justify-center">
                 <div className={`w-6 h-6 rounded-full border-[2px] flex items-center justify-center transition-colors ${selectedProduct === 3 ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                      {selectedProduct === 3 && <i className="ph-bold ph-check text-white text-sm"></i>}
                  </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-[16px] flex gap-3 border border-blue-100">
             <i className="ph-fill ph-info text-blue-600 text-xl mt-0.5"></i>
             <p className="text-[13px] text-blue-900 leading-relaxed font-medium">
               Nếu sản phẩm bạn cần bảo hành không xuất hiện trong danh sách này, vui lòng liên hệ hotline 1900 6017 hoặc mang trực tiếp tới showroom Gearvn gần nhất.
             </p>
          </div>
        </div>
      )}

      {/* Step 2: Description */}
      {step === 2 && (
        <div className="p-5 space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <div>
            <h3 className="text-text-primary text-[22px] font-extrabold leading-tight">Thông tin lỗi</h3>
            <p className="text-text-secondary text-[14px] mt-1">Mô tả chi tiết vấn đề để chúng tôi hỗ trợ tốt nhất.</p>
          </div>

          {/* Selected Product Summary */}
          <div className="bg-[#F9FAFB] p-3 rounded-[16px] flex gap-3 border border-gray-100 items-center">
             <div className="size-12 rounded-[10px] bg-white p-1 overflow-hidden shrink-0 border border-gray-200">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU9t34xmbElpa01q8W52cIXEkseS7SH66iIJ3pQFlHNsyq3U98AjLjiRPSEUW2v8d5MXZo2lm_u0BvScXUVTrinjJ2_8fjpO_vrdPzVpsasNBTT3tpOjrIrxpVeFLLbaMCUEfYzOAiB_4nKAaJ9y71rwA16gFD-uPwMfFCL4Agco7LsQDLjSJuT3qmwTnEpMzhg3KD1wqBa5Kn9WQ1welJlk5pLNEbDvpoDdCMyvWYObGtlKLTJBYAEl6m853wUCbvFRNjAcndUHs" alt="Product" className="w-full h-full object-contain" />
             </div>
             <div>
                <p className="text-[11px] text-text-secondary font-bold uppercase tracking-wider">Sản phẩm</p>
                <p className="text-[14px] font-bold text-text-primary line-clamp-1">Laptop ASUS ROG Strix G15</p>
             </div>
             <button onClick={() => setStep(1)} className="ml-auto text-primary text-[12px] font-bold px-3 py-1.5 bg-white rounded-[8px] border border-gray-200 hover:bg-gray-50 active:scale-95 transition-transform">Thay đổi</button>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
               <label className="block text-[14px] font-bold text-text-primary">Vấn đề gặp phải <span className="text-primary">*</span></label>
               <div className="relative">
                  <select className="w-full h-12 appearance-none bg-white border border-gray-200 text-text-primary text-[15px] rounded-[14px] focus:ring-primary focus:border-primary block px-4 font-medium">
                    <option>Lỗi phần cứng (Màn hình, Phím, Loa...)</option>
                    <option>Lỗi phần mềm / Hệ điều hành</option>
                    <option>Không lên nguồn</option>
                    <option>Pin / Sạc</option>
                    <option>Khác</option>
                  </select>
                  <i className="ph-bold ph-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
               </div>
            </div>

            <div className="space-y-2">
               <label className="block text-[14px] font-bold text-text-primary">Mô tả chi tiết <span className="text-primary">*</span></label>
               <textarea 
                  rows={5} 
                  className="w-full bg-white border border-gray-200 text-text-primary text-[15px] rounded-[14px] focus:ring-primary focus:border-primary block p-4 font-medium placeholder:text-gray-400"
                  placeholder="Ví dụ: Máy bị màn hình xanh khi chơi game nặng, thường xuyên tự khởi động lại..."
               ></textarea>
            </div>

             <div className="space-y-2">
               <label className="block text-[14px] font-bold text-text-primary">Hình ảnh / Video minh họa</label>
               <div className="grid grid-cols-4 gap-3">
                  <button className="aspect-square rounded-[14px] border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors active:scale-95">
                     <i className="ph-bold ph-image text-2xl"></i>
                     <span className="text-[10px] font-bold mt-1">Thêm</span>
                  </button>
                  <div className="aspect-square rounded-[14px] bg-gray-100 relative group overflow-hidden border border-gray-200">
                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZgCdVBaSGN69UV7RN1d8GXknQ0AYGBAtzPHox2F94LrT4a8JG7rXwQt07NWP1RIWgDsaai6gS5XhjkTN68eOGkgKUj8wGqmWX33czp4g8mr3Pn50btwpVH05OBJVC_qp88DWfxWE60OEC1PQURWnr9GDWAq1pvwUUSCDTLl-5X6qvu4atZTyts5FAuT0uok7oAKhO5ekt2KJd6j3kaUQEhCqrGGvWM8GiA5Byq9lcvCWeipBxz1cPOibPOPA47L1PRYA9n_Wi8U" className="w-full h-full object-cover opacity-80" />
                     <button className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-0.5 backdrop-blur-sm">
                        <i className="ph-bold ph-x text-sm"></i>
                     </button>
                  </div>
               </div>
               <p className="text-[11px] text-gray-500">Tối đa 5 ảnh/video (Max 10MB)</p>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Shipping */}
      {step === 3 && (
        <div className="p-5 space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
           <div>
            <h3 className="text-text-primary text-[22px] font-extrabold leading-tight">Hình thức gửi hàng</h3>
            <p className="text-text-secondary text-[14px] mt-1">Chọn cách thức bạn muốn gửi sản phẩm đến trung tâm bảo hành.</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <div 
               onClick={() => setShippingMethod('store')}
               className={`p-4 rounded-[16px] border-[2px] cursor-pointer transition-all flex flex-col items-center text-center gap-2 active:scale-[0.98] ${shippingMethod === 'store' ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-primary/50'}`}
             >
                <div className={`p-2.5 rounded-full ${shippingMethod === 'store' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                   <i className="ph-bold ph-storefront text-xl"></i>
                </div>
                <span className={`text-[14px] font-bold ${shippingMethod === 'store' ? 'text-primary' : 'text-gray-600'}`}>Gửi tại cửa hàng</span>
             </div>
             
             <div 
               onClick={() => setShippingMethod('pickup')}
               className={`p-4 rounded-[16px] border-[2px] cursor-pointer transition-all flex flex-col items-center text-center gap-2 active:scale-[0.98] ${shippingMethod === 'pickup' ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-primary/50'}`}
             >
                <div className={`p-2.5 rounded-full ${shippingMethod === 'pickup' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                   <i className="ph-bold ph-truck text-xl"></i>
                </div>
                <span className={`text-[14px] font-bold ${shippingMethod === 'pickup' ? 'text-primary' : 'text-gray-600'}`}>Lấy hàng tại nhà</span>
             </div>
          </div>

          {shippingMethod === 'store' ? (
             <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="space-y-2">
                   <label className="block text-[14px] font-bold text-text-primary">Chọn cửa hàng gần bạn</label>
                   <div className="relative">
                      <select className="w-full h-12 appearance-none bg-white border border-gray-200 text-text-primary text-[15px] rounded-[14px] focus:ring-primary focus:border-primary block px-4 font-medium">
                        <option>Gearvn Hoàng Hoa Thám (Q. Tân Bình)</option>
                        <option>Gearvn Trần Hưng Đạo (Q.1)</option>
                        <option>Gearvn Kha Vạn Cân (TP. Thủ Đức)</option>
                        <option>Gearvn Thái Hà (Hà Nội)</option>
                      </select>
                      <i className="ph-bold ph-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                   </div>
                </div>

                <div className="rounded-[16px] overflow-hidden border border-gray-200 shadow-sm bg-white">
                   <div className="h-36 w-full bg-gray-200 relative">
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJLc5LGeTunaZ-MmOtloph1t_jj2O4wA7BD7LS2Tg-ec7XsIB0ToDxvTS8WvyQ2Bxgg7rqGxPUF3TVkT0Gjwu_etT2gpDfzcvnS7wShUsckptlDe0fcgiWRvRIqGV_N0wyNu2zqn9Es-oyUBxB3zXMDRH1R-bQ-9fy_81WYSDLg-CudVmZcsdUQ3hkUG5V2-YK49FurMiGEecstVqtWcQ8jeGPUgk_8kSMvFvg9F_zP38CBbfiPY-DorkGR7mJXZXi-95oSoodb6A" className="w-full h-full object-cover" />
                       <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-[11px] font-bold px-2.5 py-1 rounded-[6px] shadow-sm">Cách bạn 1.2km</div>
                   </div>
                   <div className="p-4">
                      <div className="flex items-start gap-3">
                         <i className="ph-fill ph-map-pin text-primary text-xl mt-0.5"></i>
                         <div>
                            <p className="font-bold text-text-primary text-[15px]">78-80-82 Hoàng Hoa Thám</p>
                            <p className="text-[13px] text-text-secondary mt-1">Phường 12, Quận Tân Bình, TP.HCM</p>
                            <p className="text-[13px] text-text-secondary mt-0.5">08:00 - 21:00 (Hàng ngày)</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-[16px] flex gap-3 border border-orange-100">
                   <i className="ph-fill ph-warning text-orange-600 text-xl mt-0.5"></i>
                   <p className="text-[13px] text-orange-900 leading-relaxed font-medium">
                     Lưu ý: Vui lòng mang theo sản phẩm và phụ kiện liên quan khi đến cửa hàng. Nhân viên sẽ kiểm tra và tiếp nhận trực tiếp.
                   </p>
                </div>
             </div>
          ) : (
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

                <div className="space-y-2">
                   <label className="block text-[14px] font-bold text-text-primary">Thời gian lấy hàng</label>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                         <input type="date" className="w-full h-12 bg-white border border-gray-200 text-text-primary text-[15px] rounded-[14px] focus:ring-primary focus:border-primary block px-3 font-medium" defaultValue="2023-10-25" />
                      </div>
                      <div className="relative">
                         <select className="w-full h-12 appearance-none bg-white border border-gray-200 text-text-primary text-[15px] rounded-[14px] focus:ring-primary focus:border-primary block px-3 pr-8 font-medium">
                           <option>08:00 - 12:00</option>
                           <option>13:00 - 17:00</option>
                           <option>17:00 - 20:00</option>
                         </select>
                         <i className="ph-bold ph-caret-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                      </div>
                   </div>
                </div>

                 <div className="bg-blue-50 p-4 rounded-[16px] flex gap-3 border border-blue-100">
                   <i className="ph-fill ph-truck text-blue-600 text-xl mt-0.5"></i>
                   <p className="text-[13px] text-blue-900 leading-relaxed font-medium">
                     Nhân viên giao nhận sẽ liên hệ trước 30 phút. Phí vận chuyển 2 chiều được miễn phí cho thành viên Vàng.
                   </p>
                </div>
             </div>
          )}
        </div>
      )}

      {/* Footer Actions - Fixed positioning updated for Container Strategy */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 p-4 pb-[calc(env(safe-area-inset-bottom)+16px)] z-50 flex gap-3">
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
            className={`bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-[14px] transition-all active:scale-95 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 ${step > 1 ? 'w-2/3' : 'w-full'}`}
         >
            {step === 3 ? 'Hoàn tất yêu cầu' : 'Tiếp tục'}
            <i className={`text-xl ${step === 3 ? 'ph-bold ph-check' : 'ph-bold ph-caret-right'}`}></i>
         </button>
      </div>
    </div>
  );
};

export default CreateWarrantyScreen;