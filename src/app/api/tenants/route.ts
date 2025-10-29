import { db } from "@/db";
import { tenantsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const tenants = await db.select().from(tenantsTable);
  return NextResponse.json(tenants);
}

export async function POST(req: Request) {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { name } = await req.json();
  const [newTenant] = await db.insert(tenantsTable).values({ name }).returning();
  return NextResponse.json(newTenant, { status: 201 });
}
