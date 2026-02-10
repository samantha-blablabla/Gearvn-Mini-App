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
      icon: 'ph-house',
    },
    {
      id: ScreenName.WARRANTY,
      label: 'Bảo Hành',
      icon: 'ph-shield-check',
    },
    // Center button spacer
    {
      id: 'CENTER', 
      label: '',
      icon: '',
    },
    {
      id: ScreenName.REWARDS,
      label: 'Ưu đãi',
      icon: 'ph-gift',
    },
    {
      id: ScreenName.PROFILE,
      label: 'Tài Khoản',
      icon: 'ph-user',
    },
  ];

  return (
    // HIG UPDATE: 
    // 1. Removed fixed height (h-16).
    // 2. Added pt-3 for top breathing room.
    // 3. Added pb-[calc(env(safe-area-inset-bottom)+16px)] to push content well above the home indicator.
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/95 ios-blur border-t border-gray-200 pt-3 pb-[calc(env(safe-area-inset-bottom)+16px)] z-40 transition-all duration-300">
      <div className="flex justify-between items-end px-2 relative">
        
        {/* Render Nav Items */}
        {navItems.map((item, index) => {
          // Special handling for the center item
          if (item.id === 'CENTER') {
             return (
               <div key="center-fab" className="relative -top-8 w-1/5 flex justify-center pointer-events-none">
                  <button 
                    onClick={() => onNavigate(ScreenName.SERVICE_BOOKING)}
                    className="w-16 h-16 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center hover:scale-105 transition-transform active:scale-95 border-[4px] border-white pointer-events-auto"
                  >
                    <i className="ph ph-plus text-3xl"></i>
                  </button>
               </div>
             );
          }

          const isActive = currentScreen === item.id;
          
          let highlight = isActive;
          // Maintain highlight for sub-screens
          if (currentScreen === ScreenName.CREATE_WARRANTY && item.id === ScreenName.WARRANTY) highlight = false; 
          
          if (currentScreen === ScreenName.HISTORY && item.id === ScreenName.PROFILE) highlight = true;
          if (currentScreen === ScreenName.WARRANTY_DETAIL && item.id === ScreenName.WARRANTY) highlight = true;
          
          // Highlight Rewards tab for sub-screens
          if (
            (currentScreen === ScreenName.MY_REWARDS ||
             currentScreen === ScreenName.REWARD_DETAIL ||
             currentScreen === ScreenName.ALL_REWARDS ||
             currentScreen === ScreenName.POINTS_POLICY) &&
            item.id === ScreenName.REWARDS
          ) {
            highlight = true;
          }

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as ScreenName)}
              className={`flex flex-col items-center gap-1.5 justify-center group w-1/5 active:scale-95 transition-transform`}
            >
              <div className="relative">
                <i 
                  className={`ph ${item.icon} transition-colors duration-200 text-[26px] ${
                    highlight ? 'text-primary' : 'text-gray-400 group-hover:text-primary/70'
                  }`}
                ></i>
                 {item.id === ScreenName.REWARDS && !highlight && (
                   <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full border border-white"></span>
                 )}
              </div>
              <span 
                className={`text-[10px] font-medium transition-colors duration-200 ${
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