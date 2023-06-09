import "./globals.css";
import { Inter } from "next/font/google";
import { SwrProvider } from "@/components/Providers/SwrProvider";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cinerate",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <SwrProvider>
        <Body>{children}</Body>
      </SwrProvider>
    </html>
  );
}

function Body({ children }: RootLayoutProps) {
  return (
    <body className={`${inter.className} flex min-h-screen flex-col p-0`}>
      <NavBar />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </body>
  );
}
