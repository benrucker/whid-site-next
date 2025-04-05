import { Episode } from "../types/catalogTypes";

export function isEpisodeUnreleased({ releaseDate }: Episode) {
  if (releaseDate == null) return false;

  return getIsReleaseDateInFuture(releaseDate);
}

export function getIsReleaseDateInFuture(releaseDate: string) {
  return getDateFromCatalogReleaseDate(releaseDate).getTime() > Date.now();
}

function getDateFromCatalogReleaseDate(catalogReleaseDate: string) {
  const [month, day, year] = catalogReleaseDate.split("/");
  const date = new Date();
  date.setFullYear(Number(year), Number(month), Number(day));
  return date;
}
