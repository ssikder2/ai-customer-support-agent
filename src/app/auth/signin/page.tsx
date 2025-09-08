"use client"

import { signIn, getProviders } from "next-auth/react"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SignInPage() {
  const [providers, setProviders] = useState<Record<string, any> | null>(null)

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    fetchProviders()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FA] to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to landing */}
        <Link href="/landing" className="inline-flex items-center text-[#6C757D] hover:text-[#2D2D2D] mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to DocuAgents
        </Link>

        <Card className="p-8 border-0 shadow-lg">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-[#4ECDC4] flex items-center justify-center">
                <span className="text-white font-bold text-sm">DA</span>
              </div>
              <span className="text-xl font-bold text-[#2D2D2D]">DocuAgents</span>
            </div>
            <h1 className="text-2xl font-bold text-[#2D2D2D] mb-2">Welcome back</h1>
            <p className="text-[#6C757D]">Sign in to your account to continue</p>
          </div>

          <div className="space-y-3">
            {providers && Object.keys(providers).length > 0 ? (
              Object.values(providers).map((provider: { id: string; name: string }) => {
                const getProviderStyle = (name: string) => {
                  switch (name.toLowerCase()) {
                    case 'google':
                      return "w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-3 transition-colors"
                    case 'linkedin':
                      return "w-full bg-[#0077B5] hover:bg-[#005885] text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-3 transition-colors"
                    case 'facebook':
                      return "w-full bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-3 transition-colors"
                    default:
                      return "w-full bg-[#4ECDC4] hover:bg-[#00A085] text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-3 transition-colors"
                  }
                }

                const getProviderIcon = (name: string) => {
                  switch (name.toLowerCase()) {
                    case 'google':
                      return (
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      )
                    case 'linkedin':
                      return (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )
                    case 'facebook':
                      return (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      )
                    default:
                      return null
                  }
                }

                return (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id, { callbackUrl: "/dashboard" })}
                    className={getProviderStyle(provider.name)}
                  >
                    {getProviderIcon(provider.name)}
                    <span>Continue with {provider.name}</span>
                  </button>
                )
              })
            ) : (
              <div className="text-center py-8">
                <p className="text-[#6C757D] mb-4">No authentication providers configured.</p>
                <p className="text-sm text-[#6C757D]">
                  Please add OAuth credentials to your environment variables.
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#6C757D]">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-[#4ECDC4] hover:text-[#00A085] font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
