import { memo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { LinkItemType } from "fumadocs-ui/layouts/shared";
import { baseOptions } from "@/lib/layout.shared";

export const Route = createFileRoute("/")({
  component: Home,
});

const DiscordIcon = memo(function DiscordIcon() {
  return (
    <span className="flex items-center">
      <img
        src="/Discord-Symbol-Black.svg"
        alt=""
        aria-hidden="true"
        className="h-5 w-5 dark:hidden"
      />
      <img
        src="/Discord-Symbol-White.svg"
        alt=""
        aria-hidden="true"
        className="hidden h-5 w-5 dark:block"
      />
    </span>
  );
});

const NAV_LINKS: LinkItemType[] = [
  { text: "Docs", url: "/docs" },
  {
    type: "icon",
    url: "https://discord.gg/CPjbDxesh5",
    label: "Discord",
    text: "Discord",
    external: true,
    icon: <DiscordIcon />,
  },
];


function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-var(--fd-nav-height,4rem))] items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 bg-[size:3rem_3rem] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-fd-muted-foreground">
            Wayland Compositor
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-fd-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Lightweight</span>
            <span className="block">
              &amp; <span className="text-fd-primary">Feature-Rich</span>
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-balance text-base text-fd-muted-foreground sm:text-lg md:text-xl lg:mx-0">
            MangoWM is a blazingly fast, lightweight, modern Wayland compositor.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/docs/$"
              params={{ _splat: "" }}
              className="rounded-full bg-fd-primary px-8 py-3 font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/10 transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>

            <a
              href="https://github.com/mangowm/mango"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-fd-border bg-fd-background/60 px-8 py-3 font-semibold text-fd-foreground backdrop-blur-md transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="w-full flex-1 lg:max-w-[55%]">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-fd-border bg-fd-background/50 shadow-sm" />
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <HomeLayout {...baseOptions()} links={NAV_LINKS}>
      <Hero />
    </HomeLayout>
  );
}
