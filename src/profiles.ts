
export type profile<T> = {
  [key: string]: T
}


export type shell = profile<shellProfile>;

export type shellProfile = {
  cmd: string,
  args: string | string[]
}