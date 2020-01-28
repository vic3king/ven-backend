'use strict';

const BaseExceptionHandler = use('BaseExceptionHandler');

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle(error, { request, response }) {
    const [errorCode, message] = error.message.split(':');

    if (errorCode === 'E_MISSING_DATABASE_ROW') {
      const model = message
        .split('for')[1]
        .trim()
        .split(' ')[0];

      return response.status(error.status || 404).json({
        status: 'fail',
        message: `${model} not found.`,
      });
    }

    console.log(error); // eslint-disable-line no-console

    return response.status(error.status).json({
      status: 'error',
      error: error.message,
    });
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  // async report(error, { request }) {}
}

module.exports = ExceptionHandler;
