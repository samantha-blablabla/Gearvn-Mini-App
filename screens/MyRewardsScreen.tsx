import React, { useState } from 'react';
import { ScreenName } from '../types';

interface MyRewardsScreenProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

const MyRewardsScreen: React.FC<MyRewardsScreenProps> = ({ onBack, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'VOUCHERS' | 'HISTORY'>('VOUCHERS');

  return (
    <div className="min-h-screen bg-background-light pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 ios-blur border-b border-gray-100">
        <div className="flex items-center p-4 justify-between h-14">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900">
             <i className="ph-bold ph-caret-left text-xl"></i>
          </button>
          <h1 className="text-[17px] font-bold leading-tight tracking-tight flex-1 text-center text-text-primary">Kho quà của tôi</h1>
          <div className="size-10"></div>
        </div>
        {/* Tabs */}
        <div className="flex px-4 gap-8">
          <button 
            onClick={() => setActiveTab('VOUCHERS')}
            className={`flex flex-col items-center justify-center border-b-[3px] h-12 px-2 cursor-pointer transition-all flex-1 ${
                activeTab === 'VOUCHERS' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <p className="text-[14px] font-bold">Voucher đã đổi</p>
          </button>
          <button 
             onClick={() => setActiveTab('HISTORY')}
             className={`flex flex-col items-center justify-center border-b-[3px] h-12 px-2 cursor-pointer transition-all flex-1 ${
                activeTab === 'HISTORY' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <p className="text-[14px] font-bold">Lịch sử điểm</p>
          </button>
        </div>
      </header>

      <main className="p-5 space-y-4">
        {activeTab === 'VOUCHERS' ? (
            <div className="space-y-4">
                {/* Voucher 1 */}
                <div className="bg-white rounded-[20px] p-5 shadow-soft flex gap-4 relative overflow-hidden group border border-transparent hover:border-gray-100 active:scale-[0.98] transition-all cursor-pointer">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background-light rounded-full shadow-inner"></div>
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background-light rounded-full shadow-inner"></div>
                    
                    <div className="w-20 bg-primary/10 rounded-[14px] flex items-center justify-center flex-col text-primary shrink-0 border border-primary/20">
                        <span className="text-[11px] font-bold">GIẢM</span>
                        <span className="text-[20px] font-black">500K</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-text-primary text-[15px] leading-tight">Voucher Gearvn Giảm 500k</h3>
                        <p className="text-[12px] text-text-secondary mt-1.5 font-medium">HSD: 31/12/2023</p>
                        <button className="mt-2.5 text-primary text-[11px] font-bold border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-[8px]">Dùng ngay</button>
                    </div>
                </div>

                {/* Voucher 2 */}
                <div className="bg-white rounded-[20px] p-5 shadow-soft flex gap-4 relative overflow-hidden group grayscale opacity-70 border border-gray-100">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background-light rounded-full shadow-inner"></div>
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background-light rounded-full shadow-inner"></div>
                    
                    <div className="w-20 bg-gray-100 rounded-[14px] flex items-center justify-center flex-col text-gray-500 shrink-0 border border-gray-200">
                        <span className="text-[11px] font-bold">GIẢM</span>
                        <span className="text-[20px] font-black">10%</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                             <h3 className="font-bold text-text-primary text-[15px] leading-tight">Giảm 10% Linh kiện</h3>
                             <span className="text-[10px] font-bold bg-gray-200 text-gray-600 px-2 py-0.5 rounded-[6px] h-fit whitespace-nowrap">Đã dùng</span>
                        </div>
                        <p className="text-[12px] text-text-secondary mt-1.5 font-medium">HSD: 15/10/2023</p>
                    </div>
                </div>
            </div>
        ) : (
            <div className="bg-white rounded-[20px] border border-transparent shadow-soft overflow-hidden">
                <div className="p-4 border-b border-gray-50 flex justify-between items-center h-[72px]">
                    <div>
                        <p className="text-[15px] font-bold text-text-primary">Đổi quà: Voucher 500k</p>
                        <p className="text-[12px] text-text-secondary mt-0.5 font-medium">25/10/2023 - 10:30</p>
                    </div>
                    <span className="text-red-500 font-bold text-[15px]">-1,000 pts</span>
                </div>
                <div className="p-4 border-b border-gray-50 flex justify-between items-center h-[72px]">
                    <div>
                        <p className="text-[15px] font-bold text-text-primary">Mua hàng: Laptop ASUS</p>
                        <p className="text-[12px] text-text-secondary mt-0.5 font-medium">15/10/2023 - 09:15</p>
                    </div>
                    <span className="text-green-500 font-bold text-[15px]">+259 pts</span>
                </div>
                 <div className="p-4 border-b border-gray-50 flex justify-between items-center h-[72px]">
                    <div>
                        <p className="text-[15px] font-bold text-text-primary">Quà sinh nhật</p>
                        <p className="text-[12px] text-text-secondary mt-0.5 font-medium">01/10/2023</p>
                    </div>
                    <span className="text-green-500 font-bold text-[15px]">+50 pts</span>
                </div>
            </div>
        )}
      </main>
    </div>
  );
};

export default MyRewardsScreen;