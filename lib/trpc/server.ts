import "server-only";
import { cache } from "react";
import { headers } from "next/headers";
import { createCallerFactory } from "@/server/trpc";
import { createTRPCContext } from "@/server/context";
import { appRouter } from "@/server/root";

const createContext = cache(async () => {
    const heads = new Headers(await headers());
    heads.set("x-trpc-source", "rsc");
    return createTRPCContext({ headers: heads });
});

const createCaller = createCallerFactory(appRouter);

export const trpcServer = createCaller(createContext);
