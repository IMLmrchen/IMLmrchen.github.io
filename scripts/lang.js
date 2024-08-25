var lan = 0
function ci(className, innerHTML) {
  const classToChange = document.querySelectorAll(className)
  for (let i = 0; i < classToChange.length; i++) {
    toChange = classToChange[i]
    toChange.innerHTML = innerHTML
  }
}
setInterval(function () {

  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();

  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  if (lan == 0 || lan == 1) {
    document.getElementById('yyyy').innerHTML = year
    document.getElementById('mmmm').innerHTML = month
    document.getElementById('ssss').innerHTML = date
    document.getElementById('hh').innerHTML = hour
    document.getElementById('mm').innerHTML = minute
    document.getElementById('ss').innerHTML = second
  }
  else {
    switch (month) {
      case 1:
        document.getElementById('mmmm').innerHTML = "January"
        break
      case 2:
        document.getElementById('mmmm').innerHTML = "February"
        break
      case 3:
        document.getElementById('mmmm').innerHTML = "March"
        break
      case 4:
        document.getElementById('mmmm').innerHTML = "April"
        break
      case 5:
        document.getElementById('mmmm').innerHTML = "May"
        break
      case 6:
        document.getElementById('mmmm').innerHTML = "June"
        break
      case 7:
        document.getElementById('mmmm').innerHTML = "July"
        break
      case 8:
        document.getElementById('mmmm').innerHTML = "Augest"
        break
      case 9:
        document.getElementById('mmmm').innerHTML = "September"
        break
      case 10:
        document.getElementById('mmmm').innerHTML = "October"
        break
      case 11:
        document.getElementById('mmmm').innerHTML = "November"
        break
      case 12:
        document.getElementById('mmmm').innerHTML = "December"
        break

    }
    switch (date) {
      case 1:
        document.getElementById('ssss').innerHTML = "1st"
        break
      case 2:
        document.getElementById('ssss').innerHTML = "2nd"
        break
      case 3:
        document.getElementById('ssss').innerHTML = "3rd"
        break
      case 4:
        document.getElementById('ssss').innerHTML = "4th"
        break
      case 5:
        document.getElementById('ssss').innerHTML = "5th"
        break
      case 6:
        document.getElementById('ssss').innerHTML = "6th"
        break
      case 7:
        document.getElementById('ssss').innerHTML = "7th"
        break
      case 8:
        document.getElementById('ssss').innerHTML = "8th"
        break
      case 9:
        document.getElementById('ssss').innerHTML = "9th"
        break

      case 10:
        document.getElementById('ssss').innerHTML = "10th"
        break
      case 11:
        document.getElementById('ssss').innerHTML = "11st"
        break
      case 12:
        document.getElementById('ssss').innerHTML = "12nd"
        break
      case 13:
        document.getElementById('ssss').innerHTML = "13rd"
        break
      case 14:
        document.getElementById('ssss').innerHTML = "14th"
        break
      case 15:
        document.getElementById('ssss').innerHTML = "15th"
        break
      case 16:
        document.getElementById('ssss').innerHTML = "16th"
        break        
      case 17:
        document.getElementById('ssss').innerHTML = "17th"
        break
      case 18:
        document.getElementById('ssss').innerHTML = "18th"
        break
      case 19:
        document.getElementById('ssss').innerHTML = "19th"
        break
      case 20:
        document.getElementById('ssss').innerHTML = "20th"
        break
      case 21:
        document.getElementById('ssss').innerHTML = "21st"
        break
      case 22:
        document.getElementById('ssss').innerHTML = "22nd"
        break
      case 23:
        document.getElementById('ssss').innerHTML = "23rd"
        break
      case 24:
        document.getElementById('ssss').innerHTML = "24th"
        break
      case 25:
        document.getElementById('ssss').innerHTML = "25th"
        break

      case 26:
        document.getElementById('ssss').innerHTML = "26th"
        break
      case 27:
        document.getElementById('ssss').innerHTML = "27th"
        break
      case 28:
        document.getElementById('ssss').innerHTML = "28th"
        break
      case 29:
        document.getElementById('ssss').innerHTML = "29th"
        break
      case 30:
        document.getElementById('ssss').innerHTML = "30th"
        break
      case 31:
        document.getElementById('ssss').innerHTML = "31st"
        break
    }
    document.getElementById('hh').innerHTML = hour
    document.getElementById('mm').innerHTML = minute
    document.getElementById('ss').innerHTML = second    
    document.getElementById('yyyy').innerHTML = year
  }
})
//-------------------------------------------------------------------
function scn() {
  document.querySelector('html').lang = 'zh-cmn-Hans'
  ci('.-setcl', '<i class="bi bi-gear"></i>设置')
  ci('.-abtcl', '<i class="bi bi-info-square"></i>关于')
  ci('.-csmcl', '<i class="bi bi-box-arrow-up-right"></i>传送门')
  ci('.-langset', '<i class="bi bi-translate"></i>语种选择：')
  ci('.-maintitle', 'Mr.Chen官方网站-网站主页')
  ci('.-examimg', '示例图片')
  ci('.abttxt', '关于...')
  ci('.-memtitle', '回忆-我们的十一')
  ci('.-fltitle', 'Mr.Chen官方网站-函数助手')
  osct()
  lan = 0
}
function pcn() {
  document.querySelector('html').lang = 'zh-cmn-Hant'
  ci('.-setcl', '<i class="bi bi-gear"></i>設置')
  ci('.-abtcl', '<i class="bi bi-info-square"></i>關於')
  ci('.-csmcl', '<i class="bi bi-box-arrow-up-right"></i>傳送門')
  ci('.-langset', '<i class="bi bi-translate"></i>語種選擇：')
  ci('.-title', 'Mr.Chen官方網站-網站主頁')
  ci('.-examimg', '示例圖片')
  ci('.-fltitle', 'Mr.Chen官方網站-函數助手')
  opct()
  lan = 1
}
function en() {
  document.querySelector('html').lang = 'en'
  ci('.-setcl', '<i class="bi bi-gear"></i>Settings')
  ci('.-abtcl', '<i class="bi bi-info-square"></i>About')
  ci('.-csmcl', '<i class="bi bi-box-arrow-up-right"></i>Gateway')
  ci('.-langset', '<i class="bi bi-translate"></i> Language selection：')
  ci('.-title', "Mr.Chen's official website-Homepage")
  ci('.-examimg', 'Example Image')
  ci('.-fltitle', "Mr.Chen's official website-Function Helper")
  oet()
  lan = 2
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
