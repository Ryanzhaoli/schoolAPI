import express from "express";
import router from "../routes/index.js";
import config from "../config/index.js";

const app = express();

app.use(express.json());
app.use('/api', router)


app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port || 5000, () =>
  console.log(`Server listening on port ${config.port}...`)
);