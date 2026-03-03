"use client";

import { ConfigSection } from "../ui/ConfigSection";
import { SwitchRow } from "../ui/SwitchRow";
import type { LayoutParams } from "../types";

interface Props {
  params: LayoutParams;
  onUpdate: (u: Partial<LayoutParams>) => void;
}

export function CenterTileSection({ params, onUpdate }: Props) {
  return (
    <ConfigSection title="Center Tile">
      <SwitchRow
        label="Overspread"
        checked={params.centerMasterOverspread}
        onCheckedChange={(v) => onUpdate({ centerMasterOverspread: v })}
      />
      <SwitchRow
        label="Center When Single"
        checked={params.centerWhenSingleStack}
        onCheckedChange={(v) => onUpdate({ centerWhenSingleStack: v })}
      />
    </ConfigSection>
  );
}
