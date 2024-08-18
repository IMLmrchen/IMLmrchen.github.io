function ci(className, innerHTML) {
  const classToChange = document.querySelectorAll(className)
  for (let i = 0; i < classToChange.length; i++) {
    toChange = classToChange[i]
    toChange.innerHTML = innerHTML
  }
}


function scn() {
  document.querySelector('html').lang = 'zh-CN'
  ci('.-setcl', '<i class="bi bi-gear"></i>设置')
  ci('.-abtcl', '<i class="bi bi-info-square"></i>关于')
  ci('.-csmcl', '<i class="bi bi-box-arrow-up-right"></i>传送门')
  ci('.-langset', '<i class="bi bi-translate"></i>语种选择：')
  ci('.-title', 'Mr.Chen官方网站')
  ci('.-examimg', '示例图片')
  ci('.abttxt', '关于...')
  ci('.-memtitle', '回忆-我们的十一')
  ci('.themeauto', '是否启用本网站的颜色自动适配功能（跟随系统主题色）？<a href="open.html" class="alert-link">启用</a>')
  osct()
}
function pcn() {
  document.querySelector('html').lang = 'zh-HT'
  ci('.-setcl', '<i class="bi bi-gear"></i>設置')
  ci('.-abtcl', '<i class="bi bi-info-square"></i>關於')
  ci('.-csmcl', '<i class="bi bi-box-arrow-up-right"></i>傳送門')
  ci('.-langset', '<i class="bi bi-translate"></i>語種選擇：')
  ci('.-title', 'Mr.Chen官方網站')
  ci('.-examimg', '示例圖片')
  ci('.themeauto', '是否啟用本網站的顏色自動適配功能（跟隨系統主題色）？<a href="open.html" class="alert-link">啟用</a>')
  opct()

}
function en() {
  document.querySelector('html').lang = 'en'
  ci('.-setcl', '<i class="bi bi-gear"></i>Settings')
  ci('.-abtcl', '<i class="bi bi-info-square"></i>About')
  ci('.-csmcl', '<i class="bi bi-box-arrow-up-right"></i>Gateway')
  ci('.-langset', '<i class="bi bi-translate"></i> Language selection：')
  ci('.-title', 'Mr.Chen official website')
  ci('.-examimg', 'Example Image')
  ci('.themeauto', 'Do you want to enable the automatic color adaptation feature of this website (following the system theme color)?<a href="open.html" class="alert-link">Enable</a>')
  oet()

}


switch (Cookies.get('lang')) {
  case 'zh_CN':
    scn()
    $("input[name='btnradio'][value='scn']").attr("checked", true);

    break
  case 'en':
    en()
    $("input[name='btnradio'][value='en']").attr("checked", true);

    break
  case 'zh-HT':
    pcn()
    $("input[name='btnradio'][value='pcn']").attr("checked", true);

    break
  default:
    Cookies.set('lang', 'zh_CN', { expires: 365 })
    scn()
    break
}
$(document).ready(function () {
  $('input[type=radio][name=btnradio]').change(function () {
    if (this.value == 'scn') {
      Cookies.set('lang', 'zh_CN', { expires: 365 })
      scn()

    }
    else if (this.value == 'en') {
      Cookies.set('lang', 'en', { expires: 365 })
      en()


    }
    else {
      Cookies.set('lang', 'zh-HT', { expires: 365 })
      pcn()


    }
  });
});
