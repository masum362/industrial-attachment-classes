import bcrypt from "bcryptjs";
import dotenv from 'dotenv'

dotenv.config();

async function hashPassword (password:string){
    return await bcrypt.hash(password, Number.parseInt(process.env.SALT_ROUND ?? "10", 10));
}
async function comparePassword (password:string,hashedPassword:string){
    return await bcrypt.compare(password, hashedPassword);
}



export {hashPassword,comparePassword}