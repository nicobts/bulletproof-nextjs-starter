import { db } from "@/db";
import { tenantsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const tenant = await db
    .select()
    .from(tenantsTable)
    .where(eq(tenantsTable.id, parseInt(params.id, 10)));

  if (!tenant) {
    return NextResponse.json({ error: "Tenant not found" }, { status: 404 });
  }

  return NextResponse.json(tenant);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { name } = await req.json();
  const [updatedTenant] = await db
    .update(tenantsTable)
    .set({ name })
    .where(eq(tenantsTable.id, parseInt(params.id, 10)))
    .returning();

  if (!updatedTenant) {
    return NextResponse.json({ error: "Tenant not found" }, { status: 404 });
  }

  return NextResponse.json(updatedTenant);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await db
    .delete(tenantsTable)
    .where(eq(tenantsTable.id, parseInt(params.id, 10)));

  return new Response(null, { status: 204 });
}
