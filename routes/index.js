import express from "express";
import schoolsRouter from "./schools.routes.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/schools", schoolsRouter)

export default router;