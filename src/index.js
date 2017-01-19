import AWS from 'aws-sdk';

const lambda = region => new AWS.Lambda({
  apiVersion: '2015-03-31',
  endpoint: `https://lambda.${region}.amazonaws.com/`,
  region,
});

class AutoPrune {
  constructor(serverless, options) {
    this.options = options;
    this.serverless = serverless;

    this.commands = {
      autoprune: {
        usage: 'Remove old lambda versions',
        lifecycleEvents: [
          'run'
        ],
      },
    };
    this.hooks = {
      'autoprune:run': this.autoPrune.bind(this)
    }
  }

  async autoPrune() {
    const stage = this.options.stage || this.serverless.variables.service.defaults.stage;
    const functionsNames = Object.keys(this.serverless.service.functions).map(fn => this.serverless.service.functions[fn].name);
  }
}

module.exports = AutoPrune;
