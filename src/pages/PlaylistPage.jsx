import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayIcon, PauseIcon, ClockIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useMusicContext } from '../context/MusicContext';
import { getPlaylistById, getPlaylistTracks } from '../data/musicData';

const PlaylistPage = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
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
    // Simulate loading data
    setIsLoading(true);
    const fetchedPlaylist = getPlaylistById(id);
    
    if (fetchedPlaylist) {
      setPlaylist(fetchedPlaylist);
      setTracks(getPlaylistTracks(fetchedPlaylist.id));
    }
    
    setIsLoading(false);
  }, [id]);
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }
  
  if (!playlist) {
    return <div className="flex items-center justify-center h-full">Playlist not found</div>;
  }
  
  return (
    <div>
      {/* Playlist header */}
      <div className="flex items-center gap-8 mb-8">
        <img 
          src={playlist.cover} 
          alt={playlist.title} 
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{playlist.title}</h1>
          <p className="text-text-secondary mb-4">
            {playlist.trackCount} tracks • {playlist.duration}
          </p>
          <div className="flex items-center gap-4">
            <button 
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full"
              onClick={() => {
                if (tracks.length > 0) {
                  playTrack(tracks[0], tracks);
                }
              }}
            >
              {isPlaying && currentTrack && tracks.some(track => track.id === currentTrack.id) ? (
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
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800 text-text-secondary text-left">
              <th className="pb-2 w-12">#</th>
              <th className="pb-2">Title</th>
              <th className="pb-2">Album</th>
              <th className="pb-2 w-24 text-right"><ClockIcon className="w-5 h-5 ml-auto" /></th>
              <th className="pb-2 w-16"></th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track, index) => {
              const isCurrentTrack = currentTrack && currentTrack.id === track.id;
              const isFavorite = favorites.includes(track.id);
              
              return (
                <tr 
                  key={track.id}
                  className={`border-b border-gray-800 hover:bg-gray-800 ${isCurrentTrack ? 'text-accent' : ''}`}
                >
                  <td className="py-3">{index + 1}</td>
                  <td 
                    className="py-3 cursor-pointer"
                    onClick={() => playTrack(track, tracks.slice(index))}
                  >
                    <div className="flex items-center">
                      {isCurrentTrack && isPlaying ? (
                        <span className="w-4 h-4 mr-2 relative flex justify-center items-center">
                          <span className="animate-music-bar h-2 w-0.5 bg-accent absolute left-0"></span>
                          <span className="animate-music-bar animation-delay-200 h-3 w-0.5 bg-accent absolute left-1"></span>
                          <span className="animate-music-bar animation-delay-400 h-1.5 w-0.5 bg-accent absolute left-2"></span>
                        </span>
                      ) : (
                        <PlayIcon className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100" />
                      )}
                      {track.title}
                    </div>
                  </td>
                  <td className="py-3">{track.album}</td>
                  <td className="py-3 text-right">{formatTime(track.duration)}</td>
                  <td className="py-3 text-right">
                    <button 
                      className="text-text-secondary hover:text-accent"
                      onClick={() => toggleFavorite(track.id)}
                    >
                      {isFavorite ? (
                        <HeartIcon className="w-5 h-5 text-accent" />
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
  );
};

export default PlaylistPage;