/* @flow */
/* eslint import/no-commonjs: 0 */

// eslint-disable-next-line no-console
console.log(
  "Loading Zoid module:",
  // eslint-disable-next-line no-process-env
  process.env.ZOID_FRAME_ONLY ? "zoid.frame" : "zoid"
);

// eslint-disable-next-line no-process-env
if (process && process.env && process.env.ZOID_FRAME_ONLY) {
  // $FlowFixMe
  module.exports = require("./dist/zoid.frame");
  // $FlowFixMe
  module.exports.default = module.exports;
} else {
  // $FlowFixMe
  module.exports = require("./dist/zoid");
  // $FlowFixMe
  module.exports.default = module.exports;
}
