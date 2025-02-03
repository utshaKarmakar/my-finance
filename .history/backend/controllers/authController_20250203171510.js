export const signupUser = async(req,res) => {
    try{
        const {firstName, email, password} = req.body;

        if(!(firstName,email,password)){
            return res.status(404).json({
                status: "failed",
                message: "Provide Required Fi",
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