function responseWithSuccess(response, data) {
  if (data) {
    data = { message: data };
  }
    return response.json({
      status: 'OK',
      result: data || null,
      error: null,
    });
}

function responseWithError(response, error, statusCode = 500) {
  return response.status(statusCode).json({
    status: 'Error',
    result: null,
    error: {
      message: error.message || 'An error occured. Try again.',
    },
  });
}

module.exports = {
  responseWithSuccess,
  responseWithError
}