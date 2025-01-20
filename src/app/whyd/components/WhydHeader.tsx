import Image from "next/image";
import React from "react";
import { ColoredHeader } from "./ColoredHeader";
import styles from "./WhydHeader.module.scss";
import youPng from "./you.png";

export const WhydHeader = React.memo(function WhydHeaderFn() {
  return (
    <div className={styles.textCenter}>
      <div className={styles.layout}>
        <div className={styles.imageContainer}>
          <Image
            alt="A hand pointing at you in front of the whid logo"
            src={youPng}
            width={100}
          />
        </div>
        <ColoredHeader>what have you done</ColoredHeader>
      </div>
      <h5 className={"text-center pt-3 pb-1 text-muted"}>
        A collection of &quot;Spotify Wrapped&quot; clones!
      </h5>
    </div>
  );
});
