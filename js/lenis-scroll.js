const lenis = new Lenis({
  duration: 0.5,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // penis function (???)
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
