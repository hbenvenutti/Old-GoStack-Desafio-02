import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const recipients = await Recipient.findAll();

    return res.json(recipients);
  }

  async store(req, res) {
    const { id } = await Recipient.create(req.body);
    return res.json({ id });
  }
}

export default new RecipientController();
