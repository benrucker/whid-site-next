import { Part } from "@/app/dub/types/catalogTypes";
import { AnchorStyledButton } from "@/components/AnchorStyledButton";
import { WithClassName } from "@/types/WithClassName";
import classNames from "classnames";
import React from "react";

interface Props extends WithClassName {
  readonly part: Part;
  readonly partNumber: number;
  readonly onClick: (part: Part) => void;
}

export const DubPart = React.memo<Props>(function DubPartFn({
  className,
  part,
  partNumber,
  onClick,
}) {
  const handleClick = React.useCallback(() => {
    onClick(part);
  }, [part, onClick]);

  return (
    <div className={classNames("mb-0", className)}>
      <AnchorStyledButton intent="primary" onClick={handleClick}>
        Part {partNumber + 1}
      </AnchorStyledButton>
      : {part.members}
    </div>
  );
});
