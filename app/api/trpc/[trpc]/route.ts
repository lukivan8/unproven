import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "@/server/context";
import { appRouter } from "@/server/root";

const handler = (req: Request) =>
    fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: () => createTRPCContext({ headers: req.headers }),
        onError({ path, error }) {
            if (process.env.NODE_ENV === "development") {
                console.error(`[tRPC] ${path ?? "<no-path>"}:`, error);
            }
        },
    });

export { handler as GET, handler as POST };
