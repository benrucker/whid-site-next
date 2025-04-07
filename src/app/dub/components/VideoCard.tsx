import { WithClassName } from "@/types/WithClassName";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Card from "react-bootstrap/esm/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import { Episode } from "../types/catalogTypes";
import { SeasonName } from "../types/SeasonName";
import { getEpisodeThumbnailWithFallback } from "../utils/getEpisodeThumbnailWithFallback";
import { isEpisodeUnreleased } from "../utils/isEpisodeUnreleased";
import { constructWatchURL } from "../utils/utils";
import { CardImage } from "./CardImage";
import { CardImageWithBadge } from "./CardImageWithBadge";
import { EpisodeBadge } from "./EpisodeBadge";
import { ReleaseDate } from "./ReleaseDate";
import styles from "./VideoCard.module.scss";

interface Props extends WithClassName {
  readonly episode: Episode;
  readonly imageLoading?: React.ComponentProps<typeof CardImage>["loading"];
  readonly season: SeasonName;
}

export const VideoCard = React.memo<Props>(function VideoCardFn({
  className,
  episode,
  imageLoading,
  season,
}) {
  const isUnreleased = isEpisodeUnreleased(episode);

  const Component = isUnreleased ? "div" : Link;

  return (
    <Component
      href={constructWatchURL(episode, season)}
      className={classNames("text-decoration-none", className, styles.link)}
    >
      <Card
        className={classNames(styles.card, "text-reset", {
          [styles.unreleased]: isUnreleased,
        })}
      >
        <CardImageWithBadge
          className={styles.image}
          alt={episode.title}
          loading={imageLoading}
          ratio="16x9"
          src={getEpisodeThumbnailWithFallback(episode, season)}
          badge={<EpisodeBadge episode={episode} />}
        />
        <CardBody>
          <div className="fw-bold text-truncate">{episode.title}</div>
          {episode.releaseDate != null && (
            <small className="text-muted">
              <ReleaseDate releaseDate={episode.releaseDate} />
            </small>
          )}
        </CardBody>
      </Card>
    </Component>
  );
});
