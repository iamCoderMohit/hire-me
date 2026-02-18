export const successResponse = (res, data, msg = "Success", status = 200) => {
    return res.status(status).json({
        success: true,
        msg,
        data
    });
};
export const errorResponse = (res, msg = "Error", status = 500, code = "SERVER_ERROR") => {
    return res.status(status).json({
        success: false,
        msg,
        error: {
            code
        }
    });
};
//# sourceMappingURL=apiResponse.js.map