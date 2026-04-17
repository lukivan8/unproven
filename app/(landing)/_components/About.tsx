import { content } from "./content";

const About = () => {
    return (
        <section
            id="about"
            className="px-6 md:px-12 lg:px-24 py-16 bg-secondary/30"
        >
            <div className="max-w-2xl mx-auto text-center">
                <p className="section-heading mb-8">{content.about.title}</p>

                <p className="text-lg font-medium mb-6">
                    {content.about.lead}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                    {content.about.p1}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                    {content.about.p2}
                </p>

                <a
                    href={`mailto:${content.about.email}`}
                    className="inline-block mt-6 font-mono text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                    {content.about.email}
                </a>
            </div>
        </section>
    );
};

export default About;
