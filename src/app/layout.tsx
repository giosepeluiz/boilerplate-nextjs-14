import "@/styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

/* ****************************************************************
SEO com personalização
Documentação: https://nextjs.org/blog/next-13-2#built-in-seo-support-with-new-metadata-api
**************************************************************** */
export const metadata = {
  title: "Título de Exemplo",
  description: "Descrição de Exemplo",
  icons: {
    icon: "/icons/favicon.ico",
  },
  openGraph: {
    default: "Título de Exemplo",
    description: "Descrição de Exemplo",
    url: "https://localhost:3000",
    siteName: "Nome do Site",
    images: [
      {
        url: "https://www.example.ie/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
