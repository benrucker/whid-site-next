import { WithClassName } from "@/types/WithClassName";
import React from "react";
import { Episode } from "../types/catalogTypes";
import { constructThumbnailURL, constructWatchURL } from "../utils/utils";
import Link from "next/link";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Ratio,
} from "react-bootstrap";
import { SeasonName } from "../types/SeasonName";
import classNames from "classnames";

interface Props extends WithClassName {
  readonly episode: Episode;
  readonly season: SeasonName;
}

export const VideoCard = React.memo<Props>(function VideoCardFn({
  className,
  episode,
  season,
}) {
  return (
    <Link
      href={constructWatchURL(episode, season)}
      className={classNames("text-reset text-decoration-none", className)}
    >
      <Card>
        <Ratio aspectRatio="16x9">
          <img
            src={constructThumbnailURL(episode, season)}
            className="card-img-top"
            alt={episode.title}
          />
        </Ratio>
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
