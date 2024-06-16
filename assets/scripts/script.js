document.addEventListener("click", function (obj) {
  if (obj.target.id == "menu-toggle") {
    document.querySelector(".side-nav ul").classList.add("slide");
    document.querySelector(".t-close").classList.add("slide");
  } else if (obj.target.id == "t-close") {
    document.querySelector(".side-nav ul").classList.remove("slide");
    document.querySelector(".t-close").classList.remove("slide");
  } else if (obj.target.id == "side-nav") {
    return;
  } else {
    if (document.querySelector(".side-nav ul").classList.contains("slide")) {
      document.querySelector(".side-nav ul").classList.remove("slide");
      document.querySelector(".t-close").classList.remove("slide");
    }
  }
});
