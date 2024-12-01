import { Suspense } from "react";
import { Container } from "react-bootstrap";
import { ErrorToast } from "../components/ErrorToast";
import { CATALOG } from "./catalog";
import { DubEpisodes } from "./components/DubEpisodes";
import { FeaturedEpisodeCard } from "./components/FeaturedEpisodeCard";
import styles from "./page.module.scss";
import { getFeaturedVideo } from "./utils/utils";

export default async function Dub() {
  const featuredVideo = getFeaturedVideo(CATALOG);

  return (
    <>
      <Suspense>
        <ErrorToast />
      </Suspense>

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

      <Suspense>
        <DubEpisodes className={styles.episodes} />
      </Suspense>
    </>
  );
}
