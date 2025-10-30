import { pgTable, varchar, serial, integer, boolean } from "drizzle-orm/pg-core";
import { tenantsTable } from "./tenants.schema";

export const todosTable = pgTable("todos", {
  id: serial("id").primaryKey(),
  description: varchar("description", { length: 255 }).notNull(),
  completed: boolean("completed").notNull().default(false),
  tenantId: integer("tenant_id").references(() => tenantsTable.id),
});
