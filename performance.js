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
  
  var result = page.evaluate(function() {
    var timing = window.performance.timing;

    var fetchStart = timing.fetchStart;

    var domContentLoadedEventStart = timing.domContentLoadedEventStart;

    var ttdr = domContentLoadedEventStart - fetchStart;

    var domContentLoadedEventEnd = timing.domContentLoadedEventEnd;

    var time_domready = domContentLoadedEventEnd - domContentLoadedEventStart;

    var loadEventStart = timing.loadEventStart;

    var ttpl = timing.loadEventStart - fetchStart;

    var loadEventEnd = timing.loadEventEnd;

    var time_onload = loadEventEnd - loadEventStart;

    // console.log("onload: " + time_onload);
    
    return timing.fetchStart;
   
    return JSON.stringify({
      ttdr: ttdr,
      time_domready: time_domready,
      ttpl: ttpl,
      time_onload: time_onload
    });
    
  });
  
  console.log(result);
  
  phantom.exit();
 
};