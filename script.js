/* -----------------------------------------
   ANIMATIONS GSAP (apparitions)
----------------------------------------- */

window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".hero-photo", { duration: 1.2, opacity: 0, scale: 0.6, ease: "power3.out" });
  gsap.from(".hero-title", { duration: 1, opacity: 0, y: -20, delay: 0.3 });
  gsap.from(".hero-subtitle", { duration: 1, opacity: 0, y: -10, delay: 0.5 });
  gsap.from(".hero-intro", { duration: 1, opacity: 0, y: 10, delay: 0.7 });
  gsap.from(".hero-buttons", { duration: 1, opacity: 0, y: 20, delay: 0.9 });

  gsap.from(".page-title", { duration: 1, opacity: 0, y: -20 });

  gsap.utils.toArray(".neon-card").forEach((card, i) => {
    gsap.from(card, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      delay: 0.2 * i,
      ease: "power2.out"
    });
  });
});
