//Modelo Message
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessageSchema = mongoose.Schema(
  {
    conversationId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    from: String,
    to: String,
    text: String,
  },
  { versionKey: false }
);

const messagesModel = mongoose.model('messages', MessageSchema);

export { messagesModel };
