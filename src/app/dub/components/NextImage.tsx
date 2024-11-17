import styles from "./NextImage.module.scss";
import { split } from "@/utils/split";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

type Ratio = `${number}x${number}`;

interface Props
  extends Omit<React.ComponentProps<typeof Image>, "width" | "height"> {
  readonly ratio: Ratio;
}

export const NextImage = React.memo<Props>(function NextImageFn({
  ratio,
  className,
  ...props
}) {
  const [width, height] = split(ratio, "x").map(Number);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className={classNames(styles.image, className)}
      width={width}
      height={height}
      {...props}
    />
  );
});
