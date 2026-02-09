import React from 'react';
import { ScreenName } from '../types';

interface OrderHistoryScreenProps {
  onBack: () => void;
}

const OrderHistoryScreen: React.FC<OrderHistoryScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light flex flex-col">
       {/* Top Nav */}
       <div className="sticky top-0 z-20 flex items-center bg-white px-4 py-3 border-b border-gray-100 justify-between">
          <button onClick={onBack} className="text-gray-900 flex size-10 items-center justify-center hover:bg-gray-100 rounded-full transition-colors -ml-2">
             <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h1 className="text-gray-900 text-lg font-bold leading-tight flex-1 text-center pr-8">Lịch sử mua hàng</h1>
       </div>

       {/* Search & Filter */}
       <div className="bg-white px-4 py-3 space-y-4 shadow-sm z-10">
          <label className="flex flex-col w-full relative">
             <div className="flex w-full items-stretch rounded-xl h-11 bg-gray-100 border border-transparent focus-within:border-primary/30 focus-within:bg-white transition-all">
                <div className="text-gray-500 flex items-center justify-center pl-3">
                   <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input type="text" className="flex w-full border-none bg-transparent focus:ring-0 placeholder:text-gray-400 px-3 text-sm font-medium" placeholder="Tìm theo mã đơn hàng..." />
             </div>
          </label>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-1">
             <button className="flex h-8 shrink-0 items-center justify-center rounded-full bg-primary text-white px-4 text-xs font-bold transition-colors">Tất cả</button>
             <button className="flex h-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 px-4 text-xs font-bold hover:bg-gray-200 transition-colors">Đang xử lý</button>
             <button className="flex h-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 px-4 text-xs font-bold hover:bg-gray-200 transition-colors">Đang giao</button>
             <button className="flex h-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 px-4 text-xs font-bold hover:bg-gray-200 transition-colors">Hoàn tất</button>
             <button className="flex h-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 px-4 text-xs font-bold hover:bg-gray-200 transition-colors">Đã hủy</button>
          </div>
       </div>

       {/* List */}
       <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-24">
          
          {/* Item 1 */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
             <div className="flex justify-between items-start mb-3">
                <div>
                   <h3 className="text-gray-900 font-bold text-base">GVN-827364</h3>
                   <p className="text-gray-500 text-xs mt-0.5">Ngày mua: 15/10/2023</p>
                </div>
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">Hoàn tất</span>
             </div>
             <div className="flex items-center gap-4 py-3 border-y border-gray-50">
                <div className="bg-gray-100 rounded-lg size-16 shrink-0 bg-cover bg-center border border-gray-100" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyAGZ6LOUSLMKndGNUS9tU4gLor1FZE87ZxsmcAsyo3PgUbe6xUK13KCJpcPYQycjak5YYxbHAYVBXGGJf8Ql8BWqlwKshOjYqAhuccwyoqhzR7F_Uq9DsbzBhSa4kDeTzx_nCPAAtCF4IQoVdaAu3z_9MQ2AhrYn6rNu7c_1aqgNh2qnRLvZHturhO5mwMPuXdycedVaEvlOd_wC94VND7dr-Nk0j1OOrkx-30KX3hEfTlGgG20ZrMOnjG5UQ-eMP_VhRe-4Ki74")'}}></div>
                <div className="flex-1 min-w-0">
                   <p className="text-gray-900 text-sm font-bold truncate">Laptop ASUS ROG Strix G15 G513RC...</p>
                   <p className="text-gray-500 text-xs mt-1">và 2 sản phẩm khác</p>
                </div>
             </div>
             <div className="flex justify-between items-center mt-4">
                <div>
                   <p className="text-primary font-bold text-lg">25.990.000₫</p>
                   <p className="text-green-600 text-xs flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-sm leading-none">stars</span>
                      +259 điểm tích lũy
                   </p>
                </div>
                <button className="text-primary text-sm font-bold border border-primary/20 bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all">Chi tiết</button>
             </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
             <div className="flex justify-between items-start mb-3">
                <div>
                   <h3 className="text-gray-900 font-bold text-base">GVN-910293</h3>
                   <p className="text-gray-500 text-xs mt-0.5">Ngày mua: 02/11/2023</p>
                </div>
                <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">Đang giao</span>
             </div>
             <div className="flex items-center gap-4 py-3 border-y border-gray-50">
                <div className="bg-gray-100 rounded-lg size-16 shrink-0 bg-cover bg-center border border-gray-100" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTA8EaIQxO_inNoACJm21LcUNbcyYAvpxsNttev9j449z4qqO211FcMOWg93kehMjlbAUywiXKQdJ8Wc7Qkcyn6d_81ae_cCHsFWRWdS8FXEMASBLOmesxuRNR4CtXhzk3sBTvjhInJBgq1j5FCOIcZGzE8Ey_i18ZEan1DZxYQBWcttzLiCUM8CGKrMWOt00Bgumc0azj6xD1oMb5BlQYDC7OmO49jWask7sdZFX7VeXnC3iWsxu5qeCqbM1_Lt1a1XYxbs-oi4c")'}}></div>
                <div className="flex-1 min-w-0">
                   <p className="text-gray-900 text-sm font-bold truncate">Bàn phím cơ AKKO 3087 v2 Steam Engine</p>
                   <p className="text-gray-500 text-xs mt-1">1 sản phẩm</p>
                </div>
             </div>
             <div className="flex justify-between items-center mt-4">
                <div>
                   <p className="text-primary font-bold text-lg">1.250.000₫</p>
                   <p className="text-blue-600 text-xs flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-sm leading-none">local_shipping</span>
                      Đang đến kho trung chuyển
                   </p>
                </div>
                <button className="text-primary text-sm font-bold border border-primary/20 bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all">Chi tiết</button>
             </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm opacity-70">
             <div className="flex justify-between items-start mb-3">
                <div>
                   <h3 className="text-gray-900 font-bold text-base">GVN-756122</h3>
                   <p className="text-gray-500 text-xs mt-0.5">Ngày mua: 28/09/2023</p>
                </div>
                <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">Đã hủy</span>
             </div>
             <div className="flex items-center gap-4 py-3 border-y border-gray-50">
                <div className="bg-gray-100 rounded-lg size-16 shrink-0 bg-cover bg-center border border-gray-100 grayscale" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhsUUKT7DeDOBB8L94C8dl3c7Mvn1E7jU3UazFw5WPXWRwuC20EHrKQ-BOJXmULdRv3J_eXbf2LPBs38hibLBJfDCt3xuH3arB_FpnHptcaOykaCmAcrocKyv5jkt1Y-3AewDNd29sTNSdu1piiGLKG89AMUXoyV-JU0ga1nvPdQH2PzhvAtCdyOsjB1MC-Nmjbh4ZJxwicoqNKPtdYZpMWdJaC8p8Vik2on9T6J2x4uq3f2bVRIGLh0oqV0hWljcxTk2-mm_qsoY")'}}></div>
                <div className="flex-1 min-w-0">
                   <p className="text-gray-600 text-sm font-bold truncate">Chuột Logitech G502 Lightspeed Wireless</p>
                   <p className="text-gray-500 text-xs mt-1">1 sản phẩm</p>
                </div>
             </div>
             <div className="flex justify-between items-center mt-4">
                <div>
                   <p className="text-gray-400 font-bold text-lg line-through">2.190.000₫</p>
                   <p className="text-gray-400 text-xs">Lý do: Hủy bởi người dùng</p>
                </div>
                <button className="text-gray-500 text-sm font-bold border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all">Chi tiết</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default OrderHistoryScreen;
