var radios = 0
import Cookies from 'js-cookie'
if ((Cookies.get('lang') == "") || (Cookies.get('lang') == null) || (Cookies.get('lang') == "undefined")) {
    Cookies.set('lang', 'zh-CN', { expires: 30 })
    radios = 0
    $("input:radio[value=scn]").attr('checked', 'true');
}
else {
    if ((Cookies.get('lang') == "zh-CN")) {
        Cookies.set('lang', 'zh-CN', { expires: 30 })
        radios = 0
        $("input:radio[value=scn]").attr('checked', 'true');
    }
    else {
        if (Cookies.get('lang') == "zh-HT") {
            Cookies.set('lang', 'zh-HT', { expires: 30 })
            radios = 1
            $("input:radio[value=pcn]").attr('checked', 'true');
        }
        else {
            if (Cookies.get('lang') == "en") {
                Cookies.set('lang', 'en', { expires: 30 })
                radios = 2
                $("input:radio[value=en]").attr('checked', 'true');
            }
        }
    }
}
if ($("input[name='btnradio']:checked").val() == "scn") {
    Cookies.set('lang', 'zh-CN', { expires: 30 })
    radios = 0
}
else {
    if ($("input[name='btnradio']:checked").val() == "pcn") {
        Cookies.set('lang', 'zh-HT', { expires: 30 })
        radios = 1
    }
    else {
        if ($("input[name='btnradio']:checked").val() == "en") {
            Cookies.set('lang', 'en', { expires: 30 })
            radios = 2
        }
    }
}
if (Cookies.get('lang') == "zh-CN") {
    scn()
}
else {
    if (Cookies.get('lang') == "zh-HT") {
        pcn()
    }
    else {
        if (Cookies.get('lang') == "en") {
            en()
        }
    }
}
