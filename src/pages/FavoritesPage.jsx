import { useState, useEffect } from 'react';
import { PlayIcon, PauseIcon, ClockIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useMusicContext } from '../context/MusicContext';
import { getFavoriteTracks } from '../data/musicData';

const FavoritesPage = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { 
    currentTrack, 
    isPlaying, 
    favorites, 
    playTrack, 
    toggleFavorite,
    formatTime
  } = useMusicContext();
  
  useEffect(() => {
    // Fetch favorite tracks
    setIsLoading(true);
    const favoriteTracks = getFavoriteTracks(favorites);
    setTracks(favoriteTracks);
    setIsLoading(false);
  }, [favorites]);
  
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="page-title">Favorites</h1>
        {tracks.length > 0 && (
          <button 
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full shadow-md transition-colors"
            onClick={() => playTrack(tracks[0], tracks)}
          >
            <PlayIcon className="w-5 h-5" />
            <span>Play</span>
          </button>
        )}
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <p>Loading...</p>
        </div>
      ) : tracks.length > 0 ? (
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="table-header">
                <th className="p-4 w-12">#</th>
                <th className="p-4">Title</th>
                <th className="p-4">Album</th>
                <th className="p-4">Artist</th>
                <th className="p-4 text-right"><ClockIcon className="w-5 h-5 ml-auto" /></th>
                <th className="p-4 w-16"></th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track, index) => {
                const isCurrentTrack = currentTrack && currentTrack.id === track.id;
                
                return (
                  <tr 
                    key={track.id}
                    className={`table-row ${isCurrentTrack ? 'text-accent' : ''}`}
                  >
                    <td className="p-4">{index + 1}</td>
                    <td 
                      className="p-4 cursor-pointer"
                      onClick={() => playTrack(track, tracks.slice(index))}
                    >
                      <div className="flex items-center">
                        <img 
                          src={track.cover} 
                          alt={track.title} 
                          className="w-10 h-10 rounded mr-3 shadow-md"
                        />
                        <span>{track.title}</span>
                      </div>
                    </td>
                    <td className="p-4">{track.album}</td>
                    <td className="p-4">{track.artist}</td>
                    <td className="p-4 text-right">{formatTime(track.duration)}</td>
                    <td className="p-4 text-right">
                      <button 
                        className="text-accent hover:text-accent/80 transition-colors"
                        onClick={() => toggleFavorite(track.id)}
                      >
                        <HeartIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state">
          <HeartIcon className="w-16 h-16 text-white/20 mb-4" />
          <h2 className="text-xl font-bold mb-2">No favorites yet</h2>
          <p className="text-text-secondary">Start adding songs to your favorites</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;