"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface SwitchRowProps {
  label: string;
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
}

export function SwitchRow({ label, checked, onCheckedChange }: SwitchRowProps) {
  return (
    <div className="flex items-center justify-between">
      <Label className="cursor-pointer text-sm text-muted-foreground">{label}</Label>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}
