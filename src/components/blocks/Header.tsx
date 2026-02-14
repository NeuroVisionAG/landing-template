"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    brandName: string;
}

export const Header = ({ brandName }: HeaderProps) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    {brandName}
                </Link>
                <nav className="flex items-center gap-6">
                    <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild>
                        <a href="#faq">FAQ</a>
                    </Button>
                    <Button size="sm" asChild>
                        <a href="#pricing">Join Now</a>
                    </Button>
                </nav>
            </div>
        </header>
    );
};
