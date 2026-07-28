import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages. Repo is a user page (yvoolab.github.io),
  // served from the domain root, so no basePath is needed.
  output: "export",
  // Emit out/tools/index.html rather than out/tools.html, so /tools/ resolves
  // on GitHub Pages' plain static file server.
  trailingSlash: true,
};

export default nextConfig;
