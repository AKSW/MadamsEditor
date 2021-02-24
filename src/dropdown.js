/**
 * Simple vanilaJS dropdown solution
 *
 *  Source: https://codepen.io/vlastapolach/pen/EXdLMy
 *
 * HowTo:
 * <div class="dropdown">
 *  <button class="btn" type="button" id="drop1" data-toggle="dropdown">Menu</button>
 * </div>
 * <div class="dropdown-menu" aria-labelledby="drop1">
 *  <a class="dropdown-item" href="...">...</a>
 *  ...
 * </div>
 *
 */

var toClose = false

function toggle(e) {
    e.stopPropagation();
    var btn = this;

    var menu = btn.nextSibling;

    while (menu && menu.nodeType != 1) {
        menu = menu.nextSibling
    }
    if (!menu) return;
    if (menu.style.display !== 'block') {
        menu.style.display = 'block';
        if (toClose) toClose.style.display = "none";
        toClose = menu;
    } else {
        menu.style.display = 'none';
        toClose = false;
    }

};
function closeAll() {
    toClose.style.display = 'none';
    toClose = false;
};

window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-toggle="dropdown"]').forEach(function (btn) {
        btn.addEventListener("click", toggle, true);
    });
});

window.onclick = function (event) {
    if (toClose) {
        closeAll.call(event.target);
    }
};