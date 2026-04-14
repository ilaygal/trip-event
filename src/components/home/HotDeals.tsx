import Link from "next/link";
import type { HotDeal } from "@/lib/types";
import hotDealsData from "@/data/hot-deals.json";

const eventTypeLabels: Record<string, string> = {
  concert: "הופעה",
  sport: "ספורט",
  theater: "תיאטרון",
  festival: "פסטיבל",
};

const eventTypeColors: Record<string, string> = {
  concert: "bg-purple-500",
  sport: "bg-green-500",
  theater: "bg-rose-500",
  festival: "bg-orange-500",
};

export default function HotDeals() {
  const deals = hotDealsData as HotDeal[];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            🔥 דילים חמים
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            חופשות מוכנות לנסיעה — פשוט בחרו ותזמינו
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Link
              key={deal.id}
              href={`/trip/${deal.id}`}
              className="group block"
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-30">
                      {deal.event.type === "sport" ? "⚽" : deal.event.type === "concert" ? "🎵" : deal.event.type === "festival" ? "🎪" : "🎭"}
                    </span>
                  </div>

                  {/* Event type badge */}
                  <div
                    className={`absolute top-3 right-3 ${
                      eventTypeColors[deal.event.type]
                    } text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {eventTypeLabels[deal.event.type]}
                  </div>

                  {/* Price badge */}
                  <div className="absolute bottom-3 left-3 bg-accent text-primary font-bold px-3 py-1 rounded-full text-sm">
                    החל מ-€{deal.priceFrom.toLocaleString()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                    {deal.title}
                  </h3>
                  <p className="text-sm text-text-light mb-3">
                    {deal.destination} · {deal.durationDays} ימים
                  </p>

                  <p className="text-sm font-medium text-secondary mb-3">
                    {deal.event.name}
                  </p>

                  <ul className="space-y-1">
                    {deal.highlights.slice(0, 3).map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-text-light flex items-center gap-1"
                      >
                        <span className="text-accent">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
