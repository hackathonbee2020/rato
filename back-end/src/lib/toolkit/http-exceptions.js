const { STATUS_CODES: httpStatusCodes } = require('http');

class HTTPError extends Error {
  constructor ({ statusCode = 500 } = {}) {
    super(httpStatusCodes[statusCode]);
    this.statusCode = statusCode;
  }
}

class HttpExceptions {
  constructor () {}

  static exceptions() {
    return {
      BAD_REQUEST: new HTTPError({ statusCode: 400 }),
      UNAUTHORIZED: new HTTPError({ statusCode: 401 }),
      FORBIDDEN: new HTTPError({ statusCode: 403 }),
      NOT_FOUND: new HTTPError({ statusCode: 404 }),
      CONFLICT: new HTTPError({statusCode: 409 }),
      UNPROCESSABLE_ENTITY: new HTTPError({ statusCode: 422 }),
      INTERNAL_SERVER_ERROR: new HTTPError({ statusCode: 500 }),
    };
  }
};

module.exports = HttpExceptions.exceptions();