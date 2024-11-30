import { MAJOR_COLORS } from "@/utils/majorColors";
import { Metadata, Viewport } from "next";
import { CATALOG } from "../../catalog";
import { isSeasonName } from "../../types/SeasonName";
import {
  constructThumbnailUrlFromEpId,
  constructVideoUrlFromEpId,
} from "../../utils/utils";
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
    <div className="container mt-5">
      <VideoPlayer seasonName={season} content={episodeData} />
    </div>
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

  return {
    title: `Watching ${episodeData.title}`,
    openGraph: {
      title: episodeData.title,
      siteName: "whid.live",
      url: constructVideoUrlFromEpId(episode, season),
      type: "video.other",
      description: "what have i dubbed",
      videos: {
        width: 1920,
        height: 1080,
        type: "video/mp4",
        url: constructVideoUrlFromEpId(episode, season),
        secureUrl: constructVideoUrlFromEpId(episode, season),
      },

      images: {
        width: 1920,
        height: 1080,
        url: constructThumbnailUrlFromEpId(episode, season),
        secureUrl: constructThumbnailUrlFromEpId(episode, season),
      },
    },
    twitter: {
      card: "player",
      players: {
        height: 1080,
        playerUrl: constructVideoUrlFromEpId(episode, season),
        streamUrl: constructVideoUrlFromEpId(episode, season),
        width: 1920,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: MAJOR_COLORS[0],
};
