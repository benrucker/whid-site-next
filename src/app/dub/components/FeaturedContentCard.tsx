import { WithClassName } from "@/types/WithClassName";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { CardBody, CardText, CardTitle, Col, Row } from "react-bootstrap";
import { CardImage } from "./CardImage";
import styles from "./FeaturedContentCard.module.scss";
import { StaticImageData } from "next/image";

interface Props extends WithClassName {
  readonly description?: string;
  readonly href: string;
  readonly subtitle?: string;
  readonly thumbnailGridSize?: number;
  readonly thumbnailUrl: string | StaticImageData;
  readonly title: string;
}

export const FeaturedContentCard = React.memo<Props>(
  function FeaturedContentCardFn({
    className,
    description,
    href,
    subtitle,
    thumbnailGridSize = 6,
    thumbnailUrl,
    title,
  }) {
    return (
      <Link
        className={classNames(
          "card mb-4 mx-auto text-reset text-decoration-none",
          className
        )}
        style={{ maxWidth: "1050px" }}
        href={href}
      >
        <Row className="row g-0">
          <Col lg={thumbnailGridSize}>
            <CardImage
              alt={`Thumbnail for ${title}`}
              ratio="16x9"
              src={thumbnailUrl}
            />
          </Col>
          <Col lg={12 - thumbnailGridSize}>
            <CardBody>
              <CardTitle as="h4">{title}</CardTitle>
              {subtitle != null && (
                <CardText as="h6" className="text-muted">
                  {subtitle}
                </CardText>
              )}
              {description != null && (
                <p className={classNames(styles.description, "mt-4 mb-0")}>
                  {description}
                </p>
              )}
            </CardBody>
          </Col>
        </Row>
      </Link>
    );
  }
);
