import { writeClient } from "@/sanity/lib/client";

export async function POST(request: Request) {
  try {
    const { action, documentId, documentType, updates } = await request.json();

    switch (action) {
      case "create": {
        const doc = await writeClient.create({
          _type: documentType,
          ...updates,
        });
        return Response.json(doc);
      }

      case "update": {
        const doc = await writeClient.patch(documentId).set(updates).commit();
        return Response.json(doc);
      }

      case "publish": {
        // Get the draft version
        const draftId = documentId.startsWith("drafts.")
          ? documentId
          : `drafts.${documentId}`;
        const baseId = documentId.replace("drafts.", "");

        // Copy draft to published
        const doc = await writeClient
          .patch(baseId)
          .set(updates || {})
          .commit();

        // Delete the draft
        await writeClient.delete(draftId);

        return Response.json(doc);
      }

      case "delete": {
        const baseId = documentId.replace("drafts.", "");
        await writeClient.delete(`drafts.${baseId}`);
        await writeClient.delete(baseId);
        return Response.json({ success: true });
      }

      case "discard": {
        const draftId = documentId.startsWith("drafts.")
          ? documentId
          : `drafts.${documentId}`;
        await writeClient.delete(draftId);
        return Response.json({ success: true });
      }

      default:
        return Response.json({ error: "Unknown action" }, { status: 400 });
    }
  } catch (error) {
    console.error("Admin operation failed:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
