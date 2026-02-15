"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Code2, TrendingUp, Target, Layout, HelpCircle, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
    Cpu,
    Zap,
    Code2,
    TrendingUp,
    Target,
    Layout,
};

interface BenefitItem {
    icon?: string;
    title: string;
    description: string;
}

interface BenefitsGridProps {
    title: string;
    subtitle?: string;
    items: BenefitItem[];
    columns?: 2 | 3 | 4;
}

export const BenefitsGrid = ({
    title,
    subtitle,
    items,
    columns = 3,
}: BenefitsGridProps) => {
    const gridCols = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-2 lg:grid-cols-3",
        4: "md:grid-cols-2 lg:grid-cols-4",
    };

    return (
        <section id="program" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-montserrat"
                    >
                        {title}
                    </motion.h2>
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-600 max-w-3xl mx-auto"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>

                <div className={cn("grid gap-6 md:gap-8", gridCols[columns])}>
                    {items.map((item, index) => {
                        const IconComponent = item.icon ? ICON_MAP[item.icon] || HelpCircle : null;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-xl"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                                {/* Decorative background element on hover */}
                                <div className="absolute -z-10 bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/20 to-emerald-100/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
