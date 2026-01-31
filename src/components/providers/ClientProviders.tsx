"use client";

import { CartSheet } from "@/components/app/CartSheet";
import { ChatSheet } from "@/components/app/ChatSheet";
import { Toaster } from "@/components/ui/sonner";
import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { ChatStoreProvider } from "@/lib/store/chat-store-provider";
import SanityAppProviderClient from "@/components/providers/SanityAppProviderClient";

interface ClientProvidersProps {
  children: React.ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <SanityAppProviderClient>
      <CartStoreProvider>
        <ChatStoreProvider>
          {children}
          <CartSheet />
          <ChatSheet />
          <Toaster position="bottom-center" />
        </ChatStoreProvider>
      </CartStoreProvider>
    </SanityAppProviderClient>
  );
}
