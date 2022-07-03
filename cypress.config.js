module.exports = {
  defaultCommandTimeout: 20000,
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = process.env.CYPRESS_BASE_URL ?? "http://localhost:8788/";
      return config;
    },
    supportFile: false,
  },
};
