import app from "./app.js";
import { PORT } from "./config.js";

// start server
app.listen(PORT, () =>
  console.log(`The server is running on http://localhost:${PORT}`)
);
