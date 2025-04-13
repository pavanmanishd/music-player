import { useState, useEffect } from 'react';
import { 
  HeartIcon, 
  MusicalNoteIcon, 
  UserIcon, 
  ClockIcon,
  ChartBarIcon,
  PlayIcon
} from '@heroicons/react/24/solid';
import { useMusicContext } from '../context/MusicContext';
import { 
  getTopArtists, 
  getTopGenres, 
  getListeningStats, 
  getMostPlayedTracks 
} from '../data/musicData';

const StatisticsPage = () => {
  const [stats, setStats] = useState({
    topArtists: [],
    topGenres: [],
    listeningStats: {},
    mostPlayedTracks: []
  });
  const [isLoading, setIsLoading] = useState(true);
  
  const { playTrack } = useMusicContext();
  
  useEffect(() => {
    // Fetch statistics data
    setIsLoading(true);
    const topArtists = getTopArtists().slice(0, 5);
    const topGenres = getTopGenres();
    const listeningStats = getListeningStats();
    const mostPlayedTracks = getMostPlayedTracks();
    
    // Add weekly activity data if not already present
    if (!listeningStats.weeklyActivity) {
      listeningStats.weeklyActivity = [60, 75, 45, 90, 55, 80, 70]; // Higher values for better visibility
    }
    
    setStats({
      topArtists,
      topGenres,
      listeningStats,
      mostPlayedTracks
    });
    
    setIsLoading(false);
  }, []);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p>Loading...</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-10">
      <h1 className="page-title">Your Listening Statistics</h1>
      
      {/* Overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-6 flex items-center justify-between">
          <div>
            <h3 className="text-text-secondary text-sm">Total Tracks</h3>
            <p className="text-3xl font-bold">{stats.listeningStats.totalTracks || 0}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <MusicalNoteIcon className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div className="card p-6 flex items-center justify-between">
          <div>
            <h3 className="text-text-secondary text-sm">Favorites</h3>
            <p className="text-3xl font-bold">{stats.listeningStats.totalFavorites || 0}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <HeartIcon className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div className="card p-6 flex items-center justify-between">
          <div>
            <h3 className="text-text-secondary text-sm">Artists</h3>
            <p className="text-3xl font-bold">{stats.listeningStats.uniqueArtists || 0}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <UserIcon className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div className="card p-6 flex items-center justify-between">
          <div>
            <h3 className="text-text-secondary text-sm">Listening Time</h3>
            <p className="text-3xl font-bold">{stats.listeningStats.totalHours || 0}h</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <ClockIcon className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>
      
      {/* Top artists */}
      <div>
        <h2 className="text-xl font-bold mb-4">Your Top Artists</h2>
        <div className="card overflow-hidden">
          {stats.topArtists.map((artist, index) => (
            <div 
              key={artist.id}
              className="flex items-center p-4 border-b border-white/10 last:border-b-0 hover:bg-white/5"
            >
              <div className="text-2xl font-bold text-text-secondary w-10">{index + 1}</div>
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-16 h-16 rounded-full object-cover mx-4 shadow-lg"
              />
              <div className="flex-1">
                <h3 className="font-bold">{artist.name}</h3>
                <p className="text-text-secondary text-sm">{artist.subscribers}</p>
              </div>
              <div className="text-text-secondary">
                {artist.playCount || 0} plays
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Top genres */}
      <div>
        <h2 className="text-xl font-bold mb-4">Your Top Genres</h2>
        <div className="card p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.topGenres.map((genre, index) => (
              <div key={genre.name} className="flex items-center">
                <div className="text-lg font-bold text-text-secondary w-8">{index + 1}</div>
                <div className="flex-1">
                  <h3 className="font-medium">{genre.name}</h3>
                  <div className="w-full bg-white/10 h-2 rounded-full mt-1">
                    <div 
                      className="bg-accent h-2 rounded-full" 
                      style={{ width: `${genre.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-text-secondary ml-4">
                  {genre.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Most played tracks */}
      <div>
        <h2 className="text-xl font-bold mb-4">Most Played Tracks</h2>
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="table-header">
                <th className="p-4 w-12">#</th>
                <th className="p-4">Title</th>
                <th className="p-4">Artist</th>
                <th className="p-4 text-right">Plays</th>
                <th className="p-4 w-16"></th>
              </tr>
            </thead>
            <tbody>
              {stats.mostPlayedTracks.map((track, index) => (
                <tr 
                  key={track.id}
                  className="table-row"
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <img 
                        src={track.cover} 
                        alt={track.title} 
                        className="w-10 h-10 rounded mr-3 shadow-md"
                      />
                      <span>{track.title}</span>
                    </div>
                  </td>
                  <td className="p-4">{track.artist}</td>
                  <td className="p-4 text-right">{track.playCount}</td>
                  <td className="p-4 text-right">
                    <button 
                      className="text-text-secondary hover:text-accent transition-colors"
                      onClick={() => playTrack(track)}
                    >
                      <PlayIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Listening activity */}
      <div>
        <h2 className="text-xl font-bold mb-4">Listening Activity</h2>
        <div className="card p-6">
          <div className="h-64 flex items-end justify-between">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
              // Use actual data from stats if available, otherwise use demo data
              const activityData = stats.listeningStats.weeklyActivity || 
                [30, 45, 25, 60, 35, 70, 40]; // Demo data if real data not available
              
              const height = activityData[index];
              return (
                <div key={day} className="flex flex-col items-center w-full mx-1">
                  <div 
                    className="w-12 bg-accent rounded-t-md transition-all duration-500 ease-in-out hover:bg-accent-hover hover:shadow-lg" 
                    style={{ height: `${height}px` }}
                  ></div>
                  <p className="text-text-secondary text-sm mt-2">{day}</p>
                  <p className="text-xs text-text-secondary">{height}%</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;