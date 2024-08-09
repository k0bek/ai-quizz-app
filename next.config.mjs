import { routes } from "./routes";

const nextConfig = {
  async redirects() {
    return [
      {
        source: routes.root,
        destination: routes.signIn,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
