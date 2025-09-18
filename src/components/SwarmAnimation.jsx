import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Drone = ({ drone, scrollProgress }) => {
  const x = useTransform(scrollProgress, [0, 1], [drone.startX, drone.targetX]);
  const y = useTransform(scrollProgress, [0, 1], [drone.startY, drone.targetY]);

  return (
    <motion.div
      className="absolute bg-accent rounded-full opacity-60"
      style={{
        width: drone.size,
        height: drone.size,
        boxShadow: `0 0 ${drone.size * 2}px rgba(136, 136, 136, 0.4)`,
        x,
        y,
      }}
      transition={{
        duration: 3,
        delay: drone.delay,
        ease: "easeInOut",
      }}
    />
  );
};

const SwarmAnimation = () => {
  const [drones, setDrones] = useState([]);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const generateDrones = () => {
      const newDrones = [];
      const numDrones = 15;
      for (let i = 0; i < numDrones; i++) {
        newDrones.push({
          id: i,
          startX: Math.random() * window.innerWidth,
          startY: Math.random() * window.innerHeight * 0.8,
          targetX: window.innerWidth / 2,
          targetY: window.innerHeight / 2,
          delay: Math.random() * 2,
          size: Math.random() * 4 + 2,
        });
      }
      setDrones(newDrones);
    };

    generateDrones();
    window.addEventListener('resize', generateDrones);
    return () => window.removeEventListener('resize', generateDrones);
  }, []);

  return (
    <div ref={targetRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {drones.map((drone) => (
        <Drone key={drone.id} drone={drone} scrollProgress={scrollYProgress} />
      ))}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.5]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.8, 0.2]),
        }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <div className="w-8 h-8 bg-accent rounded-full blur-sm" />
      </motion.div>
    </div>
  );
};

export default SwarmAnimation;