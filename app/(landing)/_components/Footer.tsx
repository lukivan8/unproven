import { content } from "./content";

const Footer = () => {
    return (
        <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
                <div className="font-mono text-sm font-bold">
                    {content.footer.brand}
                </div>
                <div className="flex items-center justify-center md:justify-end gap-6">
                    <a
                        href="mailto:hello@unproven.dev"
                        className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {content.footer.contact}
                    </a>
                    <span className="font-mono text-xs text-muted-foreground">
                        {content.footer.copyright}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
