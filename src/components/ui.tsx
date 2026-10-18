import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "check"
  | "chevron"
  | "close"
  | "disc"
  | "headphones"
  | "home"
  | "menu"
  | "more"
  | "pause"
  | "play"
  | "proof"
  | "search"
  | "spark"
  | "star"
  | "wallet";

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    disc: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2" /></>,
    headphones: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M18 19h-1a2 2 0 0 1-2-2v-3h5v3a2 2 0 0 1-2 2ZM6 19H5a2 2 0 0 1-2-2v-3h5v3a2 2 0 0 1-2 2Z" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /></>,
    pause: <><path d="M9 5v14" /><path d="M15 5v14" /></>,
    play: <path d="m8 5 11 7-11 7Z" />,
    proof: <><path d="M12 3 4 7v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V7l-8-4Z" /><path d="m8.5 12 2.2 2.2 4.8-4.8" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    spark: <><path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" /><path d="m18.5 15 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" /></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
    wallet: <><path d="M4 6h14a2 2 0 0 1 2 2v10H4a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h12" /><path d="M16 11h4v4h-4a2 2 0 0 1 0-4Z" /></>,
  };
  return (
    <svg aria-hidden="true" className="icon" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">{paths[name]}</g>
    </svg>
  );
}

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`logo ${inverse ? "logo-inverse" : ""}`} aria-label="Make The Crate">
      <div className="mark"><b>M</b><b>T</b><strong>C<span>.</span></strong></div>
      <small>MAKE THE CRATE</small>
    </div>
  );
}

export function Button({
  children,
  className = "",
  icon,
  onClick,
  variant = "dark",
}: {
  children: ReactNode;
  className?: string;
  icon?: IconName;
  onClick?: () => void;
  variant?: "dark" | "orange" | "outline" | "ghost";
}) {
  return <button className={`btn btn-${variant} ${className}`} onClick={onClick}>{children}{icon && <Icon name={icon} />}</button>;
}

export function Pill({ children, active = false, onClick }: { children: ReactNode; active?: boolean; onClick?: () => void }) {
  return <button className={`pill ${active ? "active" : ""}`} onClick={onClick}>{children}</button>;
}
