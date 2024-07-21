"use client";

import { useState } from "react";
import { markdownToHtml } from "@/app/readme/functions/markdownToHtml";
import styles from "@/styles/Readme.module.scss";
import Link from "next/link";

export default function FetchReadme() {
  const [readmeContent, setReadmeContent] = useState("");

  async function getReadme() {
    const res = await fetch(
      `https://raw.githubusercontent.com/giosepeluiz/boilerplate-nextjs-14/main/README.md?token=GHSAT0AAAAAACU254GFJO6HBMP6OV7JNHFMZU5AOKQ`,
      { next: { revalidate: 10 } },
    );

    const text = await res.text(); // Obtém o conteúdo do arquivo como texto

    // Faça o processamento do conteúdo do arquivo Markdown aqui
    // Por exemplo, você pode usar uma biblioteca como 'marked' ou 'remarkable' para converter o Markdown em HTML

    return setReadmeContent(markdownToHtml(text, styles)); // Retorna o conteúdo do arquivo Markdown
  }

  // Exemplo de uso
  getReadme()
    .then(() => {})
    .catch((error) => {
      console.error("Ocorreu um erro ao obter o README:", error);
    });

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/">
          « Voltar
        </Link>
      </nav>
      <main className={styles.main} dangerouslySetInnerHTML={{ __html: readmeContent }} />
    </div>
  );
}
