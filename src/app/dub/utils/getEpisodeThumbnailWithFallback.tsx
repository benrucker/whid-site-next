import { Episode } from "../types/catalogTypes";
import { SeasonName } from "../types/SeasonName";
import { constructThumbnailURL } from "./utils";

export function getEpisodeThumbnail(episode: Episode, season: SeasonName) {
  return constructThumbnailURL(episode, season);
}

export function getFallbackThumbnail() {
  return "./miniwyatt.png";
}
