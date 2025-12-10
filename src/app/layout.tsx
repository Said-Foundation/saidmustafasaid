import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Said Mustafa Said - Home",
  description: "Welcome to my digital space. Explore my portfolio of work and discover innovative solutions in AI, cloud computing, and software development.",
  keywords: ["Said Mustafa Said", "portfolio", "AI", "cloud computing", "software development", "TargetedCV"],
  authors: [{ name: "Said Mustafa Said" }],
  creator: "Said Mustafa Said",
  openGraph: {
    title: "Said Mustafa Said - Home",
    description: "Explore my portfolio and discover innovative AI and cloud solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Said Mustafa Said - Home",
    description: "Explore my portfolio and discover innovative AI and cloud solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
