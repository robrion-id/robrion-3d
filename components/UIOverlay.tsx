'use client';

import { Terminal, Github, Linkedin, Download, Server, Monitor, Shield, Database, LayoutDashboard, Cloud, Blocks, Network, Activity, Container, FolderGit2, Smartphone, Search, LocateFixed, Eye } from 'lucide-react';
import React from 'react';

const projects = [
  { name: 'Geosat', desc: 'Survey Platform', icon: <LocateFixed className="w-5 h-5 text-blue-400" /> },
  { name: 'SEO Doctor', desc: 'SEO Analyzer', icon: <Search className="w-5 h-5 text-emerald-400" /> },
  { name: 'Personal Tracker', desc: 'Track Everything', icon: <Eye className="w-5 h-5 text-purple-400" /> },
  { name: 'WhatsApp Gateway', desc: 'WA API Gateway', icon: <Smartphone className="w-5 h-5 text-green-400" /> },
  { name: 'MongoDB Cluster', desc: 'DB Management', icon: <Database className="w-5 h-5 text-yellow-400" /> },
  { name: 'Monitoring Dashboard', desc: 'System Monitoring', icon: <Activity className="w-5 h-5 text-cyan-400" /> },
  { name: 'DevOps Automation', desc: 'Automation Tools', icon: <Terminal className="w-5 h-5 text-orange-400" /> },
  { name: 'Infrastructure', desc: 'Infra Solutions', icon: <Server className="w-5 h-5 text-red-400" /> },
];

const technologies = [
  { name: 'Linux', icon: '🐧' }, // Tux emoji or custom SVG icon replacement
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '🐙' }, // close enough
  { name: 'Nginx', icon: '🟢' },
  { name: 'Bash', icon: <Terminal className="w-4 h-4" /> },
  { name: 'Python', icon: '🐍' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Monitoring', icon: <Activity className="w-4 h-4" /> },
  { name: 'Networking', icon: <Network className="w-4 h-4" /> },
];

export function UIOverlay() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6 overflow-hidden">
      {/* Navigation Bar */}
      <nav className="pointer-events-auto flex items-center justify-between px-8 py-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,195,255,0.4)]">
            <Blocks className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            robrion.net
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {['Home', 'About', 'Projects', 'Skills', 'Blog', 'Contact'].map((item, i) => (
            <a key={item} href="#" className={`hover:text-white transition-colors ${i === 0 ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : ''}`}>
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Terminal className="w-5 h-5 hover:text-cyan-400" /></button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Github className="w-5 h-5 hover:text-cyan-400" /></button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Linkedin className="w-5 h-5 hover:text-cyan-400" /></button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium transition-all shadow-[0_0_15px_rgba(0,195,255,0.3)] hover:shadow-[0_0_25px_rgba(0,195,255,0.6)]">
            <span>Download CV</span>
            <Download className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center pointer-events-none mt-12 pl-6">
        <div className="pointer-events-auto max-w-xl space-y-6">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-300">
            <span className="mr-2">👋</span> Hi, I'm
          </div>
          
          <h1 className="font-display text-6xl md:text-7xl font-bold leading-[1.1] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            ROBBY <br/> APRIANTO
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent uppercase tracking-wider">
            DevOps • Infrastructure • Linux Engineer
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            I build, automate, and maintain reliable systems. Passionate about Linux, DevOps, and solving real-world infrastructure challenges.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
              View My Projects
              <span className="text-xl leading-none">&rarr;</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-all backdrop-blur-sm">
              Contact Me
              <span>✉</span>
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Sections */}
      <div className="pointer-events-auto flex flex-col gap-6 mt-auto">
        {/* Featured Projects Strip */}
        <div className="flex flex-col items-center">
            <div className="text-xs font-bold tracking-widest text-cyan-400 mb-3 uppercase">Featured Projects</div>
            <div className="flex overflow-x-auto gap-4 pb-4 px-4 w-full max-w-7xl mx-auto hide-scrollbar scroll-smooth">
                {projects.map((proj, i) => (
                    <div key={i} className="flex-shrink-0 w-64 p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 hover:border-cyan-500/50 hover:bg-black/60 transition-all cursor-pointer group shadow-lg shadow-cyan-900/10 hover:shadow-cyan-500/20">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            {proj.icon}
                        </div>
                        <h3 className="font-semibold text-white text-lg mb-1">{proj.name}</h3>
                        <p className="text-sm text-gray-400 mb-4">{proj.desc}</p>
                        <a href="#" className="inline-flex items-center text-sm font-medium text-cyan-400 group-hover:text-cyan-300">
                            View Project <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>

        {/* Tech Stack Bar */}
        <div className="flex flex-col items-center mt-2 pb-2">
           <div className="text-[10px] font-bold tracking-wider text-gray-500 mb-2 uppercase">Technologies I Work With</div>
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-6 py-3 rounded-full bg-black/50 backdrop-blur-xl border border-white/10">
               {technologies.map((tech, i) => (
                   <div key={i} className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all hover:scale-105 cursor-default">
                       {typeof tech.icon === 'string' ? (
                           <span className="text-lg">{tech.icon}</span>
                       ) : (
                           <span className="text-gray-300">{tech.icon}</span>
                       )}
                       <span className="text-sm font-mono text-gray-400">{tech.name}</span>
                   </div>
               ))}
           </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
