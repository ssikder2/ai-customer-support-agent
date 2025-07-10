import { NextRequest, NextResponse } from "next/server";
import { chat } from "@/lib/chat";

export async function POST(request: NextRequest) {
  const { query } = await request.json();
  const response = await chat(query);
  return NextResponse.json({ response });
}