import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const hashPassword = async(userPassword) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(userPassword, salt);
    console.log("Hashed Password:", hashedPassword);

    return hashPassword;
}

export const comparePassword = async(userPassword, password)=>{
    try {
        const isMatch = await bcrypt.compare(userPassword, password);
        return isMatch;

    } catch (error) {
        console.log(error);
    }
}


export const createJWT = (id)=>{
    return JWT.sign({
        userId
    })
}