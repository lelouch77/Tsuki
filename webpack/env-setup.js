const devEnv = require("../env/dev.env.json");
const prodEnv = require("../env/prod.env.json");
const getEnvironmentVariable = () => {
  let envVariable = process.env.production ? prodEnv : devEnv;
  Object.keys(envVariable).forEach(key => {
    const value = envVariable[key];
    if (typeof value === "string" || typeof value === "object") {
      envVariable[key] = JSON.stringify(value);
    }
  });
  return envVariable;
};

module.exports = getEnvironmentVariable;
