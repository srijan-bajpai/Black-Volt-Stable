import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Contact Form",
      description: "Form submission isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@blackvolt.in',
      description: 'Send us your inquiries and partnership proposals'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91-85306-75353',
      description: 'Speak directly with our team'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'VNEST Office, VIT Chennai',
      description: '600127, AB3 Ground Floor, Vandalur-Kelambakkam Road, Chennai, Tamilnadu, India'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-font mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss partnerships, collaborations, or learn more about our technology?
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect glow-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 heading-font">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Whether you are a researcher, startup, or institution, we welcome discussions around joint research, technical guidance, and long-term collaboration.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-foreground w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-foreground/90 font-medium mb-1">{info.details}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-effect glow-border rounded-2xl p-8 text-center"
            >
              <MessageSquare className="text-accent w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-4">Join Our Mission</h4>
              <p className="text-muted-foreground mb-6">
                We are actively looking to collaborate with researchers, mentors, and institutions working in autonomy, robotics, AI, and underwater systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => navigate('/recruitments')}
                  className="bg-foreground text-background hover:bg-foreground/90 px-6 py-2 rounded-lg"
                >
                  Join Us
                </Button>
                <Button
                  variant="outline"
                  onClick={() => toast({
                    title: "🚧 Partnership Info",
                    description: "Partnership details aren't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                  className="px-6 py-2 rounded-lg"
                >
                  Learn About Collaborations
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect glow-border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 heading-font">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-muted-foreground mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-background/30 border border-accent/30 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-background/30 border border-accent/30 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-muted-foreground mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-background/30 border border-accent/30 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                  placeholder="Research collaboration / Partnership inquiry"
                  required
                />
              </div>

              <div>
                <label className="block text-muted-foreground mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-background/30 border border-accent/30 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Briefly describe your interest, background, or how you would like to collaborate..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;