import { MAJOR_COLORS } from "@/utils/majorColors";
import classNames from "classnames";
import { Metadata, Viewport } from "next";
import Container from "react-bootstrap/esm/Container";
import { VideoPreviewCard } from "./components/VideoPreviewCard";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Container>
      <div>
        <div className="header mt-5 d-flex justify-content-center fw-bold align-items-center">
          <h1 className={classNames(styles.h1, "fw-bolder px-4 mb-0 pb-0")}>
            Hi!
          </h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/miniwyatt.png" alt="hi!" className="px-2" width="75" />
        </div>

        <div className={classNames(styles.welcome, "mt-5 mb-2 text-center")}>
          Welcome to <span className={styles.whid}>what have i done</span>
        </div>

        <div
          className={classNames(styles.description, "mt-5 text-center fs-5")}
        >
          We are a group of friends who make stupid videos.
        </div>
        <div className={classNames(styles.description, "mt-5 text-end fs-5")}>
          ...like, really stupid.
        </div>
      </div>

      <div className="featured mt-5 container">
        <VideoPreviewCard
          description="Click here to see them all!"
          // NOTE: We don't want to block other network resources by preloading the video
          preload="metadata"
          thumbnailLink="https://12b3.pw/whid/thumbnails/extra/context2.png"
          title="what have i dubbed Out of Context"
          videoLink="https://12b3.pw/whid/videos/extra/context2.mp4"
          videoPlayerLink="/dub"
        />
      </div>

      <br />
      <br />
      <br />
    </Container>
  );
}

export const metadata: Metadata = {
  title: "what have i done",
  description:
    "We are a group of friends who make stupid videos. Like, really stupid.",
  openGraph: {
    url: "whid.live",
    siteName: "whid.live",
    images: {
      url: "/favicon.ico",
      width: 64,
      height: 52,
    },
  },
  twitter: {
    card: "summary",
  },
};

export const viewport: Viewport = {
  themeColor: MAJOR_COLORS[0],
};
