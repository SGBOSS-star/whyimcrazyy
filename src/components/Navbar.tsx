import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Server, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      color: "#b388ff",
      transition: { duration: 0.2 }
    }
  };

  const getRoutePath = (text) => {
    switch(text) {
      case 'VPS Hosting':
        return '/vps';
      case 'Dedicated':
        return '/dedicated';
      case 'Minecraft':
        return '/minecraft';
      default:
        return '/';
    }
  };

  return (
    <motion.nav 
      className="bg-navy-900/80 backdrop-blur-sm border-b border-navy-800 sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Server className="h-8 w-8 text-purple-400" />
              </motion.div>
              <span className="text-xl font-bold">SG Nodes</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['VPS Hosting', 'Dedicated', 'Minecraft'].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                variants={linkVariants}
                whileHover="hover"
              >
                <NavLink 
                  to={getRoutePath(text)} 
                  text={text} 
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-navy-900 border-b border-navy-800"
          >
            <div className="px-4 py-3 space-y-3">
              {['VPS Hosting', 'Dedicated', 'Minecraft'].map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MobileNavLink 
                    to={getRoutePath(text)} 
                    text={text} 
                    onClick={toggleMenu} 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLink = ({ to, text }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1"
  >
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ to, text, onClick }) => (
  <motion.div
    whileHover={{ x: 10 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Link
      to={to}
      onClick={onClick}
      className="block text-gray-300 hover:text-purple-400 transition-colors py-2 text-lg"
    >
      {text}
    </Link>
  </motion.div>
);

export default Navbar;