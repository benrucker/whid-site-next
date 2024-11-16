import type { Metadata, Viewport } from "next";
import "./globals.scss";
import React from "react";
import { WhidNavbar } from "@/components/WhidNavbar";

export const metadata: Metadata = {
  title: "what have i done",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <WhidNavbar />
        {children}
      </body>
    </html>
  );
}
