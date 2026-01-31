export const metadata = {
  title: "Checkout | Furniture Shop",
  description: "Complete your purchase",
};

// Prevent prerendering since this page uses client-only hooks (useCartItems, etc.)
export const dynamic = "force-dynamic";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
