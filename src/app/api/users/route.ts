import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  if (session.user.role === "admin") {
    const users = await db.select().from(usersTable);
    return NextResponse.json(users);
  }

  if (session.user.role === "tenant-admin") {
    const users = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.tenantId, session.user.tenantId));
    return NextResponse.json(users);
  }

  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { name, age, email, role, tenantId } = await req.json();

  if (session.user.role === "admin") {
    const [newUser] = await db
      .insert(usersTable)
      .values({ name, age, email, role, tenantId })
      .returning();
    return NextResponse.json(newUser, { status: 201 });
  }

  if (session.user.role === "tenant-admin") {
    if (tenantId !== session.user.tenantId) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    const [newUser] = await db
      .insert(usersTable)
      .values({ name, age, email, role, tenantId })
      .returning();
    return NextResponse.json(newUser, { status: 201 });
  }

  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}
