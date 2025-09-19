import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Zap, Users, Shield } from "lucide-react";

export default function LandingPage() {
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
                <a href="/auth/signin">Sign In</a>
              </Button>
              <Button className="bg-[#4ECDC4] hover:bg-[#00A085] text-white" asChild>
                <a href="/auth/signup">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#2D2D2D] sm:text-6xl">
              Turn Your Documentation Into an
              <span className="text-[#4ECDC4]"> AI Customer Support Agent</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6C757D]">
              Transform your existing docs into a 24/7 intelligent support system. 
              Customers get instant, accurate answers while you save time and money.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#4ECDC4] hover:bg-[#00A085] text-white px-8 py-3" asChild>
                <a href="/demo">
                  Try Live Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#E8F8F5] px-8 py-3" asChild>
                <a href="/auth/signup">Get Early Access</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-[#6C757D]">
              No credit card required • Setup in 5 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2D2D2D] sm:text-4xl">
              Why Choose DocuAgents?
            </h2>
            <p className="mt-4 text-lg text-[#6C757D]">
              Built specifically for SaaS companies with documentation-heavy support needs
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8 text-[#4ECDC4]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#2D2D2D]">24/7 Support</h3>
                  <p className="text-[#6C757D]">Never miss a customer question again</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Zap className="h-8 w-8 text-[#4ECDC4]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#2D2D2D]">Instant Answers</h3>
                  <p className="text-[#6C757D]">Customers get responses in seconds</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-[#4ECDC4]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#2D2D2D]">Reduce Support Load</h3>
                  <p className="text-[#6C757D]">Handle 80% of questions automatically</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-[#4ECDC4]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#2D2D2D]">Easy Setup</h3>
                  <p className="text-[#6C757D]">Connect your docs in minutes</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-[#4ECDC4]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#2D2D2D]">Secure & Private</h3>
                  <p className="text-[#6C757D]">Your data stays with you</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ArrowRight className="h-8 w-8 text-[#4ECDC4]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#2D2D2D]">One-Click Embed</h3>
                  <p className="text-[#6C757D]">Add to your website instantly</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2D2D2D] sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-[#6C757D]">
              Get started in 3 simple steps
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4ECDC4] text-white text-xl font-bold">
                1
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#2D2D2D]">Connect Your Docs</h3>
              <p className="mt-2 text-[#6C757D]">
                Add your website URLs, upload PDFs, or connect your knowledge base. 
                Our AI learns from your existing content.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4ECDC4] text-white text-xl font-bold">
                2
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#2D2D2D]">AI Learns Your Content</h3>
              <p className="mt-2 text-[#6C757D]">
                Our system processes your documentation and creates a smart knowledge base 
                that understands your products and services.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4ECDC4] text-white text-xl font-bold">
                3
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#2D2D2D]">Deploy & Support</h3>
              <p className="mt-2 text-[#6C757D]">
                Embed the chat widget on your website or use our API. 
                Customers get instant, accurate answers 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2D2D2D] sm:text-4xl">
              See DocuAgents in Action
            </h2>
            <p className="mt-4 text-lg text-[#6C757D]">
              Try our live demo and experience the power of AI-powered customer support
            </p>
          </div>
          
          <div className="mt-16">
            <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-[#F8F9FA] to-white">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#4ECDC4] text-white text-2xl font-bold mb-6">
                  🎯
                </div>
                <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-4">
                  Live Demo: Aven.com Customer Support
                </h3>
                <p className="text-lg text-[#6C757D] mb-8 max-w-2xl mx-auto">
                  This demo showcases how DocuAgents works with real documentation. 
                  The AI has been trained on Aven&apos;s HELOC services and can answer questions 
                  about loan terms, eligibility, and application processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#4ECDC4] hover:bg-[#00A085] text-white px-8 py-3" asChild>
                    <a href="/demo">
                      Try Live Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#E8F8F5] px-8 py-3" asChild>
                    <a href="https://aven.com" target="_blank" rel="noopener noreferrer">
                      Visit Aven.com
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2D2D2D] sm:text-4xl">
              Pricing Coming Soon
            </h2>
            <p className="mt-4 text-lg text-[#6C757D]">
              We&apos;re finalizing our pricing plans. Get early access and special launch pricing.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-[#4ECDC4] hover:bg-[#00A085] text-white px-8 py-3" asChild>
                <a href="/auth/signup">
                  Get Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-[#6C757D]">
              Be the first to know when we launch
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2D2D2D]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to See DocuAgents in Action?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Try our live demo and experience the power of AI-powered customer support
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#4ECDC4] hover:bg-[#00A085] text-white px-8 py-3" asChild>
                <a href="/demo">
                  Try Live Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2D2D2D] px-8 py-3" asChild>
                <a href="/auth/signup">Get Early Access</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              No signup required for demo • Get early access for launch pricing
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <a href="/landing" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="h-6 w-6 rounded bg-[#4ECDC4] flex items-center justify-center">
                <span className="text-white font-bold text-xs">DA</span>
              </div>
              <span className="text-lg font-bold text-[#2D2D2D]">DocuAgents</span>
            </a>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-[#6C757D] hover:text-[#2D2D2D]">Privacy</a>
              <a href="#" className="text-[#6C757D] hover:text-[#2D2D2D]">Terms</a>
              <a href="#" className="text-[#6C757D] hover:text-[#2D2D2D]">Support</a>
            </div>
          </div>
          <div className="mt-8 text-center text-[#6C757D]">
            <p>&copy; 2024 DocuAgents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
