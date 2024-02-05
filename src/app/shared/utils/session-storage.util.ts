export const setSessionStorage = <T>(key: string, value: T): void => {
  return sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = (key: string): string | any => {
  const data = sessionStorage.getItem(key);
  return data !== null ? JSON.parse(data) : null;
};

export const removeSessionStorage = (key: string): void => {
  return sessionStorage.removeItem(key);
};

export const clearSessionStorage = (): void => {
  return sessionStorage.clear();
};
