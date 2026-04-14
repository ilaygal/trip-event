export interface HotDeal {
  id: string;
  title: string;
  destination: string;
  event: {
    name: string;
    type: "concert" | "sport" | "theater" | "festival";
    date: string;
    venue: string;
  };
  image: string;
  priceFrom: number;
  currency: "EUR" | "ILS";
  durationDays: number;
  highlights: string[];
}

export interface SearchParams {
  destination: string;
  budget: number;
  eventType: "concert" | "sport" | "theater" | "festival" | "all";
  dateFrom: string;
  dateTo: string;
}

export interface FlightResult {
  airline: string;
  departureCity: string;
  arrivalCity: string;
  departureDate: string;
  returnDate: string;
  price: number;
  currency: string;
  bookingUrl: string;
}

export interface HotelResult {
  name: string;
  city: string;
  rating: number;
  pricePerNight: number;
  currency: string;
  checkIn: string;
  checkOut: string;
  bookingUrl: string;
  image: string;
}

export interface TripItinerary {
  id: string;
  title: string;
  destination: string;
  totalPrice: number;
  currency: string;
  days: TripDay[];
  flight: FlightResult;
  hotel: HotelResult;
  event: HotDeal["event"];
}

export interface TripDay {
  dayNumber: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface Activity {
  time: string;
  title: string;
  description: string;
  type: "flight" | "hotel" | "event" | "transport" | "free-time";
  bookingUrl?: string;
}
