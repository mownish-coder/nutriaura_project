// Topbar scroll hide/show behavior
document.addEventListener('DOMContentLoaded', function () {
    const topBar = document.getElementById('topBar');
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    let isHidden = false;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolling DOWN - hide topbar
            if (!isHidden) {
                topBar.classList.add('hide-topbar');
                if (navbar) {
                    navbar.style.top = '0px';
                }
                isHidden = true;
            }
        } else {
            // Scrolling UP - show topbar
            if (isHidden) {
                topBar.classList.remove('hide-topbar');
                if (navbar) {
                    navbar.style.top = '33px';
                }
                isHidden = false;
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});
