import { WithClassName } from "@/types/WithClassName";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "react-bootstrap";
import { Episode } from "../types/catalogTypes";
import { SeasonName } from "../types/SeasonName";
import { constructThumbnailURL, constructWatchURL } from "../utils/utils";
import { CardImage } from "./CardImage";

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
        <CardImage
          alt={episode.title}
          loading={imageLoading}
          ratio="16x9"
          src={constructThumbnailURL(episode, season)}
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
