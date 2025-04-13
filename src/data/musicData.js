// Sample music data for the application

// Artists
export const artists = [
  {
    id: 'artist1',
    name: 'Electronic Dreams',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGp8ZW58MHx8MHx8fDA%3D',
    subscribers: '2.4M followers',
    bio: 'Electronic Dreams is a pioneering electronic music artist known for creating immersive soundscapes that blend ambient textures with driving beats. With over a decade in the industry, they have performed at major festivals worldwide and collaborated with leading artists across multiple genres.'
  },
  {
    id: 'artist2',
    name: 'Midnight Groove',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww',
    subscribers: '1.8M followers',
    bio: 'Midnight Groove brings smooth R&B and soul influences to create music that resonates with listeners looking for authentic emotional expression. Their distinctive vocal style and thoughtful lyrics have earned them critical acclaim and a dedicated global fanbase.'
  },
  {
    id: 'artist3',
    name: 'Quantum Beats',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHx8MA%3D%3D',
    subscribers: '3.2M followers',
    bio: 'Quantum Beats is a collective of producers and musicians pushing the boundaries of electronic and hip-hop fusion. Known for their innovative production techniques and genre-defying approach, they have become influential figures in the underground music scene.'
  }
];

// Albums
export const albums = [
  {
    id: 'album1',
    title: 'Neon Horizons',
    artist: 'Electronic Dreams',
    artistId: 'artist1',
    year: '2023',
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
    tracks: [
      {
        id: 'track1',
        title: 'Digital Dawn',
        artist: 'Electronic Dreams',
        album: 'Neon Horizons',
        cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
        duration: 245
      },
      {
        id: 'track2',
        title: 'Synthetic Memories',
        artist: 'Electronic Dreams',
        album: 'Neon Horizons',
        cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
        duration: 198
      },
      {
        id: 'track3',
        title: 'Pulse Wave',
        artist: 'Electronic Dreams',
        album: 'Neon Horizons',
        cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
        duration: 274
      }
    ]
  },
  {
    id: 'album2',
    title: 'Velvet Nights',
    artist: 'Midnight Groove',
    artistId: 'artist2',
    year: '2022',
    cover: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D',
    tracks: [
      {
        id: 'track4',
        title: 'Moonlit Serenade',
        artist: 'Midnight Groove',
        album: 'Velvet Nights',
        cover: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D',
        duration: 312
      },
      {
        id: 'track5',
        title: 'Whispered Confessions',
        artist: 'Midnight Groove',
        album: 'Velvet Nights',
        cover: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D',
        duration: 285
      }
    ]
  },
  {
    id: 'album3',
    title: 'Quantum Leap',
    artist: 'Quantum Beats',
    artistId: 'artist3',
    year: '2023',
    cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D',
    tracks: [
      {
        id: 'track6',
        title: 'Particle Accelerator',
        artist: 'Quantum Beats',
        album: 'Quantum Leap',
        cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D',
        duration: 263
      },
      {
        id: 'track7',
        title: 'Waveform Collapse',
        artist: 'Quantum Beats',
        album: 'Quantum Leap',
        cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D',
        duration: 247
      }
    ]
  }
];

// Playlists
export const playlists = [
  {
    id: '1',
    title: 'Chill Vibes',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWxsfGVufDB8fDB8fHww',
    trackCount: 12,
    duration: '45 min'
  },
  {
    id: '2',
    title: 'Workout Mix',
    cover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D',
    trackCount: 15,
    duration: '58 min'
  },
  {
    id: '3',
    title: 'Focus & Study',
    cover: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHl8ZW58MHx8MHx8fDA%3D',
    trackCount: 20,
    duration: '1 hr 15 min'
  },
  {
    id: '4',
    title: 'Relaxation',
    cover: 'https://picsum.photos/800/800?random=9',
    trackCount: 10,
    duration: '40 min'
  }
];

// Podcasts
export const podcasts = [
  {
    id: 'podcast1',
    title: 'Music Makers',
    author: 'Alex Johnson',
    cover: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Interviews with the most innovative musicians and producers in the industry.',
    episodes: 45,
    latestEpisode: {
      id: 'episode1',
      title: 'The Art of Sound Design',
      duration: 3245,
      cover: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D'
    }
  },
  {
    id: 'podcast2',
    title: 'Behind the Beats',
    author: 'Sarah Miller',
    cover: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Exploring the stories and techniques behind your favorite songs.',
    episodes: 32,
    latestEpisode: {
      id: 'episode2',
      title: 'Creating Hit Songs',
      duration: 2875,
      cover: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D'
    }
  },
  {
    id: 'podcast3',
    title: 'Music History 101',
    author: 'Professor David Lee',
    cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljJTIwaGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'A journey through the evolution of music across different eras and cultures.',
    episodes: 67,
    latestEpisode: {
      id: 'episode3',
      title: 'The Birth of Electronic Music',
      duration: 3560,
      cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljJTIwaGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D'
    }
  }
];

// Helper functions for data retrieval
export const getAlbumById = (id) => {
  return albums.find(album => album.id === id);
};

export const getArtistById = (id) => {
  return artists.find(artist => artist.id === id);
};

export const getArtistAlbums = (artistId) => {
  return albums.filter(album => album.artistId === artistId);
};

export const getPlaylistById = (id) => {
  return playlists.find(playlist => playlist.id === id);
};

export const getPlaylistTracks = (playlistId) => {
  // For demo purposes, just return some tracks from albums
  return albums.flatMap(album => album.tracks.slice(0, 2));
};

