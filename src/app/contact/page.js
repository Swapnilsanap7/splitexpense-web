'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 p-8 relative">
      {/* Background particles container */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions about SplitExpense? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-green-500 mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. We'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                    disabled={loading}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                    disabled={loading}
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                  disabled={loading}
                />
                
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  required
                  disabled={loading}
                ></textarea>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-colors"
                >
                  {loading ? '🔄 Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Contact Cards */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">support@splitexpense.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Business Ave<br />
                      Suite 100<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Questions?</h3>
              
              <div className="space-y-3">
                <details className="group">
                  <summary className="cursor-pointer font-medium hover:text-blue-500 transition-colors">
                    How does expense splitting work?
                  </summary>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Simply create a group, add expenses, and we'll automatically calculate who owes what to whom.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="cursor-pointer font-medium hover:text-blue-500 transition-colors">
                    Is my data secure?
                  </summary>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Yes! We use Firebase security and encryption to protect your financial data.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="cursor-pointer font-medium hover:text-blue-500 transition-colors">
                    Can I use this offline?
                  </summary>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Currently we require an internet connection, but offline support is planned.
                  </p>
                </details>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-blue-500/20 hover:bg-blue-500/30 p-3 rounded-lg transition-colors">
                  <Facebook className="w-6 h-6 text-blue-500" />
                </a>
                <a href="#" className="bg-blue-400/20 hover:bg-blue-400/30 p-3 rounded-lg transition-colors">
                  <Twitter className="w-6 h-6 text-blue-400" />
                </a>
                <a href="#" className="bg-pink-500/20 hover:bg-pink-500/30 p-3 rounded-lg transition-colors">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </a>
                <a href="#" className="bg-blue-600/20 hover:bg-blue-600/30 p-3 rounded-lg transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
