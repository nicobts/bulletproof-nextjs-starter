import { db } from "@/db";
import { todosTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const todos = await db
    .select()
    .from(todosTable)
    .where(eq(todosTable.tenantId, session.user.tenantId));

  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { description } = await req.json();
  const [newTodo] = await db
    .insert(todosTable)
    .values({ description, tenantId: session.user.tenantId })
    .returning();

  return NextResponse.json(newTodo, { status: 201 });
}
