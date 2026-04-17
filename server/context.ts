import "server-only";
import { withAuth } from "@workos-inc/authkit-nextjs";
import { db } from "@/db";

export async function createTRPCContext(_opts: { headers: Headers }) {
    const { user, role, permissions } = await withAuth();
    return {
        db,
        user,
        role,
        permissions,
    };
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
