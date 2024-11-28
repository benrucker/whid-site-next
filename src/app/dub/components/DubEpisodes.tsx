"use client";
import { WithClassName } from "@/types/WithClassName";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { CATALOG } from "../catalog";
import { SeasonName } from "../types/SeasonName";
import { sortEpisodes } from "../utils/utils";
import { SeasonSwitcher } from "./SeasonSwitcher";
import { VideoCard } from "./VideoCard";

export const DubEpisodes = React.memo<WithClassName>(function DubEpisodesFn({
  className,
}) {
  const params = useSearchParams();

  const [season, setSeason] = React.useState<SeasonName>(
    () => (params.get("season") as SeasonName) ?? SeasonName.SEASON_1
  );

  return (
    <div className={className}>
      <h3 className="text-center mt-4">Episodes</h3>
      <SeasonSwitcher activeSeason={season} onChange={setSeason} />
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
