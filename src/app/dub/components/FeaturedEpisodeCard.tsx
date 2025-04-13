import { WithClassName } from "@/types/WithClassName";
import React from "react";
import { CATALOG } from "../catalog";
import { getEpisodeThumbnail } from "../utils/getEpisodeThumbnailWithFallback";
import { isEpisodeUnreleased } from "../utils/isEpisodeUnreleased";
import { constructWatchURL } from "../utils/utils";
import { FeaturedContentCard } from "./FeaturedContentCard";
import { ReleaseDate } from "./ReleaseDate";

interface Props extends WithClassName {
  readonly thumbnailGridSize?: number;
}

export const FeaturedEpisodeCard = React.memo<Props>(
  function FeaturedContentCardFn({ className, thumbnailGridSize = 6 }) {
    const featured = CATALOG.featured;
    const episode = CATALOG.seasons[featured.season]?.episodes.find(
      ({ id }) => id === featured.id
    );

    if (episode == null) {
      return null;
    }

    return (
      <FeaturedContentCard
        className={className}
        disabled={isEpisodeUnreleased(episode)}
        href={constructWatchURL(episode, featured.season)}
        thumbnailUrl={getEpisodeThumbnail(episode, featured.season)}
        title={episode.title}
        subtitle={
          episode.releaseDate != null && (
            <ReleaseDate releaseDate={episode.releaseDate} />
          )
        }
        description={episode.description}
        thumbnailGridSize={thumbnailGridSize}
      />
    );
  }
);
