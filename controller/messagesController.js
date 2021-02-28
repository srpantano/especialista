import { messagesModel } from '../models/messageModels.js';

class MessagesController {
  async show(req, res, next) {
    try {
      const message = await messagesModel.findOne({
        conversationId: req.params.id,
      });

      if (!message) {
        throw new Error('Id does not found');
      }

      return res.send(message);
    } catch (error) {
      return next(error);
    }
  }

  async showAll(req, res, next) {
    try {
      if (req.query) {
        const message = await messagesModel.find(req.query);

        return res.send(message);
      }

      const messages = await messagesModel.find({});
      return res.send(messages);
    } catch (error) {
      return next(error);
    }
  }

  async create(req, res, next) {
    try {
      let messageRecord = req.body;

      if (!messageRecord.from && !messageRecord.to) {
        throw new Error('From or to field must be filled!');
      }

      const message = new messagesModel(req.body);
      await message.save();
      return res.send(message);
    } catch (error) {
      return next(error);
    }
  }
}

export default new MessagesController();
