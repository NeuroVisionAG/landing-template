"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InclusionItem {
    image?: string;
    title: string;
    description: string;
}

interface InclusionCardsProps {
    title: string;
    items: InclusionItem[];
}

export const InclusionCards = ({ title, items }: InclusionCardsProps) => {
    return (
        <section className="py-20 px-4 bg-slate-50">
            <div className="container mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-16 font-montserrat tracking-tight"
                >
                    {title}
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="flex flex-col bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            {item.image && (
                                <div className="mb-8 overflow-hidden rounded-3xl aspect-[4/3]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                </div>
                            )}
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 font-montserrat leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
