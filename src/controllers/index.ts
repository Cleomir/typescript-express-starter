import { Router } from "express";

import { sayHello } from "../services";

const router = Router();

router.get("/", async (req, res) => {
  const result = await sayHello();

  res.json({ message: result });
});

export default router;
