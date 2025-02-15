import Image from "next/image";
import React from "react";
import logoHome from "@/public/idea.png"

import './global.css'

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body>
        <div>
          <Image src={logoHome} alt="Logo home" width={50} height={50}/>
          <h1>Dash Home</h1>
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}