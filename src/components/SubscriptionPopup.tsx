'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

declare global {
  interface Window {
    sender: any;
  }
}

export default function SubscriptionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Load Sender script
    const script = document.createElement('script');
    script.src = 'https://cdn.sender.net/accounts_resources/universal.js';
    script.async = true;
    script.onload = () => {
      if (window.sender) {
        window.sender('b20ca096081520');
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src="https://cdn.sender.net/accounts_resources/universal.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !window.sender) return;

    setIsSubmitting(true);
    
    try {
      // Use Sender's API to subscribe
      window.sender('event', 'subscribe', {
        email: email,
        list: 'default' // or whatever list ID you want to use
      });
      
      setIsSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
        setEmail('');
      }, 2000);
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openPopup = () => setIsOpen(true);
  const closePopup = () => {
    setIsOpen(false);
    setIsSuccess(false);
    setEmail('');
  };

  if (!isOpen) {
    return (
      <Button 
        onClick={openPopup}
        size="lg" 
        className="bg-[#4ECDC4] hover:bg-[#00A085] text-white px-8 py-3"
      >
        Get Notified When We Launch
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md p-6 relative">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
        
        {isSuccess ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">You're all set!</h3>
            <p className="text-[#2D2D2D]">We'll notify you when DocuAgents launches.</p>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">Get Early Access</h3>
            <p className="text-[#2D2D2D] mb-6">
              Be the first to know when DocuAgents launches. Get exclusive early access and special pricing.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-[#4ECDC4] hover:bg-[#00A085] text-white py-3"
              >
                {isSubmitting ? 'Subscribing...' : 'Notify Me When Ready'}
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
