import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DineDesk | Good food, easy does it",
  description: "Order dinner, reserve a table, or keep service moving with DineDesk.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}