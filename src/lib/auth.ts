import { betterAuth } from "better-auth";
import { db } from "@/db";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(db, { usePlural: true }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [],
});
