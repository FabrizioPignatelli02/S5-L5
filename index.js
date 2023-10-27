document.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  const getStartedButton = document.getElementById("getStarted");
  if (window.scrollY > 350) {
    nav.classList.add("scrolled");
    nav.classList.remove("unscrolled");
    getStartedButton.classList.add("buttonScrolled");
    getStartedButton.classList.remove("buttonUnScrolled");
  } else {
    nav.classList.add("unscrolled");
    nav.classList.remove("scrolled");
    getStartedButton.classList.add("buttonUnScrolled");
    getStartedButton.classList.remove("buttonScrolled");
  }
  const discover = document.getElementById("discover");
  if (window.scrollY > 830) {
    discover.classList.add("positionFixedForDiscover");
  } else {
    discover.classList.remove("positionFixedForDiscover");
  }
});
