'use client';

import { motion } from 'framer-motion';
import { CreditCard, Clock, Heart, Calendar } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const features = [
  { icon: CreditCard, text: 'No credit card required' },
  { icon: Clock, text: 'Setup in 2 minutes' },
  { icon: Heart, text: 'Loved by 4,000+ teams' },
];

export default function Hero() {
  return (
    <section className="relative h-[650px] flex px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6 overflow-hidden bg-white" suppressHydrationWarning>
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-6 right-4 w-[720px] h-[720px] bg-gradient-to-br from-[#6D5DFC]/10 via-[#6D5DFC]/5 to-transparent rounded-full blur-4xl opacity-90" />
      </div>

      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-1 lg:order-1 lg:col-span-6 flex flex-col justify-start items-center lg:items-start">
            <div className="w-full max-w-[560px] pt-6 lg:pt-12">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-[3.5rem] sm:text-[4.25rem] lg:text-[4.75rem] font-extrabold text-[#0F172A] leading-[1.02] tracking-tight mb-6"
            >
              Ship products faster,
              <span className="block text-[#6D5DFC]">together.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-[#64748B] text-sm sm:text-base leading-7 mb-8 max-w-full sm:max-w-[440px]"
            >
              Sparkwave is the all-in-one platform for modern teams to plan, track, and ship amazing products.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex flex-row gap-3 mb-8 w-full"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="btn-primary px-6 sm:px-8 py-3 flex-1 sm:flex-none sm:w-[200px] text-center text-base font-semibold rounded-xl"
              >
                Get Started Free
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="btn-outline px-6 sm:px-8 py-3 flex items-center justify-center gap-3 flex-1 sm:flex-none sm:w-[200px] text-base font-semibold rounded-xl"
              >
                <Calendar size={18} />
                Book a Demo
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex flex-col sm:flex-row gap-8 sm:gap-10 mt-2 w-full justify-center sm:justify-start"
            >
              {features.map((f) => (
                <div key={f.text} className="flex items-center gap-3 text-[13px] text-[#64748B] sm:flex-shrink-0">
                  <div className="flex-shrink-0">
                    <f.icon size={14} className="text-[#94A3B8]" />
                  </div>
                  <span className="font-medium sm:whitespace-nowrap">{f.text}</span>
                </div>
              ))}
            </motion.div>
            </div>
          </div>

          {/* Right – Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="order-2 lg:order-2 lg:col-span-6 flex justify-center lg:justify-end pt-4 lg:pt-6 transform lg:translate-x-12 lg:-translate-y-6"
          >
            <div style={{ transform: 'scaleY(0.90)', transformOrigin: 'center' }}>
              <DashboardMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
