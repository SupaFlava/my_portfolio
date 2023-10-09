document
  .querySelector(".navigation__nav")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("navigation__link")) {
      document.getElementById("navi-toggle").checked = false;
    }
  });
