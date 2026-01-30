/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface AdminDocument {
  _id: string;
  _type: string;
  [key: string]: any;
}

export function useAdminDocumentActions() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createDocument = async (
    documentType: string,
    updates: Record<string, any> = {},
  ): Promise<AdminDocument> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/documents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create",
          documentType,
          updates,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create document: ${response.statusText}`);
      }

      const doc = await response.json();
      return doc;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateDocument = async (
    documentId: string,
    updates: Record<string, any>,
  ): Promise<AdminDocument> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/documents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update",
          documentId,
          updates,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update document: ${response.statusText}`);
      }

      const doc = await response.json();
      return doc;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const publishDocument = async (
    documentId: string,
    updates?: Record<string, any>,
  ): Promise<AdminDocument> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/documents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "publish",
          documentId,
          updates,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to publish document: ${response.statusText}`);
      }

      const doc = await response.json();
      return doc;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteDocument = async (documentId: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/documents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "delete",
          documentId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to delete document: ${response.statusText}`);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const discardChanges = async (documentId: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/documents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "discard",
          documentId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to discard changes: ${response.statusText}`);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createDocument,
    updateDocument,
    publishDocument,
    deleteDocument,
    discardChanges,
    loading,
    error,
  };
}
