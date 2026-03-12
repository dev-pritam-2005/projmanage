import { ApiResponse } from "../utils/api-response.js";

const healthCheck = (req, res) => {
    try {
        return res.status(200).json(
            new ApiResponse(200, { message: "server is running" }, "Health check success")
        );
    } catch (error) {
        console.log(error);
    }
};

export default healthCheck;

