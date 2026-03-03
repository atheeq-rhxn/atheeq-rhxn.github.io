import type { ComponentType } from "react";
import type { SectionId, LayoutParams } from "../types";
import { GeneralSection } from "./GeneralSection";
import { GapsSection } from "./GapsSection";
import { MasterSection } from "./MasterSection";
import { CenterTileSection } from "./CenterTileSection";
import { ScrollerSection } from "./ScrollerSection";
import { OverviewSection } from "./OverviewSection";

export interface SectionProps {
  params: LayoutParams;
  onUpdate: (patch: Partial<LayoutParams>) => void;
  hasMasterFactor?: boolean;
}

export const SECTION_COMPONENTS: Record<SectionId, ComponentType<SectionProps>> = {
  general: GeneralSection,
  gaps: GapsSection,
  master: MasterSection,
  centerTile: CenterTileSection,
  scroller: ScrollerSection,
  overview: OverviewSection,
};
