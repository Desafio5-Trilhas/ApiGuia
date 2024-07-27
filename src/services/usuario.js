const User = require('../models/usuario.js');
const {
  NotFound,
  UnprocessableEntity,
  InternalServerError,
} = require('./exceptions/httpRequestError.js');

module.exports = class userService {
  static createUser = async (newUser) => {
    try {
      const user = await User.createNewUser(newUser);
      return user;
    } catch (err) {
      throw new UnprocessableEntity();
    }
  };

  static findAllUsers = async () => {
    try {
      const users = await User.findAllUsers();
      return users;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static findUserByEmail = async (email) => {
    try {
      const user = await User.findByEmail(email);
      if (!user) {
        return false;
      }
      delete user.password;
      return user;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static deleteUser = async (email) => {
    try {
      await SaveFile.deleteSaveFiles(email);
      await User.deleteUser(email);
      return true;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static updateUserData = async (email, dados) => {
    try {
      const userUpdated = User.updateUser(email, dados);
      return userUpdated;
    } catch (err) {
      throw new UnprocessableEntity();
    }
  };

  static loginUser = async (email, password) => {
    try {
      const user = await User.findByEmail(email);
      if (!user) {
        throw new NotFound('Email ou senha incorretos.');
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new NotFound('Email ou senha incorretos.');
      }
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET_KEY,
      );
      return { id: user.id, acess_token: token };
    } catch (err) {
      if (err instanceof NotFound) {
        throw err;
      }
      throw new InternalServerError();
    }
  };
};
