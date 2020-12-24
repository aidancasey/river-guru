const config = {
  env: "dev",
  port: 3000,
  mongooseDebug: true,
  mongo: {
    host: "mongodb://localhost/",
    port: 27017
  }
};

module.exports = config;