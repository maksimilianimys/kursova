// const isUbuntu = navigator.platform.toLowerCase().indexOf('linux') !== -1;
//
// if (isUbuntu) {
//     document.documentElement.style.setProperty('--angel-font', '"Angel wish"');
// } else {
//     document.documentElement.style.setProperty('--angel-font', '"Angel rhapsody"');
// }


// const isAndroid = /Android/i.test(navigator.userAgent);
//
// if (isAndroid) {
//     document.documentElement.style.setProperty('--angel-font', '"Angel wish"');
// } else {
//     document.documentElement.style.setProperty('--angel-font', '"Angel rhapsody"');
// }

const isWindows = /Windows/i.test(navigator.userAgent);

if (isWindows) {
    document.documentElement.style.setProperty('--angel-font', '"Angel wish"');
} else {
    document.documentElement.style.setProperty('--angel-font', '"Angel rhapsody"');
}
