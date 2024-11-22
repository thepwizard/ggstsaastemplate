import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import db from "@/utils/db";

// GET /api/users
export async function GET() {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
  }
}

// POST /api/users
export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();
    const user = await db.user.create({
      data: {
        name,
        email,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}