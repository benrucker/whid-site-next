import React from "react";
import { Container, ButtonGroup, Row } from "react-bootstrap";
import { CATALOG } from "../catalog";
import { SeasonName } from "../types/SeasonName";
import { sortEpisodes } from "../utils/utils";
import { VideoCard } from "./VideoCard";
import { WithClassName } from "@/types/WithClassName";
import Link from "next/link";
import classNames from "classnames";

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

      <Container className="d-flex mt-3 mb-3">
        <ButtonGroup className="mx-auto" role="group">
          {Object.entries(CATALOG.seasons).map(
            ([otherSeasonName, seasonData]) => (
              <React.Fragment key={otherSeasonName}>
                <Link
                  id={otherSeasonName}
                  className={classNames("btn btn-outline-primary", {
                    active: season === otherSeasonName,
                  })}
                  href={`/dub?season=${otherSeasonName}`}
                  prefetch={true}
                >
                  {seasonData.name}
                </Link>
              </React.Fragment>
            )
          )}
        </ButtonGroup>
      </Container>

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
