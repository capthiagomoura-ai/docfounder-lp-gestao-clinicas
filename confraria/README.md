# 2ª Confraria dos Gestores de Clínicas — landing page

Landing page de venda de ingressos do evento (05/12/2026, Bauru–SP), construída no **Framer**.

- **Página publicada:** https://empowered-permission-742520.framer.app/confraria
- **Projeto Framer:** `lA4RpL4bKCRPOPfc8BDQ` (página `/confraria`, breakpoints Desktop 1200 / Tablet 810 / Celular 390)
- **Checkout (Sympla):** https://www.sympla.com.br/evento/2-confraria-dos-gestores-de-clinicas/3640801
- **WhatsApp:** https://wa.me/5514998187929 · **Instagram:** https://www.instagram.com/docfounder_/

Este diretório guarda a **documentação, as mídias e uma versão em código (HTML/CSS/JS)** da página. A versão oficial publicada é a do Framer; a versão em código é equivalente e pode ser hospedada em qualquer lugar (ex.: GitHub Pages).

## Conteúdo
| Arquivo | O que é |
|---|---|
| `index.html`, `styles.css`, `script.js` | Versão em código da página (abra `index.html` ou sirva a pasta) |
| `COPY.md` | Texto completo da página, na ordem em que aparece |
| `DESIGN.md` | Sistema visual, estrutura e decisões |
| `assets/video/hero-fundo.mp4` | Clipe de 20 s (sem imagens de drone) usado no fundo do hero |
| `assets/video/vsl-convite.mp4` | VSL "Convite Confraria" (início da página) |
| `assets/video/edicao-anterior.mp4` | Vídeo da edição anterior, sem as imagens de drone, comprimido |
| `assets/fotos/` | Fotos do Thiago Moura |
| `assets/logo/` | Logomarca DocFounder (branca, para fundos escuros) |
| `assets/patrocinadores/` | Logos dos patrocinadores |

## Como atualizar
Edite no Framer e publique. Para trocar mídia, faça upload do novo arquivo (limite de 20 MB por arquivo no upload via API) e substitua no componente de vídeo / preenchimento da imagem.

## Versão em código
- Links (Sympla, WhatsApp) ficam no topo de `script.js`; o script repassa `utm_*`, `fbclid` e `gclid` ao checkout.
- Para testar localmente: `python3 -m http.server` dentro desta pasta e abra http://localhost:8000.
- Fontes: Barlow e Barlow Semi Condensed (Google Fonts).
