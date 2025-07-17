import { NextRequest, NextResponse } from "next/server";
import { chat } from "@/lib/chat";

export async function POST(request: NextRequest) {
  const { query } = await request.json();
  const response = await chat(query);

  const content =
    (response as any)?.choices?.[0]?.message?.content ??
    "Sorry, I couldn't process your request. Please try again.";

  return NextResponse.json({ response: content });
}