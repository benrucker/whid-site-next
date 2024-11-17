import { Chapter } from "@/app/dub/types/catalogTypes";
import { AnchorStyledButton } from "@/components/AnchorStyledButton";
import { WithClassName } from "@/types/WithClassName";
import classNames from "classnames";
import React from "react";

interface Props extends WithClassName {
  readonly chapter: Chapter;
  readonly onClick: (chapter: Chapter) => void;
}

export const DubChapter = React.memo<Props>(function DubChapterFn({
  className,
  chapter,
  onClick,
}) {
  const handleClick = React.useCallback(() => {
    onClick(chapter);
  }, [chapter, onClick]);

  return (
    <div className={classNames("mb-0 chapter", className)}>
      <AnchorStyledButton intent="primary" onClick={handleClick}>
        {chapter.timestamp}
      </AnchorStyledButton>{" "}
      {chapter.label}
      {chapter.subChapters?.map((subChapter, index) => (
        <DubChapter
          className="ps-4"
          key={index}
          chapter={subChapter}
          onClick={onClick}
        />
      ))}
    </div>
  );
});
