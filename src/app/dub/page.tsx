import { Suspense } from "react";
import { ErrorToast } from "../components/ErrorToast";
import { DubEpisodes } from "./components/DubEpisodes";
import { DubFooter } from "./DubFooter";
import styles from "./page.module.scss";

export default async function Dub() {
  return (
    <>
      <Suspense>
        <ErrorToast />
      </Suspense>
      <Suspense>
        <DubEpisodes className={styles.episodes} />
      </Suspense>
      <DubFooter />
    </>
  );
}
