import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { CardBody, CardText, CardTitle, Col, Row } from "react-bootstrap";
import { Episode, FeaturedVideo } from "../types/catalogTypes";
import { constructThumbnailURL, constructWatchURL } from "../utils/utils";
import { CardImage } from "./CardImage";
import styles from "./FeaturedContentCard.module.scss";

interface Props {
  readonly content: Episode & FeaturedVideo;
  readonly thumbnailGridSize?: number;
}

export const FeaturedContentCard = React.memo<Props>(
  function FeaturedContentCardFn({ content, thumbnailGridSize = 6 }) {
    const link = constructWatchURL(content, content.season);
    const thumbnail = constructThumbnailURL(content, content.season);

    return (
      <Link
        className="card mb-4 mx-auto text-reset text-decoration-none"
        style={{ maxWidth: "1050px" }}
        href={link}
      >
        <Row className="row g-0">
          <Col lg={thumbnailGridSize}>
            <CardImage
              alt={`Thumbnail for ${content.title}`}
              ratio="16x9"
              src={thumbnail}
            />
          </Col>
          <Col lg={12 - thumbnailGridSize}>
            <CardBody>
              <CardTitle as="h4">{content.title}</CardTitle>
              {content.releaseDate != null && (
                <CardText as="h6" className="text-muted">
                  Released {content.releaseDate}
                </CardText>
              )}
              <p className={classNames(styles.description, "mt-4 mb-0")}>
                {content.description}
              </p>
            </CardBody>
          </Col>
        </Row>
      </Link>
    );
  }
);
