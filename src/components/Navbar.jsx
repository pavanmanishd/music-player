import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MagnifyingGlassIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Navigate to search page with query if there's text
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    } else if (location.pathname === '/search') {
      // If query is empty and we're on search page, go back to home
      navigate('/dashboard');
    }
  };
  
  // We'll keep the form submission handler for accessibility
  const handleSearch = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="h-16 border-b border-gray-800 flex items-center justify-between px-6">
      {/* Search bar */}
      <form onSubmit={handleSearch} className="w-1/3">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by artists, songs or albums"
            className="w-full bg-gray-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </form>
      
      {/* User profile */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-800">
          <BellIcon className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-2 bg-gray-800 rounded-full py-1 px-3 hover:bg-gray-700">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <span className="text-sm font-medium">M</span>
          </div>
          <span className="text-sm">My channel</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;