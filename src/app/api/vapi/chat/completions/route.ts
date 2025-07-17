import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { env } from "@/config/env";
import { chat } from "@/lib/chat";

const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("🎯 Vapi API called with:", {
      model: body.model,
      stream: body.stream,
      messageCount: body.messages?.length,
      lastMessage: body.messages?.[body.messages.length - 1]?.content
    });
    
    const {
      model,
      messages,
      max_tokens,
      temperature,
      stream,
      call,
      assistant,
      metadata,
      timestamp,
      ...restParams
    } = body;

    if (stream) {
      const lastUserMessage = messages?.[messages.length - 1]?.content;
      console.log("🔍 Streaming - Searching for:", lastUserMessage);
      
      // Use custom chat function with streaming
      const completionStream = await chat(lastUserMessage || "", true) as any;

      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          try {
            for await (const data of completionStream) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
            }
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
            controller.close();
          } catch (error) {
            controller.error(error);
          }
        }
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    } else {
      const lastUserMessage = messages?.[messages.length - 1]?.content;
      
      console.log("🔍 Searching for:", lastUserMessage);
      
      const response = await chat(lastUserMessage || "", false);
      const responseObj = response as any;
      console.log("✅ Response sent to Vapi:", {
        id: responseObj.id,
        model: responseObj.model,
        content: responseObj.choices?.[0]?.message?.content?.substring(0, 100) + "..."
      });
      return NextResponse.json(response);
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}