document.addEventListener("DOMContentLoaded", function () {
  const popoverTargets = document.querySelectorAll(
    '.nav-link[href="#products"], ' +
    '.nav-link[href="#categories"], ' +
    '.nav-link[href="#aboutus"], ' +
    'a[href="#account"], ' +
    'a[href="#cart"], ' +
    '.powered-by'
  );

  popoverTargets.forEach((el) => {
    // Remove default browser tooltip if any
    el.removeAttribute("title");

    const popover = new bootstrap.Popover(el, {
      trigger: "hover",
      placement: "bottom",
      html: true,
      content: getPopoverContent(el),
    });

    // Dismiss on click anywhere else
    document.addEventListener("click", function (e) {
      if (!el.contains(e.target)) {
        popover.hide();
      }
    });
  });

  function getPopoverContent(el) {
    const href = el.getAttribute("href");

    if (el.classList.contains("powered-by")) {
      return `
        <div>
          Precision health & science-backed care<br>
          <small>Click to learn more</small>
        </div>
      `;
    }

    switch (href) {
      case "#products":
        return `
          <div>
            Browse our full nutrition range
          </div>
        `;
      case "#categories":
        return `
          <div>
            Diabetes, Protein, Snacks, Kids
          </div>
        `;
      case "#aboutus":
        return `
          <div>
            Our mission & health science
          </div>
        `;
      case "#account":
        return `
          <div>
            Login, orders & profile
          </div>
        `;
      case "#cart":
        return `
          <div>
            View your selected items
          </div>
        `;
      default:
        return "";
    }
  }
});
