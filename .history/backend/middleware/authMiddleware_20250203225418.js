import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req?.header?.authorization;

    if(!authHeader || !authHeader?.startsWith("Bearer")){
        return res
            .status(401)
    }
}