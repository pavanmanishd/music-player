import { useMusicContext } from '../context/MusicContext';
import { XMarkIcon } from '@heroicons/react/24/outline';

const QueuePanel = () => {
  const { queue, currentTrack, playTrack, setShowQueue } = useMusicContext();
  
  return (
    <div className="h-full w-full md:w-80 flex flex-col bg-black/10 backdrop-blur-sm">
      <div className="p-3 md:p-4 border-b border-white/10 flex items-center justify-between">
        <h3 className="font-medium text-sm md:text-base">Queue</h3>
        <button 
          className="text-text-secondary hover:text-text-primary p-1"
          onClick={() => setShowQueue(false)}
        >
          <XMarkIcon className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
      
      {currentTrack && (
        <div className="p-3 md:p-4 border-b border-gray-800">
          <h4 className="text-xs text-text-secondary mb-2">Now Playing</h4>
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src={currentTrack.cover} 
              alt={currentTrack.title} 
              className="w-8 h-8 md:w-10 md:h-10 object-cover rounded"
            />
            <div>
              <p className="text-sm font-medium truncate">{currentTrack.title}</p>
              <p className="text-xs text-text-secondary truncate">{currentTrack.artist}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto">
        <h4 className="text-xs text-text-secondary p-3 md:p-4 pb-2">Next Up</h4>
        {queue.length > 0 ? (
          <div className="px-2 md:px-4">
            {queue.map((track, index) => (
              <div 
                key={track.id} 
                className="flex items-center gap-2 md:gap-3 py-2 hover:bg-gray-800 rounded px-2 cursor-pointer"
                onClick={() => playTrack(track, [track, ...queue.slice(index + 1)])}
              >
                <img 
                  src={track.cover} 
                  alt={track.title} 
                  className="w-8 h-8 md:w-10 md:h-10 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{track.title}</p>
                  <p className="text-xs text-text-secondary truncate">{track.artist}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-text-secondary text-sm p-3 md:p-4">No tracks in queue</p>
        )}
      </div>
    </div>
  );
};

export default QueuePanel;