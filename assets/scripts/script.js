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
    } else if (document.querySelector(".nav-fixed ul").style.top == "-80px") {
      document.querySelector(".nav-fixed ul").style.top = "0";
    }
  }
});

// Smooth Scroll

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-fixed ul").style.top = "0";
  } else {
    document.querySelector(".nav-fixed ul").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};
