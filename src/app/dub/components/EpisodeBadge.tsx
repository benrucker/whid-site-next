import { WithClassName } from "@/types/WithClassName";
import classNames from "classnames";
import React from "react";
import Badge from "react-bootstrap/esm/Badge";
import { Episode } from "../types/catalogTypes";
import styles from "./EpisodeBadge.module.scss";

interface Props extends WithClassName {
  readonly episode: Episode;
}

export const EpisodeBadge = React.memo<Props>(function EpisodeBadgeFn({
  className,
  episode,
}) {
  if (episode.episodeNumber == null) {
    return null;
  }

  return (
    <Badge
      className={classNames(styles.badge, "text-muted", className)}
      bg="secondary"
    >
      Ep. {episode.episodeNumber}
    </Badge>
  );
});
