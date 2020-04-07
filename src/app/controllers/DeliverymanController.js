import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'E-mail already in use' });
    }

    const { id, avatar, name, email } = await Deliveryman.create(req.body);

    return res.json({ id, name, email, avatar });
  }

  async index(req, res) {
    const deliverymen = await Deliveryman.findAll();

    return res.json(deliverymen);
  }

  async show(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveriman does not exists' });
    }

    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar: Yup.number(),
    });

    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Failed' });
    }

    const { email } = req.body;

    if (email) {
      const emailInUse = await Deliveryman.findOne({ where: email });

      if (emailInUse) {
        return res.status(400).json({ error: 'email already in use' });
      }
    }

    await deliveryman.update(req.body);

    return res.json(deliveryman);
  }

  async delete(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    await deliveryman.destroy();

    return res.json({ message: 'Deleted sucessfully' });
  }
}

export default new DeliverymanController();
