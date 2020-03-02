import User from '../models/User';

class UserController {
  async index(req, res) {
    return res.json({ message: 'hello world' });
  }

  async store(req, res) {
    const { id, name, email, admin } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      admin,
    });
  }
}

export default new UserController();
