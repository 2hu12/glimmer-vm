'use strict';

let isCI = !!process.env.CI;

let config = {
  "framework": "qunit",
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launchers": {
    "Node": {
      "exe": "node", args: ["./bin/run-node-tests.js"],
      "protocol": "tap"
     }
  },
  "browser_args": {
    "Chrome": {
      "mode": "ci",
      "args": [
        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=9222'
      ]
    }
  },
  "launch_in_dev": [
    "Chrome",
    "Node"
  ],
  "launch_in_ci": [
    "Chrome",
    "Node"
  ]
};

if (isCI) {
  config.tap_quiet_logs = true;
}

module.exports = config;
