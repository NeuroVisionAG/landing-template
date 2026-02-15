"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface RegistrationProps {
    title: string;
    description: string;
    ctaText: string;
    bonus?: {
        text: string;
    };
    eventDate?: string;
    benefits?: string[];
}

export const GenericRegistration = ({
    title,
    description,
    ctaText,
    bonus,
    eventDate,
    benefits = [],
}: RegistrationProps) => {
    return (
        <section className="py-20 px-4 bg-white overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 rounded-[3rem] p-8 md:p-16 text-center shadow-[0_30px_100px_rgba(30,58,138,0.4)] border border-white/10"
                >
                    {/* Decorative glows */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full mb-4">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-green-400 font-bold uppercase tracking-widest text-sm">Бесплатное участие</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white font-montserrat tracking-tight leading-tight">
                            {title}
                        </h2>

                        <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
                            {description}
                        </p>

                        {benefits.length > 0 && (
                            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto py-6">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3 text-left">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                                        <span className="text-white font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="pt-4 flex flex-col items-center gap-6">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto px-12 py-8 text-2xl font-black rounded-2xl shadow-[0_10px_40px_rgba(59,130,246,0.5)] bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 transition-all hover:scale-105 active:scale-95 text-white"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Or open modal
                            >
                                {ctaText}
                            </Button>

                            {eventDate && (
                                <p className="text-blue-200 font-bold text-lg">
                                    Ближайший эфир: <span className="text-white">{eventDate}</span>
                                </p>
                            )}

                            {bonus && (
                                <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                                    <Gift className="w-6 h-6 text-orange-400" />
                                    <p className="text-slate-300">
                                        <span className="text-white font-bold">ПОДАРОК:</span> {bonus.text}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
