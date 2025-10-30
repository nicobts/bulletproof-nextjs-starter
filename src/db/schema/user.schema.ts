import { integer, pgTable, varchar, pgEnum } from "drizzle-orm/pg-core";
import { tenantsTable } from "./tenants.schema";

export const rolesEnum = pgEnum("roles", ["admin", "tenant-admin", "user"]);

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  role: rolesEnum("role").notNull(),
  tenantId: integer("tenant_id").references(() => tenantsTable.id),
});
