// Esconde o botão flutuante enquanto QUALQUER CTA da página está visível
// (dois botões iguais na mesma tela confundem; o flutuante cobre o meio do scroll).
(function () {
  var flutuante = document.getElementById('zap-flutuante');
  if (!flutuante || !('IntersectionObserver' in window)) return;

  var ctas = document.querySelectorAll('.btn-zap');
  var visiveis = new Set();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      e.isIntersecting ? visiveis.add(e.target) : visiveis.delete(e.target);
    });
    flutuante.classList.toggle('escondido', visiveis.size > 0);
  }, { threshold: 0.4 });
  ctas.forEach(function (cta) { io.observe(cta); });
})();
