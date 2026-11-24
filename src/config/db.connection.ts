import mongoose from "mongoose";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const DbConnection = async(uri:string) =>{
    try {
        await mongoose.connect(uri)
        console.log('Database connection successfull')
    } catch (error) {
        console.error(error)
    }
}


export default DbConnection