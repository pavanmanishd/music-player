import { createContext, useState, useContext, useEffect } from 'react';
import { albums, playlists } from '../data/musicData';

const MusicContext = createContext();

export const useMusicContext = () => useContext(MusicContext);

export const MusicProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [favorites, setFavorites] = useState([]);
  // Changed default value to true so queue is open by default
  const [showQueue, setShowQueue] = useState(true);
  
  // New state for additional features
  const [listenLater, setListenLater] = useState([]);
  const [playHistory, setPlayHistory] = useState([]);

  // Load saved state from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    
    const savedListenLater = localStorage.getItem('listenLater');
    if (savedListenLater) {
      setListenLater(JSON.parse(savedListenLater));
    }
    
    const savedPlayHistory = localStorage.getItem('playHistory');
    if (savedPlayHistory) {
      setPlayHistory(JSON.parse(savedPlayHistory));
    }
    
    const savedVolume = localStorage.getItem('volume');
    if (savedVolume) {
      setVolume(parseFloat(savedVolume));
    }
  }, []);
  
  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  
  useEffect(() => {
    localStorage.setItem('listenLater', JSON.stringify(listenLater));
  }, [listenLater]);
  
  useEffect(() => {
    localStorage.setItem('playHistory', JSON.stringify(playHistory));
  }, [playHistory]);
  
  useEffect(() => {
    localStorage.setItem('volume', volume.toString());
  }, [volume]);

  // Function to play a track and set up the queue
  const playTrack = (track, trackList) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    
    // Set up the queue with the remaining tracks from the list
    if (trackList) {
      const trackIndex = trackList.findIndex(t => t.id === track.id);
      const remainingTracks = trackList.slice(trackIndex + 1);
      setQueue(remainingTracks);
    } else if (queue.length === 0) {
      // Add default songs to queue if it's empty
      const defaultQueue = [
        {
          id: 'default-1',
          title: 'Starlight',
          artist: 'Muse',
          album: 'Black Holes and Revelations',
          cover: 'https://picsum.photos/id/65/300/300',
          duration: 240,
          path: '/audio/sample.mp3'
        },
        {
          id: 'default-2',
          title: 'Blinding Lights',
          artist: 'The Weeknd',
          album: 'After Hours',
          cover: 'https://picsum.photos/id/42/300/300',
          duration: 203,
          path: '/audio/sample.mp3'
        },
        {
          id: 'default-3',
          title: 'Levitating',
          artist: 'Dua Lipa',
          album: 'Future Nostalgia',
          cover: 'https://picsum.photos/id/24/300/300',
          duration: 217,
          path: '/audio/sample.mp3'
        }
      ];
      setQueue(defaultQueue);
    }
    
    // Reset time
    setCurrentTime(0);
    setDuration(track.duration || 180); // Default to 3 minutes if no duration
    
    // Add to play history
    const historyEntry = {
      ...track,
      playedAt: new Date().toISOString()
    };
    setPlayHistory(prev => [historyEntry, ...prev].slice(0, 100)); // Keep last 100 entries
  };

  // Function to play the next track in queue
  const playNextTrack = () => {
    if (queue.length > 0) {
      const nextTrack = queue[0];
      const newQueue = queue.slice(1);
      setCurrentTrack(nextTrack);
      setQueue(newQueue);
      setCurrentTime(0);
      setDuration(nextTrack.duration || 180);
      
      // Add to play history
      const historyEntry = {
        ...nextTrack,
        playedAt: new Date().toISOString()
      };
      setPlayHistory(prev => [historyEntry, ...prev].slice(0, 100));
    } else if (isRepeating && currentTrack) {
      // If repeating, start the current track again
      setCurrentTime(0);
    } else {
      // If no more tracks and not repeating, stop playback
      setIsPlaying(false);
    }
  };

  // Function to play the previous track
  const playPreviousTrack = () => {
    // For simplicity, just restart the current track
    setCurrentTime(0);
  };

  // Toggle favorite status for a track
  const toggleFavorite = (trackId) => {
    if (favorites.includes(trackId)) {
      setFavorites(favorites.filter(id => id !== trackId));
    } else {
      setFavorites([...favorites, trackId]);
    }
  };
  
  // Toggle listen later status for a track
  const toggleListenLater = (trackId) => {
    if (listenLater.includes(trackId)) {
      setListenLater(listenLater.filter(id => id !== trackId));
    } else {
      setListenLater([...listenLater, trackId]);
    }
  };
  
  // Clear play history
  const clearPlayHistory = () => {
    setPlayHistory([]);
  };

  // Simulate time progress when a track is playing
  useEffect(() => {
    let interval;
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          if (newTime >= duration) {
            clearInterval(interval);
            playNextTrack();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  // Format time for display (mm:ss)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <MusicContext.Provider
      value={{
        currentTrack,
        isPlaying,
        queue,
        currentTime,
        duration,
        volume,
        isShuffled,
        isRepeating,
        favorites,
        showQueue,
        listenLater,
        playHistory,
        setCurrentTrack,
        setIsPlaying,
        setQueue,
        setCurrentTime,
        setDuration,
        setVolume,
        setIsShuffled,
        setIsRepeating,
        toggleFavorite,
        toggleListenLater,
        clearPlayHistory,
        playTrack,
        playNextTrack,
        playPreviousTrack,
        formatTime,
        setShowQueue
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};