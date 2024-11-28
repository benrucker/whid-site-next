export const SeasonName = {
  SEASON_1: "s1",
  SEASON_2: "s2",
  SPECIALS: "special",
  EXTRAS: "extra",
} as const;
export type SeasonName = (typeof SeasonName)[keyof typeof SeasonName];

export function isSeasonName(name: string): name is SeasonName {
  return Object.values(SeasonName).includes(name as SeasonName);
}
