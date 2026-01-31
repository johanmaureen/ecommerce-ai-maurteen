export const revalidate = 0;

import SanityAppProvider from "@/components/providers/SanityAppProvider";
import AdminLayoutClient from "./AdminLayoutClient";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SanityAppProvider>
      <AdminLayoutClient>{children}</AdminLayoutClient>
    </SanityAppProvider>
  );
}
