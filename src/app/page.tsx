"use client";

import landingData from "@/config/landing.json";
import Scene from "@/components/three/Scene";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ExternalLink, ShieldCheck, Zap, Layers } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [-100, 0]);

  return (
    <main className="relative min-h-screen selection:bg-crab-orange/30 selection:text-white overflow-x-hidden font-sans bg-background text-foreground">
      {/* 3D Background */}
      <Scene />

      {/* Persistent Glows */}
      <div className="glow-teal top-[-10%] left-[-10%] -z-10" />
      <div className="glow-orange bottom-[-10%] right-[-10%] -z-10" />

      {/* Floating Header */}
      <motion.header
        style={{
          backgroundColor: bgOpacity,
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 90, 14, 0.1)"
        }}
        className="fixed top-0 left-0 right-0 z-50 py-3 px-6 transition-all"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/lab/logo.png"
              alt="OpenClaw Logo"
              width={40}
              height={40}
              className="rounded-full border border-white/20 shadow-lg shadow-crab-orange/20"
            />
            <div className="text-xl font-black tracking-tighter uppercase hero-gradient-text">
              {landingData.brand.name}
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-[10px] font-black tracking-[0.2em] uppercase text-neutral-400">
            {landingData.sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:text-crab-orange transition-colors"
              >
                {s.title}
              </a>
            ))}
          </nav>
          <button className="px-6 py-2.5 bg-crab-orange text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-crab-orange transition-all shadow-lg shadow-crab-orange/20">
            Join Waitlist
          </button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 relative inline-block"
          >
            <div className="absolute inset-0 bg-crab-orange/40 blur-3xl rounded-full" />
            <Image
              src="/lab/logo.png"
              alt="OpenClaw Master Logo"
              width={160}
              height={160}
              className="relative z-10 rounded-[3rem] border-2 border-white/20 shadow-4xl rotate-[-2deg] hover:rotate-[0deg] transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-block px-5 py-2 mb-8 text-[10px] font-black tracking-[0.4em] uppercase text-crab-light bg-crab-teal/50 rounded-full border border-white/10 backdrop-blur-md"
          >
            Architecture v1.1 • OpenClaw Mastery
          </motion.div>

          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter mb-10 leading-[0.8] hero-gradient-text drop-shadow-2xl">
            OpenClaw <br /> <span className="text-white/20">Lab.</span>
          </h1>

          <p className="text-xl md:text-3xl text-neutral-400 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
            {landingData.sections[0].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(255, 90, 14, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-14 py-8 bg-crab-orange text-white rounded-full font-black text-xl overflow-hidden transition-all uppercase tracking-widest shadow-2xl shadow-crab-orange/20"
            >
              <span className="relative z-10 flex items-center gap-4">
                {landingData.sections[0].cta}
                <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A3D] to-crab-orange opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.1)" }}
              className="px-14 py-8 border border-white/10 rounded-full font-black text-xl text-white backdrop-blur-md transition-all uppercase tracking-widest"
            >
              Взгляд изнутри
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-crab-orange/50"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-crab-orange to-transparent" />
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-10 space-y-64 py-64">
        {landingData.sections.slice(1).map((section: any, idx) => (
          <section
            key={section.id}
            id={section.id}
            className="min-h-screen flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl glass-card p-16 md:p-32 group relative"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-40 transition-opacity">
                {idx === 0 && <ShieldCheck className="w-32 h-32 text-crab-light" />}
                {idx === 1 && <Zap className="w-32 h-32 text-crab-orange" />}
                {idx === 2 && <Layers className="w-32 h-32 text-crab-light" />}
              </div>

              <div className="text-[10px] font-black tracking-[0.5em] uppercase text-crab-orange mb-10">
                Phase 0{idx + 1} // {section.id}
              </div>

              <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tighter leading-[0.9] hero-gradient-text">
                {section.title}
              </h2>

              <p className="text-2xl md:text-4xl text-neutral-400 leading-[1.3] font-light mb-16 max-w-2xl">
                {section.text}
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 border border-white/5 rounded-full text-[10px] font-black uppercase text-neutral-600">Neural Network Ready</span>
                <span className="px-4 py-2 border border-white/5 rounded-full text-[10px] font-black uppercase text-neutral-600">Scaleable Architecture</span>
                <span className="px-4 py-2 border border-white/5 rounded-full text-[10px] font-black uppercase text-neutral-600">Real-time Deployment</span>
              </div>
            </motion.div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-20 py-48 px-6 bg-crab-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <Image src="/lab/logo.png" alt="Logo" width={60} height={60} className="rounded-2xl" />
              <div className="text-4xl font-black tracking-tighter uppercase hero-gradient-text">
                {landingData.brand.name}
              </div>
            </div>
            <p className="text-2xl text-neutral-500 font-light mb-12 leading-relaxed">
              Мы строим инфраструктуру будущего, где ИИ-сотрудники — это не помощники, а полноправные члены команды.
            </p>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:border-crab-orange transition-colors cursor-pointer">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:border-crab-orange transition-colors cursor-pointer">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="col-span-1">
              <h4 className="font-black mb-10 uppercase text-[10px] tracking-[0.4em] text-crab-orange">Навигация</h4>
              <div className="flex flex-col gap-6 text-sm">
                {landingData.sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="text-neutral-400 hover:text-white transition-all uppercase tracking-widest text-[11px] font-bold">{s.title}</a>
                ))}
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="font-black mb-10 uppercase text-[10px] tracking-[0.4em] text-crab-orange">Ссылки</h4>
              <div className="flex flex-col gap-6 text-sm">
                {landingData.footer.links.map((link: any, i: number) => (
                  <a key={i} href={link.link} className="text-neutral-400 hover:text-white transition-all uppercase tracking-widest text-[11px] font-bold">{link.text}</a>
                ))}
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <div className="glass-card p-8 rounded-3xl border-white/5 bg-white/5">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Latest Version</p>
                <p className="font-black text-white mb-2">Build 2026.02.23</p>
                <p className="text-[10px] text-crab-light uppercase">Neural Core Stable</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">
          <div>{landingData.footer.text}</div>
          <div className="flex gap-10">
            <span className="hover:text-crab-orange transition-colors cursor-pointer tracking-widest">Privacy Protocol</span>
            <span className="hover:text-crab-orange transition-colors cursor-pointer tracking-widest">Neural Licensing</span>
          </div>
          <div className="text-white/20">Designed by Antigravity AI // Vision v1.1</div>
        </div>
      </footer>
    </main>
  );
}
