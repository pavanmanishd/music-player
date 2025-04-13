import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import MusicPlayer from './MusicPlayer';
import Navbar from './Navbar';
import QueuePanel from './QueuePanel';
import { useMusicContext } from '../context/MusicContext';

const Layout = () => {
  const { showQueue } = useMusicContext();

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-black text-text-primary">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <Navbar />
          
          {/* Main content area - Added px-8 py-6 for consistent padding */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            <Outlet />
          </div>
        </div>
        
        {/* Queue panel (conditionally rendered) */}
        {showQueue && (
          <div className="w-64 bg-black/20 border-l border-gray-800">
            <QueuePanel />
          </div>
        )}
      </div>
      
      {/* Music player (fixed at bottom) */}
      <MusicPlayer />
    </div>
  );
};

export default Layout;