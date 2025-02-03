import {pool} from "../libs/database.js";

export const signupUser = async(req,res) => {
    try{
        const {firstName, email, password} = req.body;

        if(!(firstName || email || password)){
            return res.status(404).json({
                status: "failed",
                message: "Provide Required Fields!",
            });
        }

        const userExist = await pool.query({
            text: "SELECT EXISTS (SELECT * FROM tbluser WHERE email = $1)",
            values: [email],
        })

        if(userExist.rows[0].userExist){
            return res.statua(409).json({
                status: "failed",
                message: "Email"
            })
        }

    }catch(error){
        console.log(error);
        res.status(500).json({
            status: "failed",
            message: error.message,
        })
    }
};

export const signinUser = async(req,res) => {
    try{

    }catch(error){
        console.log(error);
        res.status(500).json({
            status: "failed",
            message: error.message,
        })
    }
};