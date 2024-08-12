var OS = 'Unknown';
var alerts=0
if (navigator.appVersion.indexOf('Win') != -1) OS = 'Windows';
if (navigator.appVersion.indexOf('Mac') != -1) OS = 'MacOS';
if (navigator.appVersion.indexOf('X11') != -1) OS = 'UNIX';
if (navigator.appVersion.indexOf('Linux') != -1) OS = 'Linux';
if (OS != 'Windows' && OS != 'MacOS'  && OS != 'Linux') {
    alerts=1
    }

console.log(OS);
console.log(alerts);

