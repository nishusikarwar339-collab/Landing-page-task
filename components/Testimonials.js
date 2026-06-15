'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      '"Sparkwave has completely transformed how our team works. We\'re shipping faster and our projects are more organized than ever."',
    name: 'Sarah Johnson',
    role: 'Product Manager, Acme',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote:
      '"The best project management tool we\'ve used. Intuitive, powerful, and our team actually loves using it."',
    name: 'Mike Chen',
    role: 'CTO, Cloudly',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote:
      '"Sparkwave helped us reduce our time to market by 40%. Incredible platform and amazing support."',
    name: 'Emily Davis',
    role: 'Head of Product, Layers',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(1); // Middle one is active in the reference image (index 1)

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white" suppressHydrationWarning>
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">WHAT OUR CUSTOMERS SAY</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">Loved by teams worldwide</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative ${
                active === i ? 'border-[#6D5DFC]/40 shadow-card' : ''
              }`}
            >
              <p className="text-[#64748B] text-sm leading-relaxed mb-6 italic">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-100"
                />
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">{t.name}</p>
                  <p className="text-xs text-[#94A3B8]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i ? 'bg-[#6D5DFC] w-6 h-2' : 'bg-[#E5E7EB] w-2 h-2'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
