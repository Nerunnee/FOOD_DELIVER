import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    ADMINJWT: process.env.ADMINJWT,
  },
};

export default nextConfig;
