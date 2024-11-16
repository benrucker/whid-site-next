"use client";
import React from "react";
import { FeaturedContentCard } from "./components/FeaturedContentCard";
import { VideoCard } from "./components/VideoCard";
import { Alert, ButtonGroup, Container, Row } from "react-bootstrap";
import { getFeaturedVideo, sortEpisodes } from "./utils/utils";
import { CATALOG } from "./catalog";
import { SeasonName } from "./types/SeasonName";
import { ButtonWithValue } from "./ButtonWithValue";

export default function Dub() {
  const [activeSeason, setActiveSeason] = React.useState<SeasonName>(
    SeasonName.SEASON_1
  );

  const featuredVideo = getFeaturedVideo(CATALOG);
  const videoAlert = null;

  return (
    <div>
      <div id="galleryApp">
        {videoAlert != null && (
          <Container>
            <Alert variant="danger" className="fade show m-2" role="alert">
              <strong>Error:</strong> Invalid video ID
            </Alert>
          </Container>
        )}
        {featuredVideo != null && (
          <>
            <h3 className="text-center mt-4">Featured Video</h3>
            <Container>
              <FeaturedContentCard
                content={featuredVideo}
                thumbnailGridSize={6}
              />
            </Container>
          </>
        )}

        <h3 className="text-center mt-4">Episodes</h3>

        <Container className="d-flex mt-3 mb-3">
          <ButtonGroup className="mx-auto" role="group">
            {Object.entries(CATALOG.seasons).map(([seasonName, season]) => (
              <React.Fragment key={seasonName}>
                <ButtonWithValue
                  id={seasonName}
                  variant="outline-primary"
                  active={activeSeason === seasonName}
                  value={seasonName as SeasonName}
                  onClick={setActiveSeason}
                >
                  {season.name}
                </ButtonWithValue>
              </React.Fragment>
            ))}
          </ButtonGroup>
        </Container>

        <Container className="mt-1">
          <Row>
            {sortEpisodes(
              CATALOG.seasons[activeSeason].episodes,
              activeSeason
            ).map((episode) => (
              <VideoCard
                key={episode.title}
                className="col-md-6 col-lg-3 my-3 mt-1"
                episode={episode}
                season={activeSeason}
              />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
