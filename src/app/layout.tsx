import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/common/styles/globals.css";
import { cn } from "@/common/lib/utils";
import Header from "@/common/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepak Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-bg-image bg-cover bg-fixed bg-origin-border bg-clip-border",
          inter.className
        )}
      >
        <div className="pt-16">
          <div className="container mx-auto px-4">
            <div className="lg:flex gap-10 w-full">
              <div className=" bg-red-200 lg:min-w-[25%] min-w-full">
                {/* <Profile /> */}
                profile
              </div>
              <div className="bg-red-900 lg:min-w-[70%] min-w-full">
                <Header />
                {/* <div className="shadow-lg rounded-lg mb-2 ">{children}</div> */}
                {/* <Footer /> */}
                footer
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
