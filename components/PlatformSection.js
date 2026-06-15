'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';

const teamAvatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
];

const kanbanCols = [
  {
    title: 'To Do',
    count: 3,
    cards: [
      { name: 'User onboarding flow', priority: 'High', color: 'bg-[#EF4444]', textColor: 'text-[#EF4444]', bgCol: 'bg-red-50 border-red-100' },
      { name: 'Update landing page', priority: 'Medium', color: 'bg-[#F59E0B]', textColor: 'text-[#F59E0B]', bgCol: 'bg-amber-50 border-amber-100' },
      { name: 'Analytics dashboard', priority: 'Low', color: 'bg-[#10B981]', textColor: 'text-[#10B981]', bgCol: 'bg-emerald-50 border-emerald-100' },
    ],
    addTask: true,
  },
  {
    title: 'In Progress',
    count: 4,
    cards: [
      { name: 'API integration', priority: 'High', color: 'bg-[#EF4444]', textColor: 'text-[#EF4444]', bgCol: 'bg-red-50 border-red-100' },
      { name: 'Payment gateway', priority: 'High', color: 'bg-[#EF4444]', textColor: 'text-[#EF4444]', bgCol: 'bg-red-50 border-red-100' },
      { name: 'User profile screen', priority: 'Medium', color: 'bg-[#F59E0B]', textColor: 'text-[#F59E0B]', bgCol: 'bg-amber-50 border-amber-100' },
      { name: 'Push notifications', priority: 'Low', color: 'bg-[#10B981]', textColor: 'text-[#10B981]', bgCol: 'bg-emerald-50 border-emerald-100' },
    ],
  },
  {
    title: 'Done',
    count: 3,
    cards: [
      { name: 'Design system', status: 'Done', color: 'bg-[#10B981]', textColor: 'text-emerald-700', bgCol: 'bg-emerald-50 border-emerald-100' },
      { name: 'Authentication', status: 'Done', color: 'bg-[#10B981]', textColor: 'text-emerald-700', bgCol: 'bg-emerald-50 border-emerald-100' },
      { name: 'Marketing assets', status: 'Done', color: 'bg-[#10B981]', textColor: 'text-emerald-700', bgCol: 'bg-emerald-50 border-emerald-100' },
    ],
  },
];

const checklist = [
  'Customizable workflows',
  'Powerful integrations',
  'Advanced reporting',
  'Enterprise-grade security',
];

export default function PlatformSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 via-white to-white overflow-hidden" suppressHydrationWarning>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left – Kanban Board */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <div className="bg-white rounded-3xl shadow-card border border-[#E5E7EB] p-6 sm:p-7">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-[#0F172A]">Mobile App Launch</span>
                  <ChevronDown size={16} className="text-[#94A3B8] cursor-pointer hover:text-[#64748B]" />
                </div>
                {/* Team Avatars */}
                <div className="flex -space-x-1.5">
                  {teamAvatars.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`Team member ${i + 1}`}
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  <div className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                    <span className="text-[10px] text-[#64748B] font-semibold">+</span>
                  </div>
                </div>
              </div>

              {/* Kanban columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {kanbanCols.map((col) => (
                  <div key={col.title} className="flex flex-col bg-[#FAFBFC] rounded-2xl p-3 border border-[#F1F5F9]">
                    {/* Column Header */}
                    <div className="flex items-center justify-between mb-3 px-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#475569]">{col.title}</span>
                        <span className="text-[10px] bg-white border border-[#E2E8F0] text-[#64748B] rounded-md px-1.5 py-0.5 font-semibold shadow-sm">
                          {col.count}
                        </span>
                      </div>
                      <ChevronDown size={14} className="text-[#94A3B8] cursor-pointer" />
                    </div>

                    {/* Column Cards */}
                    <div className="space-y-3 flex-1">
                      {col.cards.map((card) => (
                        <div key={card.name} className="bg-white rounded-xl p-3 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
                          <p className="text-xs font-semibold text-[#0F172A] leading-snug mb-2.5">{card.name}</p>
                          
                          {card.priority && (
                            <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] font-bold border ${card.textColor} ${card.bgCol}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${card.color}`} />
                              {card.priority}
                            </span>
                          )}

                          {card.status && (
                            <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] font-bold border ${card.textColor} ${card.bgCol}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${card.color}`} />
                              {card.status}
                            </span>
                          )}
                        </div>
                      ))}
                      
                      {col.addTask && (
                        <button className="w-full text-xs text-[#94A3B8] py-2 rounded-xl border border-dashed border-[#CBD5E1] hover:border-[#6D5DFC] hover:text-[#6D5DFC] transition-all bg-white hover:bg-purple-50/20 font-medium">
                          + Add task
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – Text & Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <p className="section-label mb-3">BUILT FOR MODERN TEAMS</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-5">
              One platform,<br />endless possibilities
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed mb-8">
              Whether you're a startup or an enterprise, Sparkwave adapts to your workflow and scales with your team.
            </p>

            <ul className="space-y-4 mb-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#6D5DFC]/10 flex items-center justify-center text-[#6D5DFC] flex-shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-[#475569] text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="btn-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-6 text-sm"
            >
              Learn More <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
