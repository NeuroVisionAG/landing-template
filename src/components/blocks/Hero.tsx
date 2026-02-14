"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
    title: string;
    subtitle: string;
    cta?: {
        text: string;
        link: string;
    };
}

export const Hero = ({ title, subtitle, cta }: HeroProps) => {
    return (
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
                        {title}
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                        {subtitle}
                    </p>
                    {cta && (
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="rounded-full px-8" asChild>
                                <a href={cta.link}>{cta.text}</a>
                            </Button>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
