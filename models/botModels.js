//Modelo Bots
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BotsSchema = mongoose.Schema(
  {
    id: ObjectId,
    name: { type: String, unique: true, require: true },
  },
  { versionKey: false }
);

const botsModel = mongoose.model('bots', BotsSchema);

export { botsModel };
