import { WhidNavbar } from "@/app/components/WhidNavbar";
import type { Metadata, Viewport } from "next";
import React from "react";
import "./globals.scss";

export const metadata: Metadata = {
  title: "what have i done",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body>
        <WhidNavbar />
        {children}
      </body>
    </html>
  );
}
