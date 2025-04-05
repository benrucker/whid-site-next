import React from "react";
import { getIsReleaseDateInFuture } from "../utils/isEpisodeUnreleased";

interface Props {
  readonly releaseDate: string;
}

export const ReleaseDate = React.memo<Props>(function ReleaseDateFn({
  releaseDate,
}) {
  const isReleaseDateInFuture = getIsReleaseDateInFuture(releaseDate);

  return (
    <>
      {isReleaseDateInFuture ? "Releasing" : "Released"} {releaseDate}
    </>
  );
});
