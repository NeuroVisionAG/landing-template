"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    brandName: string;
}

export const Header = ({ brandName }: HeaderProps) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
                <Link
                    href="/"
                    className="text-2xl font-black tracking-tighter font-montserrat bg-gradient-to-r from-blue-900 to-emerald-600 bg-clip-text text-transparent"
                >
                    {brandName}
                </Link>
                <nav className="flex items-center gap-4 md:gap-8">
                    <Link href="#program" className="hidden md:block text-slate-600 hover:text-blue-900 font-bold transition-colors">
                        Программа
                    </Link>
                    <Link href="#audience" className="hidden md:block text-slate-600 hover:text-blue-900 font-bold transition-colors">
                        Для кого
                    </Link>
                    <Button
                        size="lg"
                        className="rounded-full px-8 text-lg font-bold bg-gradient-to-r from-blue-900 to-emerald-600 hover:scale-105 transition-transform text-white"
                        asChild
                    >
                        <a href="#register">Участвовать</a>
                    </Button>
                </nav>
            </div>
        </header>
    );
};
