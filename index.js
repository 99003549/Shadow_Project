var reporter =require("cucumber-html-reporter");
var shell =require("shelljs");
var os= require("os");
var config =require("config");
/**
 * Options for the HTML reports
 * 
 */
 var Options ={
        theme: "bootstrap",
        jsonFile: config.get("report.dir")+ config.get("report.results"),
        output: `${config.get("report.dir")}/cucumber_report${(new Date).getTime()}.html`,
        reportSuiteAsScenarios: true,
        launchReport:true,
        metadata:{
            "App Version" :"1.0.0",
            "Browser" : "Chrome",
            "Platform" : "Windows 10",
            "Parallel" : "Scenarios",
            "Executed" : "Remote"
        }
 };
 /**
  * Run Protractor & Generate HTML Report
  */
async function runProtractor (){
    await shell.exec("npm run protractor");//Run as a child process
    await reporter.generate(Options);//Generates the Report after protractor runs
}
runProtractor();