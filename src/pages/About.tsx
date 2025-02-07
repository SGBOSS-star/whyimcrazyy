import React from 'react';
import { Server, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About SG Nodes</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're dedicated to providing enterprise-grade hosting solutions with unmatched performance and reliability.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <StatCard icon={<Server />} value="1000+" label="Servers Deployed" />
          <StatCard icon={<Users />} value="5000+" label="Happy Customers" />
          <StatCard icon={<Award />} value="99.9%" label="Uptime Guarantee" />
          <StatCard icon={<Globe />} value="10+" label="Global Locations" />
        </div>

        {/* Mission */}
        <div className="bg-navy-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400">
            At SG Nodes, we strive to deliver cutting-edge hosting solutions that empower businesses to grow and scale. 
            Our commitment to excellence, reliability, and customer satisfaction drives everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label }) => (
  <div className="text-center p-6 bg-navy-900 rounded-lg border border-navy-800">
    <div className="text-purple-400 mb-2">{icon}</div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-gray-400">{label}</div>
  </div>
);

export default About;