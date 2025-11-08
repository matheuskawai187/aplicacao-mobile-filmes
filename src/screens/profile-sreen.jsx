import { User } from 'lucide-react';
import { Button } from '../components/common/Button';
import { BottomNavigation } from '../components/common/bottom-navigation';

export const ProfileScreen = ({ userData, onLogout, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-900 px-6 pt-8 pb-20">
      <h1 className="text-white text-3xl font-bold mb-8">Perfil</h1>
      
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold">
              {userData?.email}
            </h2>
            <p className="text-gray-400 text-sm">
              Membro desde {new Date(userData?.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <Button onClick={onLogout} className="w-full">
        Sair
      </Button>

      <BottomNavigation 
        activeScreen="profile"
        onNavigate={onNavigate}
      />
    </div>
  );
};