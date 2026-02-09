import React from 'react';
import { ScreenName } from '../types';

interface BottomNavProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    {
      id: ScreenName.HOME,
      label: 'Trang Chủ',
      icon: 'home',
    },
    {
      id: ScreenName.WARRANTY,
      label: 'Bảo Hành',
      icon: 'verified_user',
    },
    {
      id: ScreenName.REWARDS,
      label: 'Ưu Đãi',
      icon: 'redeem', // Changed from loyalty to redeem to match visual more closely if needed, but loyalty is good too.
      // Visual shows a gift box which is often 'redeem' or 'card_giftcard', prompt HTML used 'redeem' in one place and 'loyalty' in another.
      // Let's stick to the visual icon which looks like a gift card or gift.
    },
    {
      id: ScreenName.PROFILE,
      label: 'Tài Khoản',
      icon: 'person',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 ios-blur border-t border-gray-200 pb-[env(safe-area-inset-bottom)] z-40">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          // Exception for Warranty screen to map to Warranty Tab, etc.
          // Note: CREATE_WARRANTY and HISTORY are sub-screens, usually wouldn't show bottom nav or would highlight a parent.
          // For simplicity, we highlight based on mapping.
          
          let highlight = isActive;
          if (currentScreen === ScreenName.CREATE_WARRANTY && item.id === ScreenName.WARRANTY) highlight = true;
          if (currentScreen === ScreenName.HISTORY && item.id === ScreenName.PROFILE) highlight = true; // Typically history is accessed from profile
          if (currentScreen === ScreenName.SUPPORT && item.id === ScreenName.HOME) highlight = false; // Support is accessed from home but maybe doesn't highlight home?

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 w-full h-full justify-center group`}
            >
              <div className="relative">
                <span 
                  className={`material-symbols-outlined transition-colors duration-200 ${
                    highlight ? 'text-primary fill-1' : 'text-gray-400 group-hover:text-primary/70'
                  }`}
                >
                  {item.icon}
                </span>
                 {item.id === ScreenName.REWARDS && !highlight && (
                   <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full border border-white"></span>
                 )}
              </div>
              <span 
                className={`text-[10px] font-bold transition-colors duration-200 ${
                  highlight ? 'text-primary' : 'text-gray-400 group-hover:text-primary/70'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
