import React, { useState, useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import WarrantyScreen from './screens/WarrantyScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreateWarrantyScreen from './screens/CreateWarrantyScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import SupportScreen from './screens/SupportScreen';
import WarrantyDetailScreen from './screens/WarrantyDetailScreen';
import BottomNav from './components/BottomNav';
import { ScreenName } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>(ScreenName.HOME);

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScreen]);

  const navigateTo = (screen: ScreenName) => {
    setCurrentScreen(screen);
  };

  const goBack = () => {
    // Simple back logic: mostly go back to Home or previous logical parent
    // In a real app, use a stack
    switch (currentScreen) {
      case ScreenName.CREATE_WARRANTY:
        navigateTo(ScreenName.HOME); // Or Warranty list
        break;
      case ScreenName.HISTORY:
        navigateTo(ScreenName.PROFILE);
        break;
      case ScreenName.REWARDS:
        navigateTo(ScreenName.HOME);
        break;
      case ScreenName.WARRANTY:
        navigateTo(ScreenName.HOME);
        break;
      case ScreenName.SUPPORT:
        navigateTo(ScreenName.HOME); // Typically accessed from Home
        break;
      case ScreenName.WARRANTY_DETAIL:
        navigateTo(ScreenName.WARRANTY);
        break;
      default:
        navigateTo(ScreenName.HOME);
    }
  };

  // Determine if BottomNav should be visible
  // Usually hidden on detailed sub-pages like Create Warranty or specific history
  const showBottomNav = [
    ScreenName.HOME,
    ScreenName.WARRANTY,
    ScreenName.REWARDS,
    ScreenName.PROFILE,
  ].includes(currentScreen);

  return (
    <div className="antialiased text-gray-900 bg-background-light min-h-screen">
      {currentScreen === ScreenName.HOME && <HomeScreen onNavigate={navigateTo} />}
      {currentScreen === ScreenName.WARRANTY && <WarrantyScreen onNavigate={navigateTo} onBack={() => navigateTo(ScreenName.HOME)} />}
      {currentScreen === ScreenName.REWARDS && <RewardsScreen onBack={() => navigateTo(ScreenName.HOME)} />}
      {currentScreen === ScreenName.PROFILE && <ProfileScreen onNavigate={navigateTo} />}
      {currentScreen === ScreenName.CREATE_WARRANTY && <CreateWarrantyScreen onBack={() => navigateTo(ScreenName.HOME)} onNavigate={navigateTo} />}
      {currentScreen === ScreenName.HISTORY && <OrderHistoryScreen onBack={() => navigateTo(ScreenName.PROFILE)} />}
      {currentScreen === ScreenName.SUPPORT && <SupportScreen onBack={() => navigateTo(ScreenName.HOME)} />}
      {currentScreen === ScreenName.WARRANTY_DETAIL && <WarrantyDetailScreen onBack={() => navigateTo(ScreenName.WARRANTY)} />}

      {showBottomNav && (
        <BottomNav currentScreen={currentScreen} onNavigate={navigateTo} />
      )}
    </div>
  );
};

export default App;
