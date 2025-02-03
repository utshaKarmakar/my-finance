import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const hashPassword = async(userPassword) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(userPassword, salt);
    console.log("Hashed Password:", hashedPassword);

    return hashPassword;
}

exportconst 