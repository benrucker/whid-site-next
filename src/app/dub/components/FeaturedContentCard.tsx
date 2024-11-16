import styles from "./FeaturedContentCard.module.scss";
import React from "react";
import { Episode, FeaturedVideo } from "../types/catalogTypes";
import { constructThumbnailURL, constructWatchURL } from "../utils/utils";
import Link from "next/link";
import {
  CardBody,
  CardText,
  CardTitle,
  Col,
  Ratio,
  Row,
} from "react-bootstrap";
import classNames from "classnames";

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
            <Ratio className="ratio ratio-16x9">
              <img src={thumbnail} alt="..." />
            </Ratio>
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
