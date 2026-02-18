import "./config/env.js"
import app from "./index.js";

const PORT = process.env.APP_PORT || 3000
app.listen(PORT, () => {
    console.log("app is listening on port", PORT)
})