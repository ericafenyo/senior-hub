"use server";

import { USER_SESSION_KEY } from "@/app/constants";
import axios, { AxiosResponse, AxiosError } from "axios";

import { cookies } from "next/headers";
import { HttpException } from "../types";

export const execute = async <T>(request: () => Promise<AxiosResponse>): Promise<T> => {

  return new Promise<T>((resolve, reject) => {
    request()
      .then((response) => resolve(response.data))
      .catch((error) => {
        if (axios.isAxiosError(error) && error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */

          const axiosError = error as AxiosError;

          const response = axiosError.response;
          const status = response?.status || 500;
          const data = (response?.data as { code?: string }) || {};
          const code = data?.code || "UNKNOWN";

          const exception: HttpException = {
            status,
            code,
            message: error.message,
            name: "HttpException",
          };

          reject(exception);
        } else {
          /*
           * The request was made but no response was received, or
           * something happened in setting up the request that triggered an Error
           */
          const exception: HttpException = {
            status: 500,
            code: "UNKNOWN",
            message: error.message,
            name: "HttpException",
          };
          reject(exception);
        }
      });
  });
};
