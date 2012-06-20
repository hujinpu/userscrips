var system = require('system');

if (phantom.args.length !== 1) {
  console.log('Try to pass some args when invoking this script!');
  phantom.exit();
} else {
  var url = phantom.args[0];
  
}

var page = require('webpage').create();

page.viewportSize = { width: 1440, height: 900 };

page.open(url);

page.onLoadFinished = function() {
  
  page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", function() {
    var txt = page.evaluate(function () {
      
      var cheat = [];
      
      jQuery.noConflict();
      
      var $tb_shopinfo = jQuery('.tb-report-menu');
      var offset = $tb_shopinfo.offset();
      var width = $tb_shopinfo.width();
      var height = $tb_shopinfo.height();
      
      console.log(offset['left'] + " " + offset['top']);
      console.log(width);
      
      
      jQuery('*').each(function(index, element) {
        var _$element = jQuery(element);
        if (_$element.css('position') != 'static') {
          var t_offset = _$element.offset();
          var t_width = _$element.width();
          var t_height = _$element.height();
          if ((t_offset['left'] >= offset['left'] && 
              t_offset['left'] <= (offset['left'] + width) && 
              t_offset['top'] >= offset['top'] && t_offset['top'] <= (offset['top'] + height)) ||
              ((t_offset['left'] + t_width) >= offset['left'] && 
              (t_offset['left'] + t_width) <= (offset['left'] + width) && 
              (t_offset['top'] + t_height) >= offset['top'] && (t_offset['top'] + t_height) <= (offset['top'] + height))
            ) {
            var hack = true;
            _$element.parents().each(function() {
              if (this === $tb_shopinfo[0]) {
                hack = false;
              }
            });
            
            if (hack) {
              // console.log(_$element.html());
              cheat.push("作弊代码: " + _$element.html());
            }
          }
        }
      });
      if (cheat) {
        return cheat;
      } else {
        return "没有作弊，良好的页面。"
      }
      
    });
    
    console.log(txt);
  
    phantom.exit();
    
  });
};