import { notFound } from "next/navigation";
import type { HotDeal } from "@/lib/types";
import hotDealsData from "@/data/hot-deals.json";
import TripTimeline from "@/components/trip/TripTimeline";
import BookingOptions from "@/components/trip/BookingOptions";

const deals = hotDealsData as HotDeal[];

interface TripPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return deals.map((deal) => ({ id: deal.id }));
}

export async function generateMetadata({ params }: TripPageProps) {
  const { id } = await params;
  const deal = deals.find((d) => d.id === id);
  if (!deal) return { title: "דיל לא נמצא" };
  return {
    title: `${deal.title} | TripEvent`,
    description: `${deal.title} - ${deal.destination}. ${deal.highlights.join(", ")}`,
  };
}

export default async function TripPage({ params }: TripPageProps) {
  const { id } = await params;
  const deal = deals.find((d) => d.id === id);

  if (!deal) {
    notFound();
  }

  const eventDate = new Date(deal.event.date);
  const dayBefore = new Date(eventDate);
  dayBefore.setDate(dayBefore.getDate() - 1);
  const dayAfter = new Date(eventDate);
  dayAfter.setDate(dayAfter.getDate() + 1);

  const formatDate = (d: Date) =>
    d.toLocaleDateString("he-IL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const timeline = [
    {
      dayNumber: 1,
      date: formatDate(dayBefore),
      title: "יום הגעה",
      activities: [
        {
          time: "בוקר",
          title: "טיסה ליעד",
          description: `טיסה מתל אביב ל${deal.destination}`,
          type: "flight" as const,
        },
        {
          time: "צהריים",
          title: "צ'ק-אין במלון",
          description: `הגעה למלון ב${deal.destination}`,
          type: "hotel" as const,
        },
        {
          time: "אחר הצהריים",
          title: "זמן חופשי בעיר",
          description: "סיור עצמאי, שופינג, ארוחת ערב",
          type: "free-time" as const,
        },
      ],
    },
    {
      dayNumber: 2,
      date: formatDate(eventDate),
      title: "יום האירוע! 🎉",
      activities: [
        {
          time: "בוקר",
          title: "זמן חופשי",
          description: "ארוחת בוקר במלון וסיור בעיר",
          type: "free-time" as const,
        },
        {
          time: "ערב",
          title: deal.event.name,
          description: `${deal.event.venue} — האירוע המרכזי של הטיול!`,
          type: "event" as const,
        },
      ],
    },
    {
      dayNumber: deal.durationDays,
      date: formatDate(dayAfter),
      title: "יום חזרה",
      activities: [
        {
          time: "בוקר",
          title: "צ'ק-אאוט מהמלון",
          description: "ארוחת בוקר אחרונה וצ'ק-אאוט",
          type: "hotel" as const,
        },
        {
          time: "צהריים",
          title: "טיסת חזרה",
          description: "טיסה חזרה לתל אביב",
          type: "flight" as const,
        },
      ],
    },
  ];

  const eventTypeEmoji: Record<string, string> = {
    concert: "🎵",
    sport: "⚽",
    theater: "🎭",
    festival: "🎪",
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-primary-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-5xl mb-4 block">
              {eventTypeEmoji[deal.event.type]}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {deal.title}
            </h1>
            <p className="text-xl text-white/80 mb-2">{deal.destination}</p>
            <p className="text-lg text-white/70">
              {deal.durationDays} ימים ·{" "}
              {new Date(deal.event.date).toLocaleDateString("he-IL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <div className="mt-6 inline-block bg-accent text-primary font-bold text-2xl px-6 py-3 rounded-xl">
              החל מ-€{deal.priceFrom.toLocaleString()}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Highlights */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            מה כולל הדיל?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deal.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-secondary">
                <span className="text-accent text-lg">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Timeline */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            מסלול הטיול
          </h2>
          <TripTimeline days={timeline} />
        </section>

        {/* Booking Options */}
        <BookingOptions deal={deal} />
      </div>
    </div>
  );
}
