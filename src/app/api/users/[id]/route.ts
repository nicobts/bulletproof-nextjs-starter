import { db } from "@/db";
import { usersTable } from "@/db/schema";
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

  const userId = parseInt(params.id, 10);
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, userId));

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (
    session.user.role === "admin" ||
    (session.user.role === "tenant-admin" &&
      user.tenantId === session.user.tenantId)
  ) {
    return NextResponse.json(user);
  }

  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const userId = parseInt(params.id, 10);
  const { name, age, email, role } = await req.json();

  if (session.user.role === "admin") {
    const [updatedUser] = await db
      .update(usersTable)
      .set({ name, age, email, role })
      .where(eq(usersTable.id, userId))
      .returning();
    return NextResponse.json(updatedUser);
  }

  if (session.user.role === "tenant-admin") {
    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, userId));

    if (!user || user.tenantId !== session.user.tenantId) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const [updatedUser] = await db
      .update(usersTable)
      .set({ name, age, email, role })
      .where(eq(usersTable.id, userId))
      .returning();
    return NextResponse.json(updatedUser);
  }

  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const userId = parseInt(params.id, 10);

  if (session.user.role === "admin") {
    await db.delete(usersTable).where(eq(usersTable.id, userId));
    return new Response(null, { status: 204 });
  }

  if (session.user.role === "tenant-admin") {
    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, userId));

    if (!user || user.tenantId !== session.user.tenantId) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await db.delete(usersTable).where(eq(usersTable.id, userId));
    return new Response(null, { status: 204 });
  }

  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}
