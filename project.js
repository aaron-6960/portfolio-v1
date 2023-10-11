document.addEventListener("DOMContentLoaded", function () {
  console.log(12)
  window.scrollTo(0, 0);
  document.querySelector(".loading").style.zIndex = 3;
  setTimeout(function () {
    document.querySelector(".loading").style.opacity = 0;
    document.querySelector(".sky").style.opacity = "1";
    const container = document.querySelectorAll(".border");
    container.forEach((e) => (e.style.opacity = "1"));
    document.querySelector(".loading").style.zIndex = -2;
    document.body.style.overflowY = "scroll";
    document.querySelector(".sky").style.height = `${body.clientHeight}px`;
  }, 6000);
});
const sky = document.querySelector(".sky");
const numStars = 2000;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = `${Math.random() * document.body.clientWidth}px`;
  star.style.top = `${Math.random() * document.body.clientHeight}px`;
  sky.appendChild(star);
}

sky.addEventListener("mousemove", (e) => {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    const starRect = star.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const starX = starRect.x + starRect.width / 2;
    const starY = starRect.y + starRect.height / 2;
    const deltaX = mouseX - starX;
    const deltaY = mouseY - starY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 200;
    const speed = 10;
    if (distance < maxDistance) {
      const translateX = (deltaX / distance) * speed + "px";
      const translateY = (deltaY / distance) * speed + "px";
      star.style.transform = `translate(${translateX}, ${translateY})`;
    }
  });
});

sky.addEventListener("mouseleave", () => {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.style.transform = "translate(0, 0)";
  });
});
const body = document.body;
document.querySelector(".loading").style.height = `${body.clientHeight}px`;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
document.querySelector(".border").style.marginTop = "170px";

window.addEventListener("scroll", function () {
  if (window.scrollY != 0) {
    document.querySelector(".navbar").style.opacity = "1";
    document.querySelector(".navbar").style.transform = `translateY(-10px)`;
  } 
  else {
    document.querySelector(".navbar").style.transform = `translateY(0px)`;
    document.querySelector(".navbar").style.opacity = "0.5";
  }
});
var stopPoints = {
  b1: 10,
  b2: 757.3333129882812,
  b3: 1446.6666259765625,
  b4: 2162.666748046875,
};
const buttons = document.querySelectorAll(".button");
buttons.forEach((b) => {
  b.addEventListener("click", () => {
    let name = b.id;
    window.scrollTo({
        top: stopPoints[name], 
        behavior: 'smooth' 
    });
    
  });
});
