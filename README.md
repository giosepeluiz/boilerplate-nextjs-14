# Modelo básico de Next.js 14

Este modelo básico inclui algumas alterações pessoais em relação ao projeto padrão de **Next.js**, dentre elas:

<ul>
  <li>Novo esquema de pastas;</li>
  <li>Com arquivos pré-configurados;</li>
  <li>Configurado para Typescript;</li>
  <li>Eslint e Prettier configurados;</li>
  <li>Toda a configuração foi feita usando Yarn;</li>
  <li>Versão atualizada para Next.js 14.</li>
</ul>

## Esquema de Pastas

<br/><b>SRC:</b> esta pasta inclui todas as partes do projeto, organizados por:

<ul>
  <li>App: as páginas do projeto;</li>
  <li>Components: arquivos de componentes;</li>
  <li>Data: arquivos de dados em formato JSON;</li>
  <li>Functions: funções para a parte lógica;</li>
  <li>Models: classes utilizadas como modelos;</li>
  <li>Styles: todos os estilos em SASS.</li>
</ul>

<br /><b>PUBLIC:</b> contem tudo aquilo que será de acesso público:

<ul>
  <li>Icons: ícones a serem utilizados;</li>
  <li>Images: todas as imagens;</li>
  <li>Vectors: todos os vetores.</li>
</ul>

> Lembrando que estas pastas podem ser alteradas a vontade de acordo com a necessidade do projeto, este é só um modelo.

<br/>

## Linhas do SASS/SCSS

Por padrão este projeto utiliza o pré-processador SAAS, mas para que as variáveis funcionem corretamente nos estilos dos componentes é importante que carregue a linha `@import "vendor/_defaults"`

> AVISO: O recurso TurboPack do Next.js 13 vem ativado por padrão, mas pode ser que o uso do SASS/SCSS não seja totalmente compatível. Caso tenha problemas, desative o TurboPack.

### Breakpoints

Para definir um breakpoint carregue o comando:

```
@include breakpoint('TAMANHO'){
    // Código
  }
```

Onde:

<ul>
  <li><b>small-only</b> = < 600px</li>
  <li><b>small-up</b> = > 600px</li>
  <li><b>medium-only</b> = < 900px</li>
  <li><b>medium-up</b> = > 900px</li>
  <li><b>large-only</b> = < 1200px</li>
  <li><b>large-up</b> = > 1200px</li>
</ul>

<ul>
  <li><b>height-small</b> = Altura até 300px</li>
  <li><b>height-medium</b> = Altura até 500px</li>
  <li><b>height-large</b> = Altura até 900px</li>
</ul>

### Z-Index

Existem variáveis com z-index pré-definidos, para isso utilize, sem aspas, o padrão: `z-index: z(VALOR)`, onde:

<ul>
  <li><b>above</b> = 500</li>
  <li><b>modal</b> = 400</li>
  <li><b>overlay</b> = 300</li>
  <li><b>dropdown</b> = 200</li>
  <li><b>default</b> = 1</li>
  <li><b>below</b> = -1</li>
</ul>

### Caminhos Absolutos (Absolute Paths)

Para facilitar a importação de módulos, componentes e arquivos, o caminho é totalmente absoluto. Ao importar um arquivo dentro de `./src/...` utilize apenas `@/...`. Isso facilita principalmente quando há pastas aninhadas.

### Cores Globais

Também tem as variáveis de cores globais (root), onde utiliza-se `color: $success`, cuja personalização deve ser feita em `@import "vendor/_colors"` que já vem com alguns modelos pré-carregados.

### Tamanhos de Fontes

Para facilitar a escrita do código, existem alguns padrões para tamanhos de fontes. Para utilizar, escreva, sem aspas, o padrão: `font-size: font(VALOR)`, onde:

<ul>
  <li><b>big-title</b> = 64 pixels</li>
  <li><b>title</b> = 40 pixels</li>
  <li><b>subtitle</b> = 20 pixels</li>
  <li><b>global</b> = 16 pixels</li>
  <li><b>description</b> = 14 pixels</li>
  <li><b>small</b> = 9 pixels</li>
</ul>

### Converter pixels para rem

O ideal é que utilize sempre REM no lugar de PIXELS para a maior parte do código, então utilize `rem(valor em px)`, pois o próprio SCSS fará a conversão. Por exemplo `rem(10)` que seria 10px será convertido para `1rem`.

> ⚠️ IMPORTANTE: A configuração padrão de REM foi alterada da base 16 para a base 10, ou seja, 1 rem é igual a 10 pixels.

### Outras variáveis

A pasta `@import "vendor/_variables"` conta com outras variáveis de medida e padrões.

<br/>

<br/>

---

Última alteração em **10 de março de 2024**.
