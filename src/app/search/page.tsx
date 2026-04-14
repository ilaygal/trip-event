import type { Metadata } from "next";
import Link from "next/link";
import type { HotDeal } from "@/lib/types";
import hotDealsData from "@/data/hot-deals.json";

export const metadata: Metadata = {
  title: "תוצאות חיפוש | TripEvent",
  description: "מצאו את החופשה המושלמת סביב אירועים",
};

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

interface SearchPageProps {
  searchParams: Promise<{
    destination?: string;
    budget?: string;
    eventType?: string;
    dateFrom?: string;
    dateTo?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const allDeals = hotDealsData as HotDeal[];

  // Filter deals based on search params
  let filteredDeals = allDeals;

  if (params.eventType) {
    filteredDeals = filteredDeals.filter(
      (d) => d.event.type === params.eventType
    );
  }

  if (params.budget) {
    const maxBudget = parseInt(params.budget, 10);
    filteredDeals = filteredDeals.filter((d) => d.priceFrom <= maxBudget);
  }

  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary to-primary-light text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            תוצאות החיפוש
          </h1>
          <p className="text-white/70">
            נמצאו {filteredDeals.length} חופשות מתאימות
          </p>
        </div>
      </section>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredDeals.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">🔍</span>
            <h2 className="text-2xl font-bold text-primary mb-2">
              לא מצאנו תוצאות
            </h2>
            <p className="text-text-light mb-6">
              נסו לשנות את הפילטרים או לחפש עם קריטריונים אחרים
            </p>
            <Link
              href="/"
              className="inline-block bg-accent hover:bg-accent-light text-primary font-bold px-6 py-3 rounded-xl transition-colors"
            >
              חזרה לדף הראשי
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDeals.map((deal) => (
              <Link
                key={deal.id}
                href={`/trip/${deal.id}`}
                className="group block"
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-30">
                        {deal.event.type === "sport"
                          ? "⚽"
                          : deal.event.type === "concert"
                          ? "🎵"
                          : deal.event.type === "festival"
                          ? "🎪"
                          : "🎭"}
                      </span>
                    </div>
                    <div
                      className={`absolute top-3 right-3 ${
                        eventTypeColors[deal.event.type]
                      } text-white text-xs font-bold px-3 py-1 rounded-full`}
                    >
                      {eventTypeLabels[deal.event.type]}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-accent text-primary font-bold px-3 py-1 rounded-full text-sm">
                      החל מ-€{deal.priceFrom.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                      {deal.title}
                    </h3>
                    <p className="text-sm text-text-light mb-2">
                      {deal.destination} · {deal.durationDays} ימים
                    </p>
                    <p className="text-sm font-medium text-secondary mb-3">
                      {deal.event.name}
                    </p>
                    <p className="text-xs text-text-light">
                      {new Date(deal.event.date).toLocaleDateString("he-IL", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
