//animation for about section
let t0 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "center bottom",
  },
});
t0.from(".text0", { x: 200, opacity: 0, duration: 1 }).from(
  ".zero",
  { x: -200, opacity: 0, duration: 1 },
  "0.5"
);

//animation for portfolio
let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".portfolio",
    start: "center bottom",
  },
});
t1.from(".text1", { x: -200, opacity: 0, duration: 1 }).from(
  ".even",
  { x: 135, opacity: 0, duration: 1 },
  "0.5"
);

//animation for contact section
let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "center bottom",
  },
});
t2.from(".text2", { x: 200, opacity: 0, duration: 1 }).from(
  ".odd",
  { x: -200, opacity: 0, duration: 1 },
  "0.5"
);
