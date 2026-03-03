"use client";

import { ConfigSection } from "../ui/ConfigSection";
import { SliderRow } from "../ui/SliderRow";
import { SwitchRow } from "../ui/SwitchRow";
import type { LayoutParams } from "../types";

interface Props {
  params: LayoutParams;
  onUpdate: (u: Partial<LayoutParams>) => void;
  hasMasterFactor?: boolean;
}

export function MasterSection({ params, onUpdate, hasMasterFactor = true }: Props) {
  const pct = (v: number) => `${Math.round(v * 100)}%`;
  return (
    <ConfigSection title="Master Area">
      <SliderRow
        label="Count"
        value={params.masterCount}
        min={0}
        max={12}
        onChange={(v) => onUpdate({ masterCount: v })}
      />
      {hasMasterFactor && (
        <SliderRow
          label="Factor"
          value={params.masterFactor}
          min={0.2}
          max={0.8}
          step={0.05}
          onChange={(v) => onUpdate({ masterFactor: v })}
          formatValue={pct}
        />
      )}
      <SwitchRow
        label="New is Master"
        checked={params.newIsMaster}
        onCheckedChange={(v) => onUpdate({ newIsMaster: v })}
      />
    </ConfigSection>
  );
}
