import React from 'react';

interface PrivacyPolicyScreenProps {
  onBack: () => void;
}

const PrivacyPolicyScreen: React.FC<PrivacyPolicyScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light pb-24">
      <header className="sticky top-0 z-50 bg-white/90 ios-blur border-b border-gray-100">
        <div className="flex items-center p-4 justify-between h-14">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-all active:scale-90 text-gray-900">
             <i className="ph-regular ph-caret-left text-xl"></i>
          </button>
          <h1 className="text-[17px] font-bold leading-tight tracking-tight flex-1 text-center text-text-primary">Chính sách bảo mật</h1>
          <div className="size-10"></div>
        </div>
      </header>

      <main className="p-5">
         <div className="bg-white p-6 rounded-[24px] border border-transparent shadow-soft text-[14px] text-text-secondary leading-relaxed space-y-6">
            <section>
                <h2 className="text-[16px] font-bold text-text-primary mb-2">1. Mục đích thu thập thông tin</h2>
                <p>Gearvn thu thập thông tin cá nhân của khách hàng nhằm mục đích quản lý tài khoản, xử lý đơn hàng, cung cấp dịch vụ bảo hành và gửi các thông tin ưu đãi.</p>
            </section>
            
            <section>
                <h2 className="text-[16px] font-bold text-text-primary mb-2">2. Phạm vi sử dụng thông tin</h2>
                <p>Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong nội bộ công ty. Chúng tôi có thể chia sẻ tên và địa chỉ của quý khách cho dịch vụ chuyển phát nhanh hoặc nhà cung cấp để giao hàng.</p>
            </section>

            <section>
                <h2 className="text-[16px] font-bold text-text-primary mb-2">3. Thời gian lưu trữ thông tin</h2>
                <p>Thông tin cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc khách hàng tự đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của Gearvn.</p>
            </section>
            
            <section>
                <h2 className="text-[16px] font-bold text-text-primary mb-2">4. Cam kết bảo mật</h2>
                <p>Thông tin cá nhân của thành viên trên Gearvn được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân. Việc thu thập và sử dụng thông tin của mỗi thành viên chỉ được thực hiện khi có sự đồng ý của khách hàng đó.</p>
            </section>
         </div>
         
         <p className="text-center text-[12px] text-gray-400 mt-6">Cập nhật lần cuối: 25/10/2023</p>
      </main>
    </div>
  );
};

export default PrivacyPolicyScreen;
