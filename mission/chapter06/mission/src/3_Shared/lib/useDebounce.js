import React from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(()=>{
    const debounceTimer = setTimeout(()=>{
      setDebouncedValue(value);
    }, delay)

    return () => {
      clearTimeout(debounceTimer);
    }
  }, [value, delay])

  return debouncedValue;
}

export default useDebounce;