import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { ButtonGroup, Container } from "react-bootstrap";
import { CATALOG } from "../catalog";
import { SeasonName } from "../types/SeasonName";

interface Props {
  readonly activeSeason: SeasonName;
}

export const SeasonSwitcher = React.memo<Props>(function SeasonSwitcherFn({
  activeSeason,
}) {
  return (
    <Container className="d-flex mt-3 mb-3">
      <ButtonGroup className="mx-auto" role="group">
        {Object.entries(CATALOG.seasons).map(
          ([otherSeasonName, seasonData]) => (
            <Link
              key={otherSeasonName}
              id={otherSeasonName}
              className={classNames("btn btn-outline-primary", {
                active: activeSeason === otherSeasonName,
              })}
              href={`/dub?season=${otherSeasonName}`}
              prefetch={true}
              scroll={false}
            >
              {seasonData.name}
            </Link>
          )
        )}
      </ButtonGroup>
    </Container>
  );
});
