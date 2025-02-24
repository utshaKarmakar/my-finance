
export const getTransactions =async (req, res) => {
    try{
  const today=new Date();
  const _sevenDaysAgo=new Date(today);
  _sevenDaysAgo.setDate(today.getDate()-7);

  const sevenDaysAgo=_sevenDaysAgo.toISOString().split("T")[0];

const {df,dt,s}=req.query;
const {userId}=req.body.userId
const startDate =new Date(df || sevenDaysAgo )
const endDate =new Date(df || new Date() );





    } catch (error) {
    console.log(error);
    res.status(500).json({ status: "failed", message: error.message });
    }
    };



    
    export const getDashboardInformation = async (req, res) => {
    };
    try {
    } catch (error) {
    }
    console.log(error);
    res.status(500).json({ status: "failed", message: error.message });


    export const addTransaction = async (req, res) => {
    };
    try {
    } catch (error) {
    }
    console.log(error);
    res.status(500).json({ status: "failed", message: error.message });