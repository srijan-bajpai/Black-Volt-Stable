import logo from '@/assets/logo.png';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, Mail, Shield } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';


const Footer = () => {
  const handleSocialClick = (social) => {
    if (social.href) {
      window.open(social.href, '_blank', 'noopener,noreferrer');
      return;
    }
    toast({
      title: "🚧 Social Link",
      description: `${social.label} integration isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/backvolt/' },
    { icon: Mail, label: 'Email' }
  ];

  return (
    <footer className="relative bg-black/50 border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Blackvolt Logo"
                className="w-10 h-10 rounded-lg border border-neutral-700 bg-neutral-800 object-cover"
              />
              <span className="text-xl font-bold heading-font sr-only">BLACKVOLT</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pioneering AI-powered defense drones for India's security. 
              Developing cutting-edge autonomous and swarm technology to strengthen our nation's defense capabilities.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Registered with Government Agencies</span>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-foreground heading-font">Quick Links</span>
            <div className="space-y-2">
              {['Home', 'About Us', 'Drones', 'Achievements', 'Team', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase().replace(' ', '')}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {link}
                </button>
              ))}
              <Link
                to="/privacy-policy"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-foreground heading-font">Connect With Us</span>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: info@blackvolt.in</p>
              <p>Phone: +91-85306-75353</p>
              <p>Location: 600127, VNEST Office, VIT Chennai, AB3 Ground Floor, Vandalur-Kelambakkam Road, Chennai, Tamilnadu, India</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.button
                  key={social.label}
                  whileHover={{ scale: 1.2, rotate: 5, color: '#f4f4f4' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSocialClick(social)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <social.icon size={20} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 BLACKVOLT Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Made with ❤️ for India's Defense
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;