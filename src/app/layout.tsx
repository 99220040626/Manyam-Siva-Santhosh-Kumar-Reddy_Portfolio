import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "MANYAM SIVA SANTHOSH KUMAR REDDY | AI Operating System Portfolio (SANTHOSH.OS v4.5)",
  description:
    "Next-Generation JARVIS & F.R.I.D.A.Y. AI Operating System Portfolio of Manyam Siva Santhosh Kumar Reddy — Full-Stack Software Developer (Java, Spring Boot, Python, React, TensorFlow, SQL).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Orbitron:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com/3.4.17" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof tailwind !== 'undefined') {
                tailwind.config = {
                  darkMode: 'class',
                  theme: {
                    extend: {
                      fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Orbitron', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                      },
                      colors: {
                        os: {
                          bg: '#05060A',
                          card: '#0B1020',
                          primary: 'var(--os-primary, #00F5FF)',
                          secondary: 'var(--os-secondary, #7C4DFF)',
                          accent: 'var(--os-accent, #4ADE80)',
                        }
                      }
                    }
                  }
                };
              }
            `,
          }}
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" />
        <script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js" />
      </head>
      <body className="selection:bg-cyan-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
