import React from "react";
import Hero from "@/components/Hero";
import ServerFeatures from "@/components/ServerFeatures";
import ServerInfo from "@/components/ServerInfo";
import CommunitySection from "@/components/CommunitySection";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, hsl(var(--gold-500) / 0.1) 0%, transparent 30%),
              radial-gradient(circle at 80% 20%, hsl(var(--gold-500) / 0.05) 0%, transparent 40%),
              radial-gradient(circle at 40% 80%, hsl(var(--gold-500) / 0.08) 0%, transparent 35%)
            `,
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold-500 rounded-full animate-ping opacity-70" />
        <div className="absolute top-3/4 right-1/3 w-0.5 h-0.5 bg-gold-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-gold-600 rounded-full animate-bounce opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-gold-500 rounded-full animate-ping opacity-50" />
      </div>

      <Hero />
      <ServerFeatures />
      <ServerInfo />
      <CommunitySection />
    </div>
  );
}
