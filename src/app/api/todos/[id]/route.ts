import { db } from "@/db";
import { todosTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const todoId = parseInt(params.id, 10);
  const [todo] = await db
    .select()
    .from(todosTable)
    .where(
      and(
        eq(todosTable.id, todoId),
        eq(todosTable.tenantId, session.user.tenantId)
      )
    );

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(todo);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const todoId = parseInt(params.id, 10);
  const { description, completed } = await req.json();
  const [updatedTodo] = await db
    .update(todosTable)
    .set({ description, completed })
    .where(
      and(
        eq(todosTable.id, todoId),
        eq(todosTable.tenantId, session.user.tenantId)
      )
    )
    .returning();

  if (!updatedTodo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(updatedTodo);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const todoId = parseInt(params.id, 10);
  await db
    .delete(todosTable)
    .where(
      and(
        eq(todosTable.id, todoId),
        eq(todosTable.tenantId, session.user.tenantId)
      )
    );

  return new Response(null, { status: 204 });
}
