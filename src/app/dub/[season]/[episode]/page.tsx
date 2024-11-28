import { CATALOG } from "../../catalog";
import { isSeasonName } from "../../types/SeasonName";
import { VideoPlayer } from "./components/VideoPlayer";

interface Props {
  params: Promise<{ season: string; episode: string }>;
}

export default async function Dub({ params }: Props) {
  const { season, episode } = await params;

  if (!isSeasonName(season)) {
    throw new Error("Invalid season");
  }

  const episodeData = CATALOG.seasons[season].episodes.find(
    ({ id }) => id === episode
  );

  if (episodeData == null) {
    throw new Error("Invalid episode");
  }

  return (
    <>
      <div className="container mt-5">
        <VideoPlayer seasonName={season} content={episodeData} />
      </div>
    </>
  );
}

export function generateStaticParams() {
  const routes = [];

  for (const [seasonId, season] of Object.entries(CATALOG.seasons)) {
    for (const episode of season.episodes) {
      routes.push({
        episode: episode.id,
        season: seasonId,
      });
    }
  }

  return routes;
}
