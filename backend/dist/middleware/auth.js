import { createClient } from "@supabase/supabase-js";
import { errorResponse } from "../utils/apiResponse.js";
export const verifyUser = async (req, res, next) => {
    const supabaseAdmin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
        return errorResponse(res, "No token");
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error)
        return errorResponse(res, "Invalid token");
    req.user = data.user;
    next();
};
//# sourceMappingURL=auth.js.map