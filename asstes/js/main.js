// scrollReveal;

const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: "600",
  // reset: true,
});

sr.reveal(".hero__text", { origin: "top" });
sr.reveal(".title__text", { origin: "top" });
sr.reveal(".steps__step", { distance: "100px", interval: 100 });
sr.reveal(".steps", { distance: "100px", interval: 800 });
sr.reveal(".features", { origin: "left", delay: 800 });
sr.reveal(".features2", { origin: "right", delay: 800 });
sr.reveal(".galller1", { origin: "top", deley: 800 });
// // footer
sr.reveal(".footer__item", {
  distance: "100px",
  interval: 100,
});
sr.reveal(".footer__copyright");
