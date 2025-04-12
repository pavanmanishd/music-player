import { useState, useEffect } from 'react';
import { PlayIcon, ClockIcon } from '@heroicons/react/24/solid';
import { ClockIcon as ClockOutlineIcon } from '@heroicons/react/24/outline';
import { useMusicContext } from '../context/MusicContext';
import { getListenLaterTracks } from '../data/musicData';

const ListenLaterPage = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { 
    currentTrack, 
    isPlaying, 
    listenLater, 
    playTrack, 
    toggleListenLater,
    formatTime
  } = useMusicContext();
  
  useEffect(() => {
    // Fetch listen later tracks
    setIsLoading(true);
    const listenLaterTracks = getListenLaterTracks(listenLater);
    setTracks(listenLaterTracks);
    setIsLoading(false);
  }, [listenLater]);
  
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Listen Later</h1>
        {tracks.length > 0 && (
          <button 
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full"
            onClick={() => playTrack(tracks[0], tracks)}
          >
            <PlayIcon className="w-5 h-5" />
            <span>Play All</span>
          </button>
        )}
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <p>Loading...</p>
        </div>
      ) : tracks.length > 0 ? (
        <div className="bg-secondary rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700 text-text-secondary text-left">
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
                    className={`border-b border-gray-700 hover:bg-gray-700 ${isCurrentTrack ? 'text-accent' : ''}`}
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
                          className="w-10 h-10 rounded mr-3"
                        />
                        <span>{track.title}</span>
                      </div>
                    </td>
                    <td className="p-4">{track.album}</td>
                    <td className="p-4">{track.artist}</td>
                    <td className="p-4 text-right">{formatTime(track.duration)}</td>
                    <td className="p-4 text-right">
                      <button 
                        className="text-accent"
                        onClick={() => toggleListenLater(track.id)}
                      >
                        <ClockIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 bg-secondary rounded-lg">
          <ClockOutlineIcon className="w-16 h-16 text-gray-600 mb-4" />
          <h2 className="text-xl font-bold mb-2">Your Listen Later list is empty</h2>
          <p className="text-text-secondary">Add songs to listen to them later</p>
        </div>
      )}
    </div>
  );
};

export default ListenLaterPage;