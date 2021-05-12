export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

export const asyncGet = async <T>(dataSource: T, delay: number): Promise<T> => {
  await sleep(delay);
  return dataSource;
};
