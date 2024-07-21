var hyde= function () {
  const spinner = document.getElementById('load');
  spinner.classList.add('loaded');
}
setTimeout(hyde, 3500);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".js-g08").forEach((item, i) => {
      const tl = gsap.timeline({
          delay: i * 0.1,
      });
      tl.from(item, { opacity: 0, scale: 0, duration: 0.5, ease: "back" })
        .to(item, { yPercent: -50, duration: 0.25, ease: "back" }, "+=0.4")
        .to(item, { yPercent: 0, duration: 0.25, ease: "back" });
  });
});

var title = function ()  {
  document.querySelectorAll("#js-g04").forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      rotation: -100,
      yPercent: -150,
      ease: "bounce",
      duration: 0.5,
      delay: i * 0.1,
    });
  });
};
setTimeout(title, 3500);

var title2 = function ()  {
document.querySelectorAll("#js-g02").forEach((item, i) => {
  gsap.fromTo(item, 
    {
      opacity: 0,
      scale: 2,
      yPercent: -75,
    },
    {
      opacity: 1,
      scale: 1,
      yPercent: 0,
      ease: "power1",
      duration: 0.5,
      delay: i * 0.05
    });
});
};
setTimeout(title2, 5000);

var title3 = function ()  {
  document.querySelectorAll("#myportfolio").forEach((item, i) => {
    gsap.fromTo(item, 
      {
        opacity: 0,
        scale: 2,
        yPercent: -75,
      },
      {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        ease: "power1",
        duration: 0.5,
        delay: i * 0.05
      });
  });
  };
  setTimeout(title3, 5500);