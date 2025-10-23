const loadEnv = () => {
  const requiredEnvs = ["PORT", "GEMINI_API_KEY"];

  requiredEnvs.forEach((item) => {
    if (!process.env[item]) {
      throw new Error(`${item} is required`);
    }
  });

  return {
    PORT: process.env.PORT,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  };
};

const envVars = loadEnv();

export { envVars };
