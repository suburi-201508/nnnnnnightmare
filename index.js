var Nightmare = require('nightmare');

var 
  URL = 'http://majikichi.com/',
  VIEWPORT_W = 375,
  VIEWPORT_H = 667,
  UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4',
  QUERY_SELECTOR = '#article-1_5',
  nightmare = new Nightmare();

nightmare
  .useragent(UA)
  .viewport(VIEWPORT_W, VIEWPORT_H)
  .goto(URL)
  .wait(2000)
  .evaluate(function(cssSelectorString) {
      width = document.querySelector(cssSelectorString).clientWidth;
      height = document.querySelector(cssSelectorString).clientHeight;
      rect = document.querySelector(cssSelectorString).getBoundingClientRect();

      result = {
        width: width,
        height: height,
        xPosition: rect.left,
        yPosition: rect.top
      };
      return result;
    }, function(result) {
      console.log(result);
    }, QUERY_SELECTOR
  )
  //.screenshot('./hoge.png')
  .run();
