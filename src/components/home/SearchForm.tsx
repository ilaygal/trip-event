"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EVENT_TYPES = [
  { value: "all", label: "הכל" },
  { value: "concert", label: "הופעות" },
  { value: "sport", label: "ספורט" },
  { value: "theater", label: "מחזות זמר" },
  { value: "festival", label: "פסטיבלים" },
];

const DESTINATIONS = [
  { value: "", label: "לאן טסים?" },
  { value: "europe", label: "אירופה" },
  { value: "uk", label: "אנגליה" },
  { value: "spain", label: "ספרד" },
  { value: "france", label: "צרפת" },
  { value: "italy", label: "איטליה" },
  { value: "germany", label: "גרמניה" },
  { value: "netherlands", label: "הולנד" },
];

const BUDGETS = [
  { value: "", label: "תקציב" },
  { value: "1000", label: "עד €1,000" },
  { value: "2000", label: "עד €2,000" },
  { value: "3000", label: "עד €3,000" },
  { value: "5000", label: "עד €5,000" },
  { value: "999999", label: "ללא הגבלה" },
];

export default function SearchForm() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [eventType, setEventType] = useState("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (budget) params.set("budget", budget);
    if (eventType !== "all") params.set("eventType", eventType);
    if (dateFrom) params.set("dateFrom", dateFrom);
    if (dateTo) params.set("dateTo", dateTo);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Destination */}
        <div>
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-text mb-1"
          >
            יעד
          </label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text bg-surface focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          >
            {DESTINATIONS.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-text mb-1"
          >
            תקציב
          </label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text bg-surface focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          >
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </div>

        {/* Event Type */}
        <div>
          <label
            htmlFor="eventType"
            className="block text-sm font-medium text-text mb-1"
          >
            סוג אירוע
          </label>
          <select
            id="eventType"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text bg-surface focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          >
            {EVENT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date From */}
        <div>
          <label
            htmlFor="dateFrom"
            className="block text-sm font-medium text-text mb-1"
          >
            מתאריך
          </label>
          <input
            type="date"
            id="dateFrom"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text bg-surface focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
        </div>

        {/* Date To */}
        <div>
          <label
            htmlFor="dateTo"
            className="block text-sm font-medium text-text mb-1"
          >
            עד תאריך
          </label>
          <input
            type="date"
            id="dateTo"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text bg-surface focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-light text-primary font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
      >
        מצא לי את החופשה המושלמת ✈
      </button>
    </form>
  );
}
