import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      color: "#b388ff",
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="bg-navy-900 border-t border-navy-800 mt-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">SG Nodes</h3>
            <p className="text-gray-400">
              Premium VPS and Dedicated Server hosting solutions for your business.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['VPS Hosting', 'Dedicated Servers', 'Minecraft Hosting'].map((text, index) => (
                <motion.li key={text} variants={linkVariants} whileHover="hover">
                  <Link 
                    to={`/${text.toLowerCase().split(' ')[0]}`} 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { text: 'About Us', path: '/about' },
                { text: 'Terms & Conditions', path: '/terms' },
                { text: 'Contact', path: '/contact' }
              ].map(({ text, path }) => (
                <motion.li key={text} variants={linkVariants} whileHover="hover">
                  <Link 
                    to={path}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li 
                className="flex items-center space-x-2 hover:text-purple-400 transition-colors"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-4 w-4" />
                <span>support@sgnodes.host</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-2 hover:text-purple-400 transition-colors"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-2 hover:text-purple-400 transition-colors"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <a 
                  href="https://discord.gg/sgnodes" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-purple-400"
                >
                  Join our Discord
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 pt-8 border-t border-navy-800 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} SG Nodes. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;