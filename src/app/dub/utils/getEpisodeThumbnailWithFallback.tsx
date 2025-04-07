import { Episode } from "../types/catalogTypes";
import { SeasonName } from "../types/SeasonName";
import { isEpisodeUnreleased } from "./isEpisodeUnreleased";
import { constructThumbnailURL } from "./utils";

export function getEpisodeThumbnailWithFallback(
  episode: Episode,
  season: SeasonName
) {
  const isUnreleased = isEpisodeUnreleased(episode);

  if (isUnreleased) {
    return "/miniwyatt.png";
  }

  return constructThumbnailURL(episode, season);
}
