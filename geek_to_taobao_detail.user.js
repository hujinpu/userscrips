// ==UserScript==
// @name         蘑菇街 美丽说 爱逛街 geek助手 made by @淘宝决尘
// @version		 0.0.1
// @author       hujinpu@gmail.com
// @namespace    http://hujinpu.com
// @description  在你逛蘑菇街、美丽说、爱逛街时，对于分享的商品，直接跳转到taobao.com的商品详情页
// @include      *://www.mogujie.com/note/*
// @include      *://www.meilishuo.com/share/*
// @include      *://love.taobao.com/guang/*
// @require	https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
    script.addEventListener('load', function () {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

function main() {
    var wl = window.location;
    var t = null;

    switch (wl.hostname) {
        case "www.mogujie.com":
            t = $('.qplus_link');
            if (t.length)
                wl.href = t.attr('href');
            break;
        case "www.meilishuo.com":
            t = $('div.code_pic > a');
            if (t.length)
                wl.href = t.attr('href');
            break;
        case "love.taobao.com":
            t = $('div.special > a');
            if (t.length)
                wl.href = t.attr('href');
            break;
    }
}

addJQuery(main);


