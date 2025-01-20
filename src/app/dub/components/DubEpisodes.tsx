"use client";
import { WithClassName } from "@/types/WithClassName";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Row from "react-bootstrap/esm/Row";
import Tab from "react-bootstrap/esm/Tab";
import { CATALOG } from "../catalog";
import { SeasonName } from "../types/SeasonName";
import { sortEpisodes } from "../utils/utils";
import styles from "./DubEpisodes.module.scss";
import { VideoCard } from "./VideoCard";

const TABS = ["Episodes", "Extras"] as const;
type Tab = (typeof TABS)[number];
const DEFAULT_TAB = TABS[0];

const EPISODE_SEASONS = [
  SeasonName.SEASON_2,
  SeasonName.SPECIALS,
  SeasonName.SEASON_1,
];

export const DubEpisodes = React.memo<WithClassName>(function DubEpisodesFn({
  className,
}) {
  return (
    <div className={className}>
      <Tab.Container defaultActiveKey={DEFAULT_TAB}>
        <Nav
          className="d-flex justify-content-center mb-5 gap-4"
          variant="underline"
          defaultValue={TABS[0]}
        >
          {TABS.map((tab) => (
            <Nav.Item key={tab} className={styles.dubTab}>
              <Nav.Link className="pt-0" eventKey={tab}>
                <div className="fw-bold">{tab}</div>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey={TABS[0]} title={TABS[0]}>
            {EPISODE_SEASONS.map((season) => (
              <Container key={season} className="mt-3">
                <h3>{CATALOG.seasons[season].name}</h3>
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
            ))}
          </Tab.Pane>
          <Tab.Pane eventKey={TABS[1]} title={TABS[1]}>
            <Container key={SeasonName.EXTRAS} className="mt-1">
              <h3>{CATALOG.seasons[SeasonName.EXTRAS].name}</h3>
              <Row>
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
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
});
