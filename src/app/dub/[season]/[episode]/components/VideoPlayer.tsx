"use client";
import {
  Chapter,
  Episode,
  Part,
  withChapters,
  withParts,
} from "@/app/dub/types/catalogTypes";
import { SeasonName } from "@/app/dub/types/SeasonName";
import { convertTimestampToSeconds } from "@/app/dub/types/timestamp";
import {
  constructThumbnailURL,
  constructVideoUrlFromEpId,
} from "@/app/dub/utils/utils";
import { WithClassName } from "@/types/WithClassName";
import classNames from "classnames";
import React from "react";
import { DubChapter } from "./DubChapter";
import { DubPart } from "./DubPart";

const DEFAULT_VOLUME = "0.4";
const VOLUME_KEY = "volume";

interface Props extends WithClassName {
  readonly seasonName: SeasonName;
  readonly content: Episode;
}

export const VideoPlayer = React.memo<Props>(function VideoPlayerFn({
  className,
  content,
  seasonName,
}) {
  const video = React.useRef<HTMLVideoElement>(null);

  const goToPart = React.useCallback((part: Part | Chapter) => {
    const time = convertTimestampToSeconds(part.timestamp);
    if (video.current != null) {
      video.current.currentTime = time;
      video.current.scrollIntoView({ block: "center" });
    }
  }, []);

  React.useEffect(() => {
    function updateVolume() {
      if (video.current == null) {
        setTimeout(updateVolume, 50);
        return;
      }

      const volume = window.localStorage.getItem(VOLUME_KEY) ?? DEFAULT_VOLUME;
      video.current.volume = Number(volume);
    }
    updateVolume();
  }, []);

  const handleVolumeChange: React.ReactEventHandler<HTMLVideoElement> =
    React.useCallback((videoEventTarget) => {
      const newVolume = videoEventTarget.currentTarget.volume.toString();
      if (newVolume === DEFAULT_VOLUME) {
        // Hack to avoid storing the default in localstorage.
        return;
      }
      window.localStorage.setItem(VOLUME_KEY, newVolume);
    }, []);

  const videoUrl = constructVideoUrlFromEpId(content.id, seasonName);
  const thumbnailUrl = constructThumbnailURL(content, seasonName);

  return (
    <>
      <div className={classNames("text-center ratio ratio-16x9", className)}>
        <video
          className="mx-auto"
          ref={video}
          controls={true}
          playsInline={true}
          poster={thumbnailUrl}
          preload="auto"
          src={videoUrl}
          style={{ backgroundColor: "black" }}
          onVolumeChange={handleVolumeChange}
        >
          Sorry, your browser doesn&apos;t support embedded videos.
        </video>
      </div>
      <h2 className="fw-bold mb-0 mt-1">{content.title}</h2>
      {content.releaseDate != null && (
        <p v-if="releaseDate" className="text-muted">
          Released {content.releaseDate}
        </p>
      )}

      {withParts(content).parts?.map((part, index) => (
        <DubPart
          key={index}
          part={part}
          partNumber={index}
          onClick={goToPart}
        />
      ))}
      {withChapters(content).chapters?.map((chapter, index) => (
        <DubChapter key={index} chapter={chapter} onClick={goToPart} />
      ))}
      <br />
    </>
  );
});
