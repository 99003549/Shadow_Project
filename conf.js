var config = require("config");
//const { ProtractorScreenshotExtension } = require('protractor-screenshot-extension');
//const protractorImageComparison = require('protractor-image-comparison');
//const { join } = require('path');
exports.config = {directConnect: true,
  getPageTimeout: 60000,
  // allScriptsTimeout: 60000,
  framework: 'custom', // set to "custom" instead of cucumber.
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect:true,
 // plugins: [
    //{
        // The module name
        //inline: require('protractor-image-comparison'),
        // Some options, see the docs for more
        //options: {
            //baselineFolder: join(process.cwd(), './baseline/'),
            //formatImageName: `{tag}-{logName}-{width}x{height}`,
            //screenshotPath: join(process.cwd(), './images/'),
            //savePerInstance: true,
            //autoSaveBaseline: true,
				    //blockOutToolBar: true,
			      //clearRuntimeFolder: true,
            // ... more options
       // },
   // },
//],
  
  //framework: 'custom',
  //frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: 'chrome',
    //restartBrowserBetweenTests: true,
    chromeOptions: {
      //'excludeSwitches': ['enable-automation'],
    args: [
           '--disable-infobars',
           '--disable-web-security',
           '--disable-extensions',
           '--incognito'
        ]
    }
  },
  ignoreUncaughtExpection:"true",
  specs: [
     'features/*.feature'
  ],
  cucumberOpts: {
    require: 'features/steps/*.js',
    tags: false,
    format: `json:${config.get("report.dir") + config.get("report.results")}`,
    strict: true
  },
  

  onPrepare: function() {  
    browser.waitForAngularEnabled(true)
    browser.driver.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);   
  }
}