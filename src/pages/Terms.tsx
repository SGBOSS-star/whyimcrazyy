import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <FileText className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-gray-400">
            Please read these terms carefully before using our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <Section
            title="1. General Provisions"
            content="Our servers are for fair use only. By using our services, you agree to comply with all applicable laws and regulations."
          />

          <Section
            title="2. Refunds and Cancellations"
            content="No refunds are provided for any purchases. All sales are final. This includes but is not limited to service cancellations, upgrades, or downgrades."
            icon={<AlertTriangle className="w-5 h-5 text-purple-400" />}
          />

          <Section
            title="3. Liability"
            content="We are not liable for any data loss. It is your responsibility to maintain and secure backups of your data. We recommend implementing regular backup procedures."
          />

          <Section
            title="4. Community Guidelines"
            content="Respectful behavior is required at all times. We reserve the right to mute or remove accounts for spam, harassment, or any form of inappropriate conduct."
          />

          <Section
            title="5. Fair Use Policy"
            content="Any abuse of our services, including but not limited to DDoS attacks or Crypto Mining, will result in immediate service termination without refund."
            icon={<Shield className="w-5 h-5 text-purple-400" />}
          />

          <Section
            title="6. Payment Policy"
            content="Servers will be suspended after 1 day of late payment. All files will be permanently deleted after 5 days of non-payment."
          />

          <Section
            title="7. Privacy Policy"
            content="By using our services, you agree to our privacy policy as listed on our website. We are committed to protecting your personal information."
          />

          <Section
            title="8. Hostname and MOTD Policy"
            content="You are not permitted to change the VPS hostname or MOTD. Any unauthorized modifications may result in immediate VPS suspension."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-navy-900 rounded-lg border border-navy-800"
        >
          <p className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const Section = ({ title, content, icon }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-navy-900 rounded-lg p-6 border border-navy-800"
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 mt-1">
        {icon || <FileText className="w-5 h-5 text-purple-400" />}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  </motion.div>
);

export default Terms;