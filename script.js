// ============================================================
// LINK DO CHECKOUT
// Cole aqui o link de pagamento do curso. Enquanto estiver vazio,
// o botão "Quero fazer minha inscrição!" só rola até a oferta.
// ============================================================
const CHECKOUT_URL = "";

(function () {
  const btn = document.getElementById("btn-checkout");
  if (!btn || !CHECKOUT_URL) return;

  // Repassa ao checkout os parâmetros de campanha (utm_*, fbclid, gclid) da URL da LP
  const url = new URL(CHECKOUT_URL);
  const params = new URLSearchParams(window.location.search);
  params.forEach((valor, chave) => {
    if (/^(utm_|fbclid|gclid)/.test(chave) && !url.searchParams.has(chave)) url.searchParams.set(chave, valor);
  });
  btn.href = url.toString();
})();
