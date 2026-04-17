import { signOut, withAuth } from "@workos-inc/authkit-nextjs";
import { trpcServer } from "@/lib/trpc/server";

export default async function Home() {
    const { user, role, permissions } = await withAuth();

    return (
        <div className="relative flex flex-1 items-center justify-center bg-background px-6 py-16 md:px-12 lg:px-24">
            <main className="relative w-full max-w-2xl">
                <div className="flex items-center justify-between border-b border-border-strong pb-4">
                    <span className="stamp text-foreground">
                        Unproven / 001
                    </span>
                    <span className="stamp text-muted-foreground">
                        {user ? "Session" : "Guest"}
                    </span>
                </div>

                <div className="mt-12 rule-accent">
                    <p className="section-heading mb-3">WorkOS AuthKit</p>
                    <h1 className="text-4xl font-semibold tracking-tightish text-foreground md:text-5xl">
                        Unproven.
                        <br />
                        <span className="text-primary">Server-rendered.</span>
                    </h1>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                        Neon, Drizzle, and tRPC behind a quiet surface.
                    </p>
                </div>

                {user ? (
                    <SignedIn
                        user={user}
                        role={role}
                        permissions={permissions}
                        posts={await trpcServer.posts.list()}
                    />
                ) : (
                    <SignedOut />
                )}

                <footer className="mt-16 border-t border-border pt-4">
                    <span className="stamp text-ink-400">
                        Minimalist · Typographic · Mono-first
                    </span>
                </footer>
            </main>
        </div>
    );
}

function SignedOut() {
    return (
        <div className="mt-12 flex flex-col gap-5 border-t border-border pt-8">
            <p className="stamp text-muted-foreground">Not authenticated</p>
            <div className="flex flex-wrap gap-3">
                <a
                    href="/sign-in"
                    className="inline-flex h-10 items-center justify-center bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors duration-base ease-out hover:bg-primary-hover"
                >
                    Sign in
                </a>
                <a
                    href="/sign-up"
                    className="inline-flex h-10 items-center justify-center border border-border-strong px-5 text-sm font-medium text-foreground transition-colors duration-base ease-out hover:bg-foreground hover:text-background"
                >
                    Sign up
                </a>
            </div>
        </div>
    );
}

function SignedIn({
    user,
    role,
    permissions,
    posts,
}: {
    user: { email: string; firstName: string | null; lastName: string | null };
    role?: string;
    permissions?: string[];
    posts: { id: number; title: string; content: string; createdAt: Date }[];
}) {
    async function handleSignOut() {
        "use server";
        await signOut({ returnTo: "/" });
    }

    const name =
        [user.firstName, user.lastName].filter(Boolean).join(" ") || user.email;

    return (
        <div className="mt-16 flex flex-col gap-16">
            <section>
                <div className="mb-6 flex items-baseline justify-between border-b border-border pb-2">
                    <h2 className="section-heading">Session</h2>
                    <span className="stamp text-primary">Authenticated</span>
                </div>
                <p className="text-2xl font-semibold tracking-tightish text-foreground">
                    {name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                    {user.email}
                </p>

                <dl className="mt-6 grid grid-cols-[6rem_1fr] gap-x-6 gap-y-3 border-t border-border pt-4">
                    <dt className="stamp text-muted-foreground">Role</dt>
                    <dd className="font-mono text-sm font-medium text-foreground">
                        {role ?? "—"}
                    </dd>
                    <dt className="stamp text-muted-foreground">Perms</dt>
                    <dd className="font-mono text-sm font-medium text-foreground">
                        {permissions?.length ? permissions.join(", ") : "—"}
                    </dd>
                </dl>
            </section>

            <section>
                <div className="mb-4 flex items-baseline justify-between border-b border-border pb-2">
                    <h2 className="section-heading">Posts</h2>
                    <span className="stamp text-ink-400">
                        {String(posts.length).padStart(2, "0")} / Neon
                    </span>
                </div>
                <ul className="flex flex-col">
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className="border-b border-border py-6 last:border-b-0"
                        >
                            <div className="flex items-baseline justify-between gap-4">
                                <p className="text-lg font-semibold tracking-tightish text-foreground">
                                    {post.title}
                                </p>
                                <span className="stamp shrink-0 text-ink-400">
                                    #{String(post.id).padStart(3, "0")}
                                </span>
                            </div>
                            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                                {post.content}
                            </p>
                            <p className="mt-3 stamp text-ink-400">
                                {post.createdAt.toISOString()}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            <form action={handleSignOut}>
                <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center border border-border-strong px-5 text-sm font-medium text-foreground transition-colors duration-base ease-out hover:bg-foreground hover:text-background"
                >
                    Sign out
                </button>
            </form>
        </div>
    );
}
