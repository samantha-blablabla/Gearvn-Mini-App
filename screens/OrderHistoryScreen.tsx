import React, { useState } from 'react';
import { ScreenName } from '../types';

interface OrderHistoryScreenProps {
  onBack: () => void;
  onNavigate?: (screen: ScreenName) => void;
}

type OrderStatus = 'ALL' | 'PROCESSING' | 'SHIPPING' | 'COMPLETED' | 'CANCELLED';

const OrderHistoryScreen: React.FC<OrderHistoryScreenProps> = ({ onBack, onNavigate }) => {
  const [filter, setFilter] = useState<OrderStatus>('ALL');

  // Mock Data
  const orders = [
    {
      id: 'GVN-827364',
      date: '15/10/2023',
      status: 'COMPLETED',
      statusText: 'Hoàn tất',
      productName: 'Laptop ASUS ROG Strix G15 G513RC...',
      productDesc: 'và 2 sản phẩm khác',
      price: '25.990.000đ',
      points: 259,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyAGZ6LOUSLMKndGNUS9tU4gLor1FZE87ZxsmcAsyo3PgUbe6xUK13KCJpcPYQycjak5YYxbHAYVBXGGJf8Ql8BWqlwKshOjYqAhuccwyoqhzR7F_Uq9DsbzBhSa4kDeTzx_nCPAAtCF4IQoVdaAu3z_9MQ2AhrYn6rNu7c_1aqgNh2qnRLvZHturhO5mwMPuXdycedVaEvlOd_wC94VND7dr-Nk0j1OOrkx-30KX3hEfTlGgG20ZrMOnjG5UQ-eMP_VhRe-4Ki74'
    },
    {
      id: 'GVN-910293',
      date: '02/11/2023',
      status: 'SHIPPING',
      statusText: 'Đang giao',
      productName: 'Bàn phím cơ AKKO 3087 v2 Steam Engine',
      productDesc: '1 sản phẩm',
      price: '1.250.000đ',
      points: 0,
      shippingStatus: 'Đang đến kho trung chuyển',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTA8EaIQxO_inNoACJm21LcUNbcyYAvpxsNttev9j449z4qqO211FcMOWg93kehMjlbAUywiXKQdJ8Wc7Qkcyn6d_81ae_cCHsFWRWdS8FXEMASBLOmesxuRNR4CtXhzk3sBTvjhInJBgq1j5FCOIcZGzE8Ey_i18ZEan1DZxYQBWcttzLiCUM8CGKrMWOt00Bgumc0azj6xD1oMb5BlQYDC7OmO49jWask7sdZFX7VeXnC3iWsxu5qeCqbM1_Lt1a1XYxbs-oi4c'
    },
    {
      id: 'GVN-756122',
      date: '28/09/2023',
      status: 'CANCELLED',
      statusText: 'Đã hủy',
      productName: 'Chuột Logitech G502 Lightspeed Wireless',
      productDesc: '1 sản phẩm',
      price: '2.190.000đ',
      reason: 'Hủy bởi người dùng',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhsUUKT7DeDOBB8L94C8dl3c7Mvn1E7jU3UazFw5WPXWRwuC20EHrKQ-BOJXmULdRv3J_eXbf2LPBs38hibLBJfDCt3xuH3arB_FpnHptcaOykaCmAcrocKyv5jkt1Y-3AewDNd29sTNSdu1piiGLKG89AMUXoyV-JU0ga1nvPdQH2PzhvAtCdyOsjB1MC-Nmjbh4ZJxwicoqNKPtdYZpMWdJaC8p8Vik2on9T6J2x4uq3f2bVRIGLh0oqV0hWljcxTk2-mm_qsoY'
    },
     {
      id: 'GVN-112233',
      date: '05/11/2023',
      status: 'PROCESSING',
      statusText: 'Đang xử lý',
      productName: 'Màn hình LG 24GN650-B 144Hz IPS',
      productDesc: '1 sản phẩm',
      price: '3.490.000đ',
      shippingStatus: 'Đang đóng gói',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZgCdVBaSGN69UV7RN1d8GXknQ0AYGBAtzPHox2F94LrT4a8JG7rXwQt07NWP1RIWgDsaai6gS5XhjkTN68eOGkgKUj8wGqmWX33czp4g8mr3Pn50btwpVH05OBJVC_qp88DWfxWE60OEC1PQURWnr9GDWAq1pvwUUSCDTLl-5X6qvu4atZTyts5FAuT0uok7oAKhO5ekt2KJd6j3kaUQEhCqrGGvWM8GiA5Byq9lcvCWeipBxz1cPOibPOPA47L1PRYA9n_Wi8U'
    }
  ];

  const filteredOrders = filter === 'ALL' ? orders : orders.filter(o => o.status === filter);

  const renderFilterButton = (status: OrderStatus, label: string) => (
    <button 
      onClick={() => setFilter(status)}
      className={`flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-[13px] font-bold transition-all border ${
        filter === status 
          ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
          : 'bg-white text-text-secondary border-gray-200 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-background-light pb-24">
       {/* Combined Sticky Header */}
       <div className="sticky top-0 z-40 bg-white/95 ios-blur shadow-sm border-b border-gray-100">
           {/* Top Nav */}
           <div className="flex items-center px-4 h-14 justify-between">
              <button onClick={onBack} className="text-text-primary flex size-10 items-center justify-center hover:bg-gray-100 rounded-full transition-colors -ml-2 active:scale-90">
                 <i className="ph-bold ph-caret-left text-2xl"></i>
              </button>
              <h1 className="text-text-primary text-[17px] font-bold leading-tight flex-1 text-center pr-8">Lịch sử mua hàng</h1>
           </div>

           {/* Search & Filter */}
           <div className="pb-3 space-y-3">
              <div className="px-5">
                  <label className="flex flex-col w-full relative">
                     <div className="flex w-full items-stretch rounded-[14px] h-12 bg-gray-100 border border-transparent focus-within:border-primary/30 focus-within:bg-white transition-all">
                        <div className="text-gray-400 flex items-center justify-center pl-4">
                           <i className="ph-bold ph-magnifying-glass text-xl"></i>
                        </div>
                        <input type="text" className="flex w-full border-none bg-transparent focus:ring-0 placeholder:text-gray-400 px-3 text-[15px] font-medium" placeholder="Tìm theo mã đơn hàng..." />
                     </div>
                  </label>
              </div>
              
              {/* Filter List */}
              <div className="flex gap-2.5 overflow-x-auto hide-scrollbar px-5 pb-1 w-full">
                 {renderFilterButton('ALL', 'Tất cả')}
                 {renderFilterButton('PROCESSING', 'Đang xử lý')}
                 {renderFilterButton('SHIPPING', 'Đang giao')}
                 {renderFilterButton('COMPLETED', 'Hoàn tất')}
                 {renderFilterButton('CANCELLED', 'Đã hủy')}
              </div>
           </div>
       </div>

       {/* List Content */}
       <div className="px-5 py-5 space-y-5">
          {filteredOrders.length === 0 ? (
             <div className="flex flex-col items-center justify-center py-20 text-gray-300">
                <i className="ph-fill ph-package text-6xl mb-3"></i>
                <p className="text-[14px] font-medium">Không tìm thấy đơn hàng nào</p>
             </div>
          ) : (
            filteredOrders.map((item) => (
              <div key={item.id} className={`bg-white rounded-[20px] p-5 border border-gray-100 shadow-soft ${item.status === 'CANCELLED' ? 'opacity-70' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-text-primary font-bold text-[16px]">{item.id}</h3>
                      <p className="text-text-secondary text-[12px] mt-0.5">Ngày mua: {item.date}</p>
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-[8px] uppercase tracking-wider ${
                      item.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                      item.status === 'SHIPPING' ? 'bg-blue-100 text-blue-600' :
                      item.status === 'PROCESSING' ? 'bg-orange-100 text-orange-600' :
                      'bg-gray-100 text-gray-500'
                    }`}>
                      {item.statusText}
                    </span>
                </div>
                <div className="flex items-center gap-4 py-4 border-y border-gray-50">
                    <div className={`bg-[#F9FAFB] rounded-[12px] size-[72px] shrink-0 bg-contain bg-center bg-no-repeat border border-gray-100 ${item.status === 'CANCELLED' ? 'grayscale' : ''}`} style={{backgroundImage: `url("${item.image}")`}}></div>
                    <div className="flex-1 min-w-0 w-0">
                      <p className={`text-[15px] font-bold leading-snug line-clamp-2 ${item.status === 'CANCELLED' ? 'text-gray-500' : 'text-text-primary'}`}>{item.productName}</p>
                      <p className="text-text-secondary text-[13px] mt-1">{item.productDesc}</p>
                    </div>
                </div>
                <div className="flex justify-between items-end mt-4">
                    <div>
                      <p className={`font-black text-[18px] tracking-tight ${item.status === 'CANCELLED' ? 'text-gray-400 line-through' : 'text-primary'}`}>{item.price}</p>
                      
                      {item.status === 'COMPLETED' && item.points > 0 && (
                         <p className="text-green-600 text-[12px] flex items-center gap-1 font-bold mt-1">
                            <i className="ph-fill ph-star text-sm leading-none"></i>
                            +{item.points} điểm
                         </p>
                      )}
                      
                      {item.status === 'SHIPPING' && (
                         <p className="text-blue-600 text-[12px] flex items-center gap-1 font-bold mt-1">
                            <i className="ph-fill ph-truck text-sm leading-none"></i>
                            {item.shippingStatus}
                         </p>
                      )}

                      {item.status === 'CANCELLED' && (
                         <p className="text-gray-400 text-[12px] mt-1 font-medium">Lý do: {item.reason}</p>
                      )}
                    </div>
                    <button 
                       onClick={() => onNavigate && onNavigate(ScreenName.ORDER_DETAIL)}
                       className={`text-[13px] font-bold border px-4 h-9 rounded-[10px] transition-all active:scale-95 ${
                       item.status === 'CANCELLED' 
                       ? 'text-text-secondary border-gray-200 hover:bg-gray-50' 
                       : (item.status === 'PROCESSING' || item.status === 'SHIPPING' || item.status === 'COMPLETED') 
                         ? 'text-primary border-primary/20 bg-primary/5 hover:bg-primary hover:text-white'
                         : ''
                    }`}>
                      Chi tiết
                    </button>
                </div>
              </div>
            ))
          )}
       </div>
    </div>
  );
};

export default OrderHistoryScreen;