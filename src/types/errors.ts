export class ValidationError extends Error {}

type NetworkErrorOptions = {
  message?: string;
  cause?: unknown;
  status: number;
};

export class NetworkError extends Error {
  status: number;

  static BAD_REQUEST = 400;
  static UNAUTHORIZED = 401;
  static FORBIDDEN = 403;
  static NOT_FOUND = 404;
  static NOT_ACCEPTABLE = 406;
  static REQUEST_TIMEOUT = 408;
  static CONFLICT = 409;
  static IM_A_TEAPOT = 418;
  static UNPROCESSABLE_ENTITY = 422;
  static TOO_MANY_REQUESTS = 429;
  static INTERNAL_SERVER_ERROR = 500;
  static SERVICE_UNAVAILABLE = 503;
  static UNKNOWN_ERROR = -1;

  constructor(options: NetworkErrorOptions) {
    super(options.message);
    this.status = options.status;
  }

  static async from(response: Response, message: string = "An error occurred") {
    // Parse JSON error response
    const data = await response.json();
    return new NetworkError({
      message: message,
      status: response.status,
      cause: data
    });
  }
}
