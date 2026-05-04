import express from "express";
import profileRouter from "./routes/profileRoute.js";
import orderRouter from "./routes/orderRoutes.js";
import paymentRouter from "./routes/paymentRoute.js";

const app = express();

app.use(express.json());

app.use("/v2/api", profileRouter);
app.use("/v2/api", orderRouter);
app.use("/v2/api", paymentRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Everything is good, API is running with deploy v2." });
});

export { app };
