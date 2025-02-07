import React from 'react';
import { Cpu, HardDrive, Network, Shield } from 'lucide-react';
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

const VPSHosting = () => {
  const handlePurchase = () => {
    window.location.href = 'https://billing.sgnodes.host/';
  };

  return (
    <div className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Virtual Private Servers</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            High-performance VPS hosting with guaranteed resources and instant deployment.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <FeatureCard
              icon={<Cpu className="h-6 w-6 text-purple-400" />}
              title="Dedicated vCPUs"
              description="Guaranteed CPU resources"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <FeatureCard
              icon={<HardDrive className="h-6 w-6 text-purple-400" />}
              title="NVMe Storage"
              description="Lightning-fast SSD storage"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <FeatureCard
              icon={<Network className="h-6 w-6 text-purple-400" />}
              title="High Bandwidth"
              description="Unmetered bandwidth"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-purple-400" />}
              title="DDoS Protection"
              description="Enterprise-grade security"
            />
          </motion.div>
        </motion.div>

        {/* VPS Plans */}
        <div className="mb-8 md:mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            VPS Plans
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* KVM Standard S */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-navy-900 rounded-lg border border-navy-800 overflow-hidden hover:border-purple-500 transition-colors"
            >
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">KVM Standard S</h3>
                <div className="mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-purple-400">$5.50</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <PlanFeature text="4 vCores CPU" />
                  <PlanFeature text="16GB DDR4 RAM" />
                  <PlanFeature text="100GB SSD Storage" />
                  <PlanFeature text="Unmetered Bandwidth" />
                  <PlanFeature text="DDoS Protection" />
                  <PlanFeature text="Full Root Access" />
                </ul>
                <motion.button 
                  onClick={handlePurchase}
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  Purchase
                </motion.button>
              </div>
            </motion.div>

            {/* KVM Standard M */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-navy-900 rounded-lg border border-navy-800 overflow-hidden hover:border-purple-500 transition-colors"
            >
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">KVM Standard M</h3>
                <div className="mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-purple-400">$6.50</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <PlanFeature text="6 vCores CPU" />
                  <PlanFeature text="32GB DDR4 RAM" />
                  <PlanFeature text="500GB SSD Storage" />
                  <PlanFeature text="Unmetered Bandwidth" />
                  <PlanFeature text="DDoS Protection" />
                  <PlanFeature text="Full Root Access" />
                </ul>
                <motion.button 
                  onClick={handlePurchase}
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  Purchase
                </motion.button>
              </div>
            </motion.div>

            {/* KVM Standard L */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-navy-900 rounded-lg border border-navy-800 overflow-hidden hover:border-purple-500 transition-colors"
            >
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">KVM Standard L</h3>
                <div className="mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-purple-400">$11.50</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <PlanFeature text="9 vCores CPU" />
                  <PlanFeature text="64GB DDR4 RAM" />
                  <PlanFeature text="1000GB SSD Storage" />
                  <PlanFeature text="Unmetered Bandwidth" />
                  <PlanFeature text="DDoS Protection" />
                  <PlanFeature text="Full Root Access" />
                </ul>
                <motion.button 
                  onClick={handlePurchase}
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  Purchase
                </motion.button>
              </div>
            </motion.div>

            {/* KVM Standard XL */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-navy-900 rounded-lg border border-navy-800 overflow-hidden hover:border-purple-500 transition-colors"
            >
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">KVM Standard XL</h3>
                <div className="mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-purple-400">$16.50</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <PlanFeature text="12 vCores CPU" />
                  <PlanFeature text="128GB DDR4 RAM" />
                  <PlanFeature text="1500GB SSD Storage" />
                  <PlanFeature text="Unmetered Bandwidth" />
                  <PlanFeature text="DDoS Protection" />
                  <PlanFeature text="Full Root Access" />
                </ul>
                <motion.button 
                  onClick={handlePurchase}
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  Purchase
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-navy-900 rounded-lg p-6 md:p-8"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4">Technical Features</h3>
            <ul className="space-y-3">
              <Feature text="Full Root Access" />
              <Feature text="Choice of Linux OS" />
              <Feature text="Instant Deployment" />
              <Feature text="IPv4 & IPv6 Support" />
              <Feature text="99.9% Uptime Guarantee" />
              <Feature text="Automated Backups" />
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="bg-navy-900 rounded-lg p-6 md:p-8"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4">Management Features</h3>
            <ul className="space-y-3">
              <Feature text="24/7 Technical Support" />
              <Feature text="User-friendly Control Panel" />
              <Feature text="Real-time Monitoring" />
              <Feature text="Resource Scaling" />
              <Feature text="API Access" />
              <Feature text="Multiple Locations" />
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-4 md:p-6 bg-navy-900 rounded-lg border border-navy-800 h-full hover:border-purple-500 transition-all duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Feature = ({ text }) => (
  <motion.div 
    className="flex items-center space-x-2"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >
    <svg className="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span>{text}</span>
  </motion.div>
);

const PlanFeature = ({ text }) => (
  <motion.li 
    className="flex items-center space-x-2"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >
    <svg className="h-5 w-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-300">{text}</span>
  </motion.li>
);

export default VPSHosting;