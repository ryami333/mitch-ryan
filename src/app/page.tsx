import React from "react";
import App from "../components/App";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitch Ryan | Kiwi Developer",
  alternates: {
    canonical: new URL(process.env.URL ?? ""),
  },
};

export default function Page() {
  return <App />;
}
