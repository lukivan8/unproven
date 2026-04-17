import { content } from "./content";

const Pivot = () => {
    return (
        <section className="px-6 md:px-12 lg:px-24 py-16">
            <div className="max-w-2xl mx-auto text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {content.pivot}
                </p>
            </div>
        </section>
    );
};

export default Pivot;
