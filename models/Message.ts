import mongoose,{ Schema,Document } from "mongoose";

export type MessageType = 'text' | 'voice' | 'image' | 'file'

export interface IMessage extends Document { 
    sender:string
    receiver:string
    content:string
    type:MessageType
    sender_text?:string
    receiver_text?:string
    attachmentName?:string
    fileType?:string
    fileSize?:number
    timestamp:Date
}

const MessageSchema = new Schema<IMessage>(
  {
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    type: {
      type: String,
      enum: ['text', 'voice', 'image', 'file'],
      default: 'text',
    },
    content: { type: String, required: true },
    sender_text: { type: String },
    receiver_text: { type: String },
    attachmentName: { type: String },
    fileType: { type: String },
    fileSize: { type: Number },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'messages',
  }
)

export default mongoose.models.Message ||
  mongoose.model<IMessage>('Message', MessageSchema)