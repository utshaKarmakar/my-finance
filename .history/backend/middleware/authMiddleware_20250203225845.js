import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req?.header?.authorization;

    if(!authHeader || !authHeader?.startsWith("Bearer")){
        return res
            .status(401)
            .json({
                status: "auth_failed",
                message: "Authentication==failed",
            });
    }

    const token = authHeader?.split(" ")[1];

    try {
        
    } catch (error) {
        console.log(error);
        return res
            .status(401)
            .json({
                status: "auth_failed",
                message: "Authentication"
            })
    }
}