import Link from 'next/link';
import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'A customizable template built with Next.js and Tailwind CSS',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full flex flex-col antialiased">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              Cool Hats
            </Link>
            <div className="space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-white">
                Hats
              </Link>
              <Link href="/cart" className="text-gray-300 hover:text-white">
                Cart
              </Link>
            </div>
          </div>
        </nav>
        
        <ThemeProvider defaultTheme="light" attribute="class">
          <main className="flex-1">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


