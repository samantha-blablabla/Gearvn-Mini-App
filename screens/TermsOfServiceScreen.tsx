import React from 'react';

interface TermsOfServiceScreenProps {
  onBack: () => void;
}

const TermsOfServiceScreen: React.FC<TermsOfServiceScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light pb-24">
      <header className="sticky top-0 z-50 bg-white/90 ios-blur border-b border-gray-100">
        <div className="flex items-center p-4 justify-between h-14">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900">
             <i className="ph ph-caret-left text-xl"></i>
          </button>
          <h1 className="text-[17px] font-bold leading-tight tracking-tight flex-1 text-center text-text-primary">Điều khoản dịch vụ</h1>
          <div className="size-10"></div>
        </div>
      </header>

      <main className="p-5">
         <div className="bg-white p-6 rounded-[24px] border border-transparent shadow-soft text-[14px] text-text-secondary leading-relaxed space-y-6">
            <p className="font-medium text-text-primary">Chào mừng bạn đến với ứng dụng Gearvn Sync. Khi bạn sử dụng ứng dụng này, bạn đồng ý với các điều khoản dưới đây.</p>
            
            <section>
                <h2 className="text-[16px] font-bold text-text-primary mb-2">1. Tài khoản thành viên</h2>
                <p>Bạn cần đăng ký tài khoản để sử dụng đầy đủ các tính năng như tích điểm, bảo hành online. Bạn chịu trách nhiệm bảo mật thông tin tài khoản của mình.</p>
            </section>
            
            <section>
                <h2 className="text-[16px] font-bold text-text-primary mb-2">2. Quyền lợi thành viên</h2>
                <p>Thành viên sẽ được tích điểm dựa trên giá trị đơn hàng, đổi điểm lấy voucher và hưởng các ưu đãi đặc quyền theo hạng thành viên (Silver, Gold, Diamond).</p>
            </section>

            <section>
                <h2 className="text-[16px] font-bold text-text-primary mb-2">3. Quy định về bảo hành</h2>
                <p>Gearvn cung cấp dịch vụ bảo hành chính hãng. Ứng dụng hỗ trợ tra cứu, đặt lịch và theo dõi tiến độ bảo hành. Quý khách vui lòng cung cấp thông tin chính xác để được hỗ trợ tốt nhất.</p>
            </section>
         </div>
      </main>
    </div>
  );
};

export default TermsOfServiceScreen;

