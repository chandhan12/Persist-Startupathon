import { HoverEffect } from "./HoverEffect";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Stripe",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description: "A multinational technology company specializing in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description: "A technology company focusing on building products that advance connectivity.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and AI.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, and sells software and services.",
    link: "https://microsoft.com",
  },
];
