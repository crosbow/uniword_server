import "dotenv/config";
import { app } from "./app.js";
import { envVars } from "./config/env.js";

const port = envVars.PORT || 8000;
app.listen(port, () => {
  console.log(`SERVER RUNNING!! PORT: ${port}`);
});
