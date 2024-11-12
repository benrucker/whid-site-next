"use client";
import React from "react";
import Anchor from "react-bootstrap/esm/Anchor";
import Card from "react-bootstrap/esm/Card";
import Ratio from "react-bootstrap/esm/Ratio";

interface Props {
  readonly description: string;
  readonly releaseDate?: string;
  readonly thumbnailLink: string;
  readonly title: string;
  readonly videoLink: string;
  readonly videoPlayerLink: string;
}

export const VideoPreviewCard = React.memo<Props>(function VideoPreviewCardFn({
  description,
  releaseDate,
  thumbnailLink,
  title,
  videoLink,
  videoPlayerLink,
}) {
  return (
    <Card>
      <Ratio className="ratio-16x9">
        <video
          className="mx-auto"
          controls={true}
          playsInline={true}
          poster={thumbnailLink}
          preload="auto"
          src={videoLink}
          style={{ backgroundColor: "black" }}
        >
          Sorry, your browser doesn&apos;t support embedded videos.
        </video>
      </Ratio>
      <Anchor
        href={videoPlayerLink}
        className="text-reset text-decoration-none"
      >
        <div id="gallery-card" className="card-body">
          <h5 className="card-title text-truncate pb-1 mb-0">{title}</h5>
          {releaseDate && (
            <h6 className="card-subtitle">
              <small className="text-muted"> Released {releaseDate}</small>
            </h6>
          )}
          <h6 v-if="description" className="card-subtitle mt-1">
            <small className="text-muted">{description}</small>
          </h6>
        </div>
      </Anchor>
    </Card>
  );
});
