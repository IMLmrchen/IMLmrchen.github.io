

function ci(className, innerHTML) {
    const classToChange = document.querySelectorAll(className)
    for (let i = 0; i < classToChange.length; i++) {
      toChange = classToChange[i]
      toChange.innerHTML = innerHTML
    }
  }
  

function scn(){
    document.querySelector('html').lang='zh-CN'
    ci('.-setcl', '<i class="bi bi-gear"></i>设置')
    ci('.-abtcl', '<i class="bi bi-info-square"></i>关于')
    ci('.-csmcl', '<i class="bi bi-box-arrow-up-right"></i>传送门')
    ci('.-langset', '<i class="bi bi-translate"></i>语种选择：')
    ci('.-title', 'Mr.Chen官方网站')    
    ci('.-examimg', '示例图片')
}
function pcn(){
    document.querySelector('html').lang='zh-CN'
    ci('.-setcl', '<i class="bi bi-gear"></i>設置')
    ci('.-abtcl', '<i class="bi bi-info-square"></i>關於')
    ci('.-csmcl', '<i class="bi bi-box-arrow-up-right"></i>傳送門')
    ci('.-langset', '<i class="bi bi-translate"></i>語種選擇：')
    ci('.-title', 'Mr.Chen官方網站')
    ci('.-examimg', '示例圖片')
}
function en(){
    document.querySelector('html').lang='en'
    ci('.-setcl', '<i class="bi bi-gear"></i>Settings')
    ci('.-abtcl', '<i class="bi bi-info-square"></i>About')
    ci('.-csmcl', '<i class="bi bi-box-arrow-up-right"></i>Gateway')
    ci('.-langset', '<i class="bi bi-translate"></i>Language selection：')
    ci('.-title', 'Mr.chen official website')    
    ci('.-examimg', 'Example Image')
}


//

