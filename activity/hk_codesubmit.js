const puppeteer = require("puppeteer");
let {email,password} = require("../../secrets");
let globalTab;
let browserOpenPromise = puppeteer.launch({headless:false});
browserOpenPromise.then(function(browser)
{
   return browser.pages();
})
.then(function(pages)
{
    let tab = pages[0];
let loginPageOpenedPromise =  tab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
globalTab = tab;
return loginPageOpenedPromise;
})
.then(function()
{
   let emailTypedPromise = globalTab.type("#input-1",email,{delay : 200});
   return emailTypedPromise;
})
.then(function()
{
    let passwordTypedPromise = globalTab.type("#input-2",password,{delay : 200});
    return passwordTypedPromise;
})
.then(function(){
    let loginPageClicked = globalTab.click("button[data-analytics= 'LoginPassword']");
    return loginPageClicked;
})
.catch(function(err)
{
    console.log(err);
})