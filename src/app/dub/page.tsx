import { Suspense } from "react";
import { ErrorToast } from "../components/ErrorToast";
import { ColoredHeader } from "../whyd/components/ColoredHeader";
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
        <div className="text-center pt-4 mt-3 pb-1">
          <ColoredHeader className="pb-0 mb-0">
            what have i dubbed
          </ColoredHeader>
        </div>
        <DubEpisodes className={styles.episodes} />
      </Suspense>
      <DubFooter />
    </>
  );
}
