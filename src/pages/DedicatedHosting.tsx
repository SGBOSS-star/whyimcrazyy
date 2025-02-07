import React from 'react';
import { Server, Cpu, HardDrive, Network } from 'lucide-react';
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

const DedicatedHosting = () => {
  const handlePurchase = () => {
    window.location.href = 'https://billing.sgnodes.host/';
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Dedicated Servers</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade dedicated servers with full root access and premium hardware.
          </p>
        </motion.div>

        {/* Server Specs Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <SpecCard
              icon={<Cpu className="h-6 w-6 text-purple-400" />}
              title="Latest CPUs"
              description="Intel Xeon & AMD EPYC processors"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SpecCard
              icon={<HardDrive className="h-6 w-6 text-purple-400" />}
              title="Fast Storage"
              description="NVMe SSDs & Hardware RAID"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SpecCard
              icon={<Network className="h-6 w-6 text-purple-400" />}
              title="Network"
              description="1Gbps - 10Gbps Bandwidth"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SpecCard
              icon={<Server className="h-6 w-6 text-purple-400" />}
              title="Full Control"
              description="Root Access & Custom ISO"
            />
          </motion.div>
        </motion.div>

        {/* Dedicated Server Plans */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Server Plans</h2>
          <div className="space-y-8">
            {/* R7 5700X - L Plan */}
            <motion.div 
              className="max-w-4xl mx-auto bg-navy-900 rounded-lg p-8 border border-navy-800 hover:border-purple-500 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">R7 5700X - L</h3>
                  <p className="text-gray-400 mb-4 md:mb-0">High-performance AMD Ryzen dedicated server</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-400">$149.00</div>
                  <div className="text-gray-400">/month</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Hardware Specifications</h4>
                  <ul className="space-y-2">
                    <Feature text="AMD Ryzen™ 7 5700X (8 vCores)" />
                    <Feature text="64GB DDR4 ECC Memory" />
                    <Feature text="960GB NVMe 4.0 SSD" />
                    <Feature text="1 Gbps Network Port" />
                    <Feature text="Additional IPs Available" />
                    <Feature text="Located in Mumbai, IN" />
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Features Included</h4>
                  <ul className="space-y-2">
                    <Feature text="Unmetered Bandwidth (Fair Usage)" />
                    <Feature text="DDoS Protection" />
                    <Feature text="24/7 Technical Support" />
                    <Feature text="Full Root Access" />
                    <Feature text="OVH Shield On-Premise" />
                    <Feature text="Remote Reboot" />
                  </ul>
                </div>
              </div>
              <motion.button
                onClick={handlePurchase}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Purchase
              </motion.button>
            </motion.div>

            {/* R7 5700X - XL Plan */}
            <motion.div 
              className="max-w-4xl mx-auto bg-navy-900 rounded-lg p-8 border border-navy-800 hover:border-purple-500 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">R7 5700X - XL</h3>
                  <p className="text-gray-400 mb-4 md:mb-0">Premium AMD Ryzen dedicated server</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-400">$172.00</div>
                  <div className="text-gray-400">/month</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Hardware Specifications</h4>
                  <ul className="space-y-2">
                    <Feature text="AMD Ryzen™ 7 5700X (16 vCores)" />
                    <Feature text="128GB DDR4 ECC Memory" />
                    <Feature text="1.92TB NVMe 4.0 SSD" />
                    <Feature text="1 Gbps Network Port" />
                    <Feature text="Additional IPs Available" />
                    <Feature text="Located in Mumbai, IN" />
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Features Included</h4>
                  <ul className="space-y-2">
                    <Feature text="Unmetered Bandwidth (Fair Usage)" />
                    <Feature text="DDoS Protection" />
                    <Feature text="24/7 Technical Support" />
                    <Feature text="Full Root Access" />
                    <Feature text="OVH Shield On-Premise" />
                    <Feature text="Remote Reboot" />
                  </ul>
                </div>
              </div>
              <motion.button
                onClick={handlePurchase}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Purchase
              </motion.button>
            </motion.div>

            {/* Ryzen 7 7700 Plan */}
            <motion.div 
              className="max-w-4xl mx-auto bg-navy-900 rounded-lg p-8 border border-navy-800 hover:border-purple-500 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ryzen 7 7700</h3>
                  <p className="text-gray-400 mb-4 md:mb-0">High-performance AMD Ryzen dedicated server</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-400">$159.00</div>
                  <div className="text-gray-400">/month</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Hardware Specifications</h4>
                  <ul className="space-y-2">
                    <Feature text="AMD RYZEN 7 7700" />
                    <Feature text="8C/16T 3.80GHz" />
                    <Feature text="64GB RAM" />
                    <Feature text="960GB U.3 NVMe" />
                    <Feature text="1 Gbps NETWORK" />
                    <Feature text="1 IP (Additional IPs Available)" />
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Features Included</h4>
                  <ul className="space-y-2">
                    <Feature text="32TB Bandwidth" />
                    <Feature text="SLA 99.95%" />
                    <Feature text="24x7 Support" />
                    <Feature text="DDoS Protection" />
                    <Feature text="Full Root Access" />
                    <Feature text="Remote Reboot" />
                  </ul>
                </div>
              </div>
              <motion.button
                onClick={handlePurchase}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Purchase
              </motion.button>
            </motion.div>

            {/* Legacy 1 Plan */}
            <motion.div 
              className="max-w-4xl mx-auto bg-navy-900 rounded-lg p-8 border border-navy-800 hover:border-purple-500 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Dedicated Legacy 1</h3>
                  <p className="text-gray-400 mb-4 md:mb-0">High-performance dedicated server with premium hardware</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-400">$164.50</div>
                  <div className="text-gray-400">/month</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Hardware Specifications</h4>
                  <ul className="space-y-2">
                    <Feature text="Dual E5-2680v4 - 2.40 GHz" />
                    <Feature text="28 cores / 56 threads" />
                    <Feature text="256GB DDR4 RAM" />
                    <Feature text="2x960GB SSD" />
                    <Feature text="10TB / 1Gbps" />
                    <Feature text="Additional IPs Available" />
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Features Included</h4>
                  <ul className="space-y-2">
                    <Feature text="DDoS Protection" />
                    <Feature text="24/7 Technical Support" />
                    <Feature text="Full Root Access" />
                    <Feature text="Remote Reboot" />
                    <Feature text="1 IPv4 Address" />
                    <Feature text="/64 IPv6 Block" />
                  </ul>
                </div>
              </div>
              <motion.button
                onClick={handlePurchase}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Purchase
              </motion.button>
            </motion.div>

            {/* Legacy 2 Plan */}
            <motion.div 
              className="max-w-4xl mx-auto bg-navy-900 rounded-lg p-8 border border-navy-800 hover:border-purple-500 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Dedicated Legacy 2</h3>
                  <p className="text-gray-400 mb-4 md:mb-0">High-performance Intel Xeon dedicated server</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-400">$148.00</div>
                  <div className="text-gray-400">/month</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Hardware Specifications</h4>
                  <ul className="space-y-2">
                    <Feature text="2 x Intel Xeon 2670 v3" />
                    <Feature text="24C/48T" />
                    <Feature text="64 GB RAM" />
                    <Feature text="480 GB SSD" />
                    <Feature text="1 Gbps Network" />
                    <Feature text="1 IP (Additional IPs Available)" />
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Features Included</h4>
                  <ul className="space-y-2">
                    <Feature text="32 TB Bandwidth" />
                    <Feature text="SLA 99.95%" />
                    <Feature text="24x7 Support" />
                    <Feature text="DDoS Protection" />
                    <Feature text="Full Root Access" />
                    <Feature text="Remote Reboot" />
                  </ul>
                </div>
              </div>
              <motion.button
                onClick={handlePurchase}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Purchase
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          className="bg-navy-900 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Included with Every Server</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Feature text="DDoS Protection" />
            <Feature text="24/7 Technical Support" />
            <Feature text="99.9% Uptime Guarantee" />
            <Feature text="Multiple Locations" />
            <Feature text="Instant Provisioning" />
            <Feature text="Full Root Access" />
            <Feature text="IPv4 & IPv6 Support" />
            <Feature text="Custom ISO Support" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SpecCard = ({ icon, title, description }) => (
  <motion.div 
    className="p-6 bg-navy-900 rounded-lg border border-navy-800 hover:border-purple-500 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
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

export default DedicatedHosting;