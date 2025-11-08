// ========================================
// 📄 src/App.jsx
// ========================================
import { useState, useEffect } from 'react';

// Hooks
import { useAuth } from './hooks/use-auth';

// Screens
import { LoginScreen } from './screens/login-screen';
import { HomeScreen } from './screens/home-screen';
import { ProfileScreen } from './screens/profile-sreen';
import { SearchScreen } from './screens/search-screen';

// Data
import { moviesData } from './data/movies-data';

const App = () => {
  const { userData, loginError, login, signup, logout } = useAuth();
  const [currentScreen, setCurrentScreen] = useState('login');

  // Auto-navega para home quando usuário está logado
  useEffect(() => {
    if (userData && currentScreen === 'login') {
      setCurrentScreen('home');
    }
  }, [userData, currentScreen]);

  // Handlers
  const handleLogin = (formData) => {
    if (login(formData)) {
      setCurrentScreen('home');
    }
  };

  const handleSignup = (formData) => {
    if (signup(formData)) {
      setCurrentScreen('home');
    }
  };

  const handleLogout = () => {
    logout();
    setCurrentScreen('login');
  };

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  const openTrailer = (url) => {
    window.open(url, '_blank');
  };

  // Renderização condicional das telas
  return (
    <div className="max-w-md mx-auto bg-gray-900 select-none">
      {currentScreen === 'login' && (
        <LoginScreen 
          onLogin={handleLogin}
          onSignup={handleSignup}
          error={loginError}
        />
      )}
      
      {currentScreen === 'home' && (
        <HomeScreen 
          userData={userData}
          onNavigate={handleNavigate}
          onPlayTrailer={openTrailer}
          moviesData={moviesData}
        />
      )}
      
      {currentScreen === 'profile' && (
        <ProfileScreen 
          userData={userData}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
      )}
      {currentScreen === 'search' && (
        <SearchScreen
          userData={userData}
          onNavigate={handleNavigate}
          moviesData={moviesData}
        />
      )}
    </div>
  );
};

export default App;