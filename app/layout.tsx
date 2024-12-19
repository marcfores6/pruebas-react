import React from "react";
import { Metadata } from "next";
import '@/app/globals.css';
import { sixtyfour } from "@/app/font";

export const metadata: Metadata = {
  title: 'Prueba Next',
  description: 'Mis primeros pasos con Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sixtyfour.variable} bg-slate-800 min-w-44`}>
        {children}
      </body>
    </html>
  )
}
