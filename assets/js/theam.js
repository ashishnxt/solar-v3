gsap.registerPlugin(ScrollTrigger);

// Animate each character section on scroll
document.querySelectorAll(".character").forEach((char, index) => {
  gsap.fromTo(char,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: char,
        start: "top 90%",
        end: "top 60%",
        toggleActions: "play reverse play reverse",
        markers: false,
      }
    }
  );
});



