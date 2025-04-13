import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  MagnifyingGlassIcon, 
  MusicalNoteIcon, 
  HeartIcon, 
  ClockIcon, 
  ArrowPathIcon,
  MicrophoneIcon,
  ListBulletIcon,
  PlusIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <motion.div 
      className="w-16 md:w-64 bg-black/10 backdrop-blur-sm flex flex-col h-screen border-r border-white/10 overflow-y-auto hide-scrollbar"
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div 
        className="p-4 md:p-6 mb-2 md:mb-4 flex justify-center md:justify-start sticky top-0 bg-black/10 backdrop-blur-sm z-10"
        whileHover={{ scale: 1.02 }}
      >
        <h1 className="text-3xl md:text-5xl font-normal font-['Ephesis'] text-white">
          <span className="md:hidden">M</span>
          <span className="hidden md:block">Melo</span>
        </h1>
      </motion.div>
      
      {/* Navigation container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {/* Main navigation */}
        <div className="px-1 md:px-2">
          <h2 className="hidden md:block text-xs uppercase text-text-secondary font-semibold px-4 mb-2">Main</h2>
          <NavLink to="/dashboard" className={({isActive}) => `flex items-center justify-center md:justify-start p-3 md:px-4 rounded-lg ${isActive ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <HomeIcon className="w-6 h-6 md:w-5 md:h-5" />
            <span className="hidden md:block ml-3">Feed</span>
          </NavLink>
          <NavLink to="/search" className={({isActive}) => `flex items-center justify-center md:justify-start p-3 md:px-4 rounded-lg ${isActive ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <MagnifyingGlassIcon className="w-6 h-6 md:w-5 md:h-5" />
            <span className="hidden md:block ml-3">Discover</span>
          </NavLink>
          <NavLink to="/statistics" className={({isActive}) => `flex items-center justify-center md:justify-start p-3 md:px-4 rounded-lg ${isActive ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <ChartBarIcon className="w-6 h-6 md:w-5 md:h-5" />
            <span className="hidden md:block ml-3">Statistics</span>
          </NavLink>
        </div>
        
        {/* Your Music */}
        <div className="px-1 md:px-2 mt-2 md:mt-4">
          <h2 className="hidden md:block text-xs uppercase text-text-secondary font-semibold px-4 mb-2">Your Music</h2>
          <NavLink to="/favorites" className={({isActive}) => `flex items-center justify-center md:justify-start p-3 md:px-4 rounded-lg ${isActive ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <HeartIcon className="w-6 h-6 md:w-5 md:h-5" />
            <span className="hidden md:block ml-3">Favourites</span>
          </NavLink>
          <NavLink to="/history" className={({isActive}) => `flex items-center justify-center md:justify-start p-3 md:px-4 rounded-lg ${isActive ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <ArrowPathIcon className="w-6 h-6 md:w-5 md:h-5" />
            <span className="hidden md:block ml-3">History</span>
          </NavLink>
        </div>
        
        {/* Explore */}
        <div className="px-1 md:px-2 mt-2 md:mt-4">
          <h2 className="hidden md:block text-xs uppercase text-text-secondary font-semibold px-4 mb-2">Explore</h2>
          <NavLink to="/podcasts" className={({isActive}) => `flex items-center justify-center md:justify-start p-3 md:px-4 rounded-lg ${isActive ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <MicrophoneIcon className="w-6 h-6 md:w-5 md:h-5" />
            <span className="hidden md:block ml-3">Podcasts</span>
          </NavLink>
        </div>
      </div>
      
      {/* Library - sticky at bottom */}
      <div className="px-1 md:px-2 pt-2 md:pt-4 sticky bottom-0 bg-black/10 backdrop-blur-sm">
        <hr className="border-white/10 mb-1" />
        <div className="flex items-center justify-center md:justify-start p-3 md:px-4 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer">
          <PlusIcon className="w-6 h-6 md:w-5 md:h-5" />
          <span className="hidden md:block ml-3">Create Playlist</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;