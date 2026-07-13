"use client";

import { useState } from "react";
import { bookingOptions } from "../services";

export function ScheduleSwitcher({ initialSlug }: { initialSlug: string }) {
  const initialOption = bookingOptions.find((option) => option.slug === initialSlug) ?? bookingOptions[0];
  const [selectedSlug, setSelectedSlug] = useState<string>(initialOption.slug);
  const selectedOption = bookingOptions.find((option) => option.slug === selectedSlug) ?? bookingOptions[0];

  function changeService(nextSlug: string) {
    setSelectedSlug(nextSlug);
    window.history.replaceState(null, "", `/book/schedule?service=${nextSlug}`);
  }

  return <>
    <section className="schedule-heading">
      <p className="eyebrow">Select a date and time</p>
      <h1>Schedule your treatment.</h1>
      <p>Choose another service at any time. The calendar will update immediately without sending you back to the previous page.</p>
    </section>

    <section className="schedule-panel">
      <div className="service-switcher">
        <div><span>Service details</span><strong>{selectedOption.name}</strong><small>{selectedOption.duration} · {selectedOption.price}</small></div>
        <label htmlFor="service-choice">Choose a service<select id="service-choice" value={selectedSlug} onChange={(event) => changeService(event.target.value)}>{bookingOptions.map((option) => <option value={option.slug} key={option.slug}>{option.name} — {option.duration} — {option.price}</option>)}</select></label>
      </div>

      <div className="calendar-frame-wrap">
        <iframe key={selectedOption.slug} className="calendar-frame" src={selectedOption.calendarUrl} title={`${selectedOption.name} booking calendar`} allow="payment" />
      </div>

      <p className="calendar-fallback">Calendar not showing? <a href={selectedOption.calendarUrl}>Open this appointment calendar directly</a>.</p>
    </section>
  </>;
}
