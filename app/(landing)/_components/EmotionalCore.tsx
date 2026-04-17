import { content } from "./content";

const EmotionalCore = () => {
    return (
        <section className="px-6 md:px-12 lg:px-24 py-12">
            <div className="max-w-2xl mx-auto text-center">
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                    {content.emotional.p1}
                </p>

                <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6">
                    {content.emotional.p2}
                </p>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                    {content.emotional.loopLead}
                    <br />
                    <span className="font-mono text-sm">
                        {content.emotional.loopTag}
                    </span>
                </p>

                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                    <p>{content.emotional.p3}</p>
                    <p>{content.emotional.p4}</p>
                </div>
            </div>
        </section>
    );
};

export default EmotionalCore;
