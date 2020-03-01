class UserController {
  async index(req, res) {
    return res.json({ message: 'hello world' });
  }
}

export default new UserController();
