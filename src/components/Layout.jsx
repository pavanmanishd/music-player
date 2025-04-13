import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import MusicPlayer from './MusicPlayer';
import Navbar from './Navbar';
import QueuePanel from './QueuePanel';
import { useMusicContext } from '../context/MusicContext';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion'; // Add this import

const Layout = () => {
  const { showQueue } = useMusicContext();

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-black text-text-primary">
      <div className="flex flex-1 overflow-hidden pb-20 sm:pb-24"> {/* Add padding bottom equal to music player height */}
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          
          <div className="flex-1 overflow-y-auto px-2 sm:px-4 md:px-8 py-2 sm:py-4 md:py-6">
            <AnimatePresence mode="wait">
              <Outlet />
            </AnimatePresence>
          </div>
        </div>
        
        {showQueue && (
          <motion.div 
            className="w-64 bg-black/20 border-l border-gray-800"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            exit={{ x: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <QueuePanel />
          </motion.div>
        )}
      </div>
      
      <MusicPlayer />
    </div>
  );
};

export default Layout;