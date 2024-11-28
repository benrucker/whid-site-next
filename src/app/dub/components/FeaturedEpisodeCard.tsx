import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { CardBody, CardText, CardTitle, Col, Row } from "react-bootstrap";
import { Episode, FeaturedVideo } from "../types/catalogTypes";
import { constructThumbnailURL, constructWatchURL } from "../utils/utils";
import { CardImage } from "./CardImage";
import styles from "./FeaturedContentCard.module.scss";
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
