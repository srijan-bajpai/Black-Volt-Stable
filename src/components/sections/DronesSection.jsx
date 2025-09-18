import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Wifi, Shield, Zap, Eye, Brain } from 'lucide-react';

const DronesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const droneTypes = [
    {
      title: 'Autonomous Combat Drones',
      description: 'AI-powered standalone units capable of independent decision-making and tactical operations.',
      features: ['Advanced AI-based Navigation', 'Real-time Threat Assessment', 'Autonomous Target Acquisition'],
      icon: Brain
    },
    {
      title: 'Swarm Intelligence Systems',
      description: 'Coordinated drone networks that operate as a unified intelligent system.',
      features: ['Collective Intelligence', 'Distributed Computing', 'Adaptive Formation Control'],
      icon: Wifi
    },
    {
      title: 'Manta Ray Replication',
      description: 'Our flagship project replicating DARPA\'s Manta Ray underwater drone capabilities.',
      features: ['Underwater Operations', 'Stealth Technology', 'Long-range Endurance'],
      icon: Shield
    }
  ];

  const capabilities = [
    { icon: Cpu, title: 'AI Processing', description: 'Advanced neural networks for real-time decision making' },
    { icon: Eye, title: 'Computer Vision', description: 'Multi-spectral imaging and object recognition' },
    { icon: Zap, title: 'Energy Efficient', description: 'Optimized power systems for extended operations' },
    { icon: Shield, title: 'Secure Comms', description: 'Encrypted communication protocols' }
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
            Domains We Are Focusing On
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI-powered drones featuring both standalone and swarm capabilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {droneTypes.map((drone, index) => (
            <motion.div
              key={drone.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect glow-border rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <drone.icon className="text-foreground w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground heading-font">{drone.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 text-center">{drone.description}</p>
              
              <ul className="list-disc list-inside text-left mt-2">
                {drone.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
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
            <h3 className="text-3xl font-bold text-foreground mb-6 heading-font">Advanced Capabilities</h3>
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
          </div>
          
          <div className="relative">
            <div className="glass-effect glow-border rounded-2xl p-8 tech-border">
              <img 
                className="w-full h-64 object-cover rounded-lg mb-4" 
                alt="Advanced military drone with AI capabilities"
               src="https://images.unsplash.com/photo-1598273267001-933b753b6d62" />
              <h4 className="text-xl font-bold text-foreground mb-2">Next-Gen Defense Drone</h4>
              <p className="text-muted-foreground">
                Our flagship autonomous drone featuring advanced AI processing, 
                multi-sensor fusion, and swarm coordination capabilities.
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
            Our ambitious project to replicate and enhance DARPA's Manta Ray underwater drone, 
            bringing cutting-edge underwater defense capabilities to India's naval forces.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">Stealth Operations</h4>
              <p className="text-muted-foreground text-sm">Advanced stealth technology for covert underwater missions</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">Extended Range</h4>
              <p className="text-muted-foreground text-sm">Long-endurance capabilities for extended patrol missions</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">AI Navigation</h4>
              <p className="text-muted-foreground text-sm">Autonomous underwater navigation and obstacle avoidance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DronesSection;