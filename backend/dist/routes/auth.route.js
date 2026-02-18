import express from "express";
import { db } from "../db/drizzle.js";
import { verifyUser } from "../middleware/auth.js";
import { users } from "../db/schema/users.js";
import { errorResponse, successResponse } from "../utils/apiResponse.js";
const authRouter = express.Router();
authRouter.get("/sync-user", verifyUser, async (req, res) => {
    try {
        const user = req.user;
        await db.insert(users)
            .values({
            id: user.id,
            email: user.email,
            avatarUrl: user.user_metadata.avatar_url,
            fullName: user.user_metadata.full_name
        })
            .onConflictDoNothing();
        successResponse(res, user);
    }
    catch (error) {
        console.error(error);
        errorResponse(res, "Can't sync user");
    }
});
authRouter.get("/", verifyUser, (req, res) => {
    successResponse(res, { done: "done" });
});
export default authRouter;
//# sourceMappingURL=auth.route.js.map