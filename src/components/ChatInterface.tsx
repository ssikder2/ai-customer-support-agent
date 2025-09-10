"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

import ReactMarkdown from "react-markdown";
import VapiWidget from "./VapiWidget";
import { getCompanyConfig } from "@/lib/companyConfig";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const companyConfig = getCompanyConfig();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      });

      const data = await response.json();
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "Sorry, I couldn't process your request. Please try again.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[48rem]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <Card className={`max-w-2xl p-5 ${
              message.isUser 
                ? "bg-[#4ECDC4] text-white" 
                : "bg-white text-[#2D2D2D] border border-gray-200"
            }`}>
              <div className="markdown-body">
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            </Card>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <Card className="bg-white text-[#2D2D2D] border border-gray-200 max-w-xs p-3">
              <p className="text-sm">Typing...</p>
            </Card>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
        <div className="flex-1 relative">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask me anything about ${companyConfig.name}'s services...`}
            disabled={isLoading}
            className="pr-20 h-12 text-[#2D2D2D] placeholder:text-[#6C757D] border-gray-300 focus:border-[#4ECDC4] focus:ring-[#4ECDC4]"
          />
          <div className="absolute right-1 top-1 flex gap-1">
            <VapiWidget
              apiKey={process.env.NEXT_PUBLIC_VAPI_API_KEY ?? ""}
              assistantId={process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID ?? ""}
            />
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="h-10 px-4 bg-[#4ECDC4] hover:bg-[#00A085] text-white"
            >
              {isLoading ? "..." : "Send"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
} 