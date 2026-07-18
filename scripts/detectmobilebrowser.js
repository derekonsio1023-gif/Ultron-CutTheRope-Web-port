function detectmobilebrowser() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) || /windows phone/i.test(userAgent)) {
        return true;
    }
    
    return false;
}

if (detectmobilebrowser()) {
    document.body.classList.add('mobile');
}
