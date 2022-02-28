let HtmlReporter = require('protractor-beautiful-reporter');
let today = new Date(),
  timeStamp = today.getMonth() + 1 + '-'
    + today.getDate() + '-' + today.getFullYear()
    + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';

exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },
  onPrepare: () => {
    // browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();


    //Protractor Beautiful report
    let reporter = new HtmlReporter({
      baseDirectory: 'tmp/screeshots'
    });
    // jasmine.getEnv().addReporter(new HtmlReporter({
    //   baseDirectory: 'tmp/screenshots'
    // }).getJasmine2Reporter());

    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: '../Reports/Results' + timeStamp,
      excludeSkippedSpecs: true,
      docName: 'report -' + timeStamp + '.html',
      gatherBrowserLogs: true,
      preserveDirectory: false, // true to override previous reports and false to keep the report updating.
      docTitle: 'Test Reports',
      takeScreenShotsOnlyForFailedSpecs: false,
      clientDefaults: {
        showTotalDurationIn: "footer",
        totalDurationFormat: "h:m:s"
      }
    }).getJasmine2Reporter());
  },


  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  specs: ['../test/*.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,

  }
};
