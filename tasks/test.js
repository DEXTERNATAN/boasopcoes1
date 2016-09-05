'use strict';

/**
 * Test tasks
 */

var gulp        = require('gulp');
var util        = require('gulp-util');
var chalk       = require('chalk');
var protractor  = require('gulp-protractor');

/**
 * Log. With options.
 *
 * @param {String} msg
 * @param {Object} options
 */
function log (msg, options) {
  options = options || {};
  console.log(
    (options.padding ? '\n' : '')
    + chalk.yellow(' > ' + msg)
    + (options.padding ? '\n' : '')
  );
}

exports.e2eUpdate = protractor.webdriver_update;

exports.e2eTests = function () {
  gulp.src('client/views/**/*.e2e.js')
    .pipe(protractor.protractor({ configFile: 'protractor.conf.js' }))
    .on('error', function (e) {
      util.log(e.message);
      process.exit(-1);
    })
    .on('end', function () { process.exit(0); });
};
