import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayIcon } from '@heroicons/react/24/solid';
import { useMusicContext } from '../context/MusicContext';
import { getArtistById, getArtistAlbums } from '../data/musicData';

const ArtistPage = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { playTrack } = useMusicContext();
  
  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    const fetchedArtist = getArtistById(id);
    
    if (fetchedArtist) {
      setArtist(fetchedArtist);
      setAlbums(getArtistAlbums(fetchedArtist.id));
    }
    
    setIsLoading(false);
  }, [id]);
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }
  
  if (!artist) {
    return <div className="flex items-center justify-center h-full">Artist not found</div>;
  }
  
  return (
    <div>
      {/* Artist header */}
      <div className="relative">
        <div className="h-64 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 flex items-end">
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="w-32 h-32 rounded-full border-4 border-primary mr-6"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
              <p className="text-text-secondary">{artist.subscribers}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Artist bio */}
      <div className="mt-16 mb-10">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-text-secondary max-w-3xl">{artist.bio}</p>
      </div>
      
      {/* Albums */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Albums</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {albums.map(album => (
            <div key={album.id} className="group">
              <div className="relative mb-3">
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <button 
                  className="absolute bottom-3 right-3 bg-accent rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => {
                    if (album.tracks.length > 0) {
                      playTrack(album.tracks[0], album.tracks);
                    }
                  }}
                >
                  <PlayIcon className="w-6 h-6 text-white" />
                </button>
              </div>
              <Link to={`/album/${album.id}`} className="font-medium hover:underline">{album.title}</Link>
              <p className="text-sm text-text-secondary">{album.year}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Popular tracks */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Popular Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {albums.flatMap(album => album.tracks.slice(0, 2)).slice(0, 6).map((track, index) => (
            <div 
              key={track.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 cursor-pointer"
              onClick={() => playTrack(track)}
            >
              <div className="w-8 h-8 flex items-center justify-center text-text-secondary">
                {index + 1}
              </div>
              <div>
                <h3 className="font-medium">{track.title}</h3>
                <p className="text-sm text-text-secondary">{artist.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;