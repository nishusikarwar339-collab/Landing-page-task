'use client';

import { motion } from 'framer-motion';
import { ClipboardList, Users, BarChart3, Rocket } from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    iconBg: 'bg-purple-100',
    iconColor: 'text-[#6D5DFC]',
    title: 'Plan with Clarity',
    desc: 'Create roadmaps, prioritize features, and align your team around what matters most.',
  },
  {
    icon: Users,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Collaborate Seamlessly',
    desc: 'Work together in real-time, share feedback, and keep everyone in the loop.',
  },
  {
    icon: BarChart3,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    title: 'Track Progress',
    desc: 'Visualize progress, identify bottlenecks, and stay on track with beautiful dashboards.',
  },
  {
    icon: Rocket,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Ship Faster',
    desc: 'Automate workflows, integrate your tools, and deliver value to your users faster.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="section-title mb-4">
            Everything your team needs<br className="hidden sm:block" />to build better products
          </h2>
          <p className="section-subtitle text-center">
            Powerful features that help you plan, collaborate, and deliver exceptional products on time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.10)' }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-6 shadow-card cursor-default transition-shadow"
            >
              <div className={`w-11 h-11 ${f.iconBg} rounded-xl flex items-center justify-center mb-4 sm:mb-5`}>
                <f.icon size={22} className={f.iconColor} />
              </div>
              <h3 className="font-bold text-[#0F172A] text-base mb-2">{f.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
