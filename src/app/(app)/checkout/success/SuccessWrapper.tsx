"use client";

import dynamic from "next/dynamic";

const SuccessClient = dynamic(
  () =>
    import("./SuccessClient").then((mod) => ({ default: mod.SuccessClient })),
  {
    ssr: false,
  },
);

interface SuccessWrapperProps {
  session: {
    id: string;
    customerEmail?: string | null;
    customerName?: string | null;
    amountTotal?: number | null;
    paymentStatus: string;
    shippingAddress?: {
      line1?: string | null;
      line2?: string | null;
      city?: string | null;
      state?: string | null;
      postal_code?: string | null;
      country?: string | null;
    } | null;
    lineItems?: {
      name?: string | null;
      quantity?: number | null;
      amount: number;
    }[];
  };
}

export function SuccessWrapper({ session }: SuccessWrapperProps) {
  return <SuccessClient session={session} />;
}
