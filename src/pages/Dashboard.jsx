import { useState } from 'react';
import { PlayIcon, EllipsisHorizontalIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { userPlaylists, featuredPlaylist, statistics } from '../data/musicData';
import { useMusicContext } from '../context/MusicContext';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Playlists');
  const [liked, setLiked] = useState(false);
  const { playTrack, toggleFavorite } = useMusicContext();

  const tabs = ['Playlists', 'Artists', 'Albums', 'Streams', 'Friends\' playlists'];

  // Create a proper track object from the featured playlist
  const featuredTrack = {
    id: featuredPlaylist.id || 'featured-1',
    title: featuredPlaylist.currentSong,
    artist: featuredPlaylist.artist,
    album: featuredPlaylist.title,
    cover: featuredPlaylist.image,
    duration: 242, // Default duration in seconds if not available
    path: featuredPlaylist.audioPath || '/audio/sample.mp3'
  };

  // Handle playing a playlist by creating a proper track object
  const handlePlayPlaylist = (playlist) => {
    // Create a sample track from the playlist
    const firstTrack = {
      id: `${playlist.id}-track-1`,
      title: `${playlist.title} - Track 1`,
      artist: playlist.artist || 'Various Artists',
      album: playlist.title,
      cover: playlist.image,
      duration: 180, // Default duration in seconds
      path: playlist.audioPath || '/audio/sample.mp3'
    };
    
    playTrack(firstTrack);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Featured Playlist Section */}
      <div className="flex flex-col md:flex-row mb-4 sm:mb-8 gap-3 sm:gap-4">
        {/* Left section - Playlist of the day */}
        <div className="hidden md:flex w-full md:w-1/6 bg-black/20 rounded-lg p-4 sm:p-6 flex-col relative">
          <div className="text-sm text-gray-300 mb-1">69 tracks • 4 hours 37 minutes</div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 font-ephesis">Playlist of the day</h2>
          <div className="mt-auto">
            <img src={featuredPlaylist.image} alt="Featured Playlist" className="w-full md:scale-80 rounded-md shadow-lg" />
          </div>
        </div>
        
        {/* Middle section - Featured song */}
        <div className="w-full md:w-3/6 rounded-lg relative min-h-[150px] sm:min-h-[200px] md:min-h-0">
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-lg" 
            style={{ 
              backgroundImage: `url(${featuredPlaylist.image})`,
              filter: 'brightness(0.6)'
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-6">
            <div>
              <div className="text-xs sm:text-sm text-gray-300">Brand of Sacrifice • April, 2023</div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-1 sm:mt-2">Between Death and Dreams</h2>
            </div>
            
            <div className="flex justify-end items-center">
              <div className="flex space-x-3">
                <button onClick={() => setLiked(!liked)} className="text-white">
                  {liked ? <HeartIconSolid className="w-5 h-5" /> : <HeartIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right section - For You */}
        <div className="hidden md:flex w-full md:w-2/6 bg-gradient-to-br from-indigo-900/40 to-indigo-800/30 rounded-lg p-4 sm:p-6 flex-col">
          <h2 className="text-lg font-bold mb-3">For You</h2>
          
          <div className="flex-1 flex flex-col">
            <div className="relative w-full h-full flex flex-col">
              <img 
                src={"https://picsum.photos/1000/200?random=1" || featuredPlaylist.image} 
                alt="Track" 
                className="w-full h-48 md:h-3/4 rounded-md object-cover mb-2" 
              />
              <div className="flex flex-col items-center mt-auto">
                <p className="text-lg font-medium">Starlight</p>
                <p className="text-sm text-gray-300">Muse</p>
              </div>
              <div 
                className="absolute bottom-2 right-2 w-8 h-8 bg-indigo-500/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-400/80 transition-colors"
                onClick={() => playTrack({
                  id: 'recommendation-1',
                  title: 'Starlight',
                  artist: 'Muse',
                  album: 'Black Holes and Revelations',
                  cover: userPlaylists[0]?.image || featuredPlaylist.image,
                  duration: 240,
                  path: '/audio/sample.mp3'
                })}
              >
                <PlayIcon className="w-4 h-4 text-white ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto border-b border-white/10 mb-4 sm:mb-6 hide-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base font-medium whitespace-nowrap ${activeTab === tab ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white/80'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Main content area with playlists */}
      <div className="flex-1">
        <div className="card">
          <div className="divide-y divide-white/10">
            {userPlaylists.map(playlist => (
              <div 
                key={playlist.id}
                className="flex items-center p-2 sm:p-4 hover:bg-white/5 cursor-pointer"
                onClick={() => playTrack({
                  id: `${playlist.id}-track-1`,
                  title: playlist.title,
                  artist: playlist.artist || 'Various Artists',
                  album: playlist.title,
                  cover: playlist.image,
                  duration: 180,
                  path: playlist.audioPath || '/audio/sample.mp3'
                })}
              >
                <img 
                  src={playlist.image} 
                  alt={playlist.title} 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                />
                <div className="ml-3 flex-1 min-w-0">
                  <div className="font-medium truncate">{playlist.title}</div>
                  <div className="text-sm text-gray-400 truncate">{playlist.tracks} tracks</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;