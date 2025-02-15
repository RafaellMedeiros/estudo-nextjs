import React from "react";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body>
        <h1>Dash Home</h1>
        <main>{children}</main>
      </body>
    </html>
  )
}