const { body, validationResult } = require('express-validator');

const createUserValidator = [
  body('name', 'O nome deve ter pelo menos 3 caracteres').isLength({ min: 3 }),
  body('email', 'Email inválido').isEmail(),
  body('password', 'O comprimento mínimo da senha é de 6 caracteres').isLength({
    min: 6,
  }),
];

const loginValidator = [
  body('email', 'Email inválido').isEmail(),
  body('password', 'O comprimento mínimo da senha é de 6 caracteres').isLength({
    min: 6,
  }),
];

const validator = (req) => {
  return validationResult(req);
};

module.exports = {
  createUserValidator,
  loginValidator,
  validator,
};
