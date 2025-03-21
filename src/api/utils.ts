import { getAccessToken } from "@/core/auth";

/**
 * Represents an HTTP error.
 */
export class HttpException extends Error {
  /**
   * HTTP status code
   */
  status?: number;

  /**
   * A custom error message
   */
  data?: any;

  /**
   * Create an instance of the HttpException.
   */
  constructor(options: {
    message?: string,
    status?: number,
    data?: any,
  }) {
    super(options.message);
    this.status = options.status;
    this.data = options.data;
    // Ensure the stack trace is captured for better debugging
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpException);
    }
  }
}


/**
 * Executes a fetch request
 *
 * @param request - a fetch api request object
 * @returns A promise that resolves to data of type `T`.
 * @throws  - Throws an exception in case of network errors, HTTP errors, or unexpected issues.
 */
export const execute = async <T>(request: Request): Promise<T> => {

  try {
    const response = await fetch(request);

    // Check if the response is OK (status code in the range 2xx)
    if (!response.ok) {
      // throw new HttpException({
      //   message: response.statusText,
      //   status: response.status,
      //   data: (await response.json().catch(() => null)) || {}
      // });
      throw new Error();
    }

    // Return the parsed response JSON data
    return (await response.json()) as T;
  } catch (error) {
    // If the error is already an HttpException, rethrow it
    if (error instanceof HttpException) {
      throw error;
    }

    // Handle network errors (e.g., no internet, CORS issues)
    if (error instanceof TypeError) {
      throw new NetworkException();
    }

    // Handle unexpected errors by throwing a generic HttpException
    throw new UnexpectedException();
  }
};


export const buildUrl = (path: string) => process.env.API_URL + path;

export const defaultOptions = () => ({
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getAccessToken()}`
  }
});

export class NetworkException extends Error {
  constructor(message?: string, cause?: any) {
    super(message ?? "Network exception", { cause });
    // Ensure the stack trace is captured for better debugging
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpException);
    }
  }
}

export class ValidationException extends Error {

}

export class UnexpectedException extends Error {
  constructor(message?: string, cause?: any) {
    super(message ?? "Unexpected exception", { cause });
    // Ensure the stack trace is captured for better debugging
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpException);
    }
  }
}

const getBaseOptions = () => ({
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getAccessToken()}`
  }
});

export type Exception = HttpException | NetworkException | UnexpectedException | ValidationException;

const post = async <T = unknown>(path: string, data?: string, options?: any) => {
  return fetch(buildUrl(path), { ...options, method: "POST", body: data });
};

const patch = async <T = unknown>(path: string, data?: string, options?: any) => {
  return fetch(buildUrl(path), { ...options, method: "PATCH", body: data });
};

const put = async <T = unknown>(path: string, data?: string, options?: any) => {
  return fetch(buildUrl(path), { ...options, method: "PUT", body: data });
};

const get = async <T = unknown>(path: string, options?: any) => {
  return fetch(buildUrl(path), { ...options, method: "GET" });
};

export const http = { post, get, patch, put };
