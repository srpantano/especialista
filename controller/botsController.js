import { botsModel } from '../models/botModels.js';

class BotsController {
  async show(req, res, next) {
    try {
      const bot = await botsModel.findById({ _id: req.params.id });

      if (!bot) {
        throw new Error('Id does not found');
      }

      return res.send(bot);
    } catch (error) {
      return next(error);
    }
  }

  async showAll(req, res, next) {
    try {
      const bots = await botsModel.find({});
      return res.send(bots);
    } catch (error) {
      return next(error);
    }
  }

  async create(req, res, next) {
    try {
      const bot = new botsModel(req.body);
      await bot.save();
      return res.send(bot);
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    try {
      const bot = await botsModel.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

      if (!bot) {
        throw new Error('Id does not found');
      }

      return res.send(bot);
    } catch (error) {
      return next(error);
    }
  }

  async replace(req, res, next) {
    try {
      const bot = await botsModel.replaceOne({ _id: req.params.id }, req.body, {
        upsert: true,
      });

      if (!bot) {
        throw new Error('Id does not found');
      }

      return res.send(bot);
    } catch (error) {
      return next(error);
    }
  }

  async destroy(req, res, next) {
    try {
      const bot = await botsModel.findByIdAndDelete({ _id: req.params.id });

      if (!bot) {
        throw new Error('Id does not found');
      }

      return res.send(bot);
    } catch (error) {
      return next(error);
    }
  }
}

export default new BotsController();
