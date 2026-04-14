import type { HotDeal } from "@/lib/types";

interface BookingOptionsProps {
  deal: HotDeal;
}

export default function BookingOptions({ deal }: BookingOptionsProps) {
  const phoneNumber = "972500000000";
  const whatsappMessage = encodeURIComponent(
    `היי, אני מעוניין/ת בדיל "${deal.title}" ב${deal.destination}. אשמח לפרטים נוספים!`
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Self-booking */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border-2 border-transparent hover:border-accent/30 transition-colors">
        <div className="text-center mb-6">
          <span className="text-4xl mb-3 block">🔗</span>
          <h2 className="text-xl font-bold text-primary mb-2">
            אני מזמין לבד
          </h2>
          <p className="text-sm text-text-light">
            קישורים ישירים לספקים — תזמינו בקצב שלכם
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="#"
            className="flex items-center justify-between p-3 rounded-lg bg-surface hover:bg-gray-100 transition-colors group"
          >
            <span className="flex items-center gap-2">
              <span>✈️</span>
              <span className="font-medium text-secondary">טיסות</span>
            </span>
            <span className="text-accent group-hover:translate-x-[-4px] transition-transform">
              ←
            </span>
          </a>

          <a
            href="#"
            className="flex items-center justify-between p-3 rounded-lg bg-surface hover:bg-gray-100 transition-colors group"
          >
            <span className="flex items-center gap-2">
              <span>🏨</span>
              <span className="font-medium text-secondary">מלונות</span>
            </span>
            <span className="text-accent group-hover:translate-x-[-4px] transition-transform">
              ←
            </span>
          </a>

          <a
            href="#"
            className="flex items-center justify-between p-3 rounded-lg bg-surface hover:bg-gray-100 transition-colors group"
          >
            <span className="flex items-center gap-2">
              <span>🎫</span>
              <span className="font-medium text-secondary">כרטיסים לאירוע</span>
            </span>
            <span className="text-accent group-hover:translate-x-[-4px] transition-transform">
              ←
            </span>
          </a>
        </div>
      </div>

      {/* VIP Service */}
      <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 sm:p-8 shadow-md text-white">
        <div className="text-center mb-6">
          <span className="text-4xl mb-3 block">👑</span>
          <h2 className="text-xl font-bold mb-2">תסגרו לי הכל (VIP)</h2>
          <p className="text-sm text-white/70">
            נטפל בכל הלוגיסטיקה — אתם רק צריכים להגיע
          </p>
        </div>

        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <span className="text-accent">✓</span> הזמנת טיסה + מלון + כרטיסים
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">✓</span> תיאום העברות ותחבורה
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">✓</span> ליווי ומענה לאורך כל הטיול
            </li>
          </ul>

          <a
            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            דברו איתנו בוואטסאפ 💬
          </a>
        </div>
      </div>
    </section>
  );
}
