import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sensai - AI Career Coach",
  description: "Sensai - AI Career Coach is an intelligent career guidance platform that helps users navigate their professional journey with AI-powered insights. It offers personalized career recommendations, resume optimization, mock interview coaching, skill gap analysis, and job market insights—empowering individuals to make smarter career decisions and achieve their goals. 🚀",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-6">
              <div className="container mx-auto px-10 text-center text-xl text-gray-200">
                {/* <p>Made with 💗 by SufiyanKhan</p> */}
                <p className="text-3xl font-bold tracking-tighter text-center mb-6">Crafted with Passion by SufiyanKhan</p>
                <Footer />
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
