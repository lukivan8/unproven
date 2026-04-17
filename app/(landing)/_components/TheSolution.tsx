import { content } from "./content";

const TheSolution = () => {
    return (
        <section className="px-6 md:px-12 lg:px-24 py-12">
            <div className="max-w-2xl mx-auto">
                <p className="text-2xl md:text-3xl font-bold text-center leading-relaxed mb-16">
                    {content.solution.headline}
                </p>

                <div className="space-y-8">
                    {content.solution.items.map((item, index) => (
                        <div key={index} className="rule-accent">
                            <p className="text-muted-foreground text-sm line-through mb-2 font-mono">
                                {item.before}
                            </p>
                            <p className="font-medium">{item.after}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheSolution;
