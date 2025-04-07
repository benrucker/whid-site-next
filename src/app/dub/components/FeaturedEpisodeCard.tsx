import React from "react";
import { CATALOG } from "../catalog";
import { getEpisodeThumbnailWithFallback } from "../utils/getEpisodeThumbnailWithFallback";
import { constructWatchURL } from "../utils/utils";
import { FeaturedContentCard } from "./FeaturedContentCard";
import { ReleaseDate } from "./ReleaseDate";

interface Props {
  readonly thumbnailGridSize?: number;
}

export const FeaturedEpisodeCard = React.memo<Props>(
  function FeaturedContentCardFn({ thumbnailGridSize = 6 }) {
    const featured = CATALOG.featured;
    const episode = CATALOG.seasons[featured.season]?.episodes.find(
      ({ id }) => id === featured.id
    );

    if (episode == null) {
      return null;
    }

    return (
      <FeaturedContentCard
        href={constructWatchURL(episode, featured.season)}
        thumbnailUrl={getEpisodeThumbnailWithFallback(episode, featured.season)}
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
