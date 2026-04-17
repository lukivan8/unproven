interface IDBadgeProps {
    id: string;
    name?: string;
    path?: string;
    bio?: string;
    preview?: boolean;
}

const IDBadge = ({ id, name, path, bio, preview }: IDBadgeProps) => {
    return (
        <div
            className={`badge-card bg-primary text-primary-foreground w-80 md:w-96 aspect-[4/5] flex flex-col justify-between p-8 ${preview ? "opacity-90" : ""}`}
        >
            <div>
                <div className="text-xs tracking-[0.4em] opacity-60 mb-2">
                    CANDIDATE
                </div>
                <div className="text-4xl md:text-5xl font-bold tracking-tightish">
                    UNPROVEN
                </div>
            </div>

            <div className="space-y-2 py-6">
                <div
                    className={`text-2xl md:text-3xl font-bold truncate ${!name || name === "Your Name" ? "opacity-40" : ""}`}
                >
                    {name || "Your Name"}
                </div>
                <div
                    className={`text-base md:text-lg opacity-80 ${!path || path === "Your Path" ? "opacity-40" : ""}`}
                >
                    {path || "Your Path"}
                </div>
                {bio && (
                    <div className="text-sm opacity-60 italic leading-tight mt-2">
                        &quot;{bio}&quot;
                    </div>
                )}
            </div>

            <div className="border-t-2 border-primary-foreground/20 pt-6">
                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-xs tracking-[0.3em] opacity-60 mb-1">
                            ID
                        </div>
                        <div className="text-3xl md:text-4xl font-bold">
                            #{id}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs tracking-[0.3em] opacity-60 mb-1">
                            STATUS
                        </div>
                        <div className="text-lg md:text-xl font-bold">
                            FOR NOW
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IDBadge;
