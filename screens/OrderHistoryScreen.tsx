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
      className={`flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-[13px] font-bold transition-all border active:scale-95 ${
        filter === status 
          ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
          : 'bg-white text-text-secondary border-gray-200 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-background-light pb-40">
       {/* Combined Sticky Header */}
       <div className="sticky top-0 z-50 bg-white/95 ios-blur shadow-sm border-b border-gray-100">
           {/* Top Nav - Increased height for Airy feel */}
           <div className="flex items-center px-4 py-2 min-h-[60px] justify-between">
              <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900">
                 <i className="ph-bold ph-caret-left text-xl"></i>
              </button>
              <h1 className="text-text-primary text-[17px] font-bold leading-tight flex-1 text-center">Lịch sử mua hàng</h1>
              <div className="size-10"></div>
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
              
              <div className="flex gap-2 px-5 overflow-x-auto hide-scrollbar pb-1">
                 {renderFilterButton('ALL', 'Tất cả')}
                 {renderFilterButton('PROCESSING', 'Đang xử lý')}
                 {renderFilterButton('SHIPPING', 'Đang giao')}
                 {renderFilterButton('COMPLETED', 'Hoàn tất')}
                 {renderFilterButton('CANCELLED', 'Đã hủy')}
              </div>
           </div>
       </div>

       {/* Order List */}
       <div className="p-5 space-y-4">
          {filteredOrders.map((order) => (
              <div 
                key={order.id}
                onClick={() => onNavigate && onNavigate(ScreenName.ORDER_DETAIL)}
                className="bg-white rounded-[20px] p-4 shadow-soft border border-transparent hover:border-gray-100 transition-all active:scale-[0.98] cursor-pointer"
              >
                  <div className="flex justify-between items-start mb-3 pb-3 border-b border-gray-50">
                      <div>
                          <div className="flex items-center gap-2">
                             <span className="text-[12px] font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded-[6px]">{order.id}</span>
                             <span className="text-[12px] text-gray-400">{order.date}</span>
                          </div>
                      </div>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-[6px] uppercase ${
                          order.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                          order.status === 'PROCESSING' ? 'bg-blue-100 text-blue-700' :
                          order.status === 'SHIPPING' ? 'bg-orange-100 text-orange-700' :
                          'bg-gray-100 text-gray-500'
                      }`}>
                          {order.statusText}
                      </span>
                  </div>

                  <div className="flex gap-3">
                      <div className="size-20 bg-[#F9FAFB] rounded-[14px] shrink-0 border border-gray-100 p-1">
                          <img src={order.image} alt="Product" className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                              <h3 className="text-[14px] font-bold text-text-primary line-clamp-2 leading-snug">{order.productName}</h3>
                              <p className="text-[12px] text-text-secondary mt-0.5">{order.productDesc}</p>
                          </div>
                          
                          <div className="flex justify-between items-end mt-2">
                              <div>
                                  {order.points > 0 && (
                                     <div className="flex items-center gap-1 text-green-600 text-[11px] font-bold">
                                         <i className="ph-fill ph-plus-circle"></i> {order.points} pts
                                     </div>
                                  )}
                                  {order.status === 'SHIPPING' && (
                                      <p className="text-[11px] text-orange-600 font-medium truncate max-w-[120px]">
                                          <i className="ph-fill ph-truck mr-1"></i> {order.shippingStatus}
                                      </p>
                                  )}
                              </div>
                              <span className="text-[15px] font-bold text-primary">{order.price}</span>
                          </div>
                      </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-50 flex justify-end gap-2">
                      <button className="text-[12px] font-bold text-text-secondary border border-gray-200 px-3 py-1.5 rounded-[8px] hover:bg-gray-50">Xem chi tiết</button>
                      {order.status === 'COMPLETED' && (
                          <button className="text-[12px] font-bold text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-[8px] hover:bg-primary hover:text-white transition-colors">Mua lại</button>
                      )}
                  </div>
              </div>
          ))}
       </div>
    </div>
  );
};

export default OrderHistoryScreen;