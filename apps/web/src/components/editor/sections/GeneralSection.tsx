"use client";

import { ConfigSection } from "../ui/ConfigSection";
import { SliderRow } from "../ui/SliderRow";
import type { LayoutParams } from "../types";

interface Props {
  params: LayoutParams;
  onUpdate: (u: Partial<LayoutParams>) => void;
}

export function GeneralSection({ params, onUpdate }: Props) {
  return (
    <ConfigSection title="General">
      <SliderRow
        label="Windows"
        value={params.windowCount}
        min={1}
        max={12}
        onChange={(v) => onUpdate({ windowCount: v, focusedWindow: v - 1 })}
      />
    </ConfigSection>
  );
}
