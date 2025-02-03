import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const hashPassword = async(userValue) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
}