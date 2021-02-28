import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

var id = uuid();

//Conexão com a base de dados MongoDB
(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/bots', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (err) {
    console.error('Connection error to MongoDB Bots');
  }
})();

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//Modelo Bots
const BotsSchema = new Schema({
  id: ObjectId,
  name: { type: String, require: true },
});

//Modelo Messages
const MessagesSchema = new Schema({
  id: ObjectId,
  conversationId: { type: String, default: uuid() },
  timestamp: { type: Date, default: Date.now },
  from: { type: String, default: uuid() },
  to: { type: String, default: uuid() },
  text: String,
});

mongoose.model('bots', BotsSchema);
mongoose.model('messages', MessagesSchema);

const bot = mongoose.model('bots');
const message = mongoose.model('messages');

new message({ text: 'Oi! Como posso te ajudar?' })
  .save()
  .then(() => console.log('Message inserted'))
  .catch((err) => console.log(err.message));
//mongoose.connection.close();
