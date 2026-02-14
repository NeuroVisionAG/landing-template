"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface FeatureGridProps {
    title: string;
    subtitle: string;
    items: {
        title: string;
        description: string;
        icon: string;
    }[];
}

export const FeatureGrid = ({ title, subtitle, items }: FeatureGridProps) => {
    return (
        <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
                    <p className="mt-4 text-muted-foreground">{subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => {
                        const Icon = (Icons as any)[item.icon] || Icons.HelpCircle;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Icon size={24} />
                                        </div>
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
