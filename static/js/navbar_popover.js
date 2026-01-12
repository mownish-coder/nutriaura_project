document.addEventListener("DOMContentLoaded", function () {
  const popoverTargets = [
    { id: "nav-products", key: "products" },
    { id: "nav-categories", key: "categories" },
    { id: "nav-aboutus", key: "aboutus" },
    { id: "nav-account", key: "account" },
    { id: "nav-cart", key: "cart" },
    { id: "nav-poweredby", key: "poweredby" },
  ];

  popoverTargets.forEach((item) => {
    const el = document.getElementById(item.id);
    if (!el) return;

    // Remove default tooltip
    el.removeAttribute("title");

    const popover = new bootstrap.Popover(el, {
      trigger: "hover",
      placement: "bottom",
      html: true,
      content: getPopoverContent(item.key),
    });

    // Dismiss popover on outside click
    document.addEventListener("click", function (e) {
      if (!el.contains(e.target)) {
        popover.hide();
      }
    });
  });

  function getPopoverContent(key) {
    switch (key) {
      case "products":
        return `
          <div>
            Browse our full nutrition range
          </div>
        `;
      case "categories":
        return `
          <div>
            Diabetes, Protein, Snacks, Kids
          </div>
        `;
      case "aboutus":
        return `
          <div>
            Our mission & health science
          </div>
        `;
      case "account":
        return `
          <div>
            Login, orders & profile
          </div>
        `;
      case "cart":
        return `
          <div>
            View your selected items
          </div>
        `;
      case "poweredby":
        return `
          <div>
            Precision health & science-backed care<br>
            <small>Click to learn more</small>
          </div>
        `;
      default:
        return "";
    }
  }
});
