import styles from "./page.module.scss";
import { Alert, Container } from "react-bootstrap";
import { CATALOG } from "./catalog";
import { FeaturedEpisodeCard } from "./components/FeaturedEpisodeCard";
import { getFeaturedVideo } from "./utils/utils";
import { DubEpisodes } from "./components/DubEpisodes";
import { SeasonName } from "./types/SeasonName";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Dub({ searchParams }: Props) {
  const featuredVideo = getFeaturedVideo(CATALOG);
  const videoAlert = null;

  const activeSeason =
    ((await searchParams)?.season as SeasonName) ?? SeasonName.SEASON_1;

  return (
    <>
      {videoAlert != null && (
        <Container>
          <Alert variant="danger" className="fade show m-2" role="alert">
            <strong>Error:</strong> Invalid video ID
          </Alert>
        </Container>
      )}
      {featuredVideo != null && (
        <>
          <h3 className="text-center mt-4">Featured Video</h3>
          <Container>
            <FeaturedEpisodeCard
              content={featuredVideo}
              thumbnailGridSize={6}
            />
          </Container>
        </>
      )}

      <DubEpisodes className={styles.episodes} season={activeSeason} />
    </>
  );
}
