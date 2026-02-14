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
        <footer className="py-12 border-t mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-muted-foreground">{text}</p>
                <div className="flex gap-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.link}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};
