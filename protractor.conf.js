'use strict';

exports.config = {

  directConnect: true,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome',
    //'browserName': 'firefox',
    'chromeOptions': {
      args: ['disable-infobars'],
      //args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    }
  },
  baseUrl :"https://www.submarino.com.br/",
  specs: [
   'features/*.feature'
 ],
  cucumberOpts: {  
    require: 'steps/*.step.js',
    tags: false,
    format: ['json:results.json', 'pretty'],
    profile: false,
    'no-source': true,
  },

  onPrepare: function() {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
  },

  afterLaunch: function() {
    var reporter = require('cucumber-html-reporter');

    var options = {
          theme: 'bootstrap',
          jsonFile: 'results.json',
          output: 'cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true
      };

      reporter.generate(options);
  },
}
