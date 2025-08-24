import React from "react";
import "./OrbitingCircles.css";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  return (
    <div className={`orbiting-circles-wrapper ${className || ""}`}>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width={radius * 2}
          height={radius * 2}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={`animate-orbit ${reverse ? "reverse" : ""}`}
          {...props}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
