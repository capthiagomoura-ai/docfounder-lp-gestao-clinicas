# DocFounder — Landing page do curso online de Gestão de Clínicas

Landing page de vendas do curso online **Gestão de Clínicas**, da DocFounder, conduzido por **Thiago Moura**. O site foi construído e é hospedado no **Framer**.

- **Site publicado:** https://empowered-permission-742520.framer.app
- **Projeto no Framer (para editar):** https://framer.com/projects/lA4RpL4bKCRPOPfc8BDQ

Este repositório tem **a LP em código** (HTML, CSS e JavaScript, sem dependências), pronta para publicar pelo **GitHub Pages** em `curso.docfounder.com.br`. A versão original no Framer continua existindo; escolha uma das duas como oficial.

## Conteúdo do repositório

| Caminho | O que é |
|---|---|
| `index.html` | A página |
| `styles.css` | Estilos (cores, tipografia, layout e versões tablet/celular) |
| `script.js` | Link do checkout (variável `CHECKOUT_URL`) e repasse de UTMs |
| `CNAME` | Domínio usado pelo GitHub Pages (`curso.docfounder.com.br`) |
| `assets/icones/` | Ícones Phosphor embutidos (sem depender de CDN) |
| `COPY.md` | Texto completo da página, seção por seção, como está publicado |
| `DESIGN.md` | Sistema visual: cores, tipografia, componentes e responsividade |
| `assets/logo/` | Logo DocFounder (versões branca e verde) e símbolo, em SVG |
| `assets/fotos/` | Fotos do Thiago (palco e quadros do reels “Precificação”) |
| `assets/video/` | Reels “Precificação” comprimido (720p, ~18 MB) usado no hero, e a imagem de capa |

## A oferta

- Curso online com **8 módulos e 50 aulas**
- **12 meses de acesso**
- **Bônus:** encontro individual com o Thiago (só para quem se inscreve enquanto o anúncio está no ar)
- **De R$ 5.000 por R$ 997**

## Estrutura da página

1. Barra de oferta no topo
2. Hero com o reels em vídeo
3. Faixas animadas inclinadas
4. Dor do cliente + “Você se identifica?”
5. Faixa limão: “Do caos para uma clínica que roda sem você”
6. Seis pilares de solução
7. Números (8 módulos · 50 aulas · 12 meses · 1 encontro)
8. Os 8 módulos com todas as aulas
9. Por que desta vez vai ser diferente
10. Bônus: encontro individual
11. Oferta (card de preço) + selos
12. Quem conduz: Thiago Moura
13. Perguntas frequentes
14. CTA final e rodapé

A copy foi escrita a partir das principais dores relatadas pelos clientes da consultoria DocFounder (falta de clareza nos números, falta de tempo, dificuldade de execução, processos informais, contratação e rotatividade, crescimento desorganizado).

## Pendências

- [ ] Colar o link de checkout em `script.js` (`CHECKOUT_URL`)
- [ ] Ativar o GitHub Pages e criar o CNAME `curso` no Registro.br
- [ ] Seção de depoimentos com clientes autorizados
- [ ] Trocar as fotos de banco de imagem dos cards de módulo (02 a 08) por fotos reais

## Publicar no GitHub Pages com o domínio do Registro.br

1. No GitHub: **Settings → Pages** → *Source*: **Deploy from a branch** → Branch **main** / **(root)** → **Save**.
2. Ainda em **Settings → Pages**, confira se *Custom domain* mostra `curso.docfounder.com.br` (vem do arquivo `CNAME`).
3. No **Registro.br** → domínio `docfounder.com.br` → **DNS** → **Configurar zona DNS** → **Nova entrada**:
   - Tipo **CNAME** · Nome **curso** · Dados **capthiagomoura-ai.github.io**
   - Não altere os registros existentes de `www` nem do domínio principal.
4. Depois que o DNS propagar (minutos a algumas horas), volte em **Settings → Pages** e marque **Enforce HTTPS**.

Para usar outro subdomínio, troque o conteúdo do arquivo `CNAME` e o *Nome* do registro no Registro.br.

## Conectar o checkout

Abra `script.js` e cole o link de pagamento em `CHECKOUT_URL`. O botão “Quero fazer minha inscrição!” passa a levar ao checkout, repassando automaticamente os parâmetros de campanha (`utm_*`, `fbclid`, `gclid`).

## Editar a página

- Textos: `index.html` (a copy completa também está em `COPY.md`).
- Cores e fontes: variáveis no topo de `styles.css`.
- Para testar localmente, abra `index.html` no navegador.
