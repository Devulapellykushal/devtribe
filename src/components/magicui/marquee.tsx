// src/components/magicui/marquee.tsx
import React, { PropsWithChildren } from "react";
import { cn } from "../../lib/util";

type MarqueeProps = PropsWithChildren<{
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}>;

export function Marquee({ reverse, pauseOnHover, className, children }: MarqueeProps) {
  return (
    <div
      className={cn(
        "marquee-row",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className
      )}
    >
      <div
        className={cn(
          "marquee-content",
          reverse && "reverse"
        )}
        aria-hidden="true"
      >
        {children}
        {children}
      </div>
    </div>
  );
}
