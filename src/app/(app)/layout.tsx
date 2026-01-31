import { AppShell } from "@/components/app/AppShell";
import { Header } from "@/components/app/Header";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";

export const dynamic = "force-dynamic";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ClientProviders>
        <AppShell>
          <Header />
          <main>{children}</main>
        </AppShell>
      </ClientProviders>
      <SanityLive />
    </ClerkProvider>
  );
}
export default AppLayout;
