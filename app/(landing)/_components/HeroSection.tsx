import { content } from "./content";

const HeroSection = () => {
    return (
        <section className="px-6 md:px-12 lg:px-24 pt-12 pb-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-mono text-xl md:text-2xl lg:text-3xl font-bold tracking-tightish text-center text-foreground mb-12 leading-[1.25] text-balance">
                    {content.hero.heading}
                </h1>

                <div className="space-y-1.5 mb-12">
                    {content.hero.rejections.map((quote, index) => (
                        <p
                            key={index}
                            className="font-mono text-sm md:text-base text-muted-foreground line-through decoration-1 text-center"
                            style={{ opacity: 1 - index * 0.04 }}
                        >
                            &laquo;{quote}&raquo;
                        </p>
                    ))}
                </div>

                <div className="text-center">
                    <p className="font-mono text-sm text-muted-foreground mb-4">
                        {content.hero.soundFamiliar}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