export const searchContent = (query) => {
  query = query.toLowerCase();
  
  const filteredArtists = artists.filter(artist => 
    artist.name.toLowerCase().includes(query)
  );
  
  const filteredAlbums = albums.filter(album => 
    album.title.toLowerCase().includes(query) || 
    album.artist.toLowerCase().includes(query)
  );
  
  const filteredTracks = albums.flatMap(album => 
    album.tracks.filter(track => 
      track.title.toLowerCase().includes(query) || 
      track.artist.toLowerCase().includes(query)
    )
  );
  
  const filteredPlaylists = playlists.filter(playlist => 
    playlist.title.toLowerCase().includes(query)
  );
  
  return {
    artists: filteredArtists,
    albums: filteredAlbums,
    tracks: filteredTracks,
    playlists: filteredPlaylists
  };
};

// New helper functions for the additional pages
export const getFavoriteTracks = (favoriteIds) => {
  return albums.flatMap(album => 
    album.tracks.filter(track => favoriteIds.includes(track.id))
  );
};

export const getListenLaterTracks = (listenLaterIds) => {
  return albums.flatMap(album => 
    album.tracks.filter(track => listenLaterIds.includes(track.id))
  );
};

export const getPodcasts = () => {
  return podcasts;
};

export const getPlayHistory = () => {
  // In a real app, this would come from the user's actual play history
  // For demo purposes, we'll generate some random history
  const allTracks = albums.flatMap(album => album.tracks);
  const history = [];
  
  // Generate random play history for the last 7 days
  for (let i = 0; i < 20; i++) {
    const randomTrack = allTracks[Math.floor(Math.random() * allTracks.length)];
    const daysAgo = Math.floor(Math.random() * 7);
    const hoursAgo = Math.floor(Math.random() * 24);
    
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    date.setHours(date.getHours() - hoursAgo);
    
    history.push({
      ...randomTrack,
      playedAt: date.toISOString()
    });
  }
  
  // Sort by most recent first
  return history.sort((a, b) => new Date(b.playedAt) - new Date(a.playedAt));
};

export const getTopArtists = () => {
  // In a real app, this would be based on the user's listening habits
  return artists.map(artist => ({
    ...artist,
    playCount: Math.floor(Math.random() * 100) + 50
  })).sort((a, b) => b.playCount - a.playCount);
};

export const getTopGenres = () => {
  // Sample genres with random percentages
  const genres = [
    { name: 'Electronic', percentage: 35 },
    { name: 'R&B', percentage: 25 },
    { name: 'Hip Hop', percentage: 20 },
    { name: 'Pop', percentage: 15 },
    { name: 'Rock', percentage: 5 }
  ];
  
  return genres;
};

export const getListeningStats = () => {
  // Sample listening statistics
  return {
    totalTracks: 247,
    totalFavorites: 42,
    uniqueArtists: 68,
    totalHours: 124
  };
};

export const getMostPlayedTracks = () => {
  // In a real app, this would be based on the user's most played tracks
  const allTracks = albums.flatMap(album => album.tracks);
  
  return allTracks.map(track => ({
    ...track,
    playCount: Math.floor(Math.random() * 50) + 10
  })).sort((a, b) => b.playCount - a.playCount).slice(0, 10);
};

// Add this function to get new releases
export const getNewReleases = () => {
  // For demo purposes, we'll return the first 5 albums as "new releases"
  return albums.map(album => ({
    ...album,
    year: album.year || '2023' // Ensure all albums have a year
  })).slice(0, 5);
};

// Add this function to get recommended playlists
export const getRecommendedPlaylists = () => {
  // Return all playlists for demo purposes
  return playlists;
};

// Add this function to get recently played tracks
export const getRecentlyPlayed = () => {
  // For demo purposes, return a selection of tracks from different albums
  return albums.flatMap(album => 
    album.tracks.slice(0, 1)
  ).slice(0, 5);
};

// Featured playlist data
export const featuredPlaylist = {
  title: "Playlist of the day",
  tracks: 69,
  duration: "4 hours 37 minutes",
  image: "https://picsum.photos/1000/1000", // Using placeholder image
  artist: "Brand of Sacrifice",
  releaseDate: "April, 2023",
  currentSong: "Between Death and Dreams",
  songDuration: "4:12"
};

// Playlists data
export const userPlaylists = [
  { id: 1, title: 'Workout at the gym', tracks: 29, duration: '2h 15m', date: '23 June, 2023', image: 'https://picsum.photos/200/200?random=1' },
  { id: 2, title: 'Tracks without lyrics', tracks: 35, duration: '2h 15m', date: '27 April, 2023', image: 'https://picsum.photos/200/200?random=2' },
  { id: 3, title: 'Funny stuff', tracks: 108, duration: '6h 48m', date: '12 February, 2023', image: 'https://picsum.photos/200/200?random=3' },
  { id: 4, title: 'Careful driving vibes', tracks: 84, duration: '5h 09m', date: '18 May, 2023', image: 'https://picsum.photos/200/200?random=4' },
  { id: 5, title: 'Philosophy during walking', tracks: 52, duration: '3h 59m', date: '21 December, 2022', image: 'https://picsum.photos/200/200?random=5' },
  { id: 6, title: 'Fitness for the whole family', tracks: 12, duration: '1h 5m', date: '23 March, 2023', image: 'https://picsum.photos/200/200?random=6' },
  { id: 7, title: 'The best of the best', tracks: 24, duration: '2h 15m', date: '23 June, 2023', image: 'https://picsum.photos/200/200?random=7' },
];

// Statistics data
export const statistics = {
  likes: 247,
  tracks: 363,
  streams: 29
};