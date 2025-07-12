import mongoose from 'mongoose';

let isConnected = false;
export const dbMongo = async () =>{
  if(isConnected) return;
  try{
    const mongoURI = process.env.MONGO_URI as string;
    
    if(!mongoURI) console.log("invalid uri");
    await mongoose.connect(mongoURI,{
      dbName:"rewearchats",
    });
    isConnected = true;
    console.log('connected mongo db');
  }
  catch(error){
    console.log(error);
  }
}