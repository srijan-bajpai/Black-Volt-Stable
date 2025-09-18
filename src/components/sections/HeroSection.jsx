import logo from '@/assets/logo.png';
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const handleCTAClick = () => {
    toast({
      title: "🚧 Contact Form",
      description: "Contact form isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const scrollToNext = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-0 hero-bg" />
      
      <div className="absolute top-20 left-10 floating-animation">
        <Shield className="text-accent w-8 h-8 opacity-60" />
      </div>
      <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: '2s' }}>
        <Zap className="text-accent w-6 h-6 opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 floating-animation" style={{ animationDelay: '4s' }}>
        <Target className="text-accent w-7 h-7 opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <img
              src={logo}
              alt="Blackvolt Logo"
              className="w-32 h-32 rounded-full pulse-glow border border-neutral-800 bg-neutral-900 object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold heading-font leading-tight"
          >
            BLACKVOLT
            <br />
            <span className="text-muted-foreground">TECHNOLOGIES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Pioneering AI-Powered Defense Drones for India's Security
            <br />
            <span className="text-foreground font-semibold"></span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-effect glow-border rounded-2xl p-6 max-w-3xl mx-auto"
          >
            <p className="text-lg text-foreground/90">
              Developing cutting-edge autonomous and swarm drone technology to strengthen India's defense capabilities 
              through innovation, patriotism, and technological excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => document.querySelector('#drones').scrollIntoView({ behavior: 'smooth' })}
              className="border-accent text-accent hover:bg-accent hover:text-background px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Explore Our Domains of Interest
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 border border-green-400/30"
          >
            <Shield className="text-green-400 w-5 h-5" />
            <span className="text-green-400 font-medium">Registered with Government Agencies</span>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent hover:text-foreground transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;