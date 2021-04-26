const { element, browser } = require("protractor");

var chai =require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var buttons = function()
  {
    this.iot_dashboard = element(by.xpath("//*[text()='IoT Dashboard']"))
    this.temp = element(by.xpath("//*[contains(@stroke-width,'3')]"))
    this.vtemp = element(by.xpath("//div[@class='value temperature h1']"))
    this.humidity = element(by.xpath("//span[text()='Humidity']"))
    this.vhumidity = element(by.xpath("//div[@class='value humidity h1']"))
    this.humbutton = element(by.xpath("//*[@cx='269.04932172627537']"))
    //this.light = element(by.xpath("//*[@class='status paragraph-2']"))
    this.light = element(by.xpath("//div[1]/ngx-status-card/nb-card/div[2]/div[2]"))
    //this.light = element(by.xpath("//*[@class='col-xxxl-3 col-md-6 ng-star-inserted']//div//div[@class='icon status-primary']"))
    //this.lightoff = element(by.className('mat-ripple off'))
    this.roller = element(by.xpath("//div[2]/ngx-status-card/nb-card/div[2]/div[2]"))
    this.clickroller =function()
    {
        return this.roller;
    }
    this.verifyroller=function()
    {
        return this.roller.getText();
    }
    this.iot_dash = function()
    {
        return this.iot_dashboard;
    }
    this.clickTemp = function()
    {
        browser.sleep(2000)
        browser.actions()
      .mouseDown(this.temp)
      .mouseMove({x:17 , y: 56}).perform()
      browser.sleep(5000)
    }
    this.verifyTemp = function()
    {
        return this.vtemp.getText()
    }
    this.clickHumidity = function()
    {
        return this.humidity;
    }
    this.changeHumdidity = function()
    {        
        browser.actions().
        mouseDown(this.humbutton).
        mouseMove({x: 24, y: 24}).
        mouseUp().
        perform();
    }
    this.verifyHumidity = function()
    {
        return this.vhumidity.getText()
    }
    this.clickLight = function()
    {
        return this.light;
    }
    this.verifyLight = function()
    {
       return this.light.getText()
    }
    

};
module.exports = new buttons();