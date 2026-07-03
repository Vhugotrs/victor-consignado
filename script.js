// Esconde o botão flutuante enquanto o botão do hero está visível
// (dois CTAs iguais na mesma tela confundem; o flutuante assume depois).
(function () {
  var heroBtn = document.getElementById('cta-hero');
  var flutuante = document.getElementById('zap-flutuante');
  if (!heroBtn || !flutuante || !('IntersectionObserver' in window)) return;

  new IntersectionObserver(function (entries) {
    flutuante.classList.toggle('escondido', entries[0].isIntersecting);
  }, { threshold: 0.4 }).observe(heroBtn);
})();
