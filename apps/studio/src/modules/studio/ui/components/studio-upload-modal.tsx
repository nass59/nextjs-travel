"use client";

import { PlusIcon } from "lucide-react";

import { Button } from "@workspace/design-system/components/ui/button";

export const StudioUploadModal = () => {
  return (
    <Button variant="secondary">
      <PlusIcon />
      Create
    </Button>
  );
};
