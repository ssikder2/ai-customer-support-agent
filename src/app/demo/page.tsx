import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatInterface } from "@/components/ChatInterface";
import SubscriptionPopup from "@/components/SubscriptionPopup";
import { ArrowLeft, MessageCircle, Zap, Clock, Users } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/landing" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <div className="h-8 w-8 rounded-lg bg-[#4ECDC4] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DA</span>
                  </div>
                  <span className="text-xl font-bold text-[#2D2D2D]">DocuAgents</span>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-[#6C757D] hover:text-[#2D2D2D]" asChild>
                <a href="/landing">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </a>
              </Button>
              <Button className="bg-[#4ECDC4] hover:bg-[#00A085] text-white" asChild>
                <a href="/auth/signup">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-8 w-8 text-[#4ECDC4]" />
                <span className="text-2xl font-bold text-[#2D2D2D]">Live Demo</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#2D2D2D] sm:text-4xl">
              See DocuAgents in Action
            </h1>
            <p className="mt-4 text-lg text-[#2D2D2D] max-w-2xl mx-auto">
              Try our AI customer support agent powered by your documentation. 
              Ask questions about products, services, or support topics.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center justify-center space-x-2 text-center">
              <Zap className="h-5 w-5 text-[#4ECDC4]" />
              <span className="text-sm text-[#2D2D2D] font-medium">Instant responses</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-center">
              <Clock className="h-5 w-5 text-[#4ECDC4]" />
              <span className="text-sm text-[#2D2D2D] font-medium">24/7 availability</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-center">
              <Users className="h-5 w-5 text-[#4ECDC4]" />
              <span className="text-sm text-[#2D2D2D] font-medium">Always helpful</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-8 bg-[#F8F9FA]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="p-6 border-0 shadow-lg">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Try the AI Assistant</h3>
              <p className="text-[#2D2D2D] text-sm">
                Ask questions about Aven&apos;s HELOC services, application process, rates, or customer support. 
                The AI will respond based on Aven&apos;s documentation.
              </p>
            </div>
            <ChatInterface />
          </Card>
        </div>
      </section>

      {/* Aven Context Section - Moved below chat */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F9FA] rounded-lg p-6 border border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-[#4ECDC4] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Demo: Aven.com Customer Support</h3>
                <p className="text-[#2D2D2D] text-sm leading-relaxed">
                  This demo showcases how DocuAgents works with <strong>Aven.com</strong>, a home equity line of credit platform. 
                  The AI has been trained on Aven&apos;s documentation and can answer questions about their HELOC services, 
                  application process, rates, and customer support. Try asking about loan terms, eligibility requirements, 
                  or how to apply for a home equity line of credit.
                </p>
                <div className="mt-3">
                  <a 
                    href="https://aven.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#4ECDC4] hover:text-[#00A085] text-sm font-medium"
                  >
                    Visit Aven.com →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#2D2D2D] sm:text-3xl">
            Ready to Create Your Own AI Agent?
          </h2>
          <p className="mt-4 text-lg text-[#2D2D2D]">
            Connect your documentation and deploy your own intelligent support system in minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <SubscriptionPopup />
            <Button size="lg" variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#E8F8F5] px-8 py-3" asChild>
              <a href="/landing">Learn More</a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-[#2D2D2D]">
            Get notified when we launch • Early access for subscribers
          </p>
        </div>
      </section>
    </div>
  );
}
