const { element, browser } = require("protractor");

var chai =require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
const genericFunctions = require('../features/steps/GenericFunctions.js')
  var menu = function()
  {
      this.sideMenuOption = element(by.xpath('//*[@data-name="menu"]'))
      this.getSideMenuOption = function()
    {
        return this.sideMenuOption;
    }
    };
module.exports = new menu();