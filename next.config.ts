import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pomo Tab privacy policy, linked from the Chrome Web Store and Google OAuth consent screen
  async rewrites() {
    return [{ source: "/pomo-tab/privacy", destination: "/pomo-tab/privacy.html" }];
  },
};

export default nextConfig;
