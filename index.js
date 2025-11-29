const handleItemActivation = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    return;
  }

  const list = document.querySelector(".colored-list");
  const items = document.querySelectorAll(".colored-list__item");
  const transitionDurationMs =
    list &&
    parseFloat(
      getComputedStyle(list).getPropertyValue("--transition-duration")
    ) * 1000;

  items.forEach((item) => {
    let timeoutId = null;

    item.addEventListener("mouseenter", () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      item.classList.add("colored-list__item--activated");
    });

    item.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => {
        item.classList.remove("colored-list__item--activated");
        timeoutId = null;
      }, transitionDurationMs);
    });
  });
};

handleItemActivation();
