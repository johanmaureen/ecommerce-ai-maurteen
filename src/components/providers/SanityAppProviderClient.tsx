"use client";

import SanityAppProvider from "@/components/providers/SanityAppProvider";

export default function SanityAppProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SanityAppProvider>{children}</SanityAppProvider>;
}
