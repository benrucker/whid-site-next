import { WithClassName } from "@/types/WithClassName";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { CATALOG } from "../catalog";
import { SeasonName } from "../types/SeasonName";
import { sortEpisodes } from "../utils/utils";
import { TabWrapper } from "./TabWrapper";
import { VideoCard } from "./VideoCard";

type Tabs = "Episodes" | "Extras";
const DEFAULT_TAB = "Episodes";

const EPISODE_SEASONS = [
  SeasonName.SEASON_2,
  SeasonName.SPECIALS,
  SeasonName.SEASON_1,
];

const CONTENTS_BY_TAB = {
  Episodes: EPISODE_SEASONS.map((season) => (
    <Container key={season} className="mt-3">
      <h3>{CATALOG.seasons[season].name}</h3>
      <Row className="flex-column-reverse flex-md-row">
        {sortEpisodes(CATALOG.seasons[season].episodes, season).map(
          (episode) => (
            <VideoCard
              key={episode.title}
              className="col-md-6 col-lg-3 my-3 mt-1"
              episode={episode}
              season={season}
            />
          )
        )}
      </Row>
    </Container>
  )),
  Extras: (
    <Container key={SeasonName.EXTRAS} className="mt-1">
      <Row className="flex-column-reverse flex-md-row">
        {sortEpisodes(
          CATALOG.seasons[SeasonName.EXTRAS].episodes,
          SeasonName.EXTRAS
        ).map((episode) => (
          <VideoCard
            key={episode.title}
            className="col-md-6 col-lg-3 my-3 mt-1"
            episode={episode}
            season={SeasonName.EXTRAS}
          />
        ))}
      </Row>
    </Container>
  ),
} as const satisfies Record<Tabs, React.ReactNode>;

export const DubEpisodes = React.memo<WithClassName>(function DubEpisodesFn({
  className,
}) {
  return (
    <div className={className}>
      <TabWrapper defaultTab={DEFAULT_TAB} tabContents={CONTENTS_BY_TAB} />
    </div>
  );
});
