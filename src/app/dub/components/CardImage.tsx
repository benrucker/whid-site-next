import { NextImage } from "@/components/NextImage";
import classNames from "classnames";
import React from "react";
import { Ratio } from "react-bootstrap";

interface Props extends Omit<React.ComponentProps<typeof NextImage>, "ratio"> {
  readonly ratio: React.ComponentProps<typeof NextImage>["ratio"];
  readonly ratioProps?: Omit<React.ComponentProps<typeof Ratio>, "aspectRatio">;
}

export const CardImage = React.memo<Props>(function CardImageFn({
  className,
  ratio,
  ratioProps = {},
  ...props
}) {
  return (
    <Ratio {...ratioProps} aspectRatio={ratio}>
      <NextImage
        className={classNames("card-img-top", className)}
        ratio={ratio}
        {...props}
      />
    </Ratio>
  );
});
