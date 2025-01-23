import type { Metadata } from "next";
//import "./globals.css";

export const metadata: Metadata = {
  title: "Músicas Javé-Yiré",
  description: "Canções compostas por membros e ex-membros da Comunidade Católica Javé-Yiré",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-BR">
      <body style={{margin: '1em'}}>
        {children}
      </body>
    </html>
  );
}
