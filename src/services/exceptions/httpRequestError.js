module.exports = {
  BadRequest,
  InternalServerError,
  NotFound,
  UnprocessableEntity,
};

function BadRequest(message) {
  this.name = 'BadRequest';
  this.message = message || 'Bad Request';
  this.status = 400;
}

function InternalServerError(message) {
  this.name = 'InternalServerError';
  this.message = message || 'Internal Server Error';
  this.status = 500;
}

function NotFound(message) {
  this.name = 'NotFound';
  this.message = message || 'Not Found';
  this.status = 404;
}

function UnprocessableEntity(message) {
  this.name = 'UnprocessableEntity';
  this.message = message || 'Unprocessable Entity';
  this.status = 422;
}

// Tipo de erro nativo do JS que será customizado
BadRequest.prototype = new Error();
InternalServerError.prototype = new Error();
NotFound.prototype = new Error();
UnprocessableEntity.prototype = new Error();
