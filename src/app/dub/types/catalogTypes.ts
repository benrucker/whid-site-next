import { SeasonById } from "./SeasonById";
import { SeasonName } from "./SeasonName";
import { Timestamp } from "./timestamp";

export interface Catalog {
  readonly featured: FeaturedVideo;
  readonly seasons: SeasonById;
}

export interface FeaturedVideo {
  readonly description: string;
  readonly id: string;
  readonly season: SeasonName;
}

export interface Season {
  readonly episodes: ReadonlyArray<Episode>;
  readonly name: string;
}

export type Episode = BaseEpisode & (WithParts | WithChapters);

interface BaseEpisode {
  readonly description?: string;
  readonly id: string;
  readonly releaseDate?: string;
  readonly title: string;
}

interface WithParts {
  readonly parts?: ReadonlyArray<Part>;
}

interface WithChapters {
  readonly chapters?: ReadonlyArray<Chapter>;
}

export interface Part {
  readonly members: string;
  readonly timestamp: Timestamp;
}

export interface Chapter {
  readonly label: string;
  readonly subChapters?: ReadonlyArray<Chapter>;
  readonly timestamp: Timestamp;
}
