'use client';

import { motion } from 'framer-motion';
import {
  Home, FolderKanban, CheckSquare, Calendar, Users, BarChart2, Settings,
  Search, Bell, Check, Zap
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Home' },
  { icon: FolderKanban, label: 'Projects', active: true },
  { icon: CheckSquare, label: 'Tasks' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Users, label: 'Team' },
  { icon: BarChart2, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
];

const stats = [
  { label: 'Total Projects', value: '24' },
  { label: 'In Progress', value: '8' },
  { label: 'Completed', value: '16' },
  { label: 'Team Members', value: '32' },
];

const tasks = [
  { name: 'Design system updates', tag: 'In Progress', tagColor: 'bg-amber-50 text-amber-600 border border-amber-100', checked: false },
  { name: 'API documentation', tag: 'In Progress', tagColor: 'bg-amber-50 text-amber-600 border border-amber-100', checked: false },
  { name: 'User landing', tag: 'In Progress', tagColor: 'bg-amber-50 text-amber-600 border border-amber-100', checked: false },
  { name: 'Performance tracking', tag: 'Done', tagColor: 'bg-emerald-50 text-emerald-600 border border-emerald-100', checked: true },
];

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[680px] mx-auto" suppressHydrationWarning>
      {/* Soft purple glow behind dashboard */}
      <div className="absolute -inset-6 bg-gradient-to-br from-[#6D5DFC]/10 via-[#6D5DFC]/5 to-transparent rounded-3xl blur-3xl -z-10" />

      {/* Dashboard card */}
      <div className="bg-white rounded-3xl shadow-dashboard border border-[#E5E7EB] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] bg-white">
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-[#6D5DFC] fill-[#6D5DFC]" />
            <span className="text-sm font-bold text-[#0F172A] tracking-tight">Sparkwave</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[#94A3B8] cursor-pointer hover:text-[#64748B]">
              <Search size={16} />
            </div>
            <div className="text-[#94A3B8] cursor-pointer hover:text-[#64748B] relative">
              <Bell size={16} />
              <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#6D5DFC] rounded-full" />
            </div>
            {/* Alex Avatar */}
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Alex"
              className="w-8 h-8 rounded-full border border-gray-200"
            />
          </div>
        </div>

        <div className="flex min-h-[460px]">
          {/* Sidebar */}
          <div className="w-[180px] border-r border-[#E5E7EB] py-6 px-3 flex flex-col gap-1 bg-white">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                  item.active
                    ? 'bg-[#6D5DFC]/10 text-[#6D5DFC] font-semibold'
                    : 'text-[#64748B] hover:bg-gray-50 hover:text-[#0F172A]'
                }`}
              >
                <item.icon size={18} className={item.active ? 'text-[#6D5DFC]' : 'text-[#94A3B8]'} />
                <span className="text-xs">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-6 bg-[#FAFBFC] min-w-0">
            {/* Greeting */}
            <div className="mb-6">
              <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-1.5">
                Good morning, Alex <span className="animate-bounce">👋</span>
              </h3>
              <p className="text-xs text-[#94A3B8] mt-0.5">Here's what's happening with your projects today.</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-white border border-[#E2E8F0] rounded-xl p-3 shadow-sm">
                  <p className="text-[10px] text-[#94A3B8] font-medium tracking-wide uppercase">{s.label}</p>
                  <p className="text-lg font-bold text-[#0F172A] mt-1">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Chart (Project Progress) */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-sm lg:col-span-7 flex flex-col relative h-[210px] justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#0f172a]">Project Progress</h4>
                </div>
                
                <div className="h-[100px] w-full relative mt-2">
                  <svg viewBox="0 0 240 100" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6D5DFC" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#6D5DFC" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area under chart */}
                    <path
                      d="M0,80 C40,70 80,45 120,50 C160,55 200,20 240,30 L240,100 L0,100 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="240" y2="20" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" y1="50" x2="240" y2="50" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" y1="80" x2="240" y2="80" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                    
                    {/* Curved line chart */}
                    <path
                      d="M0,80 C40,70 80,45 120,50 C160,55 200,20 240,30"
                      fill="none"
                      stroke="#6D5DFC"
                      strokeWidth="2.5"
                    />

                    {/* Dotted indicator line */}
                    <line x1="120" y1="50" x2="120" y2="100" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="2 2" />

                    {/* Data point dot */}
                    <circle cx="120" cy="50" r="4.5" fill="#6D5DFC" stroke="#ffffff" strokeWidth="1.5" />
                  </svg>

                  {/* Tooltip Overlay */}
                  <div className="absolute right-0 top-0 bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-2.5 w-[140px] z-10">
                    <p className="text-[10px] font-bold text-[#0F172A] mb-1.5 border-b border-gray-100 pb-1">May 14</p>
                    <div className="space-y-1">
                      {[
                        { label: 'Website Redesign', val: '25%', color: 'bg-[#6D5DFC]' },
                        { label: 'Mobile App', val: '60%', color: 'bg-amber-400' },
                        { label: 'API Integration', val: '15%', color: 'bg-emerald-400' },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between text-[9px]">
                          <div className="flex items-center gap-1">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                            <span className="text-[#64748B] truncate max-w-[70px]">{item.label}</span>
                          </div>
                          <span className="font-bold text-[#0F172A]">{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* X-axis legends */}
                <div className="flex justify-between items-center text-[9px] text-[#94A3B8] mt-1">
                  <span>May 10</span>
                  <span>May 12</span>
                  <span>May 14</span>
                  <span>May 16</span>
                </div>
              </div>

              {/* Tasks List */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-sm lg:col-span-5 h-[210px] flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A] mb-3">My Tasks</h4>
                  <div className="space-y-2">
                    {tasks.map((task) => (
                      <div key={task.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 min-w-0">
                          {task.checked ? (
                            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-white flex-shrink-0">
                              <Check size={10} strokeWidth={3} />
                            </div>
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border border-gray-300 flex-shrink-0" />
                          )}
                          <span className={`text-[11px] truncate ${task.checked ? 'text-[#94A3B8] line-through' : 'text-[#64748B]'}`}>
                            {task.name}
                          </span>
                        </div>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-semibold flex-shrink-0 ${task.tagColor}`}>
                          {task.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
