import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";
import { Provider } from "@/components";

export const metadata: Metadata = {
  title: {
    template: '%s - XENAVAR | SUPLEMENTS',
    default:'HOME - XENAVAR | SUPLEMENTS'
  },
  description: "Shop Online Xenavar Suplements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
