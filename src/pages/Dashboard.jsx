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
    <div className="flex flex-col h-full p-6">
      {/* Featured Playlist Section */}
      <div className="flex mb-8 h-70 gap-4">
        {/* Left section - Playlist of the day */}
        <div className="w-1/6 bg-black/20 rounded-lg p-6 flex flex-col relative overflow-hidden">
          <div className="text-sm text-gray-300 mb-1">69 tracks • 4 hours 37 minutes</div>
          <h2 className="text-2xl font-bold mb-4 font-ephesis">Playlist of the day</h2>
          <div className="mt-auto">
            <img src={featuredPlaylist.image} alt="Featured Playlist" className="scale-80 rounded-md shadow-lg" />
          </div>
        </div>
        
        {/* Middle section - Featured song */}
        <div className="w-3/6 rounded-lg relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${featuredPlaylist.image})`,
              filter: 'brightness(0.6)'
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div>
              <div className="text-sm text-gray-300">Brand of Sacrifice • April, 2023</div>
              <h2 className="text-3xl font-bold mt-2">Between Death and Dreams</h2>
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
        
        {/* Right section - For You */}
        <div className="w-2/6 bg-gradient-to-br from-indigo-900/40 to-indigo-800/30 rounded-lg p-6 flex flex-col">
          <h2 className="text-lg font-bold mb-3">For You</h2>
          
          <div className="flex-1 flex flex-col">
            <div className="relative w-full h-full flex flex-col">
              <img 
                src={"https://picsum.photos/1000/200?random=1" || featuredPlaylist.image} 
                alt="Track" 
                className="w-full h-3/4 rounded-md object-cover mb-2" 
              />
              <div className="flex flex-col items-center mt-auto">
                <p className="text-lg font-medium">Starlight</p>
                <p className="text-sm text-gray-300">Muse</p>
              </div>
              <div 
                className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-500/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-400/80 transition-colors"
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
      <div className="flex border-b border-white/10 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white/80'}`}
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
          <div className="card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="table-header">
                  <th className="p-4">Title</th>
                  <th className="p-4">Tracks</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4 text-right">Date Added</th>
                  <th className="p-4 w-16"></th>
                </tr>
              </thead>
              <tbody>
                {userPlaylists.map(playlist => {
                  const playlistTrack = {
                    id: `${playlist.id}-track-1`,
                    title: playlist.title,
                    artist: playlist.artist || 'Various Artists',
                    album: playlist.title,
                    cover: playlist.image,
                    duration: 180,
                    path: playlist.audioPath || '/audio/sample.mp3'
                  };

                  return (
                    <tr 
                      key={playlist.id}
                      className="table-row"
                    >
                      <td 
                        className="p-4 cursor-pointer"
                        onClick={() => playTrack(playlistTrack)}
                      >
                        <div className="flex items-center">
                          <img 
                            src={playlist.image} 
                            alt={playlist.title} 
                            className="w-10 h-10 rounded mr-3 shadow-md"
                          />
                          <span>{playlist.title}</span>
                        </div>
                      </td>
                      <td className="p-4">{playlist.tracks} tracks</td>
                      <td className="p-4">{playlist.duration}</td>
                      <td className="p-4 text-right">{playlist.date}</td>
                      <td className="p-4 text-right">
                        <button 
                          className="text-text-secondary hover:text-accent transition-colors"
                          onClick={() => playTrack(playlistTrack)}
                        >
                          <PlayIcon className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;