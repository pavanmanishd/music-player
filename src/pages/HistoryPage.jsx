import { useState, useEffect } from 'react';
import { PlayIcon, ArrowPathIcon, ClockIcon } from '@heroicons/react/24/solid';
import { useMusicContext } from '../context/MusicContext';
import { getPlayHistory } from '../data/musicData';
import { motion, AnimatePresence } from 'framer-motion';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { playTrack, formatTime } = useMusicContext();
  
  useEffect(() => {
    // Fetch play history
    setIsLoading(true);
    const playHistory = getPlayHistory();
    setHistory(playHistory);
    setIsLoading(false);
  }, []);
  
  // Group history by date
  const groupedHistory = history.reduce((groups, track) => {
    const date = new Date(track.playedAt).toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(track);
    return groups;
  }, {});
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="page-title">Listening History</h1>
      
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center h-64"
          >
            <p>Loading...</p>
          </motion.div>
        ) : Object.keys(groupedHistory).length > 0 ? (
          <motion.div 
            className="space-y-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {Object.entries(groupedHistory).map(([date, tracks]) => (
              <motion.div 
                key={date}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-lg font-bold mb-4">{date}</h2>
                <motion.div 
                  className="card overflow-hidden"
                  whileHover={{ scale: 1.005 }}
                >
                  <table className="w-full">
                    <thead>
                      <tr className="table-header">
                        <th className="p-4">Title</th>
                        <th className="p-4">Artist</th>
                        <th className="p-4">Album</th>
                        <th className="p-4 text-right">Time</th>
                        <th className="p-4 w-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tracks.map(track => (
                        <tr 
                          key={`${track.id}-${track.playedAt}`}
                          className="table-row"
                        >
                          <td 
                            className="p-4 cursor-pointer"
                            onClick={() => playTrack(track)}
                          >
                            <div className="flex items-center">
                              <img 
                                src={track.cover} 
                                alt={track.title} 
                                className="w-10 h-10 rounded mr-3 shadow-md"
                              />
                              <span>{track.title}</span>
                            </div>
                          </td>
                          <td className="p-4">{track.artist}</td>
                          <td className="p-4">{track.album}</td>
                          <td className="p-4 text-right">
                            {new Date(track.playedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </td>
                          <td className="p-4 text-right">
                            <button 
                              className="text-text-secondary hover:text-accent transition-colors"
                              onClick={() => playTrack(track)}
                            >
                              <PlayIcon className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="empty-state"
          >
            <ArrowPathIcon className="w-16 h-16 text-white/20 mb-4" />
            <h2 className="text-xl font-bold mb-2">No listening history</h2>
            <p className="text-text-secondary">Your listening history will appear here</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HistoryPage;