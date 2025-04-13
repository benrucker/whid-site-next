import { WithClassName } from "@/types/WithClassName";
import classNames from "classnames";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import CardBody from "react-bootstrap/esm/CardBody";
import CardText from "react-bootstrap/esm/CardText";
import CardTitle from "react-bootstrap/esm/CardTitle";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { CardImage } from "./CardImage";
import styles from "./FeaturedContentCard.module.scss";

interface Props extends WithClassName {
  readonly description?: string;
  readonly href: string;
  readonly subtitle?: React.ReactNode;
  readonly thumbnailGridSize?: number;
  readonly thumbnailUrl: string | StaticImageData;
  readonly title: string;
  readonly disabled?: boolean;
}

export const FeaturedContentCard = React.memo<Props>(
  function FeaturedContentCardFn({
    className,
    disabled = false,
    description,
    href,
    subtitle,
    thumbnailGridSize = 6,
    thumbnailUrl,
    title,
  }) {
    const Component = disabled ? "div" : Link;

    return (
      <Component
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
      </Component>
    );
  }
);
