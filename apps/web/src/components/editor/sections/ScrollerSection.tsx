"use client";

import { ConfigSection } from "../ui/ConfigSection";
import { SliderRow } from "../ui/SliderRow";
import { SwitchRow } from "../ui/SwitchRow";
import type { LayoutParams } from "../types";

interface Props {
  params: LayoutParams;
  onUpdate: (u: Partial<LayoutParams>) => void;
}

export function ScrollerSection({ params, onUpdate }: Props) {
  const pct = (v: number) => `${Math.round(v * 100)}%`;
  return (
    <ConfigSection title="Scroller">
      <SliderRow
        label="Structs"
        value={params.scrollerStructs}
        min={0}
        max={100}
        step={5}
        onChange={(v) => onUpdate({ scrollerStructs: v })}
      />
      <SliderRow
        label="Proportion"
        value={params.scrollerDefaultProportion}
        min={0.3}
        max={1.0}
        step={0.1}
        onChange={(v) => onUpdate({ scrollerDefaultProportion: v })}
        formatValue={pct}
      />
      <SliderRow
        label="Single"
        value={params.scrollerDefaultProportionSingle}
        min={0.3}
        max={1.0}
        step={0.1}
        onChange={(v) => onUpdate({ scrollerDefaultProportionSingle: v })}
        formatValue={pct}
      />
      <SwitchRow
        label="Ignore Single"
        checked={params.scrollerIgnoreSingle}
        onCheckedChange={(v) => onUpdate({ scrollerIgnoreSingle: v })}
      />
      <SwitchRow
        label="Focus Center"
        checked={params.scrollerFocusCenter}
        onCheckedChange={(v) => onUpdate({ scrollerFocusCenter: v })}
      />
      <SwitchRow
        label="Prefer Center"
        checked={params.scrollerPreferCenter}
        onCheckedChange={(v) => onUpdate({ scrollerPreferCenter: v })}
      />
      <SwitchRow
        label="Prefer Overspread"
        checked={params.scrollerPreferOverspread}
        onCheckedChange={(v) => onUpdate({ scrollerPreferOverspread: v })}
      />
    </ConfigSection>
  );
}
