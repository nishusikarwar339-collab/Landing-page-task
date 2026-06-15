'use client';

import { motion } from 'framer-motion';
import { Globe, Cloud, Layers, MapPin, Shield, Camera } from 'lucide-react';

const companies = [
  { name: 'Acme', icon: Globe },
  { name: 'Cloudly', icon: Cloud },
  { name: 'Layers', icon: Layers },
  { name: 'Sitemark', icon: MapPin },
  { name: 'Versa', icon: Shield },
  { name: 'SnapShot', icon: Camera },
];

export default function TrustedCompanies() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-[#E5E7EB]" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[10px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase mb-6 sm:mb-10"
        >
          TRUSTED BY AMAZING COMPANIES
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16"
        >
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2 text-[#94A3B8] hover:text-[#64748B] transition-colors cursor-default"
            >
              <company.icon size={20} />
              <span className="text-sm font-semibold">{company.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
