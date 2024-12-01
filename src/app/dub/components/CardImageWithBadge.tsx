import { PropsOf } from "@/types/PropsOf";
import React from "react";
import { CardImage } from "./CardImage";
import styles from "./CardImageWithBadge.module.scss";

interface Props extends PropsOf<typeof CardImage> {
  readonly badge: React.ReactNode;
}

export const CardImageWithBadge = React.memo<Props>(
  function CardImageWithBadgeFn({ badge, ...props }) {
    return (
      <div className={styles.container}>
        <CardImage {...props} />
        <div className={styles.overlay}>{badge}</div>
      </div>
    );
  }
);
