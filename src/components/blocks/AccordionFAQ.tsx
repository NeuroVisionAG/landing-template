"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
    title: string;
    subtitle: string;
    items: {
        question: string;
        answer: string;
    }[];
}

export const AccordionFAQ = ({ title, subtitle, items }: FAQProps) => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
                    <p className="mt-4 text-muted-foreground">{subtitle}</p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};
