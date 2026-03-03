"use client";

import { Separator } from "@/components/ui/separator";
import type { ReactNode } from "react";

interface ConfigSectionProps {
  title: string;
  children: ReactNode;
}

export function ConfigSection({ title, children }: ConfigSectionProps) {
  return (
    <div className="space-y-3.5">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </p>
      {children}
      <Separator />
    </div>
  );
}
