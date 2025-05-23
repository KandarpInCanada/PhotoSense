import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/auth-context";
import { NotificationsProvider } from "@/context/notifications-context";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhotoSense - Smart Photo Organization",
  description: "AI-powered photo organization with AWS Rekognition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="moderateai-theme">
          <AuthProvider>
            <NotificationsProvider>
              <Suspense
                fallback={
                  <div className="flex h-screen items-center justify-center">
                    Loading...
                  </div>
                }
              >
                {/* Sidebar will be included in each page component as needed */}
                {children}
              </Suspense>
            </NotificationsProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
