import { NextResponse } from "next/server"
import { db } from "@/libs/db"

export async function GET() {
  try {
    // Check database connection
    await db.execute("SELECT 1")

    // Check Redis connection (if configured)
    // await redis.ping()

    const healthData = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || "unknown",
      services: {
        database: "healthy",
        // redis: "healthy",
      },
    }

    return NextResponse.json(healthData, { status: 200 })
  } catch (error) {
    console.error("Health check failed:", error)

    const healthData = {
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
      environment: process.env.NODE_ENV,
    }

    return NextResponse.json(healthData, { status: 503 })
  }
}
