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
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2">
             <i className="ph-bold ph-caret-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">Kho quà của tôi</h1>
        </div>
        {/* Tabs */}
        <div className="flex px-4 gap-8 border-b border-gray-100">
          <button 
            onClick={() => setActiveTab('VOUCHERS')}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 px-2 cursor-pointer transition-all flex-1 ${
                activeTab === 'VOUCHERS' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <p className="text-sm font-bold">Voucher đã đổi</p>
          </button>
          <button 
             onClick={() => setActiveTab('HISTORY')}
             className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 px-2 cursor-pointer transition-all flex-1 ${
                activeTab === 'HISTORY' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <p className="text-sm font-bold">Lịch sử điểm</p>
          </button>
        </div>
      </header>

      <main className="p-4 space-y-4">
        {activeTab === 'VOUCHERS' ? (
            <div className="space-y-4">
                {/* Voucher 1 */}
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex gap-4 relative overflow-hidden">
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background-light rounded-full"></div>
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background-light rounded-full"></div>
                    
                    <div className="w-20 bg-primary/10 rounded-lg flex items-center justify-center flex-col text-primary shrink-0 border border-primary/20">
                        <span className="text-xs font-bold">GIẢM</span>
                        <span className="text-lg font-black">500K</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm">Voucher Gearvn Giảm 500k</h3>
                        <p className="text-xs text-gray-500 mt-1">HSD: 31/12/2023</p>
                        <button className="mt-2 text-primary text-xs font-bold border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-lg">Dùng ngay</button>
                    </div>
                </div>

                {/* Voucher 2 */}
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex gap-4 relative overflow-hidden grayscale opacity-70">
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background-light rounded-full"></div>
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background-light rounded-full"></div>
                    
                    <div className="w-20 bg-gray-100 rounded-lg flex items-center justify-center flex-col text-gray-500 shrink-0 border border-gray-200">
                        <span className="text-xs font-bold">GIẢM</span>
                        <span className="text-lg font-black">10%</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between">
                             <h3 className="font-bold text-gray-900 text-sm">Giảm 10% Linh kiện</h3>
                             <span className="text-[10px] font-bold bg-gray-200 text-gray-600 px-2 py-0.5 rounded h-fit">Đã dùng</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">HSD: 15/10/2023</p>
                    </div>
                </div>
            </div>
        ) : (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-50 flex justify-between items-center">
                    <div>
                        <p className="text-sm font-bold text-gray-900">Đổi quà: Voucher 500k</p>
                        <p className="text-xs text-gray-500 mt-0.5">25/10/2023 - 10:30</p>
                    </div>
                    <span className="text-red-500 font-bold text-sm">-1,000 pts</span>
                </div>
                <div className="p-4 border-b border-gray-50 flex justify-between items-center">
                    <div>
                        <p className="text-sm font-bold text-gray-900">Mua hàng: Laptop ASUS</p>
                        <p className="text-xs text-gray-500 mt-0.5">15/10/2023 - 09:15</p>
                    </div>
                    <span className="text-green-500 font-bold text-sm">+259 pts</span>
                </div>
                 <div className="p-4 border-b border-gray-50 flex justify-between items-center">
                    <div>
                        <p className="text-sm font-bold text-gray-900">Quà sinh nhật</p>
                        <p className="text-xs text-gray-500 mt-0.5">01/10/2023</p>
                    </div>
                    <span className="text-green-500 font-bold text-sm">+50 pts</span>
                </div>
            </div>
        )}
      </main>
    </div>
  );
};

export default MyRewardsScreen;