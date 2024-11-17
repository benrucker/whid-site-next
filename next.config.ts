import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "12b3.pw",
        pathname: "/whid/thumbnails/**",
      },
    ],
  },
  sassOptions: {
    // This will eventually be fixed by the Next team
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
