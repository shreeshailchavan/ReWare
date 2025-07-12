import { dbMongo } from "@/lib/dbMongo";
import Message from "@/models/Message";

export const sendMessage = async (data:any) =>{
    await dbMongo();
    const newMessage = Message.create(data);
    return newMessage;

}

export const getMessages = async (sender:string,receiver:string) =>{
    await dbMongo();
    return Message.find({
        $or:[
            {sender,receiver},
            {sender:sender,receiver:receiver}
        ]
    }).sort({timestamp:1})
}