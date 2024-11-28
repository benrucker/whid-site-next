import React from "react";
import { Episode, FeaturedVideo } from "../types/catalogTypes";
import { constructThumbnailURL, constructWatchURL } from "../utils/utils";
import { FeaturedContentCard } from "./FeaturedContentCard";

interface Props {
  readonly content: Episode & FeaturedVideo;
  readonly thumbnailGridSize?: number;
}

export const FeaturedEpisodeCard = React.memo<Props>(
  function FeaturedContentCardFn({ content, thumbnailGridSize = 6 }) {
    return (
      <FeaturedContentCard
        href={constructWatchURL(content, content.season)}
        thumbnailUrl={constructThumbnailURL(content, content.season)}
        title={content.title}
        subtitle={
          content.releaseDate != null
            ? `Released ${content.releaseDate}`
            : undefined
        }
        description={content.description}
        thumbnailGridSize={thumbnailGridSize}
      />
    );
  }
);
