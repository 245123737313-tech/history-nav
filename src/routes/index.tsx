import { createFileRoute } from "@tanstack/react-router";
import CodingTrack from "./coding-track";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <CodingTrack />;
}
