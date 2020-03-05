import User from '../models/User';

export default async (req, res, next) => {
  const user = await User.findByPk(req.userId);

  if (!user.admin) {
    return res.status(400).json({ error: 'You are not Admnistrator' });
  }

  return res.json({ message: 'cheguei' });
};
