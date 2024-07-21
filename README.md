# Modelo básico de Next.js 14

Este modelo básico inclui algumas alterações pessoais em relação ao projeto padrão de **Next.js**, dentre elas:

- Novo esquema de pastas;
- Com arquivos pré-configurados;
- Configurado para Typescript;
- Eslint e Prettier configurados;
- Toda a configuração foi feita usando Yarn;
- Versão atualizada para Next.js 14.

## Esquema de Pastas

**SRC:** esta pasta inclui todas as partes do projeto, organizados por:

- App: as páginas do projeto;
- Components: arquivos de componentes;
- Data: arquivos de dados em formato JSON;
- Functions: funções para a parte lógica;
- Models: classes utilizadas como modelos;
- Styles: todos os estilos em SASS.

**PUBLIC:** contém tudo aquilo que será de acesso público:

- Icons: ícones a serem utilizados;
- Images: todas as imagens;
- Vectors: todos os vetores.

> Lembrando que estas pastas podem ser alteradas a vontade de acordo com a necessidade do projeto, este é só um modelo.

## Linhas do SASS/SCSS

Por padrão este projeto utiliza o pré-processador SASS, mas para que as variáveis funcionem corretamente nos estilos dos componentes é importante que carregue a linha `@import "vendor/_defaults"`

> AVISO: O recurso TurboPack do Next.js 13 vem ativado por padrão, mas pode ser que o uso do SASS/SCSS não seja totalmente compatível. Caso tenha problemas, desative o TurboPack.

### Medidas Globais

As variáveis de medidas globais incluem:

- **$global-max-width-raw:** rem(780);
- **$global-max-width:** rem($global-max-width-raw);
- **$global-radius:** rem(6);
- **$global-module-size:** rem(30);
- **$global-min-width:** rem(320);
- **$global-min-height:** rem(50);
- **$global-margin:** rem(20);
- **$global-padding:** rem(15);

### Transições

Existem várias durações e funções de transição pré-definidas:

- **$transition-duration:** 305ms;
- **$transition-duration-complex:** 385ms;
- **$transition-duration-entrance:** 235ms;
- **$transition-duration-exit:** 205ms;
- **$transition-duration-fast:** 150ms;

Funções de transição:

- **$transition-function-ease-in-expo:** cubic-bezier(0.95, 0.05, 0.795, 0.035);
- **$transition-function-ease-out-expo:** cubic-bezier(0.19, 1, 0.22, 1);
- **$transition-function-ease-in-back:** cubic-bezier(0.6, -0.28, 0.735, 0.045);
- **$transition-function-ease-out-back:** cubic-bezier(0.175, 0.885, 0.32, 1.275);
- **$transition-function-ease-in-out-circ:** cubic-bezier(0.785, 0.135, 0.15, 0.86);
- **$transition-function-ease-in-out-quint:** cubic-bezier(0.86, 0, 0.07, 1);
- **$transition-function-elastic:** cubic-bezier(0.175, 0.885, 0.41, 1.46);

### Z-Index

Existem variáveis com z-index pré-definidos. Para utilizá-los, escreva sem aspas: `z-index: z(VALOR)`, onde:

- **above-all:** 500
- **modal:** 400
- **overlay:** 300
- **dropdown:** 200
- **header:** 150
- **footer:** 100
- **above:** 2
- **default:** 1
- **below:** -1

### Tamanhos de Fontes

Para facilitar a escrita do código, existem alguns padrões para tamanhos de fontes. Para utilizá-los, escreva sem aspas: `font-size: font(VALOR)`, onde:

- **big-title:** rem(64);
- **title:** rem(40);
- **subtitle:** rem(20);
- **global:** rem(16);
- **description:** rem(14);
- **small:** rem(12);
- **tiny:** rem(9);

### Pesos de Fontes

Pesos de fonte padrão. Exemplo de utilização: `font-weight: weights("semi-bold")`:

- **thin:** 100
- **extra-light:** 200
- **light:** 300
- **regular:** 400
- **medium:** 500
- **semi-bold:** 600
- **bold:** 700
- **extra-bold:** 800
- **black:** 900

### Converter pixels para rem

O ideal é que utilize sempre REM no lugar de PIXELS para a maior parte do código. Utilize `rem(valor em px)`, pois o próprio SCSS fará a conversão. Por exemplo, `rem(10)`, que seria 10px, será convertido para `1rem`.

> ⚠️ IMPORTANTE: A configuração padrão de REM foi alterada da base 16 para a base 10, ou seja, 1 rem é igual a 10 pixels.

### Mixins

Mixins úteis disponíveis no projeto:

- **@mixin margin($value):** aplica margem padrão;
- **@mixin padding($value):** aplica padding padrão;
- **@mixin border-radius:** aplica borda arredondada padrão;
- **@mixin transition($property, $duration: $transition-duration, $timing-function: ease):** aplica transição padrão;
- **@mixin font($size, $weight: $font-weights[regular], $family: $primary-font):** aplica estilos de fonte padrão.

### Caminhos Absolutos (Absolute Paths)

Para facilitar a importação de módulos, componentes e arquivos, o caminho é totalmente absoluto. Ao importar um arquivo dentro de `./src/...`, utilize apenas `@/...`. Isso facilita principalmente quando há pastas aninhadas.

### Cores Globais

Existem variáveis de cores globais (root). Para utilizá-las, escreva `color: $success`, cuja personalização deve ser feita em `@import "vendor/_colors"`, que já vem com alguns modelos pré-carregados.

### Outras Variáveis

A pasta `@import "vendor/_variables"` conta com outras variáveis de medida e padrões.

---

Última alteração em **21 de julho de 2024**.
