(() => {
  const phone = document.getElementById("phone");
  const screens = [...document.querySelectorAll(".screen")];

  function show(name) {
    const target = screens.find((screen) => screen.dataset.name === name);
    if (!target) return;
    screens.forEach((screen) => {
      screen.hidden = screen !== target;
    });
    phone.dataset.screen = name;
    target.querySelector(".scroll")?.scrollTo(0, 0);
  }

  document.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-go]");
    if (!btn) return;
    event.preventDefault();
    show(btn.dataset.go);
  });

  show("home");
})();
