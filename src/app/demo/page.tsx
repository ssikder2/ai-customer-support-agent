import Image from "next/image";
import { ChatInterface } from "@/components/ChatInterface";
import { getCompanyConfig } from "@/lib/companyConfig";

export default async function DemoPage() {
  const companyConfig = getCompanyConfig();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {companyConfig.logo && (
            <Image
              className="dark:invert"
              src={companyConfig.logo}
              alt={`${companyConfig.name} Logo`}
              width={180}
              height={38}
              priority
            />
          )}

          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {companyConfig.name} Customer Support
            </h1>
            <p className="mt-4 text-lg text-zinc-400">
              Ask me anything about {companyConfig.name}'s services and support.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16">
          <div className="overflow-hidden rounded-2xl bg-white/[0.05] shadow-xl ring-1 ring-white/[0.1]">
            <div className="p-6">
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
