export const ContinueWatchingCard = ({ item, onPlay }) => {
  return (
    <div 
      className="flex-shrink-0 cursor-pointer group"
      onClick={() => onPlay(item.trailer)}
    >
      <div className="w-40 h-24 bg-gray-800 rounded-lg overflow-hidden mb-2 relative hover:ring-2 hover:ring-red-500 transition-all">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <svg 
              width="16" 
              height="20" 
              viewBox="0 0 16 20" 
              fill="none" 
              className="ml-1"
            >
              <path 
                d="M0 0L16 10L0 20V0Z" 
                fill="white"
              />
            </svg>
          </div>
        </div>
        {/* Barra de progresso */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
          <div className="h-full bg-red-500" style={{ width: '60%' }}></div>
        </div>
      </div>
      <p className="text-white text-sm font-medium">{item.title}</p>
      <p className="text-gray-400 text-xs">{item.subtitle || 'S2E5'}</p>
    </div>
  );
};