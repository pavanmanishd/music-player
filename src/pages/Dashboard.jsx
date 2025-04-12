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
    <div className="flex flex-col h-full bg-gradient-to-b from-gray-900 to-black text-white p-6">
      {/* Featured Playlist Section */}
      <div className="flex mb-8 h-64">
        {/* Left section - Playlist of the day */}
        <div className="w-1/3 bg-purple-800 rounded-lg p-6 mr-4 flex flex-col">
          <div className="text-sm text-gray-300 mb-1">{featuredPlaylist.tracks} tracks • {featuredPlaylist.duration}</div>
          <h2 className="text-2xl font-bold mb-4">Playlist of the day</h2>
          <div className="mt-auto">
            <img src={featuredPlaylist.image} alt="Featured Playlist" className="w-24 h-24 rounded-md shadow-lg" />
          </div>
        </div>
        
        {/* Right section - Featured song */}
        <div className="w-2/3 rounded-lg relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${featuredPlaylist.image})`,
              filter: 'brightness(0.5)'
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div>
              <div className="text-sm text-gray-300">{featuredPlaylist.artist} • {featuredPlaylist.releaseDate}</div>
              <h2 className="text-4xl font-bold mt-2">{featuredPlaylist.currentSong}</h2>
            </div>
            
            <div className="flex justify-between items-center">
              <div></div> {/* Empty div for spacing */}
              <div 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => playTrack(featuredTrack)}
              >
                <PlayIcon className="w-6 h-6 text-black ml-0.5" />
              </div>
              <div className="flex space-x-4">
                <button onClick={() => setLiked(!liked)} className="text-white hover:scale-110 transition-transform">
                  {liked ? <HeartIconSolid className="w-6 h-6 text-white" /> : <HeartIcon className="w-6 h-6" />}
                </button>
                <button className="text-white hover:scale-110 transition-transform">
                  <EllipsisHorizontalIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-800 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-accent border-b-2 border-accent' : 'text-gray-400'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Main content area with playlists and statistics */}
      <div className="flex flex-1 gap-6">
        {/* Playlists Section */}
        <div className="flex-1">
          {userPlaylists.map(playlist => (
            <div key={playlist.id} className="flex items-center justify-between py-3 hover:bg-gray-800 rounded-md px-2 group">
              <div className="flex items-center">
                <img src={playlist.image} alt={playlist.title} className="w-12 h-12 rounded-md mr-4" />
                <div>
                  <h3 className="font-medium">{playlist.title}</h3>
                  <p className="text-sm text-gray-400">{playlist.tracks} tracks • {playlist.duration}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-400 mr-4">{playlist.date}</span>
                <button 
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handlePlayPlaylist(playlist)}
                >
                  <PlayIcon className="w-8 h-8 text-white bg-accent rounded-full p-1" />
                </button>
                <button className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;