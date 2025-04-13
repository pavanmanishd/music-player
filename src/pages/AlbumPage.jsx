import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayIcon, PauseIcon, ClockIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useMusicContext } from '../context/MusicContext';
import { getAlbumById } from '../data/musicData';

const AlbumPage = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
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
    // Simulate loading data
    setIsLoading(true);
    const fetchedAlbum = getAlbumById(id);
    
    if (fetchedAlbum) {
      setAlbum(fetchedAlbum);
    }
    
    setIsLoading(false);
  }, [id]);
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }
  
  if (!album) {
    return <div className="flex items-center justify-center h-full">Album not found</div>;
  }
  
  // Calculate total duration
  const totalDuration = album.tracks.reduce((total, track) => total + track.duration, 0);
  const formattedTotalDuration = formatTime(totalDuration);
  
  return (
    <div>
      {/* Album header */}
      <div className="flex items-center gap-8 mb-8">
        <img 
          src={album.cover} 
          alt={album.title} 
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{album.title}</h1>
          <p className="text-text-secondary mb-4">
            By <span className="text-text-primary hover:underline cursor-pointer">{album.artist}</span> • {album.year} • {album.tracks.length} songs, {formattedTotalDuration}
          </p>
          <div className="flex items-center gap-4">
            <button 
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full shadow-md transition-colors"
              onClick={() => {
                if (album.tracks.length > 0) {
                  playTrack(album.tracks[0], album.tracks);
                }
              }}
            >
              {isPlaying && currentTrack && album.tracks.some(track => track.id === currentTrack.id) ? (
                <>
                  <PauseIcon className="w-5 h-5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <PlayIcon className="w-5 h-5" />
                  <span>Play</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Tracks list */}
      <div className="mt-8">
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="table-header">
                <th className="p-4 w-12">#</th>
                <th className="p-4">Title</th>
                <th className="p-4 text-right"><ClockIcon className="w-5 h-5 ml-auto" /></th>
                <th className="p-4 w-16"></th>
              </tr>
            </thead>
            <tbody>
              {album.tracks.map((track, index) => {
                const isCurrentTrack = currentTrack && currentTrack.id === track.id;
                const isFavorite = favorites.includes(track.id);
                
                return (
                  <tr 
                    key={track.id}
                    className={`table-row ${isCurrentTrack ? 'text-accent' : ''}`}
                  >
                    <td className="p-4">{index + 1}</td>
                    <td 
                      className="p-4 cursor-pointer"
                      onClick={() => playTrack(track, album.tracks.slice(index))}
                    >
                      {track.title}
                    </td>
                    <td className="p-4 text-right">{formatTime(track.duration)}</td>
                    <td className="p-4 text-right">
                      <button 
                        className={`${isFavorite ? 'text-accent' : 'text-text-secondary'} hover:text-accent transition-colors`}
                        onClick={() => toggleFavorite(track.id)}
                      >
                        {isFavorite ? (
                          <HeartIcon className="w-5 h-5" />
                        ) : (
                          <HeartOutlineIcon className="w-5 h-5" />
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Album description */}
      {album.description && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">About</h2>
          <div className="card p-6">
            <p className="text-text-secondary">{album.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumPage;