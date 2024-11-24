class Success<T> {
  constructor(public value: T) {}
}

class Failure {
  constructor(public exception: Error) {}
}

export type Result<T> = Success<T> | Failure;
