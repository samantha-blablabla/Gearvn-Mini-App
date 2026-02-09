import React from 'react';

interface TermsOfServiceScreenProps {
  onBack: () => void;
}

const TermsOfServiceScreen: React.FC<TermsOfServiceScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light pb-24">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2">
             <i className="iconoir-nav-arrow-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">Điều khoản dịch vụ</h1>
        </div>
      </header>

      <main className="p-4 space-y-4">
         <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-sm text-gray-600 leading-relaxed space-y-4">
            <p>Chào mừng bạn đến với ứng dụng Gearvn Sync. Khi bạn sử dụng ứng dụng này, bạn đồng ý với các điều khoản dưới đây.</p>
            
            <h2 className="text-lg font-bold text-gray-900">1. Tài khoản thành viên</h2>
            <p>Bạn cần đăng ký tài khoản để sử dụng đầy đủ các tính năng như tích điểm, bảo hành online. Bạn chịu trách nhiệm bảo mật thông tin tài khoản của mình.</p>
            
            <h2 className="text-lg font-bold text-gray-900">2. Quyền lợi thành viên</h2>
            <p>Thành viên sẽ được tích điểm dựa trên giá trị đơn hàng, đổi điểm lấy voucher và hưởng các ưu đãi đặc quyền theo hạng thành viên (Silver, Gold, Diamond).</p>

            <h2 className="text-lg font-bold text-gray-900">3. Quy định về bảo hành</h2>
            <p>Gearvn cung cấp dịch vụ bảo hành chính hãng. Ứng dụng hỗ trợ tra cứu, đặt lịch và theo dõi tiến độ bảo hành. Quý khách vui lòng cung cấp thông tin chính xác để được hỗ trợ tốt nhất.</p>
         </div>
      </main>
    </div>
  );
};

export default TermsOfServiceScreen;