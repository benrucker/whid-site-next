import React from "react";

export function useBooleanState(defaultValue: boolean) {
  const [value, setValue] = React.useState<boolean>(defaultValue);

  const setTrue = React.useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = React.useCallback(() => {
    setValue(false);
  }, []);

  const toggle = React.useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);

  return {
    value,
    setTrue,
    setFalse,
    toggle,
  };
}
