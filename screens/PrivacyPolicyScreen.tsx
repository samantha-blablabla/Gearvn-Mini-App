import React from 'react';

interface PrivacyPolicyScreenProps {
  onBack: () => void;
}

const PrivacyPolicyScreen: React.FC<PrivacyPolicyScreenProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light pb-24">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors -ml-2">
             <i className="iconoir-nav-arrow-left text-gray-900 text-xl"></i>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">Chính sách bảo mật</h1>
        </div>
      </header>

      <main className="p-4 space-y-4">
         <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-sm text-gray-600 leading-relaxed space-y-4">
            <h2 className="text-lg font-bold text-gray-900">1. Mục đích thu thập thông tin</h2>
            <p>Gearvn thu thập thông tin cá nhân của khách hàng nhằm mục đích quản lý tài khoản, xử lý đơn hàng, cung cấp dịch vụ bảo hành và gửi các thông tin ưu đãi.</p>
            
            <h2 className="text-lg font-bold text-gray-900">2. Phạm vi sử dụng thông tin</h2>
            <p>Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong nội bộ công ty. Chúng tôi có thể chia sẻ tên và địa chỉ của quý khách cho dịch vụ chuyển phát nhanh hoặc nhà cung cấp để giao hàng.</p>

            <h2 className="text-lg font-bold text-gray-900">3. Thời gian lưu trữ thông tin</h2>
            <p>Thông tin cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc khách hàng tự đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của Gearvn.</p>
            
            <h2 className="text-lg font-bold text-gray-900">4. Cam kết bảo mật</h2>
            <p>Thông tin cá nhân của thành viên trên Gearvn được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân. Việc thu thập và sử dụng thông tin của mỗi thành viên chỉ được thực hiện khi có sự đồng ý của khách hàng đó.</p>
         </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyScreen;