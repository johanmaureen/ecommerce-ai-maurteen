// app/studio/[[...tool]]/page.tsx
"use client"; // This is a client component

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { StudioProvider, StudioLayout } from "sanity";
//export { metadata, viewport } from "next-sanity/studio";
export default function StudioPage() {
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  );
}
