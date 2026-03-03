"use client";

import { useState, useCallback } from "react";
import { WindowRect } from "./WindowRect";
import { useLayoutRects } from "./hooks/useLayoutRects";
import {
  LAYOUTS,
  LAYOUT_KEYS,
  DEFAULT_LAYOUT_PARAMS,
  DEFAULT_MONITOR_PARAMS,
  type LayoutType,
  type LayoutParams,
  type MonitorParams,
} from "./types";
import { SECTION_COMPONENTS } from "./sections";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ConfigExportPanel } from "./ConfigExportPanel";

const PREVIEW_SCALE = 0.38;

function MonitorSection({
  monitor,
  onUpdate,
}: {
  monitor: MonitorParams;
  onUpdate: (u: Partial<MonitorParams>) => void;
}) {
  return (
    <div className="space-y-3.5">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Orientation
      </p>
      <div className="flex gap-1.5">
        <Button
          size="sm"
          variant={!monitor.isPortrait ? "default" : "outline"}
          className="h-10 flex-1 text-sm"
          onClick={() => onUpdate({ isPortrait: false })}
        >
          Horizontal
        </Button>
        <Button
          size="sm"
          variant={monitor.isPortrait ? "default" : "outline"}
          className="h-10 flex-1 text-sm"
          onClick={() => onUpdate({ isPortrait: true })}
        >
          Vertical
        </Button>
      </div>
    </div>
  );
}

export function Editor() {
  const [activeLayout, setActiveLayout] = useState<LayoutType>("tile");
  const [monitor, setMonitor] = useState<MonitorParams>(DEFAULT_MONITOR_PARAMS);
  const [params, setParams] = useState<LayoutParams>(DEFAULT_LAYOUT_PARAMS);

  const logicalWidth = monitor.isPortrait ? 1080 : 1920;
  const logicalHeight = monitor.isPortrait ? 1920 : 1080;
  const previewWidth = Math.round(logicalWidth * PREVIEW_SCALE);
  const previewHeight = Math.round(logicalHeight * PREVIEW_SCALE);

  const container = { width: previewWidth, height: previewHeight };
  const rects = useLayoutRects(activeLayout, container, params);
  const layoutInfo = LAYOUTS[activeLayout];

  const updateParams = useCallback(
    (u: Partial<LayoutParams>) => setParams((p) => ({ ...p, ...u })),
    [],
  );
  const updateMonitor = useCallback(
    (u: Partial<MonitorParams>) => setMonitor((m) => ({ ...m, ...u })),
    [],
  );

  return (
    <div className="flex h-full overflow-hidden rounded-lg border bg-background">
      <aside className="flex w-64 flex-shrink-0 flex-col border-r bg-muted/30">
        <div className="border-b p-4">
          <Label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Layout
          </Label>
          <Select value={activeLayout} onValueChange={(v) => setActiveLayout(v as LayoutType)}>
            <SelectTrigger className="h-10 text-base font-medium">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LAYOUT_KEYS.map((key) => (
                <SelectItem key={key} value={key} className="py-2 text-sm">
                  {LAYOUTS[key].name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-5 p-4">
              <MonitorSection monitor={monitor} onUpdate={updateMonitor} />

              {layoutInfo.sections.map((sectionId) => {
                const Section = SECTION_COMPONENTS[sectionId];
                return (
                  <Section
                    key={sectionId}
                    params={params}
                    onUpdate={updateParams}
                    hasMasterFactor={layoutInfo.hasMasterFactor}
                  />
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </aside>

      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-auto bg-muted/20 p-6">
          <div
            className="relative flex-shrink-0 overflow-hidden rounded-md border shadow-md"
            style={{ width: previewWidth, height: previewHeight }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "hsl(var(--muted))",
                backgroundImage:
                  "radial-gradient(hsl(var(--muted-foreground) / 0.2) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />
            <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center">
              <span className="font-mono text-base font-medium text-muted-foreground/20">
                {logicalWidth} × {logicalHeight}
              </span>
            </div>
            {rects.map((rect, i) => (
              <WindowRect
                key={i}
                rect={rect}
                focused={i === params.focusedWindow}
                label={`W${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Focus window</span>
            <div className="flex gap-2">
              {rects.map((_, i) => (
                <Button
                  key={i}
                  size="sm"
                  variant={i === params.focusedWindow ? "default" : "outline"}
                  className="h-8 w-8 p-0 font-mono text-sm"
                  onClick={() => updateParams({ focusedWindow: i })}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <ConfigExportPanel params={params} monitor={monitor} />
    </div>
  );
}
