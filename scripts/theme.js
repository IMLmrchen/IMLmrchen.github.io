var img = document.getElementById("fhlogo001")
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
    img.src='https://pic.imgdb.cn/item/66c431bed9c307b7e9447ab8.png'
}

const mediaQueryListLight = window.matchMedia('(prefers-color-scheme: light)');
if (mediaQueryListLight.matches) {
    lightStyle()
    dl = 1
    img.src='https://pic.imgdb.cn/item/66c43216d9c307b7e9452eea.png'
}
console.log('dl=' + dl)
