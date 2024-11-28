import { Container } from "react-bootstrap";
import { FeaturedContentCard } from "../dub/components/FeaturedContentCard";
import { WhydHeader } from "./components/WhydHeader";
import whyd2021Image from "./construction.png";
import anniversaryImage from "./ethan.png";
import whyd2022Image from "./gitcommit.png";

export default function Whyd() {
  return (
    <div>
      <Container className="pt-5">
        <WhydHeader />
        <div className="layout pt-4">
          <FeaturedContentCard
            description='The most recent installment of "what have you done." This rendition included a massive increase in scope, roping in 2 other devs and including a plotline, cameo appearances, and a second act.'
            href="https://whyd22.whid.live"
            subtitle="Released 1/1/2023"
            thumbnailGridSize={5}
            thumbnailUrl={whyd2022Image}
            title="whyd22"
          />
          <FeaturedContentCard
            className="mt-5"
            description="The first entry in the yearly series, this experience was built in a rush at the end of the year. It was shown off at the infamous 2021 LAN party."
            href="https://whyd21.whid.live"
            subtitle="Released 12/30/2021"
            thumbnailGridSize={5}
            thumbnailUrl={whyd2021Image}
            title="whyd21"
          />
          <FeaturedContentCard
            className="mt-5 mb-5"
            description="To celebrate 5 years of chatting on Discord, this website briefly documented the history of the server, some overall statics, and included a small personalized section for each user at the end."
            // TODO: Make this point to whbd.whid.live
            href="https://12b3.pw/whid/whbd/"
            subtitle="Released 4/26/2021"
            thumbnailGridSize={5}
            thumbnailUrl={anniversaryImage}
            title="5-year Anniversary Lookback"
          />
        </div>
      </Container>
    </div>
  );
}
