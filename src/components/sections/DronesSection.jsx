import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Anchor, Radio, Battery, Gauge, Eye, Server, Cpu } from 'lucide-react';
import uuvConcept from '@/assets/uuv_concept.jpg';

const DronesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const features = [
    {
      title: 'Autonomous Navigation',
      description: 'Navigate reliably in communication-denied and low-visibility environments without GPS.',
      icon: Anchor
    },
    {
      title: 'Perception & Fusion',
      description: 'Onboard sensor fusion optimized for low-visibility underwater environments.',
      icon: Eye
    },
    {
      title: 'Energy Aware',
      description: 'Maximize endurance under strict energy constraints with intelligent planning.',
      icon: Battery
    }
  ];

  const capabilities = [
    { icon: Cpu, title: 'Embedded AI', description: 'Real-time decision making on resource-constrained systems' },
    { icon: Gauge, title: 'Hydrodynamics', description: 'Streamlined pressure-resistant hull geometry' },
    { icon: Server, title: 'Modular Payload', description: 'Expandable architecture for various sensors' },
    { icon: Radio, title: 'Secure Comms', description: 'Acoustic and surfaced communication modes' }
  ];

  return (
    <section id="drones" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-font mb-6">
            The UUV Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our primary product is a modular autonomous UUV platform, designed as a foundation for long-term research, field validation, and eventual operational deployment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect glow-border rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <feature.icon className="text-foreground w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground heading-font">{feature.title}</h3>
              </div>

              <p className="text-muted-foreground mb-2 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6 heading-font">System Architecture</h3>
            <div className="grid grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="glass-effect rounded-xl p-4 text-center"
                >
                  <capability.icon className="text-accent w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">{capability.title}</h4>
                  <p className="text-muted-foreground text-xs">{capability.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="text-xl font-bold text-foreground heading-font">Supporting Research Domains</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Swarm & Multi-Agent Coordination</li>
                <li>Autonomous Aerial Systems (Future Direction)</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="glass-effect glow-border rounded-2xl p-8 tech-border">
              <img
                className="w-full h-64 object-cover rounded-lg mb-4"
                alt="Underwater Autonomous Vehicle Concept"
                src={uuvConcept}
              />
              <h4 className="text-xl font-bold text-foreground mb-2">Designed In-House</h4>
              <p className="text-muted-foreground">
                Entirely designed with emphasis on modularity, hydrodynamic efficiency, and system-level integration.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="glass-effect glow-border rounded-2xl p-8 text-center"
        >
          <h3 className="heading-font text-3xl">Project <span className="italic">ANTARLEEN</span></h3>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Our flagship development effort focused on building a high-autonomy, long-endurance unmanned underwater vehicle.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">Long Endurance</h4>
              <p className="text-muted-foreground text-sm">Targets fundamental challenges including energy-aware planning.</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">High Autonomy</h4>
              <p className="text-muted-foreground text-sm">Navigation without continuous localization or surface comms.</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">Scalable Platform</h4>
              <p className="text-muted-foreground text-sm">Not a one-off prototype, but a base for iterative improvement.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DronesSection;