import React from "react";
import Button from "react-bootstrap/esm/Button";

interface Props<T> extends Omit<React.ComponentProps<typeof Button>, "value"> {
  readonly value: T;
  readonly onClick: (value: T, event: React.MouseEvent) => void;
}

export const ButtonWithValue = function ButtonWithValue<T>({
  value,
  onClick,
  ...props
}: Props<T>) {
  const handleClick = React.useCallback(
    (event: React.MouseEvent) => {
      onClick(value, event);
    },
    [onClick, value]
  );

  return <Button onClick={handleClick} {...props} />;
};
