import { content } from "./content";

const HowItWorks = () => {
    return (
        <section
            id="how"
            className="px-6 md:px-12 lg:px-24 py-16 bg-secondary/30"
        >
            <div className="max-w-5xl mx-auto">
                <p className="section-heading text-center mb-8">
                    {content.how.title}
                </p>

                <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                    {content.how.steps.map((step) => (
                        <div
                            key={step.number}
                            className="bg-card p-6 border border-border"
                        >
                            <span className="font-mono text-xs text-muted-foreground">
                                {step.number}
                            </span>
                            <h3 className="text-lg font-bold mt-3 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                {step.description}
                            </p>
                            <p className="font-mono text-xs text-muted-foreground/70 line-through">
                                {step.versus}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
