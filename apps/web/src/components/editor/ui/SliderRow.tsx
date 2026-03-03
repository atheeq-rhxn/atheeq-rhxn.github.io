"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface SliderRowProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  formatValue?: (v: number) => string;
  onChange: (v: number) => void;
}

export function SliderRow({
  label,
  value,
  min,
  max,
  step = 1,
  formatValue,
  onChange,
}: SliderRowProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-sm text-muted-foreground">{label}</Label>
        <span className="w-12 text-right font-mono text-sm tabular-nums text-foreground">
          {formatValue ? formatValue(value) : value}
        </span>
      </div>
      <div className="[&_[data-slider-track]]:h-[3px] [&_[data-slider-thumb]]:h-3 [&_[data-slider-thumb]]:w-3">
        <Slider
          min={min}
          max={max}
          step={step}
          value={value}
          onValueChange={(v: number | readonly number[]) =>
            onChange(Array.isArray(v) ? (v as number[])[0] : (v as number))
          }
        />
      </div>
    </div>
  );
}
