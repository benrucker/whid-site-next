import Image from "next/image";
import React from "react";
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
        <h1 className="pb-2">
          <b>
            <i className={styles.titleText}>what have you done</i>
          </b>
        </h1>
      </div>
      <h5 className={"text-center pt-3 pb-1 text-muted"}>
        A collection of &quot;Spotify Wrapped&quot; clones!
      </h5>
    </div>
  );
});
