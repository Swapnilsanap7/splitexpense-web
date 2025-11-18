'use client';
import { motion } from 'framer-motion';
import { Bell, CheckCircle, Clock, DollarSign, Shield, Users } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="w-full px-8 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">✨ Key Features ✨</h2>

        {/* 🔥 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white10 dark:bg-black/20 bg-transparent backdrop-blur-md rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 🔥 Features Data (to keep code clean)
const features = [
  {
    title: "Split Expenses Easily",
    description: "Quickly divide bills among friends and family.",
    icon: CheckCircle,
  },
  {
    title: "Real-Time Notifications",
    description: "Stay updated with instant expense alerts.",
    icon: Bell,
  },
  {
    title: "Expense History",
    description: "View and track all past transactions.",
    icon: Clock,
  },
  {
    title: "Fast Debt Settlement",
    description: "Easily send and receive payments.",
    icon: DollarSign,
  },
  {
    title: "Secure & Private",
    description: "Your data is encrypted and protected.",
    icon: Shield,
  },
  {
    title: "Collaborate with Groups",
    description: "Manage shared expenses in group settings.",
    icon: Users,
  },
];
