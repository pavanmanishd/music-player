import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlayIcon, 
  PauseIcon, 
  ForwardIcon, 
  BackwardIcon, 
  SpeakerWaveIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  QueueListIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { useMusicContext } from '../context/MusicContext';

const MusicPlayer = () => {
  const { 
    currentTrack, 
    isPlaying, 
    currentTime, 
    duration, 
    volume,
    isShuffled,
    isRepeating,
    favorites,
    setIsPlaying,
    setCurrentTime,
    setVolume,
    setIsShuffled,
    setIsRepeating,
    toggleFavorite,
    playNextTrack,
    playPreviousTrack,
    formatTime,
    setShowQueue
  } = useMusicContext();
  
  const [isDragging, setIsDragging] = useState(false);
  const progressRef = useRef(null);
  const volumeRef = useRef(null);
  
  // Handle progress bar click/drag
  const handleProgressChange = (e) => {
    if (!currentTrack) return;
    
    const progressBar = progressRef.current;
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = Math.max(0, Math.min(duration, percent * duration));
    
    setCurrentTime(newTime);
  };
  
  // Handle volume change
  const handleVolumeChange = (e) => {
    const volumeBar = volumeRef.current;
    const rect = volumeBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newVolume = Math.max(0, Math.min(1, percent));
    
    setVolume(newVolume);
  };
  
  // Add event listeners for dragging
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        handleProgressChange(e);
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);
  
  // Toggle queue panel
  const toggleQueue = () => {
    setShowQueue(prev => !prev);
  };
  
  if (!currentTrack) {
    return (
      <div className="h-20 border-t border-gray-800 flex items-center justify-center text-text-secondary">
        No track selected
      </div>
    );
  }
  
  return (
    <div className="h-24 bg-black/30 backdrop-blur-lg border-t border-gray-800 flex items-center px-4 gap-4">
      {/* Track info */}
      <div className="flex items-center w-1/4">
        <img 
          src={currentTrack.cover} 
          alt={currentTrack.title} 
          className="w-12 h-12 object-cover rounded mr-3"
        />
        <div>
          <h4 className="text-sm font-medium truncate">{currentTrack.title}</h4>
          <Link to={`/artist/${currentTrack.artistId}`} className="text-xs text-text-secondary hover:underline">
            {currentTrack.artist}
          </Link>
        </div>
        <button 
          className="ml-4"
          onClick={() => toggleFavorite(currentTrack.id)}
        >
          {favorites.includes(currentTrack.id) ? (
            <HeartIcon className="w-5 h-5 text-accent" />
          ) : (
            <HeartOutlineIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      
      {/* Player controls */}
      <div className="flex-1 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-2">
          <button 
            className={`p-1 rounded-full ${isShuffled ? 'text-accent' : 'text-text-secondary'}`}
            onClick={() => setIsShuffled(!isShuffled)}
          >
            <ArrowsRightLeftIcon className="w-4 h-4" />
          </button>
          <button 
            className="p-1 text-text-secondary hover:text-text-primary"
            onClick={playPreviousTrack}
          >
            <BackwardIcon className="w-5 h-5" />
          </button>
          <button 
            className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <PauseIcon className="w-5 h-5" />
            ) : (
              <PlayIcon className="w-5 h-5" />
            )}
          </button>
          <button 
            className="p-1 text-text-secondary hover:text-text-primary"
            onClick={playNextTrack}
          >
            <ForwardIcon className="w-5 h-5" />
          </button>
          <button 
            className={`p-1 rounded-full ${isRepeating ? 'text-accent' : 'text-text-secondary'}`}
            onClick={() => setIsRepeating(!isRepeating)}
          >
            <ArrowPathIcon className="w-4 h-4" />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="w-full flex items-center gap-2">
          <span className="text-xs text-text-secondary">{formatTime(currentTime)}</span>
          <div 
            ref={progressRef}
            className="flex-1 h-1 bg-gray-700 rounded-full cursor-pointer"
            onClick={handleProgressChange}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleProgressChange(e);
            }}
          >
            <div 
              className="h-full bg-accent rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
          <span className="text-xs text-text-secondary">{formatTime(duration)}</span>
        </div>
      </div>
      
      {/* Volume and additional controls */}
      <div className="w-1/4 flex items-center justify-end gap-4">
        <button 
          className="text-text-secondary hover:text-text-primary"
          onClick={toggleQueue}
        >
          <QueueListIcon className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-2">
          <SpeakerWaveIcon className="w-5 h-5 text-text-secondary" />
          <div 
            ref={volumeRef}
            className="w-24 h-1 bg-gray-700 rounded-full cursor-pointer"
            onClick={handleVolumeChange}
          >
            <div 
              className="h-full bg-white rounded-full"
              style={{ width: `${volume * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;