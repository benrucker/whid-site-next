import { WithClassName } from "@/types/WithClassName";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "react-bootstrap";
import { Episode } from "../types/catalogTypes";
import { SeasonName } from "../types/SeasonName";
import { constructThumbnailURL, constructWatchURL } from "../utils/utils";
import { CardImage } from "./CardImage";
import { CardImageWithBadge } from "./CardImageWithBadge";
import { EpisodeBadge } from "./EpisodeBadge";

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
      className={classNames("text-reset text-decoration-none", className)}
    >
      <Card>
        <CardImageWithBadge
          alt={episode.title}
          loading={imageLoading}
          ratio="16x9"
          src={constructThumbnailURL(episode, season)}
          badge={<EpisodeBadge episode={episode} />}
        />
        <CardBody>
          <CardTitle as="h5" className="text-truncate pb-1 mb-0">
            {episode.title}
          </CardTitle>
          {episode.releaseDate != null && (
            <CardSubtitle>
              <small className="text-muted">
                Released {episode.releaseDate}
              </small>
            </CardSubtitle>
          )}
        </CardBody>
      </Card>
    </Link>
  );
});
