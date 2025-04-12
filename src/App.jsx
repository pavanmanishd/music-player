import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MusicProvider } from './context/MusicContext';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AlbumPage from './pages/AlbumPage';
import ArtistPage from './pages/ArtistPage';
import PlaylistPage from './pages/PlaylistPage';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import PodcastsPage from './pages/PodcastsPage';
import HistoryPage from './pages/HistoryPage';
import ListenLaterPage from './pages/ListenLaterPage';
import StatisticsPage from './pages/StatisticsPage';

function App() {
  return (
    <MusicProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/album/:id" element={<AlbumPage />} />
            <Route path="/artist/:id" element={<ArtistPage />} />
            <Route path="/playlist/:id" element={<PlaylistPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/podcasts" element={<PodcastsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/listen-later" element={<ListenLaterPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
          </Route>
        </Routes>
      </Router>
    </MusicProvider>
  );
}

export default App;
