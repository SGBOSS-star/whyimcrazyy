import React from 'react';
import { Cpu, MemoryStick as Memory, HardDrive, Shield } from 'lucide-react';
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

const MinecraftHosting = () => {
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
          <h1 className="text-4xl font-bold mb-4">Minecraft Server Hosting</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            High-performance Minecraft hosting with instant setup and powerful hardware.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <FeatureCard
              icon={<Cpu className="h-6 w-6 text-purple-400" />}
              title="Optimized CPU"
              description="Dedicated CPU threads for smooth gameplay"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <FeatureCard
              icon={<Memory className="h-6 w-6 text-purple-400" />}
              title="DDR4 RAM"
              description="High-speed memory for better performance"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <FeatureCard
              icon={<HardDrive className="h-6 w-6 text-purple-400" />}
              title="NVMe Storage"
              description="Fast loading times and world generation"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-purple-400" />}
              title="DDoS Protection"
              description="24/7 protection against attacks"
            />
          </motion.div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-navy-900 rounded-lg border border-navy-800 overflow-hidden hover:border-purple-500 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-purple-400">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <PlanFeature text={`CPU: ${plan.cpu}`} />
                  <PlanFeature text={`RAM: ${plan.ram} ${plan.type}`} />
                  <PlanFeature text={`Disk: ${plan.disk} ${plan.storage}`} />
                  <PlanFeature text="Anti-DDoS Protection" />
                  <PlanFeature text="24/7 Support" />
                  <PlanFeature text="Instant Setup" />
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
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="bg-navy-900 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Game Features</h3>
            <ul className="space-y-3">
              <Feature text="One-Click Modpack Installation" />
              <Feature text="Custom JAR Support" />
              <Feature text="Free MySQL Database" />
              <Feature text="Free Subdomain" />
              <Feature text="Automated Backups" />
              <Feature text="FTP Access" />
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-navy-900 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Management Features</h3>
            <ul className="space-y-3">
              <Feature text="User-friendly Control Panel" />
              <Feature text="Plugin Manager" />
              <Feature text="Server Console Access" />
              <Feature text="Schedule Tasks" />
              <Feature text="Real-time Statistics" />
              <Feature text="Player Management" />
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-navy-900 rounded-lg border border-navy-800 h-full hover:border-purple-500 transition-all duration-300">
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

const plans = [
  {
    name: 'Dirt',
    price: 1.9,
    cpu: '100%',
    ram: '2GB',
    disk: '8GB',
    type: 'DDR4',
    storage: 'NVMe SSD'
  },
  {
    name: 'Stone',
    price: 3,
    cpu: '150%',
    ram: '4GB',
    disk: '16GB',
    type: 'DDR4',
    storage: 'SSD'
  },
  {
    name: 'Coal',
    price: 4.5,
    cpu: '200%',
    ram: '6GB',
    disk: '24GB',
    type: 'DDR4',
    storage: 'SSD'
  },
  {
    name: 'Iron',
    price: 6,
    cpu: '250%',
    ram: '8GB',
    disk: '24GB',
    type: 'DDR4',
    storage: 'SSD'
  },
  {
    name: 'Gold',
    price: 7.5,
    cpu: '300%',
    ram: '10GB',
    disk: '50GB',
    type: 'DDR4',
    storage: 'SSD'
  },
  {
    name: 'Diamond',
    price: 9,
    cpu: '350%',
    ram: '12GB',
    disk: '60GB',
    type: 'DDR4',
    storage: 'SSD'
  },
  {
    name: 'Emerald',
    price: 12,
    cpu: '400%',
    ram: '16GB',
    disk: '80GB',
    type: 'DDR4',
    storage: 'SSD'
  },
  {
    name: 'Netherite',
    price: 15,
    cpu: '450%',
    ram: '20GB',
    disk: '100GB',
    type: 'DDR4',
    storage: 'SSD'
  },
  {
    name: 'Obsidian',
    price: 18,
    cpu: '500%',
    ram: '24GB',
    disk: '100GB',
    type: 'DDR4',
    storage: 'RAID1 SSS Storage'
  },
  {
    name: 'Bedrock',
    price: 24,
    cpu: '600%',
    ram: '32GB',
    disk: '160GB',
    type: 'DDR4',
    storage: 'SSD'
  }
];

export default MinecraftHosting;