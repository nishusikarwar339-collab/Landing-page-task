'use client';

import { motion } from 'framer-motion';
import { Zap, Twitter, Linkedin, Github, Globe } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Integrations', 'Roadmap', 'Changelog'],
  Resources: ['Documentation', 'Guides', 'Blog', 'Help Center'],
  Company: ['About Us', 'Careers', 'Press', 'Contact'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-white border-t border-slate-900" suppressHydrationWarning>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#6D5DFC] rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white fill-white" />
              </div>
              <span className="font-bold text-lg text-white">Sparkwave</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              The all-in-one platform for modern teams to build better products, together.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/5"
                >
                  <Icon size={14} className="text-[#94A3B8]" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-white text-sm mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#94A3B8] text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Subscribe to our newsletter</h4>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
              Get the latest updates and tips delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-3 py-2 bg-[#141B2D] border border-slate-800 text-white placeholder-slate-500 rounded-lg text-sm focus:outline-none focus:border-[#6D5DFC] transition-colors"
              />
              <button className="px-4 py-2 bg-[#6D5DFC] hover:bg-[#5B4AF7] text-white text-sm font-semibold rounded-lg transition-colors flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-900 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-sm">© 2024 Sparkwave. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#64748B] text-sm hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
