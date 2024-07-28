const userService = require('../services/usuarioService.js');

module.exports = class userController {
  static createUser = async (req, res) => {
    try {
      const newUser = await userService.createUser(req.body);
      return res.status(201).json({ status: 201, message: 'Usuário criado.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static login = async (req, res) => {
    try {
      const { email, senha } = req.body;
      const user = await userService.loginUser(email, senha);
      return res
        .status(200)
        .json({ id: user.id, acess_token: user.acess_token });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findAllUsers = async (req, res) => {
    try {
      const users = await userService.findAllUsers();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findUserByEmail = async (req, res) => {
    try {
      const user = await userService.findUserByEmail(req.params.email);
      if (!user) {
        throw new NotFound('Usuário não encontrado.');
      }
      return res.status(200).json(user);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static deleteUser = async (req, res) => {
    try {
      await userService.deleteUser(req.body.email);
      return res.status(200).json({ message: 'Usuário deletado.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static atualizaDadosUser = async (req, res) => {
    try {
      const userAtualizado = await userService.updateUserData(
        req.params.email,
        req.body,
      );
      return res.status(200).json({ message: 'Usuário atualizado.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };
};
