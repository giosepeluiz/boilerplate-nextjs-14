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
        <h1 className={styles.title}>Boilerplate de Next.js 13</h1>

        <p className={styles.description}>Template padrão para seu projeto Next.js v13.5.3</p>

        <div className={styles.grid}>
          <Link href="/readme" className={styles.card} prefetch={false}>
            <h2>Informações &rarr;</h2>
            <p style={{ lineHeight: "34px" }}>
              Clique aqui para conhecer as variáveis, funções e para saber como utilizar todos os
              recursos que o modelo oferece.
            </p>
          </Link>

          <Link
            href="https://github.com/giosepeluiz/boilerplate-nextjs-13"
            className={styles.card}
            prefetch={false}>
            <h2>Atualizações &rarr;</h2>

            <ul>
              <li>02{windowWidth && windowWidth < 600 ? "/09/" : " de setembro de "}2021</li>
              <li>21{windowWidth && windowWidth < 600 ? "/09/" : " de setembro de "}2022</li>
              <li>07{windowWidth && windowWidth < 600 ? "/05/" : " de maio de "}2023</li>
              <li>29{windowWidth && windowWidth < 600 ? "/09/" : " de setembro de "}2023</li>
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
