// ==UserScript==
// @name         jing.fm助手 by Jinpu Hu
// @version		 0.0.1
// @author       hujinpu@gmail.com
// @namespace    http://hujinpu.com
// @description  原来的字体太“小清新了”，本人看不清
// @include      *://jing.fm/*
// @include      *://*.jing.fm/*
// ==/UserScript==


$(function() {
  $('head').append('<link rel="stylesheet" href="https://github.com/hujinpu/userscrips/raw/master/jingfm.min.css" type="text/css" />');
});