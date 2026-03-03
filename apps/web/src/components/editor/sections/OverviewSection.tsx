"use client";

import { ConfigSection } from "../ui/ConfigSection";
import { SliderRow } from "../ui/SliderRow";
import type { LayoutParams } from "../types";

interface Props {
  params: LayoutParams;
  onUpdate: (u: Partial<LayoutParams>) => void;
}

export function OverviewSection({ params, onUpdate }: Props) {
  const px = (v: number) => `${v}px`;
  return (
    <ConfigSection title="Overview">
      <SliderRow
        label="Gap Inner"
        value={params.overviewGapInner}
        min={0}
        max={40}
        step={5}
        onChange={(v) => onUpdate({ overviewGapInner: v })}
        formatValue={px}
      />
      <SliderRow
        label="Gap Outer"
        value={params.overviewGapOuter}
        min={0}
        max={80}
        step={5}
        onChange={(v) => onUpdate({ overviewGapOuter: v })}
        formatValue={px}
      />
    </ConfigSection>
  );
}
