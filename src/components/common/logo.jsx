import { Film } from 'lucide-react';

export const Logo = ({ size = 'medium' }) => {
  const sizes = {
    small: { container: 'w-10 h-10', icon: 'w-6 h-6', text: 'text-xs' },
    medium: { container: 'w-16 h-16', icon: 'w-10 h-10', text: 'text-xs' },
  };

  const currentSize = sizes[size];

  return (
    <div className="flex flex-col items-center">
      <div className={`${currentSize.container} bg-red-500 rounded-2xl flex items-center justify-center mb-1`}>
        <Film className={`${currentSize.icon} text-gray-900`} />
      </div>
      <div className={`${currentSize.text} text-red-500 tracking-wider`}>FILMES</div>
      <div className={`${currentSize.text} text-blue-400 tracking-wider`}>& SÉRIES</div>
    </div>
  );
};