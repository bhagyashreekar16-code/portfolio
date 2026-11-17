(function () {
  var hints = {
    all: "All seven strengths, together.",
    finance: "Finance leans on numbers: quantitative reasoning, aptitude and analysis.",
    business: "Business draws on structured thinking, formal study and working with others.",
    marketing: "Marketing needs analysis, clear communication and teamwork."
  };
  var cards = document.querySelectorAll("#strengths .s");
  var btns = document.querySelectorAll(".lens");
  var hint = document.getElementById("hint");
  function setLens(l) {
    btns.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lens === l)); });
    cards.forEach(function (c) {
      var hit = l !== "all" && c.dataset.fit.split(" ").indexOf(l) !== -1;
      c.classList.toggle("hit", hit);
      c.classList.toggle("dim", l !== "all" && !hit);
    });
    hint.textContent = hints[l];
  }
  btns.forEach(function (b) { b.addEventListener("click", function () { setLens(b.dataset.lens); }); });
})();
