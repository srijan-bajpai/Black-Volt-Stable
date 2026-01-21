import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Users, Star, Target, Cpu, Award, Rocket } from 'lucide-react';

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const achievements = [
    {
      icon: Trophy,
      title: 'Company Registration',
      description: 'BLACKVOLT Technologies Pvt. Ltd. formally incorporated.',
      date: '2024'
    },
    {
      icon: Target,
      title: 'Project Initiation',
      description: 'Launch of internal research programs focused on underwater autonomy.',
      date: '2024'
    },
    {
      icon: Cpu,
      title: 'Technology Development',
      description: 'Development of proprietary autonomy and sensor-fusion frameworks.',
      date: '2025'
    },
    {
      icon: Star,
      title: 'Prototype Testing',
      description: 'Successful controlled-environment testing of navigation and control subsystems.',
      date: '2025 (Year-End)'
    }
  ];

  const stats = [
    { number: '100+', label: 'Hours of R&D', icon: Users },
    { number: '5+', label: 'Simulation-Based Models Developed', icon: Cpu },
    { number: '3', label: 'Functional Prototypes', icon: Target },
    { number: '1', label: 'Registered Company', icon: Trophy }
  ];

  return (
    <section id="achievements" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-font mb-6">
            Our Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones reflecting early technical progress, engineering discipline, and execution as a deep-tech startup.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass-effect glow-border rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <stat.icon className="text-accent w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground heading-font mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="glass-effect glow-border rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center">
                      <achievement.icon className="text-foreground w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground heading-font">{achievement.title}</h3>
                      <span className="text-muted-foreground text-sm">{achievement.date}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>

              <div className="hidden md:block w-4 h-4 bg-accent rounded-full pulse-glow" />

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect glow-border rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-foreground mb-6 heading-font">Looking Ahead</h3>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Our near-term roadmap is tightly aligned around maturing the UUV platform.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-effect rounded-xl p-6">
                <Target className="text-accent w-8 h-8 mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">2025 Goals</h4>
                <p className="text-muted-foreground text-sm">Complete a fully integrated autonomous UUV and begin extended testing.</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <Users className="text-accent w-8 h-8 mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Collaboration</h4>
                <p className="text-muted-foreground text-sm">Work closely with academic labs and industry partners.</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <Award className="text-accent w-8 h-8 mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Engagement</h4>
                <p className="text-muted-foreground text-sm">Participate in defence-aligned research programs.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;