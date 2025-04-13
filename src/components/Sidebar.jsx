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
        <NavLink to="/listen-later" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <ClockIcon className="w-5 h-5" />
          <span>Listen Later</span>
        </NavLink>
        <NavLink to="/history" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <ArrowPathIcon className="w-5 h-5" />
          <span>History</span>
        </NavLink>
        <NavLink to="/podcasts" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <MicrophoneIcon className="w-5 h-5" />
          <span>Podcasts</span>
        </NavLink>
      </div>
      
      {/* Your Playlists */}
      <div className="px-2 mt-6 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between px-4 mb-2">
          <h2 className="text-xs uppercase text-text-secondary font-semibold">Your Playlists</h2>
        </div>
        <NavLink to="/playlist/1" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <span>Metalcore</span>
        </NavLink>
        <NavLink to="/playlist/2" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <span>Electro</span>
        </NavLink>
        <NavLink to="/playlist/3" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <span>Funk</span>
        </NavLink>
        <NavLink to="/playlist/4" className={({isActive}) => `sidebar-icon ${isActive ? 'active' : ''}`}>
          <span>Disco</span>
        </NavLink>
      </div>
      
      {/* Create new playlist button */}
      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors w-full">
          <PlusIcon className="w-5 h-5" />
          <span>Create new playlist</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;