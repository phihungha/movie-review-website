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
        <footer>
          <div className="place-content-center py-10 px-20 w-full">
            <h2 className="text-base text-center not-italic text-gray-900">
              Created by Ha Phi Hung - Le Quang Trung
            </h2>
          </div>
        </footer>
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
