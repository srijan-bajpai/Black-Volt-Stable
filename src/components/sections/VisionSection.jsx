import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Flag, Shield, Lightbulb } from 'lucide-react';

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const values = [
    {
      icon: Heart,
      title: 'Patriotic Drive',
      description: 'Fueled by love for our nation and commitment to its security'
    },
    {
      icon: Flag,
      title: 'National Pride',
      description: 'Building indigenous technology to reduce dependency on other countries'
    },
    {
      icon: Shield,
      title: 'Defense Excellence',
      description: 'Creating world-class defense solutions for India\'s protection'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Pushing boundaries with cutting-edge AI and drone technology'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-font mb-6">
            Why We Do This
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We’re a group of college students who want to make a real difference by building technologies that can strengthen our country's defense. Our motivation comes from a well-rounded mix of passion, curiosity, and love for our great country.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect glow-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 heading-font">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                To revolutionize India's defense landscape by developing autonomous AI-powered drones 
                that match and exceed international standards. We aim to replicate and enhance the 
                capabilities of advanced systems like the DARPA's Manta Ray, ensuring our nation's 
                technological sovereignty in defense.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 heading-font">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To bridge the gap between cutting-edge research and practical defense applications, 
                creating swarm intelligence systems that can operate autonomously in complex environments 
                while maintaining the highest standards of reliability and security.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass-effect glow-border rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <value.icon className="text-accent w-8 h-8 mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect glow-border rounded-2xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-4">
              "Innovation is our weapon, patriotism is our fuel, and India's security is our ultimate goal."
            </blockquote>
            <p className="text-muted-foreground">
              - Our Motto at <span className="font-bold italic text-foreground text-lg tracking-wide">BLACKVOLT</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;