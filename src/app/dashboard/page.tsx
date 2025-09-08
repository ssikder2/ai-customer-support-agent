"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LogOut, Plus, Settings, BarChart3, MessageSquare } from "lucide-react"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 rounded-lg bg-[#4ECDC4] flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-sm">DA</span>
          </div>
          <p className="text-[#6C757D]">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-[#4ECDC4] flex items-center justify-center">
                <span className="text-white font-bold text-sm">DA</span>
              </div>
              <span className="text-xl font-bold text-[#2D2D2D]">DocuAgents</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-[#4ECDC4] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {session.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                    </span>
                  </div>
                )}
                <span className="text-[#2D2D2D] font-medium">{session.user?.name}</span>
              </div>
              <Button
                variant="ghost"
                onClick={() => signOut({ callbackUrl: "/landing" })}
                className="text-[#6C757D] hover:text-[#2D2D2D]"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#2D2D2D] mb-2">Welcome back, {session.user?.name}!</h1>
          <p className="text-[#6C757D]">Manage your AI customer support agents</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#4ECDC4] rounded-lg">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D2D2D]">Create Agent</h3>
                <p className="text-sm text-[#6C757D]">Set up a new support agent</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#4ECDC4] rounded-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D2D2D]">Conversations</h3>
                <p className="text-sm text-[#6C757D]">View chat history</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#4ECDC4] rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D2D2D]">Analytics</h3>
                <p className="text-sm text-[#6C757D]">View performance metrics</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#4ECDC4] rounded-lg">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D2D2D]">Settings</h3>
                <p className="text-sm text-[#6C757D]">Manage your account</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Getting Started */}
        <Card className="p-8 border-0 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">Get Started with DocuAgents</h2>
            <p className="text-[#6C757D] mb-6 max-w-2xl mx-auto">
              Create your first AI customer support agent in minutes. Connect your documentation, 
              customize the responses, and deploy to your website.
            </p>
            <Button className="bg-[#4ECDC4] hover:bg-[#00A085] text-white px-8 py-3">
              Create Your First Agent
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}
