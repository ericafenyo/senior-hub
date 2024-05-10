import { AxiosResponse } from "axios";

export type HttpException = {
  message: any;
  status: number;
  code: string;
};

export const execute = <T>(request: () => Promise<AxiosResponse>): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    request()
      .then((response) => resolve(response.data))
      .catch((error) => {
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
          };
          reject(exception);
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          const exception: HttpException = {
            message: error.request,
            code: "request_success_no_response",
            status: 500,
          };
          reject(exception);
        } else {
          // Something happened in setting up the request and triggered an Error
          const exception: HttpException = error;
          reject(exception);
        }
      });
  });
};
