import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Github, Mail, Cpu, Rocket } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const handleSocialClick = (platform, name) => {
    toast({
      title: "🚧 Social Profile",
      description: `${name}'s ${platform} profile isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const teamMembers = [
    {
      name: 'Mr. Garv Pathak',
      role: 'Co-Founder & CEO — AI Systems & Strategy',
      description: 'Leads overall system architecture, AI integration, and long-term technical direction. Focused on aligning research, engineering, and strategic collaborations.',
      icon: Cpu,
      skills: ['AI/ML', 'Autonomous Systems', 'Defence Technology', 'System Strategy'],
      linkedin: 'https://www.linkedin.com/in/garv-pathak/'
    },
    {
      name: 'Mr. Sarthak Varchaswi',
      role: 'Co-Founder & CTO — Robotics & UUV Engineering',
      description: 'Heads mechanical design, embedded systems, and autonomy integration across underwater platforms.',
      icon: Rocket,
      skills: ['Robotics', 'Autonomous Platforms', 'Hardware Design', 'Systems Engineering'],
      linkedin: 'https://www.linkedin.com/in/sarthakvarchasvi/'
    }
  ];

  return (
    <section id="team" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-font mb-6">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the engineers behind BLACKVOLT Technologies — united by curiosity, technical rigor, and a shared commitment to advancing India’s autonomous underwater capability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect glow-border rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-neutral-800 border border-neutral-700 rounded-full mx-auto flex items-center justify-center pulse-glow">
                  <member.icon className="text-foreground w-16 h-16" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 heading-font">{member.name}</h3>
              <p className="text-accent font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{member.description}</p>

              <div className="mb-6">
                <h4 className="text-foreground font-semibold mb-3">Expertise</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs border border-accent/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#f4f4f4' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.2, color: '#f4f4f4' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSocialClick('GitHub', member.name)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Github size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2, color: '#f4f4f4' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSocialClick('Email', member.name)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Mail size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-effect glow-border rounded-2xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-foreground mb-6 heading-font">United by Purpose</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            As students transitioning into deep-tech entrepreneurship, we combine academic foundations with hands-on engineering.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">Innovation</h4>
              <p className="text-muted-foreground text-sm">Experimentation, modeling, and iterative prototyping</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">Dedication</h4>
              <p className="text-muted-foreground text-sm">Long-term learning and refinement</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">Patriotism</h4>
              <p className="text-muted-foreground text-sm">Contributing to national security and self-reliance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;