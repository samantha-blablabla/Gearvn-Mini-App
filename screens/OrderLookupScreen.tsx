import React, { useState } from 'react';
import { ScreenName } from '../types';

interface OrderLookupScreenProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

const OrderLookupScreen: React.FC<OrderLookupScreenProps> = ({ onBack, onNavigate }) => {
  const [orderCode, setOrderCode] = useState('');

  // Mock recent orders for quick access
  const recentOrders = [
    {
      id: 'GVN-910293',
      date: '02/11/2023',
      status: 'SHIPPING',
      statusText: 'Đang giao',
      productName: 'Bàn phím cơ AKKO 3087 v2 Steam Engine',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTA8EaIQxO_inNoACJm21LcUNbcyYAvpxsNttev9j449z4qqO211FcMOWg93kehMjlbAUywiXKQdJ8Wc7Qkcyn6d_81ae_cCHsFWRWdS8FXEMASBLOmesxuRNR4CtXhzk3sBTvjhInJBgq1j5FCOIcZGzE8Ey_i18ZEan1DZxYQBWcttzLiCUM8CGKrMWOt00Bgumc0azj6xD1oMb5BlQYDC7OmO49jWask7sdZFX7VeXnC3iWsxu5qeCqbM1_Lt1a1XYxbs-oi4c'
    },
    {
       id: 'GVN-112233',
       date: '05/11/2023',
       status: 'PROCESSING',
       statusText: 'Đang xử lý',
       productName: 'Màn hình LG 24GN650-B 144Hz IPS',
       image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZgCdVBaSGN69UV7RN1d8GXknQ0AYGBAtzPHox2F94LrT4a8JG7rXwQt07NWP1RIWgDsaai6gS5XhjkTN68eOGkgKUj8wGqmWX33czp4g8mr3Pn50btwpVH05OBJVC_qp88DWfxWE60OEC1PQURWnr9GDWAq1pvwUUSCDTLl-5X6qvu4atZTyts5FAuT0uok7oAKhO5ekt2KJd6j3kaUQEhCqrGGvWM8GiA5Byq9lcvCWeipBxz1cPOibPOPA47L1PRYA9n_Wi8U'
     }
  ];

  return (
    <div className="min-h-screen bg-background-light pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 ios-blur border-b border-gray-100">
        <div className="flex items-center p-4 justify-between h-14">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2 active:scale-90">
             <i className="ph-bold ph-caret-left text-text-primary text-2xl"></i>
          </button>
          <h1 className="text-[17px] font-bold leading-tight tracking-tight flex-1 text-center pr-8 text-text-primary">Tra cứu vận đơn</h1>
        </div>
      </header>

      <main className="p-5 space-y-6">
        
        {/* Search Box */}
        <div className="bg-white p-6 rounded-[24px] shadow-soft border border-transparent">
           <div className="flex justify-center mb-6">
              <div className="size-24 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 ring-8 ring-blue-50/50">
                 <i className="ph-bold ph-magnifying-glass text-4xl"></i>
              </div>
           </div>
           
           <div className="space-y-4">
              <div>
                  <label className="block text-[14px] font-bold text-text-primary mb-2">Mã đơn hàng / Số điện thoại</label>
                  <div className="relative">
                      <input 
                        type="text" 
                        value={orderCode}
                        onChange={(e) => setOrderCode(e.target.value)}
                        placeholder="VD: GVN-123456" 
                        className="w-full h-12 bg-[#F9FAFB] border border-gray-200 rounded-[14px] px-4 focus:ring-2 focus:ring-primary focus:border-transparent text-[15px] font-medium uppercase placeholder:normal-case"
                      />
                      {orderCode && (
                          <button onClick={() => setOrderCode('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 size-10 flex items-center justify-center">
                              <i className="ph-fill ph-x-circle text-xl"></i>
                          </button>
                      )}
                  </div>
              </div>
              
              <button 
                className="w-full h-12 bg-primary text-white font-bold rounded-[14px] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95"
              >
                  Tra cứu ngay
                  <i className="ph-bold ph-arrow-right"></i>
              </button>
           </div>
        </div>

        {/* Recent Orders */}
        <div>
           <div className="flex items-center justify-between mb-3 px-1">
               <h3 className="font-bold text-text-primary text-[16px]">Đơn hàng gần đây</h3>
               <button 
                  onClick={() => onNavigate(ScreenName.HISTORY)} // Still allows going to full history
                  className="text-primary text-[13px] font-bold hover:underline"
               >
                   Xem tất cả
               </button>
           </div>
           
           <div className="space-y-3">
              {recentOrders.map((item) => (
                  <div key={item.id} className="bg-white rounded-[20px] p-3 border border-transparent shadow-soft flex gap-3 active:scale-[0.98] transition-transform cursor-pointer">
                      <div className="size-16 bg-[#F9FAFB] rounded-[14px] shrink-0 overflow-hidden border border-gray-100 p-1">
                          <img src={item.image} alt={item.productName} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div className="flex-1 min-w-0 py-0.5">
                          <div className="flex justify-between items-start">
                              <h4 className="font-bold text-text-primary text-[14px]">{item.id}</h4>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[6px] uppercase ${
                                  item.status === 'SHIPPING' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                              }`}>
                                  {item.statusText}
                              </span>
                          </div>
                          <p className="text-text-secondary text-[12px] mt-0.5 truncate font-medium">{item.productName}</p>
                          <p className="text-gray-400 text-[11px] mt-2 font-medium">{item.date}</p>
                      </div>
                  </div>
              ))}
           </div>
        </div>

        {/* Help Banner */}
        <div className="bg-blue-50 rounded-[20px] p-5 flex gap-3 border border-blue-100">
             <i className="ph-fill ph-info text-blue-600 text-xl shrink-0 mt-0.5"></i>
             <div className="text-[13px] text-blue-900 leading-relaxed font-medium">
                <p className="font-bold mb-1">Cần hỗ trợ về đơn hàng?</p>
                <p>Nếu bạn không tìm thấy đơn hàng hoặc cần thay đổi thông tin giao nhận, vui lòng liên hệ <span className="font-bold underline cursor-pointer">Hotline 1800 6789</span>.</p>
             </div>
        </div>
      </main>
    </div>
  );
};

export default OrderLookupScreen;