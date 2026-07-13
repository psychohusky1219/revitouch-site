import type { Metadata } from "next";
import { PageShell } from "../../components/SiteChrome";
import { ScheduleSwitcher } from "./ScheduleSwitcher";
import { getSiteContent } from "../../cms";

export const metadata: Metadata = {
  title: "Schedule Your Treatment | ReviTouch NYC",
  description: "Choose a ReviTouch service, date, and appointment time without leaving the booking page.",
};

export default async function SchedulePage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service = "15-min-treatment" } = await searchParams;
  const {appointments}=await getSiteContent();
  const bookingOptions=appointments.filter((option)=>option.showOnBookingPage!==false&&option.calendarUrl).map((option)=>({...option,calendarUrl:option.calendarUrl!}));
  return <PageShell><ScheduleSwitcher initialSlug={service} bookingOptions={bookingOptions} /></PageShell>;
}
