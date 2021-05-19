const puppeteer = require("puppeteer");
let browserOpenPromise = puppeteer.launch({
    headless : false
});
browserOpenPromise.then(function(browser)
{
    console.log("browser is opened");
  return browser.pages();
})
.then( function(pages)
{
    let tab = pages[0];
    tab.goto("https://www.google.com/");
})
.then(function(){
    console.log("google homepage is opened");
})