import { useState } from 'react';
import { Search } from 'lucide-react';
import { BottomNavigation } from '../components/common/bottom-navigation';
import { MovieCard } from '../components/movie/movie-card';
import { Logo } from '../components/common/logo';

export const SearchScreen = ({ onNavigate, moviesData, onPlayTrailer }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Combina todos os filmes em uma única lista
  const allMovies = [
    ...moviesData.featured,
    ...moviesData.recommended,
  ];

  // Filtra os filmes baseado na busca
  const filteredMovies = searchQuery
    ? allMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gray-900 px-4 pt-4 pb-4 sticky top-0 z-10">
        <div className="flex items-center gap-2 mb-4">
          <Logo size="small" />
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar filmes e séries"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            autoFocus
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        {!searchQuery ? (
          // Estado inicial - sem busca
          <div className="flex flex-col items-center justify-center mt-20">
            <Search className="w-16 h-16 text-gray-600 mb-4" />
            <h2 className="text-white text-xl font-semibold mb-2">
              Buscar Filmes e Séries
            </h2>
            <p className="text-gray-400 text-center">
              Digite o nome do filme ou série que você procura
            </p>
          </div>
        ) : filteredMovies.length > 0 ? (
          // Resultados encontrados
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {filteredMovies.length} {filteredMovies.length === 1 ? 'resultado' : 'resultados'}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onPlay={onPlayTrailer}
                />
              ))}
            </div>
          </div>
        ) : (
          // Nenhum resultado
          <div className="flex flex-col items-center justify-center mt-20">
            <Search className="w-16 h-16 text-gray-600 mb-4" />
            <h2 className="text-white text-xl font-semibold mb-2">
              Nenhum resultado encontrado
            </h2>
            <p className="text-gray-400 text-center">
              Tente buscar por outro título
            </p>
          </div>
        )}
      </div>

      <BottomNavigation activeScreen="search" onNavigate={onNavigate} />
    </div>
  );
};