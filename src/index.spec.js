var testsContext = require.context("./app", true, /.spec.ts/);
testsContext.keys().forEach(testsContext);

var testsContext = require.context("./", false, /index\.ts/);
testsContext.keys().forEach(testsContext);