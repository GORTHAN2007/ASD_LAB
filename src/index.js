const express = require("express");
const logger = require("./middleware/logger");
const userRouter = require("./routers/userRouter");

const app = express();
app.use(express.json());
app.use(logger);
app.use("/", userRouter);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
