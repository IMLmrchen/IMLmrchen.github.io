
    const html = document.querySelector('html')

    var dl = 1
    function lightStyle() {
        html.setAttribute('data-bs-theme', 'light')

    }
    function darkStyle() {
        html.setAttribute('data-bs-theme', 'dark')

    }
    const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQueryListDark.matches) {
        darkStyle()
        dl = 0
    }

    const mediaQueryListLight = window.matchMedia('(prefers-color-scheme: light)');
    if (mediaQueryListLight.matches) {
        lightStyle()
        dl = 1
    }
    console.log('dl=' + dl)

