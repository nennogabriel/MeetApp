import { parseISO, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';
import Subscription from '../models/Subscription';

class DashboardController {
  async show(req, res) {
    try {
      const where = { user_id: req.userId };
      const page = req.query.page || 1;
      const perPage = 10;

      if (req.query.date) {
        const searchDate = parseISO(req.query.date);

        where.date = {
          [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
        };
      }
      console.log({
        where,
        include: [
          { model: User, attributes: ['name', 'email'] },
          { model: File, attributes: ['name', 'path', 'url'] },
          { model: Subscription, where: { user_id: req.userId } },
        ],
        limit: perPage,
        offset: perPage * page - perPage,
      });

      const meetups = await Meetup.findAll({
        where,
        include: [
          { model: User, attributes: ['name', 'email'] },
          { model: File, attributes: ['name', 'path', 'url'] },
          { model: Subscription, where: { user_id: req.userId } },
        ],
        limit: perPage,
        offset: perPage * page - perPage,
      });
      return res.json(meetups);
    } catch (err) {
      console.log(err);
    }
    return this;
  }
}

export default new DashboardController();
