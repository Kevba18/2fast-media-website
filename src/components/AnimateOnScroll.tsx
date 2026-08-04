import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export default function AnimateOnScroll({ children, delay = 0, className = "", y = 28 }: Props) {
  void delay;
  void y;

  return (
    <div className={className}>
      {children}
    </div>
  );
}
