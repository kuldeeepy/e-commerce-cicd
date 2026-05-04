import express from "express";
import profileRouter from "./routes/profileRoute.js";
import orderRouter from "./routes/orderRoutes.js";
import paymentRouter from "./routes/paymentRoute.js";

const app = express();

app.use(express.json());

app.use("/v1/api", profileRouter);
app.use("/v1/api", orderRouter);
app.use("/v1/api", paymentRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Everything is good, API is running." });
});

app.listen(8080, () => console.log("Server listening on PORT:8080"));

export { app };
