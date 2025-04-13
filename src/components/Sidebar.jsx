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

const Sidebar = () => {
  return (
    <div className="w-64 bg-black/10 backdrop-blur-sm flex flex-col h-full border-r border-white/10">
      {/* Logo */}
      <div className="p-6 mb-8">
        <h1 className="text-7xl font-normal font-['Ephesis'] text-white">Melo</h1>
      </div>
      
      {/* Main navigation */}
      <div className="px-2">
        <h2 className="text-xs uppercase text-text-secondary font-semibold px-4 mb-2">Main</h2>
        <NavLink to="/dashboard" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <HomeIcon className="w-5 h-5" />
          <span>Feed</span>
        </NavLink>
        <NavLink to="/search" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <MagnifyingGlassIcon className="w-5 h-5" />
          <span>Search</span>
        </NavLink>
        <NavLink to="/statistics" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <ChartBarIcon className="w-5 h-5" />
          <span>Statistics</span>
        </NavLink>
      </div>
      
      {/* Your Music */}
      <div className="px-2 mt-6">
        <h2 className="text-xs uppercase text-text-secondary font-semibold px-4 mb-2">Your Music</h2>
        <NavLink to="/favorites" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <HeartIcon className="w-5 h-5" />
          <span>Favourites</span>
        </NavLink>
        <NavLink to="/history" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <ArrowPathIcon className="w-5 h-5" />
          <span>History</span>
        </NavLink>
      </div>
      
      {/* Explore */}
      <div className="px-2 mt-6">
        <h2 className="text-xs uppercase text-text-secondary font-semibold px-4 mb-2">Explore</h2>
        <NavLink to="/podcasts" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <MicrophoneIcon className="w-5 h-5" />
          <span>Podcasts</span>
        </NavLink>
      </div>
      
      {/* Library */}
      <div className="px-2 mt-6">
        <h2 className="text-xs uppercase text-text-secondary font-semibold px-4 mb-2">Library</h2>
        <div className="sidebar-icon cursor-pointer">
          <ListBulletIcon className="w-5 h-5" />
          <span>Playlists</span>
        </div>
        <div className="sidebar-icon cursor-pointer">
          <PlusIcon className="w-5 h-5" />
          <span>Create Playlist</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;