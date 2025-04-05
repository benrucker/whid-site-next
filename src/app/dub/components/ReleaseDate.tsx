import React from "react";

interface Props {
  readonly releaseDate: string;
}

export const ReleaseDate = React.memo<Props>(function ReleaseDateFn({
  releaseDate,
}) {
  const isReleaseDateInFuture =
    getDateFromCatalogReleaseDate(releaseDate).getTime() > Date.now();

  return (
    <>
      {isReleaseDateInFuture ? "Releasing" : "Released"} {releaseDate}
    </>
  );
});

function getDateFromCatalogReleaseDate(catalogReleaseDate: string) {
  const [month, day, year] = catalogReleaseDate.split("/");
  const date = new Date();
  date.setFullYear(Number(year), Number(month), Number(day));
  return date;
}
