import Link from "next/link";
import React, { MediaHTMLAttributes } from "react";
import Card from "react-bootstrap/esm/Card";
import Ratio from "react-bootstrap/esm/Ratio";

interface Props {
  readonly description: string;
  readonly preload?: MediaHTMLAttributes<HTMLVideoElement>["preload"];
  readonly releaseDate?: string;
  readonly thumbnailLink: string;
  readonly title: string;
  readonly videoLink: string;
  readonly videoPlayerLink: string;
}

export const VideoPreviewCard = React.memo<Props>(function VideoPreviewCardFn({
  description,
  preload,
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
          preload={preload}
          src={videoLink}
          style={{ backgroundColor: "black" }}
        >
          Sorry, your browser doesn&apos;t support embedded videos.
        </video>
      </Ratio>
      <Link href={videoPlayerLink} className="text-reset text-decoration-none">
        <div id="gallery-card" className="card-body">
          <div className="fw-bold text-truncate pb-1 mb-0">{title}</div>
          {releaseDate && (
            <span>
              <small className="text-muted"> Released {releaseDate}</small>
            </span>
          )}
          <span v-if="description" className="mt-1">
            <small className="text-muted">{description}</small>
          </span>
        </div>
      </Link>
    </Card>
  );
});
