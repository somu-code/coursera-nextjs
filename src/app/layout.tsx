import "./globals.css";
import { Navbar } from "@/custom-components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="min-h-[inherit] h-full">
          <header>
            <Navbar />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
