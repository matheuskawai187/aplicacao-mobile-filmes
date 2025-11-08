import { Header } from '../components/layout/header';
import { BottomNavigation } from '../components/common/bottom-navigation';
import { MovieSection } from '../components/movie/movie-section';
import { MovieCard } from '../components/movie/movie-card';
import { ContinueWatchingCard } from '../components/movie/continue-watching-card';
import { moviesData } from '../data/movies-data';

export const HomeScreen = ({ userData, onNavigate, onPlayTrailer }) => {
  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      <Header userEmail={userData?.email} />

      <div className="px-4 space-y-8">
        <MovieSection title="Em Alta Hoje">
          {moviesData.featured.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie}
              onPlay={onPlayTrailer}
            />
          ))}
        </MovieSection>

        <MovieSection title="Continuar Assistindo">
          {moviesData.continueWatching.map((item) => (
            <ContinueWatchingCard 
              key={item.id} 
              item={item}
              onPlay={onPlayTrailer}
            />
          ))}
        </MovieSection>

        <MovieSection title="Recomendados">
          {moviesData.recommended.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie}
              onPlay={onPlayTrailer}
            />
          ))}
        </MovieSection>
      </div>

      <BottomNavigation 
        activeScreen="home"
        onNavigate={onNavigate}
      />
    </div>
  );
};