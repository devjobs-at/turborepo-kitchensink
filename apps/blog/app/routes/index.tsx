import { Link } from "@remix-run/react";
import { CounterButton, NewTabLink } from "ui";

export const config = { runtime: 'edge' };

export default function Index() {
  return (
    <div className="container">
      <h1 className="title">
        Blog <br />
        <span>Kitchen Sink</span>
      </h1>
      <Link to="/og">Vercel OG Image</Link>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink> +{" "}
        <NewTabLink href="https://remix.run/">Remix</NewTabLink>
      </p>
    </div>
  );
}
