const logo = document.querySelector('#logo')
const html = document.querySelector('html')
var obj=document.getElementsByName("langbtn")
var dl = 1
function lightStyle() {
    html.setAttribute('data-bs-theme', 'light')
    obj.classList.remove('btn btn-outline-info')
    obj.className+=('btn btn-outline-primary')
}
function darkStyle() {
    html.setAttribute('data-bs-theme', 'dark')
    obj.classList.remove('btn btn-outline-primary')
    obj.className+=('btn btn-outline-info')
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
