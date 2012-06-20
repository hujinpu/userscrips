// ==UserScript==
// @name         jing.fm助手 by Jinpu Hu
// @version		 0.0.1
// @author       hujinpu@gmail.com
// @namespace    http://hujinpu.com
// @description  原来的字体太“小清新了”，本人看不清
// @include      *://jing.fm/*
// @include      *://*.jing.fm/*
// ==/UserScript==

function _hjp_appendStyle(styles) {
  var css = document.createElement('style');
  css.type = 'text/css';

  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName("head")[0].appendChild(css);
}

var _hjp_styles = ".sans,input,textarea,body { font-family: 'Helvetica Neue', 'Hiragino Sans GB', Helvetica, Arial, sans-serif;}";
_hjp_styles += ' .prgrsCtn .prgrs {height: 10px; color: red; } ';

window.onload = _hjp_appendStyle(_hjp_styles);