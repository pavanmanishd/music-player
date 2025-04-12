import { Link } from 'react-router-dom';
import { PlayIcon, HeartIcon, MusicalNoteIcon, UserIcon } from '@heroicons/react/24/solid';
import { useMusicContext } from '../context/MusicContext';
import { 
  getNewReleases, 
  getTopArtists, 
  getRecommendedPlaylists, 
  getRecentlyPlayed 
} from '../data/musicData';

const Dashboard = () => {
  const { playTrack } = useMusicContext();
  const newReleases = getNewReleases();
  const topArtists = getTopArtists();
  const recommendedPlaylists = getRecommendedPlaylists();
  const recentlyPlayed = getRecentlyPlayed();
  
  // Featured album (first new release)
  const featuredAlbum = newReleases[0];
  
  return (
    <div className="space-y-8">
      {/* Featured content */}
      <div className="grid grid-cols-2 gap-6">
        {/* Playlist of the day */}
        <div className="bg-secondary rounded-lg p-6">
          <div className="text-xs text-text-secondary mb-1">60 tracks • 3 hours 37 minutes</div>
          <h2 className="text-xl font-bold mb-4">Playlist of the day</h2>
          <img 
            src={recommendedPlaylists[0].cover} 
            alt={recommendedPlaylists[0].title} 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        
        {/* Featured album */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-xs text-text-secondary mb-1">Brand of Sacrifice • April, 2023</div>
            <h2 className="text-xl font-bold mb-4">Between Death and Dreams</h2>
            <button className="mt-16 bg-white text-black rounded-full p-3 hover:bg-gray-200">
              <PlayIcon className="w-8 h-8" />
            </button>
          </div>
          <img 
            src={featuredAlbum.cover} 
            alt={featuredAlbum.title} 
            className="absolute top-0 right-0 h-full w-1/2 object-cover opacity-50"
          />
        </div>
      </div>
      
      {/* New Releases */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">New Releases</h2>
          <Link to="/new-releases" className="text-sm text-accent hover:underline">See all</Link>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {newReleases.map(album => (
            <div key={album.id} className="space-y-2">
              <div className="relative group">
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <button 
                  className="absolute bottom-2 right-2 bg-accent rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => playTrack(album.tracks[0], album.tracks)}
                >
                  <PlayIcon className="w-5 h-5 text-white" />
                </button>
              </div>
              <h3 className="font-medium truncate">{album.title}</h3>
              <p className="text-sm text-text-secondary truncate">{album.artist} • {album.year}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Listen More Often */}
      <div>
        <h2 className="text-xl font-bold mb-4">Listen More Often</h2>
        <div className="grid grid-cols-5 gap-4">
          {recentlyPlayed.map(track => (
            <div key={track.id} className="space-y-2">
              <div className="relative group">
                <img 
                  src={track.cover} 
                  alt={track.title} 
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <button 
                  className="absolute bottom-2 right-2 bg-accent rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => playTrack(track)}
                >
                  <PlayIcon className="w-5 h-5 text-white" />
                </button>
              </div>
              <h3 className="font-medium truncate">{track.title}</h3>
              <p className="text-sm text-text-secondary truncate">{track.artist}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Favourite Artists */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Favourite Artists</h2>
          <Link to="/artists" className="text-sm text-accent hover:underline">See all</Link>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {topArtists.map((artist, index) => (
            <Link to={`/artist/${artist.id}`} key={artist.id} className="flex items-center gap-3 p-2 hover:bg-secondary rounded-lg transition-colors">
              <div className="text-2xl font-bold text-text-secondary">{index + 1}</div>
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h3 className="font-medium">{artist.name}</h3>
                <p className="text-xs text-text-secondary">{artist.subscribers}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Statistics */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Statistics</h2>
          <Link to="/statistics" className="text-sm text-accent hover:underline">Explore</Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-secondary rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="text-text-secondary text-sm">Tracks</h3>
              <p className="text-2xl font-bold">247</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <HeartIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-secondary rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="text-text-secondary text-sm">Albums</h3>
              <p className="text-2xl font-bold">363</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <MusicalNoteIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-secondary rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="text-text-secondary text-sm">Artists</h3>
              <p className="text-2xl font-bold">29</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <UserIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;