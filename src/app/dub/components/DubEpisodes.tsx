import { WithClassName } from "@/types/WithClassName";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { CATALOG } from "../catalog";
import { SeasonName } from "../types/SeasonName";
import { sortEpisodes } from "../utils/utils";
import { SeasonSwitcher } from "./SeasonSwitcher";
import { VideoCard } from "./VideoCard";

interface Props extends WithClassName {
  readonly season: SeasonName;
}

export const DubEpisodes = React.memo<Props>(function DubEpisodesFn({
  className,
  season,
}) {
  return (
    <div className={className}>
      <h3 className="text-center mt-4">Episodes</h3>
      <SeasonSwitcher activeSeason={season} />
      <Container className="mt-1">
        <Row>
          {sortEpisodes(CATALOG.seasons[season].episodes, season).map(
            (episode, index) => (
              <VideoCard
                key={episode.title}
                className="col-md-6 col-lg-3 my-3 mt-1"
                episode={episode}
                imageLoading={index < 8 ? "eager" : "lazy"}
                season={season}
              />
            )
          )}
        </Row>
      </Container>
    </div>
  );
});
