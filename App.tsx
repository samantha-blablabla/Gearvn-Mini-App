import React, { useState, useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import WarrantyScreen from './screens/WarrantyScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreateWarrantyScreen from './screens/CreateWarrantyScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import SupportScreen from './screens/SupportScreen';
import WarrantyDetailScreen from './screens/WarrantyDetailScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SettingsScreen from './screens/SettingsScreen';
import HelpCenterScreen from './screens/HelpCenterScreen';
import ServiceAppointmentsScreen from './screens/ServiceAppointmentsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import TermsOfServiceScreen from './screens/TermsOfServiceScreen';
import HotDealsScreen from './screens/HotDealsScreen';
import PointsPolicyScreen from './screens/PointsPolicyScreen';
import MyRewardsScreen from './screens/MyRewardsScreen';
import RewardDetailScreen from './screens/RewardDetailScreen';
import AllRewardsScreen from './screens/AllRewardsScreen';
import OrderLookupScreen from './screens/OrderLookupScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';
import BottomNav from './components/BottomNav';
import { ScreenName } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>(ScreenName.HOME);
  // State to track where the user came from (Origin Tracking)
  const [previousScreen, setPreviousScreen] = useState<ScreenName>(ScreenName.HOME);

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScreen]);

  const navigateTo = (screen: ScreenName) => {
    // Smart Navigation Logic:
    // When going to Warranty Detail, remember where we came from.
    if (screen === ScreenName.WARRANTY_DETAIL) {
      if (currentScreen === ScreenName.HOME || currentScreen === ScreenName.WARRANTY) {
        setPreviousScreen(currentScreen);
      }
    }
    setCurrentScreen(screen);
  };

  const goBack = () => {
    switch (currentScreen) {
      case ScreenName.CREATE_WARRANTY:
        navigateTo(ScreenName.HOME);
        break;
      case ScreenName.HISTORY:
        navigateTo(ScreenName.PROFILE);
        break;
      case ScreenName.ORDER_SEARCH:
        navigateTo(ScreenName.HOME);
        break;
      case ScreenName.SHIPPING_ADDRESS:
        navigateTo(ScreenName.PROFILE);
        break;
      case ScreenName.SETTINGS:
        navigateTo(ScreenName.PROFILE);
        break;
      case ScreenName.HELP_CENTER:
        navigateTo(ScreenName.PROFILE);
        break;
      case ScreenName.SERVICE_APPOINTMENTS:
        navigateTo(ScreenName.PROFILE);
        break;
      case ScreenName.PRIVACY_POLICY:
        navigateTo(ScreenName.PROFILE);
        break;
      case ScreenName.TERMS_OF_SERVICE:
        navigateTo(ScreenName.PROFILE);
        break;
      case ScreenName.REWARDS:
        navigateTo(ScreenName.HOME);
        break;
      case ScreenName.WARRANTY:
        navigateTo(ScreenName.HOME);
        break;
      case ScreenName.SUPPORT:
        navigateTo(ScreenName.HOME);
        break;
      case ScreenName.WARRANTY_DETAIL:
        // Use the tracked previous screen
        navigateTo(previousScreen);
        break;
      case ScreenName.HOT_DEALS:
        navigateTo(ScreenName.HOME);
        break;
      case ScreenName.POINTS_POLICY:
        navigateTo(ScreenName.HOME);
        break;
      case ScreenName.MY_REWARDS:
        navigateTo(ScreenName.REWARDS);
        break;
      case ScreenName.REWARD_DETAIL:
        navigateTo(ScreenName.REWARDS);
        break;
      case ScreenName.ALL_REWARDS:
        navigateTo(ScreenName.REWARDS);
        break;
      case ScreenName.ORDER_DETAIL:
        navigateTo(ScreenName.HISTORY);
        break;
      default:
        navigateTo(ScreenName.HOME);
    }
  };

  return (
    // Mobile Container Strategy:
    // 1. max-w-[430px]: Limits width to iPhone Pro Max size
    // 2. w-full: Takes full width on mobile
    // 3. min-h-screen: Ensures full height
    // 4. shadow-2xl: Pops out on desktop
    // 5. relative: For absolute positioning inside
    <div className="w-full max-w-[430px] min-h-screen bg-background-light relative shadow-2xl overflow-x-hidden">
      {currentScreen === ScreenName.HOME && <HomeScreen onNavigate={navigateTo} />}
      {currentScreen === ScreenName.WARRANTY && <WarrantyScreen onNavigate={navigateTo} onBack={() => navigateTo(ScreenName.HOME)} />}
      {currentScreen === ScreenName.REWARDS && <RewardsScreen onNavigate={navigateTo} onBack={() => navigateTo(ScreenName.HOME)} />}
      {currentScreen === ScreenName.PROFILE && <ProfileScreen onNavigate={navigateTo} />}
      {currentScreen === ScreenName.CREATE_WARRANTY && <CreateWarrantyScreen onBack={() => navigateTo(ScreenName.HOME)} onNavigate={navigateTo} />}
      {currentScreen === ScreenName.HISTORY && <OrderHistoryScreen onBack={() => navigateTo(ScreenName.PROFILE)} onNavigate={navigateTo} />}
      {currentScreen === ScreenName.ORDER_SEARCH && <OrderLookupScreen onBack={() => navigateTo(ScreenName.HOME)} onNavigate={navigateTo} />}
      {currentScreen === ScreenName.SHIPPING_ADDRESS && <ShippingAddressScreen onBack={() => navigateTo(ScreenName.PROFILE)} />}
      {currentScreen === ScreenName.SETTINGS && <SettingsScreen onBack={() => navigateTo(ScreenName.PROFILE)} />}
      {currentScreen === ScreenName.HELP_CENTER && <HelpCenterScreen onBack={() => navigateTo(ScreenName.PROFILE)} />}
      {currentScreen === ScreenName.SERVICE_APPOINTMENTS && <ServiceAppointmentsScreen onBack={() => navigateTo(ScreenName.PROFILE)} />}
      {currentScreen === ScreenName.PRIVACY_POLICY && <PrivacyPolicyScreen onBack={() => navigateTo(ScreenName.PROFILE)} />}
      {currentScreen === ScreenName.TERMS_OF_SERVICE && <TermsOfServiceScreen onBack={() => navigateTo(ScreenName.PROFILE)} />}
      
      {/* Support Screen now uses onBack for navigation */}
      {currentScreen === ScreenName.SUPPORT && <SupportScreen onBack={goBack} />}
      
      {currentScreen === ScreenName.WARRANTY_DETAIL && <WarrantyDetailScreen onBack={goBack} />}
      
      {currentScreen === ScreenName.HOT_DEALS && <HotDealsScreen onBack={() => navigateTo(ScreenName.HOME)} />}
      
      {currentScreen === ScreenName.POINTS_POLICY && <PointsPolicyScreen onBack={goBack} />}
      {currentScreen === ScreenName.MY_REWARDS && <MyRewardsScreen onNavigate={navigateTo} onBack={() => navigateTo(ScreenName.REWARDS)} />}
      {currentScreen === ScreenName.REWARD_DETAIL && <RewardDetailScreen onBack={() => navigateTo(ScreenName.REWARDS)} />}
      {currentScreen === ScreenName.ALL_REWARDS && <AllRewardsScreen onNavigate={navigateTo} onBack={() => navigateTo(ScreenName.REWARDS)} />}
      {currentScreen === ScreenName.ORDER_DETAIL && <OrderDetailScreen onNavigate={navigateTo} onBack={goBack} />}

      {/* BottomNav is now always visible */}
      <BottomNav currentScreen={currentScreen} onNavigate={navigateTo} />
    </div>
  );
};

export default App;