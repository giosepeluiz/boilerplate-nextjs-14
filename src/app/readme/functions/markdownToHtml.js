export function markdownToHtml(markdown, style) {
  let html = markdown;

  // Substituição de asteriscos por tags <b>
  html = html.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

  // Substituição de underline por tags <u>
  html = html.replace(/__(.*?)__/g, "<u>$1</u>");

  // Substituição de cabeçalhos
  html = html.replace(/^# (.*$)/gm, `<h1>$1</h1>`);
  html = html.replace(/^## (.*$)/gm, `<h2>$1</h2>`);
  html = html.replace(/^### (.*$)/gm, "<h3>$1</h3>");

  // Substituição de listas
  html = html.replace(/^\* (.*$)/gm, "<li>$1</li>");
  html = html.replace(/<\/li>\n\n<li>/g, "</li><li>");
  html = html.replace(/(<li>.*<\/li>)/s, `<ul>$1</ul>`);

  // Substituição de crase tripla por bloco de código
  html = html.replace(/```(.+?)```/gs, "<pre><code>$1</code></pre>");

  // Substituição de crase simples por tag de código
  html = html.replace(/`(.*?)`/g, "<code>$1</code>");

  // Substituição de três hifens por linha
  html = html.replace(/---/g, "<hr>");

  // Substituição de três hifens por linha
  html = html.replace(/---/g, "<hr>");

  // Substituição de citação (quote)
  html = html.replace(/^\>(.*$)/gm, "<blockquote>$1</blockquote>");

  return html;
}
