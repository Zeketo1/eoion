import React from "react";
import { Spotlight } from "../ui/spotlight";
import { BackgroundBeams } from "../ui/background-beams";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function Banner() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center font-heading antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#1E90FF"
      />
      <BackgroundBeams />
      <TypewriterEffectSmooth words={words} className="z-[100]" />
    </div>
  );
}
