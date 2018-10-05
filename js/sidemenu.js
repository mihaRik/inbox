function selectElement(selector) {
    let elem = document.querySelector(selector);
    return elem;
}

function eventHandler(selector, eventName, callback) {
    selectElement(selector).addEventListener(eventName, callback)
    return selectElement(selector);
}
let open = true
function openSideMenu() {
    if (open) {
        selectElement("#sidemenu").style.left = "-15%";
        open = false;
    } else {
        selectElement("#sidemenu").style.left = "0%";
        open = true;
    }
}

eventHandler("#menuBar", "click", openSideMenu)