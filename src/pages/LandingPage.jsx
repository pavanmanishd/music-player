import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-accent/20 to-blue-500/30 blur-3xl transform rotate-12 animate-pulse"></div>
        </div>
      </div>
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full fixed z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="tracking-wider text-4xl sm:text-5xl font-bold font-['Ephesis']">Melo</div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <Link to="/dashboard" className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-full transition-colors">
              Sign In
            </Link>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-sm"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">About</a>
              <Link to="/dashboard" className="block px-3 py-2 text-accent hover:text-accent-hover transition-colors">
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 flex flex-col items-center text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Your Music, Your Way</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8 sm:mb-10 px-4">
          Stream millions of songs, create playlists, and discover new music with MELO - the ultimate music streaming platform.
        </p>
        <Link to="/dashboard" className="bg-accent hover:bg-accent-hover text-white text-lg font-medium px-8 py-3 rounded-full transition-colors">
          Listen Now
        </Link>
        
        {/* Preview image */}
        <div className="mt-16 hidden md:block w-full max-w-4xl mx-auto relative">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="/src/assets/dashboard.png" 
            alt="MELO App Preview" 
            className="w-full rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-gray-900 hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full px-6 py-3 flex items-center gap-3">
            <span className="text-accent font-medium">Premium Quality Sound</span>
            <span className="w-2 h-2 rounded-full bg-gray-500"></span>
            <span className="text-gray-300">Ad-free Experience</span>
            <span className="w-2 h-2 rounded-full bg-gray-500"></span>
            <span className="text-gray-300">Offline Listening</span>
          </div>
        </div>
      </motion.div>
      
      {/* Features section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="features" 
        className="container mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose MELO?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-accent/50 transition-colors shadow-lg"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">High-Quality Audio</h3>
            <p className="text-gray-300">Experience music in crystal clear quality with our advanced audio technology.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-accent/50 transition-colors shadow-lg"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Personalized Playlists</h3>
            <p className="text-gray-300">Discover new music tailored to your taste with our smart recommendation system.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-accent/50 transition-colors shadow-lg"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Offline Listening</h3>
            <p className="text-gray-300">Download your favorite tracks and listen to them anywhere, even without internet.</p>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Pricing section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="pricing" 
        className="container mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-16">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/50 transition-all shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p className="text-3xl font-bold mb-6">$0<span className="text-sm text-gray-400 font-normal">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Ad-supported listening</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Basic audio quality</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Create playlists</span>
              </li>
            </ul>
            <button className="w-full py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-colors">
              Get Started
            </button>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 transform scale-105 border-2 border-accent relative shadow-[0_8px_32px_rgba(31,_41,_55,_0.5)] hover:shadow-[0_8px_32px_rgba(139,_92,_246,_0.3)] transition-all"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium"
            >
              Popular
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <p className="text-3xl font-bold mb-6">$9.99<span className="text-sm text-gray-400 font-normal">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Ad-free listening</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>High quality audio</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Download for offline</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Unlimited skips</span>
              </li>
            </ul>
            <button className="w-full py-2 bg-accent text-white rounded-full hover:bg-accent-hover transition-colors">
              Try Free for 1 Month
            </button>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/50 transition-all shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">Family</h3>
            <p className="text-3xl font-bold mb-6">$14.99<span className="text-sm text-gray-400 font-normal">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Up to 6 accounts</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>All Premium features</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Parental controls</span>
              </li>
            </ul>
            <button className="w-full py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-colors">
              Get Family Plan
            </button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Premium promotion */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-16"
      >
        <div className="bg-gradient-to-r from-accent to-purple-600 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between backdrop-blur-sm shadow-[0_8px_32px_rgba(139,_92,_246,_0.3)]">
          <div className="mb-8 md:mb-0">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold mb-4"
            >
              Check the power of Melo
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg max-w-md"
            >
              Enjoy uninterrupted music streaming with our premium subscription.
            </motion.p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-accent px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg"
          >
            Upgrade
          </motion.button>
        </div>
      </motion.div>
      
      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-10 border-t border-gray-800/50 backdrop-blur-sm bg-black/5"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">MELO</h3>
            <p className="text-gray-400 text-sm">Your ultimate music streaming platform with millions of songs and podcasts.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">For the Record</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-medium mb-4">Communities</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">For Artists</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Developers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Advertising</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Settings</a></li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 MELO. All rights reserved.</p>
          <div className="flex items-center gap-4 hover:gap-6 transition-all">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.footer>
    </main>
  );
};

export default LandingPage;