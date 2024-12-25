import { WithClassName } from "@/types/WithClassName";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { Card, CardBody } from "react-bootstrap";
import { Episode } from "../types/catalogTypes";
import { SeasonName } from "../types/SeasonName";
import { constructThumbnailURL, constructWatchURL } from "../utils/utils";
import { CardImage } from "./CardImage";
import { CardImageWithBadge } from "./CardImageWithBadge";
import { EpisodeBadge } from "./EpisodeBadge";
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
  return (
    <Link
      href={constructWatchURL(episode, season)}
      className={classNames("text-decoration-none", className)}
    >
      <Card className={classNames(styles.card, "text-reset")}>
        <CardImageWithBadge
          alt={episode.title}
          loading={imageLoading}
          ratio="16x9"
          src={constructThumbnailURL(episode, season)}
          badge={<EpisodeBadge episode={episode} />}
        />
        <CardBody>
          <div className="fw-bold text-truncate">{episode.title}</div>
          {episode.releaseDate != null && (
            <small className="text-muted">Released {episode.releaseDate}</small>
          )}
        </CardBody>
      </Card>
    </Link>
  );
});
