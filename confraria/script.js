// ============================================================
// LINKS DA PÁGINA — altere aqui se mudar o checkout ou o WhatsApp
// ============================================================
const CHECKOUT_URL = "https://www.sympla.com.br/evento/2-confraria-dos-gestores-de-clinicas/3640801";
const WHATSAPP_NUMBER = "5514998187929";
const MSG_GERAL = "Olá! Quero saber mais sobre a 2ª Confraria dos Gestores de Clínicas.";
const MSG_PATROCINIO = "Olá! Quero ser patrocinador da Confraria dos Gestores de Clínicas.";

(function () {
  // Repassa utm_*, fbclid e gclid da URL da LP para o checkout
  const checkout = new URL(CHECKOUT_URL);
  new URLSearchParams(window.location.search).forEach((valor, chave) => {
    if (/^(utm_|fbclid|gclid)/.test(chave) && !checkout.searchParams.has(chave)) checkout.searchParams.set(chave, valor);
  });

  const wa = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  // Botões "Quero o 1º lote / segunda cadeira" vão direto ao Sympla;
  // os demais CTAs (href="#ingressos") rolam até a seção de ingressos.
  document.querySelectorAll(".js-sympla").forEach((a) => {
    if (a.getAttribute("href") === "#" || a.hasAttribute("target")) a.href = checkout.toString();
  });
  document.querySelectorAll(".js-wa").forEach((a) => (a.href = wa(MSG_GERAL)));
  document.querySelectorAll(".js-wa-sponsor").forEach((a) => (a.href = wa(MSG_PATROCINIO)));

  // Pausa o vídeo do hero quando sai da tela (economiza bateria no celular)
  const hero = document.querySelector(".hero__video");
  if (hero && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => (e.isIntersecting ? hero.play().catch(() => {}) : hero.pause()), { threshold: 0.05 }).observe(hero);
  }
})();
