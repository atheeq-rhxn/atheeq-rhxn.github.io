"use client";

import { RootProvider } from "fumadocs-ui/provider/next";

export function AppProviders({ children }: { children: React.ReactNode }) {
	return <RootProvider search={{ enabled: true }}>{children}</RootProvider>;
}
