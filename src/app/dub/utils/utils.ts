import { Catalog, FeaturedVideo, Episode } from "../types/catalogTypes";
import { SeasonName } from "../types/SeasonName";

class VideoIDError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "VideoIDError";
  }
}

export function getFeaturedVideo(catalog: Catalog): FeaturedVideo & Episode {
  const data = getVideoDataFromID(
    catalog,
    catalog.featured.season,
    catalog.featured.id
  );
  return {
    ...catalog.featured,
    ...data,
  };
}

export function getVideoDataFromID(
  catalog: Catalog,
  season: SeasonName,
  id: string
) {
  const episodes = getEpisodesFromSeason(catalog, season);
  const episode = getEpisodeFromList(episodes, id);
  return episode;
}

export function getEpisodesFromSeason(catalog: Catalog, season: SeasonName) {
  return catalog.seasons[season].episodes;
}

export function sortEpisodes(
  episodes: ReadonlyArray<Episode>,
  seasonName: SeasonName
) {
  if (seasonName === "extra") {
    return [...episodes].reverse();
  }
  return episodes;
}

export function getEpisodeFromList(
  episodes: ReadonlyArray<Episode>,
  epid: string
) {
  for (const episode of episodes) {
    if (episode.id === epid) {
      return episode;
    }
  }
  throw new VideoIDError("Video ID not found in catalog");
}

export function constructWatchURL(ep: Episode, season: SeasonName) {
  return "/dub/" + season + "/" + ep.id + "";
}

export function constructThumbnailURL(ep: Episode, season: SeasonName) {
  return "https://12b3.pw/whid/thumbnails/" + season + "/" + ep.id + ".png";
}
