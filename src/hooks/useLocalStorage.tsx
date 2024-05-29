import { useEffect, useState } from "react";

const getInitialValue = (property: string, initialValue: unknown) => {
  const cachedData = localStorage.getItem(property);

  if (cachedData) return JSON.parse(cachedData);

  return typeof initialValue === "function" ? initialValue() : initialValue;
};

export const useLocalStorage = (key: string, initialValue: unknown) => {
  const [value, setValue] = useState(() => {
    return getInitialValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
