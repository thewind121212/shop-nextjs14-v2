import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { spaceGrotesk } from "@/app/ui/font";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";
import ToastNotification from "./ui/toast-notification/toast-notification";
import { AppProvider } from "./provider";

export const metadata: Metadata = {
  title: "Wliafdew Shop",
  description: "Buy Clothings come here",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" bg-primary-white">
      <AppProvider>
        <body className={spaceGrotesk.className}>
          <ToastNotification />
          <div id="header-placeholder"></div>
          <Header />
          <div className="w-auto h-auto bg-primary-white">
          {children}
          </div>
          <Footer />
        </body>
      </AppProvider>
    </html>
  );
}
