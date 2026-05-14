/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Projector as Project, 
  Palette, 
  Globe, 
  Video, 
  Camera, 
  ExternalLink,
  ArrowUpRight,
  Mail,
  Linkedin,
  Instagram
} from 'lucide-react';

import { WISDOM_IMAGE_BASE64 } from './wisdomImage';

export default function App() {
  const skills = [
    {
      id: 'pm',
      title: 'Project Manager',
      description: '4 years of experience in IT data annotation. Managing complex lifecycles with precision.',
      icon: <Project className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      id: 'graphic',
      title: 'Graphic Designer',
      description: 'Crafting visual identities and marketing materials that command attention.',
      icon: <Palette className="w-8 h-8" />,
      color: 'bg-orange-500'
    },
    {
      id: 'web',
      title: 'Web Designer',
      description: 'Designing intuitive, modern digital experiences that combine form and function.',
      icon: <Globe className="w-8 h-8" />,
      color: 'bg-emerald-500'
    },
    {
      id: 'video',
      title: 'Video Editor',
      description: 'Bringing stories to life through cinematic editing for brand marketing.',
      icon: <Video className="w-8 h-8" />,
      color: 'bg-purple-500'
    },
    {
      id: 'photo',
      title: 'Photographer',
      description: 'Capturing moments and products with a keen eye for light and composition.',
      icon: <Camera className="w-8 h-8" />,
      color: 'bg-red-500'
    }
  ];

  const portfolioItems = [
    {
      title: "Data Pipelines",
      category: "Data Annotation",
      image: "https://images.unsplash.com/photo-1551288049-bbda4833effb?auto=format&fit=crop&q=80&w=1200",
      description: "Optimizing annotation lifecycles for complex computer vision projects."
    },
    {
      title: "Creative Web",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
      description: "Modern, responsive web interfaces for digital platforms."
    },
    {
      title: "Brand Identity",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200",
      description: "Visual identity and marketing flyers for diverse brands."
    },
    {
      title: "Cinematic Edits",
      category: "Video Editing",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
      description: "Crafting narratives for commercial and promotional use."
    },
    {
      title: "Visual Assets",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200",
      description: "Professional creative photography and studio sessions."
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav id="navbar" className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-transparent backdrop-blur-sm">
        <div className="font-display font-bold text-xl tracking-tighter uppercase">WA.</div>
        <div className="flex gap-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#about" className="hover:line-through transition-all">About</a>
          <a href="#work" className="hover:line-through transition-all">Work</a>
          <a href="#contact" className="hover:line-through transition-all">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-widest font-bold opacity-50 mb-4 block"></span>
            <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-tighter uppercase mb-8">
              Wisdom<br />Awove
            </h1>
            <p className="text-xl max-w-md leading-relaxed text-balance opacity-80 decoration-black/20 decoration-2 underline-offset-4">
              Project Manager at Datamaker a data annotation firm, bridging the gap between metadata precision and visual storytelling.
            </p>
          </motion.div>
          <div className="relative group max-w-[500px] w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-square bg-gray-200 overflow-hidden relative transition-all duration-700 hover:shadow-2xl border border-black/5 rounded-full"
            >
              <img 
                src={WISDOM_IMAGE_BASE64} 
                alt="Wisdom Awove"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-white/40 mb-12 flex items-center gap-4">
                <div className="w-12 h-px bg-white/20"></div>
                Biography
              </h2>
              <p className="text-4xl md:text-5xl font-display font-medium leading-tight tracking-tight">
                I am a Project Manager with a deep understanding of the <span className="text-emerald-400 italic">data annotation lifecycle</span>. 
                Beyond the spreadsheets, I am a <span className="opacity-50">multi-disciplinary creative</span> specialized in design, videography, and photography.
              </p>
            </div>
            <div className="space-y-12 pt-4">
              <div id="stat-1">
                <h3 className="text-sm font-bold uppercase mb-4 opacity-50">Core Focus</h3>
                <p className="text-lg opacity-80">Managing IT data pipelines for annotation companies, ensuring high-quality datasets for AI models.</p>
              </div>
              <div id="stat-2">
                <h3 className="text-sm font-bold uppercase mb-4 opacity-50">Creative Edge</h3>
                <p className="text-lg opacity-80">Designing flyers, branding materials, and marketing videos that define professional identities.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Background Text */}
        <div className="absolute -bottom-10 right-0 opacity-5 pointer-events-none select-none">
          <span className="text-[20vw] font-display font-bold uppercase leading-none whitespace-nowrap">WISDOM</span>
        </div>
      </section>

      {/* Expertise Grid */}
      <section id="expertise" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20 border-b border-black/10 pb-12">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4">My Toolbox</h2>
            <h3 className="text-5xl font-display font-bold tracking-tighter">Skillset Diversified</h3>
          </div>
          <div className="hidden md:block text-right max-w-xs text-sm opacity-60">
            Balanced approach across management and creative production.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              id={`skill-${skill.id}`}
              className="bg-[#f2f2f2] p-12 hover:bg-[#141414] hover:text-white transition-all duration-500 group"
            >
              <div className="mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                {skill.icon}
              </div>
              <h4 className="text-2xl font-display font-bold mb-4 uppercase tracking-tighter">{skill.title}</h4>
              <p className="opacity-60 leading-relaxed font-medium">{skill.description}</p>
            </div>
          ))}
          <div className="bg-[#f2f2f2] p-12 flex items-center justify-center group overflow-hidden relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-40 h-40 border border-dashed border-black/20 rounded-full flex items-center justify-center"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-center px-4">Innovating Daily • Building Careers •</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="work" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4">Selected Work</h2>
              <h3 className="text-6xl font-display font-bold tracking-tighter lowercase italic">Visual Journal.</h3>
            </div>
            <button className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest border-b-2 border-black pb-2 hover:opacity-50 transition-opacity">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                id={`work-item-${index}`}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden mb-6 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest">View Project</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-display font-bold uppercase tracking-tighter mb-2">{item.title}</h4>
                    <p className="text-sm opacity-50 font-medium">{item.category}</p>
                  </div>
                  <div className="w-10 h-10 border border-black/10 flex items-center justify-center text-black/20 group-hover:text-black group-hover:border-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Large CTA / Contact */}
      <section id="contact" className="py-40 px-6 max-w-7xl mx-auto text-center border-t border-black/10">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-12 block underline decoration-emerald-500 decoration-4 underline-offset-8">Available for new opportunities</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-16 leading-tight">
            Let's build something<br />
            <span className="hover:italic transition-all cursor-pointer">Impactful together.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
            <a href="mailto:wisdomawove2018@gmail.com" className="group flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">Email Me</span>
            </a>
            <div className="w-px h-12 bg-black/10 hidden md:block"></div>
            <div className="flex gap-8">
              <a href="#" className="hover:opacity-50 transition-opacity"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:opacity-50 transition-opacity"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">
            © 2026 Wisdom Awove. All Rights Reserved.
          </div>
          <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">
            Curated with Precision • Designed with Intent
          </div>
        </div>
      </footer>
    </div>
  );
}
