import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Wrench, Shield, Flag } from 'lucide-react';

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Pursuing original approaches to underwater autonomy through modeling, experimentation, and iterative prototyping.'
    },
    {
      icon: Wrench,
      title: 'Engineering Rigor',
      description: 'Evaluating every subsystem against real-world underwater constraints, failure modes, and operational limits.'
    },
    {
      icon: Shield,
      title: 'Indigenous Capability',
      description: 'Developing core autonomy, control, and system architecture in-house to reduce reliance on external technologies.'
    },
    {
      icon: Flag,
      title: 'National Responsibility',
      description: 'Building systems intended to strengthen maritime security, resilience, and long-term technological independence.'
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
            Why We Exist
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Underwater environments represent one of the most challenging operational domains for autonomous systems.
            Severe signal attenuation, unreliable localization, limited sensing, and strict energy constraints make traditional robotic approaches insufficient.
            We believe underwater autonomy must be researched, engineered, tested, and refined within India.
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
                To contribute to India’s long-term maritime and strategic autonomy by developing indigenous unmanned underwater systems capable of intelligent, sustained, and cooperative operation without continuous external support.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4 heading-font">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To design, prototype, and validate a mission-grade autonomous UUV platform that integrates robust underwater perception, intelligent navigation, resilient communication, energy-aware design, and cooperative multi-agent behavior.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
              "We approach this challenge with humility, recognizing the complexity of real-world deployment and the importance of rigorous feedback."
            </blockquote>
            <p className="text-muted-foreground">
              - <span className="font-bold italic text-foreground text-lg tracking-wide">BLACKVOLT</span> Philosophy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;