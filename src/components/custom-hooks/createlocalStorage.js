import { useState } from "react";

const useLocalStorage = () => {
  const [storedValue, setStoredValue] = useState();

  const setValue = (value) => {
    localStorage.setItem(value, JSON.stringify([]));
    setStoredValue(true);
  }

  return [storedValue, setValue];
}

export default useLocalStorage;