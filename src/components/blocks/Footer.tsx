import Link from "next/link";

interface FooterProps {
    text: string;
    links: {
        text: string;
        link: string;
    }[];
}

export const Footer = ({ text, links }: FooterProps) => {
    return (
        <footer className="py-16 border-t border-slate-200 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-black font-montserrat bg-gradient-to-r from-blue-900 to-emerald-600 bg-clip-text text-transparent mb-2">
                            {text}
                        </h3>
                        <p className="text-slate-400 text-sm">
                            © {new Date().getFullYear()} Все права защищены.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.link}
                                className="text-slate-600 hover:text-blue-900 font-bold transition-colors"
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {/* Social Icons Placeholder or Logic */}
                        <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors shadow-sm">
                            <span className="sr-only">Telegram</span>
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.24.37-.49 1.02-.73 4-.1.74 1.74 7.32 1.93 10.74 3.2 2.11.39 3.12.59 3.03.6.02.04-.1.08-.13.31-.03l.31-1.72c.05-.24.03-.46-.06-.6-.11-.14-.3-.23-.55-.23z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
