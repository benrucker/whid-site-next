import classNames from "classnames";
import Link from "next/link";
import React from "react";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Container from "react-bootstrap/esm/Container";
import { CATALOG } from "../catalog";
import { SeasonName } from "../types/SeasonName";

interface Props {
  readonly activeSeason: SeasonName;
  readonly onChange: (season: SeasonName) => void;
}

export const SeasonSwitcher = React.memo<Props>(function SeasonSwitcherFn({
  activeSeason,
  onChange,
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
              onClick={() => onChange(otherSeasonName as SeasonName)}
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
