import { WithClassName } from "@/types/WithClassName";
import React from "react";
import styles from "./ColoredHeader.module.scss";

interface Props extends React.PropsWithChildren, WithClassName {}

export const ColoredHeader = React.memo<Props>(function ColoredHeaderFn({
  className,
  children,
}) {
  return (
    <h1 className={className}>
      <b>
        <i className={styles.titleText}>{children}</i>
      </b>
    </h1>
  );
});
