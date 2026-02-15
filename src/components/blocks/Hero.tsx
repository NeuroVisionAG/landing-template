"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
    title: string;
    subtitle: string;
    background?: {
        type: "video" | "image" | "gradient";
        url?: string;
    };
    eventInfo?: {
        date: string;
        time: string;
    };
    bonus?: {
        title: string;
        description: string;
    };
    primaryCTA?: {
        text: string;
        link: string;
    };
    secondaryCTA?: {
        text: string;
        link: string;
    };
}

export const Hero = ({
    title,
    subtitle,
    background = { type: "gradient" },
    eventInfo,
    bonus,
    primaryCTA,
    secondaryCTA,
}: HeroProps) => {
    // Helper to parse title for dual-tone (wrap text in *stars* for gradient)
    const renderTitle = (text: string) => {
        const parts = text.split(/(\*.*?\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith("*") && part.endsWith("*")) {
                return (
                    <span
                        key={i}
                        className="text-transparent bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 bg-clip-text"
                    >
                        {part.slice(1, -1)}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {background.type === "video" && background.url && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-30"
                    >
                        <source src={background.url} type="video/mp4" />
                    </video>
                )}
                {background.type === "image" && background.url && (
                    <div
                        className="w-full h-full bg-cover bg-center opacity-20"
                        style={{ backgroundImage: `url(${background.url})` }}
                    />
                )}
                {background.type === "gradient" && (
                    <div className="w-full h-full bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50" />
                )}
                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
            </div>

            <div className="container relative z-10 mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-left space-y-8"
                    >
                        {/* Event Date Badge */}
                        {eventInfo && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-900 to-emerald-600 rounded-2xl shadow-xl border border-white/20"
                            >
                                <PlayCircle className="w-6 h-6 text-white" />
                                <span className="text-lg md:text-xl font-bold text-white">
                                    {eventInfo.date} • {eventInfo.time}
                                </span>
                            </motion.div>
                        )}

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] font-montserrat">
                            {renderTitle(title)}
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                            {subtitle}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            {primaryCTA && (
                                <Button
                                    size="lg"
                                    className="rounded-2xl px-10 py-7 text-xl font-bold shadow-2xl hover:scale-105 transition-transform bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-950 hover:to-emerald-700 text-white"
                                    asChild
                                >
                                    <a href={primaryCTA.link}>{primaryCTA.text}</a>
                                </Button>
                            )}
                            {secondaryCTA && (
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-2xl px-10 py-7 text-xl font-bold border-2 border-slate-200 hover:border-blue-300 transition-all bg-white/50 backdrop-blur-sm"
                                    asChild
                                >
                                    <a href={secondaryCTA.link}>{secondaryCTA.text}</a>
                                </Button>
                            )}
                        </div>

                        {/* Bonus Card */}
                        {bonus && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-5 p-5 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl shadow-lg max-w-md"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                                    <Gift className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg uppercase tracking-wider">
                                        {bonus.title}
                                    </h4>
                                    <p className="text-slate-600 text-sm">{bonus.description}</p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Right side - Visual placeholder or Video Preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.3)] border-8 border-white bg-slate-100">
                            {/* This could be a static image or another video */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-emerald-50 flex items-center justify-center">
                                <PlayCircle className="w-20 h-20 text-blue-900/20" />
                            </div>
                        </div>
                        {/* Soft decorative blur */}
                        <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-[80px]" />
                        <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-[80px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
