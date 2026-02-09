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
      icon: 'iconoir-home',
    },
    {
      id: ScreenName.WARRANTY,
      label: 'Bảo Hành',
      icon: 'iconoir-shield-check',
    },
    // Center button spacer
    {
      id: 'CENTER', 
      label: '',
      icon: '',
    },
    {
      id: ScreenName.REWARDS,
      label: 'Ưu Đãi',
      icon: 'iconoir-gift',
    },
    {
      id: ScreenName.PROFILE,
      label: 'Tài Khoản',
      icon: 'iconoir-user',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 ios-blur border-t border-gray-200 pb-[env(safe-area-inset-bottom)] z-40">
      <div className="flex justify-between items-end h-16 max-w-md mx-auto px-2 relative">
        
        {/* Render Nav Items */}
        {navItems.map((item, index) => {
          // Special handling for the center item
          if (item.id === 'CENTER') {
             return (
               <div key="center-fab" className="relative -top-6 w-1/5 flex justify-center pointer-events-none">
                  <button 
                    onClick={() => onNavigate(ScreenName.CREATE_WARRANTY)}
                    className="w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center hover:scale-105 transition-transform active:scale-95 border-4 border-white pointer-events-auto"
                  >
                    <i className="iconoir-plus text-3xl font-bold"></i>
                  </button>
               </div>
             );
          }

          const isActive = currentScreen === item.id;
          
          let highlight = isActive;
          // Maintain highlight for sub-screens
          if (currentScreen === ScreenName.CREATE_WARRANTY && item.id === ScreenName.WARRANTY) highlight = false; // Don't highlight warranty tab when creating, user is focused on action
          if (currentScreen === ScreenName.HISTORY && item.id === ScreenName.PROFILE) highlight = true;
          if (currentScreen === ScreenName.SUPPORT && item.id === ScreenName.HOME) highlight = false;
          if (currentScreen === ScreenName.WARRANTY_DETAIL && item.id === ScreenName.WARRANTY) highlight = true;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as ScreenName)}
              className={`flex flex-col items-center gap-1 h-full justify-center group w-1/5 pb-1`}
            >
              <div className="relative">
                <i 
                  className={`${item.icon} transition-colors duration-200 text-[24px] ${
                    highlight ? 'text-primary stroke-2' : 'text-gray-400 group-hover:text-primary/70'
                  }`}
                ></i>
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