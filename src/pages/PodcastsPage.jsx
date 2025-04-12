import { useState, useEffect } from 'react';
import { PlayIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import { useMusicContext } from '../context/MusicContext';
import { getPodcasts } from '../data/musicData';

const PodcastsPage = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { playTrack } = useMusicContext();
  
  useEffect(() => {
    // Fetch podcasts
    setIsLoading(true);
    const fetchedPodcasts = getPodcasts();
    setPodcasts(fetchedPodcasts);
    setIsLoading(false);
  }, []);
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Podcasts</h1>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <p>Loading...</p>
        </div>
      ) : podcasts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcasts.map(podcast => (
            <div key={podcast.id} className="bg-secondary rounded-lg overflow-hidden">
              <img 
                src={podcast.cover} 
                alt={podcast.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-1">{podcast.title}</h2>
                <p className="text-text-secondary text-sm mb-3">{podcast.author}</p>
                <p className="text-sm mb-4 line-clamp-2">{podcast.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary">{podcast.episodes} episodes</span>
                  <button 
                    className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-4 py-1.5 rounded-full text-sm"
                    onClick={() => playTrack(podcast.latestEpisode)}
                  >
                    <PlayIcon className="w-4 h-4" />
                    <span>Latest Episode</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 bg-secondary rounded-lg">
          <MicrophoneIcon className="w-16 h-16 text-gray-600 mb-4" />
          <h2 className="text-xl font-bold mb-2">No podcasts available</h2>
          <p className="text-text-secondary">Check back later for new podcasts</p>
        </div>
      )}
    </div>
  );
};

export default PodcastsPage;