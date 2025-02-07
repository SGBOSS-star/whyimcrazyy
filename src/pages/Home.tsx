import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Cpu, Globe, Clock, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 py-24">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-radial from-purple-400/10 via-transparent to-transparent"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Design the dream,{' '}
              <motion.span 
                className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                host with us.
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Explore a variety of hosting options, including VPS and Shared hosting,
              to ensure your online presence stays secure and operates seamlessly.
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/vps">
                <motion.button
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Deals
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose SG Nodes?
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-purple-400" />}
              title="Enterprise Security"
              description="Advanced DDoS protection and regular security updates to keep your data safe"
            />
            <FeatureCard
              icon={<Cpu className="h-8 w-8 text-purple-400" />}
              title="High Performance"
              description="Latest generation hardware with NVMe SSDs for lightning-fast performance"
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-purple-400" />}
              title="Global Network"
              description="Multiple locations worldwide with low-latency network connections"
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-purple-400" />}
              title="24/7 Support"
              description="Expert technical support available round the clock"
            />
            <FeatureCard
              icon={<Cloud className="h-8 w-8 text-purple-400" />}
              title="Instant Deployment"
              description="Get your server up and running in minutes with our automated setup"
            />
            <FeatureCard
              icon={<Server className="h-8 w-8 text-purple-400" />}
              title="Full Control"
              description="Root access and complete control over your server configuration"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="p-6 bg-navy-900/50 rounded-lg border border-navy-800 hover:border-purple-500 transition-colors"
    variants={fadeInUp}
    whileHover={{ 
      scale: 1.05,
      boxShadow: '0 0 20px rgba(179, 136, 255, 0.1)'
    }}
  >
    <motion.div 
      className="mb-4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {icon}
    </motion.div>
    <motion.h3 
      className="text-xl font-semibold mb-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      {title}
    </motion.h3>
    <motion.p 
      className="text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      {description}
    </motion.p>
  </motion.div>
);

export default Home;