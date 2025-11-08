export const MovieCard = ({ movie, onPlay }) => {
  return (
    <div 
      className="flex-shrink-0 w-32 cursor-pointer group"
      onClick={() => onPlay(movie.trailer)}
    >
      <div className="relative w-32 h-48 bg-gray-800 rounded-lg overflow-hidden mb-2 hover:ring-2 hover:ring-red-500 transition-all">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        {movie.trailer && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-lg">
              <svg 
                width="14" 
                height="18" 
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
        )}
      </div>
      <p className="text-white text-sm">{movie.title}</p>
    </div>
  );
};