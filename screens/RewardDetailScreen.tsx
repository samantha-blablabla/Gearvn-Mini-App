import React from 'react';
import { ScreenName } from '../types';

interface RewardDetailScreenProps {
  onBack: () => void;
}

const RewardDetailScreen: React.FC<RewardDetailScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/0">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white/80 backdrop-blur shadow-sm hover:bg-white transition-colors">
             <i className="ph-bold ph-caret-left text-gray-900 text-xl"></i>
          </button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="-mt-20 relative h-72 w-full bg-gray-200">
         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuByAz0__BShKOu2rzRggtsrNWb08DZnzgbSs9KTJV2_tV5J3omBUtJC-ntKYmFVOtLi_dj7HhwZUOwYajp4D3TPE8ogOnjQ69QXIo14rBz6lshTSE5RgzX5EDKd4LYkx98kR3b3QUnh3-MZwBbSAFZxxzVaB2UV6g4GJ-H5CGlUqsfQgQgMJjh6qek08UR6idEsIKqL95_XD3IHTEGKqPhrbdktuB1GwNgfqmSdtCiqhOtTUPc4GTGY_0PASa7evstFY1GE6_rJfZs" className="w-full h-full object-cover" />
         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-light to-transparent"></div>
      </div>

      <main className="px-4 -mt-10 relative z-10 space-y-6">
        {/* Title & Price */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
           <h1 className="text-xl font-bold text-gray-900 leading-tight">Voucher Gearvn Giảm 500k cho đơn hàng từ 5 triệu</h1>
           <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary">
                 <i className="ph-fill ph-star text-2xl"></i>
                 <span className="text-2xl font-black">1,000 pts</span>
              </div>
              <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold">Còn lại: 50</span>
           </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
            <h3 className="font-bold text-gray-900">Thông tin chi tiết</h3>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-sm text-gray-600 leading-relaxed space-y-2">
                <p>Mã giảm giá trực tiếp 500.000đ áp dụng cho đơn hàng có giá trị từ 5.000.000đ trở lên.</p>
                <p>Áp dụng cho tất cả các sản phẩm Laptop, PC, Màn hình tại Gearvn.</p>
            </div>
        </div>

        {/* Terms */}
         <div className="space-y-2">
            <h3 className="font-bold text-gray-900">Điều kiện sử dụng</h3>
            <ul className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-sm text-gray-600 leading-relaxed list-disc pl-8 space-y-1">
                <li>Hạn sử dụng: 30 ngày kể từ ngày đổi.</li>
                <li>Mỗi khách hàng chỉ được đổi 01 lần/tháng.</li>
                <li>Không áp dụng đồng thời với các chương trình khuyến mãi khác.</li>
                <li>Voucher không có giá trị quy đổi thành tiền mặt.</li>
            </ul>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-50">
          <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              <i className="ph-bold ph-gift text-lg"></i>
              Đổi quà ngay
          </button>
      </div>
    </div>
  );
};

export default RewardDetailScreen;