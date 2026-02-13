import React, { useState, useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import WarrantyScreen from './screens/WarrantyScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreateWarrantyScreen from './screens/CreateWarrantyScreen';
import ServiceBookingScreen from './screens/ServiceBookingScreen';
import ServiceBookingSuccessScreen from './screens/ServiceBookingSuccessScreen';
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
import MinigameScreen from './screens/MinigameScreen'; // Import Minigame
import BottomNav from './components/BottomNav';
import { ScreenName } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>(ScreenName.HOME);
  // State to track where the user came from (Origin Tracking)
  const [previousScreen, setPreviousScreen] = useState<ScreenName>(ScreenName.HOME);

  // Screens where BottomNav should be hidden to allow full-screen immersive flows or bottom actions
  const screensWithoutNav = [
    ScreenName.SERVICE_BOOKING,
    ScreenName.SERVICE_BOOKING_SUCCESS,
    ScreenName.CREATE_WARRANTY,
    ScreenName.MINIGAME, // Hide nav on game screen
  ];

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic Theme Color & Status Bar Style
    const darkerScreens = [ScreenName.HOME, ScreenName.MINIGAME];
    const isDark = darkerScreens.includes(currentScreen);

    // 1. Update theme-color (Android/Chrome/Safari Browser)
    let themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement('meta');
      themeMeta.setAttribute('name', 'theme-color');
      document.head.appendChild(themeMeta);
    }
    themeMeta.setAttribute('content', isDark ? '#000000' : '#F2F4F6');

    // 2. Update iOS Status Bar Style (Try to switch between light/dark text)
    // Note: iOS PWA often locks this at startup, but some versions allow update.
    let statusMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (statusMeta) {
      // black-translucent = White Text (for Dark BG)
      // default = Black Text (for Light BG)
      statusMeta.setAttribute('content', isDark ? 'black-translucent' : 'default');
    }

  }, [currentScreen]);

  const navigateTo = (screen: ScreenName) => {
    // Smart Navigation Logic:
    // When going to Warranty Detail, remember where we came from.
    if (screen === ScreenName.WARRANTY_DETAIL) {
      if (currentScreen === ScreenName.HOME || currentScreen === ScreenName.WARRANTY) {
        setPreviousScreen(currentScreen);
      }
    }

    // Smart Tracking for Support Screen (Requested Update)
    // Captures the current screen before navigating to Support, ensuring the Back button works intuitively.
    if (screen === ScreenName.SUPPORT) {
      setPreviousScreen(currentScreen);
    }

    // Save origin for Minigame too, so we can go back to where we were
    if (screen === ScreenName.MINIGAME) {
      setPreviousScreen(currentScreen);
    }

    setCurrentScreen(screen);
  };

  const goBack = () => {
    switch (currentScreen) {
      case ScreenName.CREATE_WARRANTY:
        navigateTo(ScreenName.HOME);
        break;
      case ScreenName.SERVICE_BOOKING:
        navigateTo(ScreenName.HOME);
        break;
      case ScreenName.SERVICE_BOOKING_SUCCESS:
        navigateTo(ScreenName.HOME); // Back from success goes home
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
        // Use the tracked previous screen if it exists and makes sense, otherwise default to Home
        if (previousScreen && previousScreen !== ScreenName.SUPPORT) {
          navigateTo(previousScreen);
        } else {
          navigateTo(ScreenName.HOME);
        }
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
      case ScreenName.MINIGAME:
        // Return to where we opened the game from
        if (previousScreen && previousScreen !== ScreenName.MINIGAME) {
          navigateTo(previousScreen);
        } else {
          navigateTo(ScreenName.HOME);
        }
        break;
      default:
        navigateTo(ScreenName.HOME);
    }
  };

  return (
    // Mobile Container Strategy:
    <div className="w-full max-w-[430px] min-h-screen mx-auto bg-background-light relative shadow-2xl overflow-x-hidden">
      {currentScreen === ScreenName.HOME && <HomeScreen onNavigate={navigateTo} />}
      {currentScreen === ScreenName.WARRANTY && <WarrantyScreen onNavigate={navigateTo} onBack={() => navigateTo(ScreenName.HOME)} />}
      {currentScreen === ScreenName.REWARDS && <RewardsScreen onNavigate={navigateTo} onBack={() => navigateTo(ScreenName.HOME)} />}
      {currentScreen === ScreenName.PROFILE && <ProfileScreen onNavigate={navigateTo} />}

      {currentScreen === ScreenName.CREATE_WARRANTY && <CreateWarrantyScreen onBack={() => navigateTo(ScreenName.HOME)} onNavigate={navigateTo} />}
      {currentScreen === ScreenName.SERVICE_BOOKING && <ServiceBookingScreen onBack={() => navigateTo(ScreenName.HOME)} onNavigate={navigateTo} />}
      {currentScreen === ScreenName.SERVICE_BOOKING_SUCCESS && <ServiceBookingSuccessScreen onNavigate={navigateTo} />}

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

      {currentScreen === ScreenName.MINIGAME && <MinigameScreen onBack={goBack} />}

      {/* Floating Game Button - Halted
      {currentScreen !== ScreenName.MINIGAME && currentScreen !== ScreenName.SERVICE_BOOKING && currentScreen !== ScreenName.CREATE_WARRANTY && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[60] pointer-events-none">
          <button
            onClick={() => navigateTo(ScreenName.MINIGAME)}
            className="pointer-events-auto absolute bottom-0 right-4 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 group shadow-[0_0_20px_rgba(227,0,25,0.4)]"
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-20 animate-ping"></span>
            <span className="absolute inline-flex h-12 w-12 rounded-full bg-primary/40 opacity-75 blur-sm"></span>

            <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-primary to-[#ff4d4d] flex items-center justify-center border-2 border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-[shimmer_2s_infinite]"></div>
              <i className="ph-fill ph-gift text-2xl text-white drop-shadow-md group-hover:rotate-12 transition-transform"></i>
            </div>

            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 border-2 border-white text-[10px] font-bold text-yellow-900 shadow-sm animate-bounce">
              3
            </span>
          </button>
        </div>
      )}
      */}

      {/* Conditionally Render BottomNav */}
      {!screensWithoutNav.includes(currentScreen) && (
        <BottomNav currentScreen={currentScreen} onNavigate={navigateTo} />
      )}
    </div>
  );
};

export default App;