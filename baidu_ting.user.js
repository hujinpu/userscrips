// ==UserScript==
// @name         百度ting助手 by Jinpu Hu
// @version		   0.0.1
// @author       hujinpu@gmail.com
// @namespace    http://hujinpu.com
// @description  获取当前list页面的歌曲信息
// @include      *://ting.baidu.com/*
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
  jQuery.noConflict();
  window.getLists = function() {
    var $lists = jQuery('.charts-list li');
    $lists.map(function() {
      var author = $('.singer .author_list > a', this)[0].innerText;
      var song = $('.song > a', this).text();
      console.log(song + "     " + author);
    });
  };
}

addJQuery(main);
