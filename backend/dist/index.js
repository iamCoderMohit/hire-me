import express from "express";
import authRouter from "./routes/auth.route.js";
import cors from "cors";
const app = express();
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use("/api/v1/auth", authRouter);
export default app;
//# sourceMappingURL=index.js.map