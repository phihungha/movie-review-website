import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { SwrProvider } from "./components/SwrProvider";

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
    <body className={`${inter.className} p-0`}>
      <NavBar />
      {children}
    </body>
  );
}
