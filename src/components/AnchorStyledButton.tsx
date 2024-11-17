import classNames from "classnames";
import styles from "./AnchorStyledButton.module.scss";
import React from "react";
import { Button } from "react-bootstrap";

interface Props extends React.ComponentProps<typeof Button> {
  readonly intent: "primary" | undefined; // TODO real intents union
}

export const AnchorStyledButton = React.memo<Props>(
  function AnchorStyledButtonFn({ intent, className, ...props }) {
    return (
      <Button
        variant="link"
        className={classNames(`link-${intent}`, styles.button, className)}
        {...props}
      />
    );
  }
);