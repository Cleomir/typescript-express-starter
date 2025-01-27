import express, { Express } from "express";

import router from "./controllers";

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
