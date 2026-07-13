import type { Metadata } from "next";
import { PageShell } from "../../components/SiteChrome";
import { ScheduleSwitcher } from "./ScheduleSwitcher";

export const metadata: Metadata = {
  title: "Schedule Your Treatment | ReviTouch NYC",
  description: "Choose a ReviTouch service, date, and appointment time without leaving the booking page.",
};

export default async function SchedulePage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service = "15-min-treatment" } = await searchParams;
  return <PageShell><ScheduleSwitcher initialSlug={service} /></PageShell>;
}
