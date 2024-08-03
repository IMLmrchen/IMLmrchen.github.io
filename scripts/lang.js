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
  osct()
  $("input:radio[value=scn]").attr('checked','true');
}
function pcn() {
  document.querySelector('html').lang = 'zh-HT'
  ci('.-setcl', '<i class="bi bi-gear"></i>設置')
  ci('.-abtcl', '<i class="bi bi-info-square"></i>關於')
  ci('.-csmcl', '<i class="bi bi-box-arrow-up-right"></i>傳送門')
  ci('.-langset', '<i class="bi bi-translate"></i>語種選擇：')
  ci('.-title', 'Mr.Chen官方網站')
  ci('.-examimg', '示例圖片')
  opct()
  $("input:radio[value=pcn]").attr('checked','true');
}
function en() {
  document.querySelector('html').lang = 'en'
  ci('.-setcl', '<i class="bi bi-gear"></i>Settings')
  ci('.-abtcl', '<i class="bi bi-info-square"></i>About')
  ci('.-csmcl', '<i class="bi bi-box-arrow-up-right"></i>Gateway')
  ci('.-langset', '<i class="bi bi-translate"></i> Language selection：')
  ci('.-title', 'Mr.Chen official website')
  ci('.-examimg', 'Example Image')
  oet()
  $("input:radio[value=en]").attr('checked','true');
}

switch (Cookies.get('lang')) {
  case 'zh_CN':
    scn()
    break
  case 'en':
    en()
    break
  case 'zh-HT':
    pcn()
    break
  default:
    Cookies.set('lang', 'zh_CN')
    scn()
    break
}
$(document).ready(function () {
  $('input[type=radio][name=btnradio]').change(function () {
    if (this.value == 'scn') {
      Cookies.set('language', 'zh_CN', { expires: 30 })
      scn()
    }
    else if (this.value == 'en') {
      Cookies.set('language', 'en', { expires: 30 })
      en()
    }
    else {
      Cookies.set('language', 'zh-HT', { expires: 30 })
      pcn()
    }
  });
});
