'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$9',
    desc: 'Perfect for small teams just getting started.',
    features: ['Up to 5 users', '5 projects', 'Basic integrations', 'Email support'],
    cta: 'Get Started',
    ctaStyle: 'border border-[#6D5DFC] text-[#6D5DFC] hover:bg-purple-50/30',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$19',
    desc: 'Great for growing teams that need more power.',
    features: ['Up to 20 users', 'Unlimited projects', 'Advanced integrations', 'Priority support'],
    cta: 'Get Started',
    ctaStyle: 'bg-[#6D5DFC] text-white hover:bg-[#5B4AF7] shadow-lg shadow-[#6D5DFC]/20',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$39',
    desc: 'For large teams with advanced needs.',
    features: ['Unlimited users', 'Custom workflows', 'Advanced security', 'Dedicated support'],
    cta: 'Contact Sales',
    ctaStyle: 'border border-[#6D5DFC] text-[#6D5DFC] hover:bg-purple-50/30',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white" suppressHydrationWarning>
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">PRICING</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">Simple, transparent pricing</h2>
          <p className="section-subtitle text-center">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}
              className={`relative bg-white rounded-3xl p-6 sm:p-8 flex flex-col border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-[#6D5DFC] shadow-xl shadow-purple-50/50'
                  : 'border-[#E5E7EB] shadow-sm'
              }`}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-[#0F172A]">{plan.name}</h3>
                  {plan.popular && (
                    <span className="bg-[#6D5DFC]/10 text-[#6D5DFC] text-[9px] font-extrabold px-2.5 py-1 rounded-md border border-[#6D5DFC]/20 tracking-wider uppercase">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#94A3B8] mb-6">{plan.desc}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-[#0F172A]">{plan.price}</span>
                  <span className="text-xs text-[#94A3B8] mb-1.5">/ user / month</span>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    {/* Green checkmark to match reference image */}
                    <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-[#64748B] font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
