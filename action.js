// Require adapter
const run = require('probot-actions-adapter');

// Require probot app
const app = require('./index');

// Adapt the probot app
run(app);
