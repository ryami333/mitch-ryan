import { createFileRoute } from "@tanstack/react-router";
import App from "../components/App";

export const Route = createFileRoute("/")({
  head: () => {
    // `URL` is provided by the deploy environment. The head function runs on
    // both the server and the client, but `process` only exists on the server,
    // so guard the access. The canonical tag only matters for crawlers (SSR).
    const url = typeof process !== "undefined" ? process.env.URL : undefined;

    return {
      meta: [{ title: "Mitch Ryan | Kiwi Developer" }],
      links: url ? [{ rel: "canonical", href: new URL(url).href }] : [],
    };
  },
  component: App,
});
