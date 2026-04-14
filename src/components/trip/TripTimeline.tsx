import type { TripDay } from "@/lib/types";

const activityIcons: Record<string, string> = {
  flight: "✈️",
  hotel: "🏨",
  event: "🎫",
  transport: "🚆",
  "free-time": "🌇",
};

const activityColors: Record<string, string> = {
  flight: "bg-blue-100 text-blue-700",
  hotel: "bg-purple-100 text-purple-700",
  event: "bg-amber-100 text-amber-700",
  transport: "bg-green-100 text-green-700",
  "free-time": "bg-gray-100 text-gray-600",
};

interface TripTimelineProps {
  days: TripDay[];
}

export default function TripTimeline({ days }: TripTimelineProps) {
  return (
    <div className="space-y-8">
      {days.map((day) => (
        <div key={day.dayNumber} className="relative">
          {/* Day header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              {day.dayNumber}
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg">{day.title}</h3>
              <p className="text-sm text-text-light">{day.date}</p>
            </div>
          </div>

          {/* Activities */}
          <div className="mr-5 border-r-2 border-primary/20 pr-6 space-y-4 pb-2">
            {day.activities.map((activity, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 ${activityColors[activity.type]}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">
                    {activityIcons[activity.type]}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium opacity-70">
                        {activity.time}
                      </span>
                    </div>
                    <h4 className="font-semibold">{activity.title}</h4>
                    <p className="text-sm opacity-80">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
