"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, Package, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { useAdminDocumentActions } from "@/hooks/useAdminDocumentActions";

function InventoryContent() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { createDocument } = useAdminDocumentActions();

  const handleCreateProduct = () => {
    startTransition(async () => {
      try {
        const newProduct = await createDocument("product", {
          name: "New Product",
          slug: {
            _type: "slug",
            current: `product-${Date.now()}`,
          },
        });
        router.push(`/admin/inventory/${newProduct._id}`);
      } catch (error) {
        console.error("Failed to create product:", error);
      }
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Inventory
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 sm:text-base">
            Manage your product stock and pricing
          </p>
        </div>
        <Button
          onClick={handleCreateProduct}
          disabled={isPending}
          className="w-full sm:w-auto"
        >
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Plus className="mr-2 h-4 w-4" />
          )}
          New Product
        </Button>
      </div>

      {/* Product List */}
      <EmptyState
        icon={Package}
        title="Inventory Feature Coming Soon"
        description="Product editing is being migrated. Please use the Sanity Studio to manage products."
        action={{
          label: "Open Sanity Studio",
          onClick: () => router.push("/studio"),
        }}
      />
    </div>
  );
}

export default function InventoryPage() {
  return <InventoryContent />;
}
