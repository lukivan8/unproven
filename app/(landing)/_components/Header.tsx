import { content } from "./content";

const Header = () => {
    return (
        <header className="px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
            <div className="font-mono text-sm font-bold tracking-tightish">
                {content.header.brand}
            </div>
            <nav className="flex items-center gap-6">
                <a
                    href="#how"
                    className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block"
                >
                    {content.header.howItWorks}
                </a>
                <a
                    href="#about"
                    className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block"
                >
                    {content.header.about}
                </a>
                <a
                    href="/sign-in"
                    className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block"
                >
                    {content.header.signIn}
                </a>
                <a
                    href="/sign-up"
                    className="font-mono text-sm bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition-opacity"
                >
                    {content.header.join}
                </a>
            </nav>
        </header>
    );
};

export default Header;
