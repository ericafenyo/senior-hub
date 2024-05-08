import { AxiosResponse } from "axios";
import { HttpException } from "./HttpException";

export class Result<T> {
  private constructor(
    public readonly succeeded: boolean,
    public readonly data: T | null,
    public readonly error: HttpException | null
  ) {}

  public static success<T>(data: T): Result<T> {
    return new Result<T>(true, data, null);
  }

  public static error<T>(error: HttpException): Result<T> {
    return new Result<T>(false, null, error);
  }

  public static async catch(request: () => Promise<AxiosResponse>) {
    try {
      const response = await request();
      return Result.success(response.data);
    } catch (error: any) {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        const response = error.response.data;
        const exception: HttpException = {
          message: response.message,
          status: response.status,
          code: response.code,
          path: response.path,
          timestamp: response.timestamp,
        };
        return Result.error(exception);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        const response: HttpException = {
          message: error.request,
          code: "request_success_no_response",
          status: 500,
        };
        return Result.error(response);
      } else {
        // Something happened in setting up the request and triggered an Error
        const response: HttpException = error;
        return Result.error(response);
      }
    }
  }
}
