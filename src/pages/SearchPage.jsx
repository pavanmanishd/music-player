import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PlayIcon } from '@heroicons/react/24/solid';
import { useMusicContext } from '../context/MusicContext';
import { searchContent, playlists } from '../data/musicData';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';
  
  const [results, setResults] = useState({
    artists: [],
    albums: [],
    tracks: [],
    playlists: []
  });
  
  const { playTrack } = useMusicContext();
  
  useEffect(() => {
    if (searchQuery) {
      // Search with query
      const searchResults = searchContent(searchQuery);
      setResults(searchResults);
    } else {
      // Show playlists if no search query
      setResults({
        artists: [],
        albums: [],
        tracks: [],
        playlists: playlists
      });
    }
  }, [searchQuery]);
  
  return (
    <div>
      {searchQuery ? (
        <h1 className="page-title">Search results for "{searchQuery}"</h1>
      ) : (
        <h1 className="page-title">Browse Playlists</h1>
      )}
      
      {/* Artists section */}
      {results.artists.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {results.artists.map(artist => (
              <Link 
                key={artist.id} 
                to={`/artist/${artist.id}`}
                className="card p-4 flex flex-col items-center text-center hover:bg-white/5 transition-colors"
              >
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-24 h-24 rounded-full mb-3"
                />
                <h3 className="font-medium">{artist.name}</h3>
                <p className="text-xs text-text-secondary">Artist</p>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Albums section */}
      {results.albums.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Albums</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {results.albums.map(album => (
              <div key={album.id} className="group">
                <div className="relative mb-3">
                  <img 
                    src={album.cover} 
                    alt={album.title} 
                    className="w-full aspect-square object-cover rounded-lg shadow-lg"
                  />
                  <button 
                    className="absolute bottom-3 right-3 bg-accent rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    onClick={() => {
                      if (album.tracks.length > 0) {
                        playTrack(album.tracks[0], album.tracks);
                      }
                    }}
                  >
                    <PlayIcon className="w-5 h-5 text-white" />
                  </button>
                </div>
                <Link to={`/album/${album.id}`} className="font-medium hover:underline">{album.title}</Link>
                <p className="text-sm text-text-secondary">{album.artist}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Tracks section */}
      {results.tracks.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.tracks.map((track, index) => (
              <div 
                key={track.id}
                className="card flex items-center gap-4 p-3 hover:bg-white/5 cursor-pointer transition-colors"
                onClick={() => playTrack(track)}
              >
                <img 
                  src={track.cover} 
                  alt={track.title} 
                  className="w-10 h-10 rounded"
                />
                <div>
                  <h3 className="font-medium">{track.title}</h3>
                  <p className="text-sm text-text-secondary">{track.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Playlists section */}
      {results.playlists.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.playlists.map(playlist => (
              <Link 
                key={playlist.id} 
                to={`/playlist/${playlist.id}`}
                className="card overflow-hidden hover:bg-white/5 transition-colors"
              >
                <div className="p-4 flex items-center gap-4">
                  <img 
                    src={playlist.cover} 
                    alt={playlist.title} 
                    className="w-16 h-16 rounded shadow-md"
                  />
                  <div>
                    <h3 className="font-medium">{playlist.title}</h3>
                    <p className="text-sm text-text-secondary">{playlist.trackCount} tracks • {playlist.duration}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* No results */}
      {searchQuery && 
       results.artists.length === 0 && 
       results.albums.length === 0 && 
       results.tracks.length === 0 && 
       results.playlists.length === 0 && (
        <div className="empty-state">
          <h2 className="text-2xl font-bold mb-2">No results found</h2>
          <p className="text-text-secondary">Try searching for something else</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;