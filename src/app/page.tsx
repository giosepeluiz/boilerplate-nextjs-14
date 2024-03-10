"use client";

import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import useWindowWidth from "@/components/useWindowWidth.jsx";

export default function Home() {
  const { windowWidth } = useWindowWidth();

  return (
    <div className={styles.container}>
      {/* Conteúdo principal */}
      <main className={styles.main}>
        <h1 className={styles.title}>Boilerplate de Next.js 14</h1>

        <p className={styles.description}>Template padrão para seu projeto Next.js v14.1.3</p>

        <div className={styles.grid}>
          <Link href="/readme" className={styles.card} prefetch={false}>
            <h2>Informações &rarr;</h2>
            <p style={{ lineHeight: "34px" }}>
              Clique aqui para conhecer as variáveis, funções e para saber como utilizar todos os
              recursos que o modelo oferece.
            </p>
          </Link>

          <Link
            href="https://github.com/giosepeluiz/boilerplate-nextjs-14"
            className={styles.card}
            prefetch={false}>
            <h2>Atualizações &rarr;</h2>

            <ul>
              <li>10{windowWidth && windowWidth < 600 ? "/03/" : " de março de "}2024</li>
            </ul>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Elaborado por Giosepe Luiz | Powered by{" "}
          <span className={styles.logo}>
            <Image src="/svg/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
