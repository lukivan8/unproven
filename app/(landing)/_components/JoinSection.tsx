import { content } from "./content";

const JoinSection = () => {
    return (
        <section
            id="apply"
            className="px-6 md:px-12 lg:px-24 py-16"
        >
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div>
                    <div className="stamp text-muted-foreground mb-4">
                        {content.join.stamp}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tightish leading-[1.05] text-balance">
                        {content.join.headlineLead}{" "}
                        <span className="text-primary">
                            {content.join.headlineAccent}
                        </span>
                    </h2>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                    <a
                        href="/sign-up"
                        className="inline-flex h-11 items-center justify-center bg-primary px-6 font-mono text-sm font-medium text-primary-foreground transition-opacity duration-base ease-out hover:opacity-90"
                    >
                        {content.join.cta}
                    </a>
                    <a
                        href="/sign-in"
                        className="font-mono text-sm text-muted-foreground underline underline-offset-4 decoration-border-strong/40 hover:text-foreground hover:decoration-foreground transition-colors duration-base ease-out"
                    >
                        {content.join.signIn}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
