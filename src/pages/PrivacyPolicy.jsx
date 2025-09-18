import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <Helmet>
        <title>Privacy Policy - BLACKVOLT Technologies</title>
        <meta name="description" content="Privacy Policy for BLACKVOLT Technologies - Learn how we protect your data and privacy." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect glow-border rounded-2xl p-8"
        >
          <h1 className="text-4xl font-bold heading-font mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p>
                BLACKVOLT Technologies Pvt. Ltd. is committed to protecting your privacy. We collect information 
                that you provide directly to us, such as when you contact us through our website or engage with 
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, communicate 
                with you, and comply with legal obligations. We do not sell or share your personal information 
                with third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our website 
                or at our registered office address.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;