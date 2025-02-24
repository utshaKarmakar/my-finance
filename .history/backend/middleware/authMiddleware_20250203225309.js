import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req?.header?.au
}