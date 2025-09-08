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
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-[#4ECDC4] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DA</span>
                  </div>
                  <span className="text-xl font-bold text-[#2D2D2D]">DocuAgents</span>
                </div>
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
                <a href="/auth/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#E8F8F5] px-8 py-3" asChild>
                <a href="/demo">Watch Demo</a>
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

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2D2D2D] sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-[#6C757D]">
              Start free, scale as you grow
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="p-8 border-2 border-gray-200">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#2D2D2D]">Starter</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#2D2D2D]">$29</span>
                  <span className="text-[#6C757D]">/month</span>
                </div>
                <p className="mt-2 text-[#6C757D]">1,000 conversations</p>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4ECDC4] mr-2" />
                    <span className="text-[#6C757D]">Basic chat widget</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4ECDC4] mr-2" />
                    <span className="text-[#6C757D]">Website scraping</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4ECDC4] mr-2" />
                    <span className="text-[#6C757D]">Email support</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full bg-[#4ECDC4] hover:bg-[#00A085] text-white" asChild>
                  <a href="/auth/signup">Start Free Trial</a>
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-2 border-[#4ECDC4] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#4ECDC4] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#2D2D2D]">Professional</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#2D2D2D]">$99</span>
                  <span className="text-[#6C757D]">/month</span>
                </div>
                <p className="mt-2 text-[#6C757D]">10,000 conversations</p>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4ECDC4] mr-2" />
                    <span className="text-[#6C757D]">Advanced chat widget</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4ECDC4] mr-2" />
                    <span className="text-[#6C757D]">File uploads</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4ECDC4] mr-2" />
                    <span className="text-[#6C757D]">Analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4ECDC4] mr-2" />
                    <span className="text-[#6C757D]">Priority support</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full bg-[#4ECDC4] hover:bg-[#00A085] text-white" asChild>
                  <a href="/auth/signup">Start Free Trial</a>
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#2D2D2D]">Enterprise</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#2D2D2D]">Custom</span>
                </div>
                <p className="mt-2 text-[#6C757D]">Unlimited conversations</p>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4ECDC4] mr-2" />
                    <span className="text-[#6C757D]">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4ECDC4] mr-2" />
                    <span className="text-[#6C757D]">Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4ECDC4] mr-2" />
                    <span className="text-[#6C757D]">SLA guarantees</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4ECDC4] mr-2" />
                    <span className="text-[#6C757D]">On-premise option</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full bg-[#4ECDC4] hover:bg-[#00A085] text-white">
                  Contact Sales
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2D2D2D]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Join hundreds of companies already using DocuAgents to provide better customer support
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-[#4ECDC4] hover:bg-[#00A085] text-white px-8 py-3" asChild>
                <a href="/auth/signup">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-[#4ECDC4] flex items-center justify-center">
                <span className="text-white font-bold text-xs">DA</span>
              </div>
              <span className="text-lg font-bold text-[#2D2D2D]">DocuAgents</span>
            </div>
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
