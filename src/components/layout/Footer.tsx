import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              <span className="text-accent">✈</span> TripEvent
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              חופשות שמתוכננות סביב מה שאתם באמת אוהבים — הופעות, ספורט
              ואירועי תרבות ברחבי העולם.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">קישורים</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  דף ראשי
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors">
                  שאלות נפוצות
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">צרו קשר</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="https://wa.me/972500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tripevent.co.il"
                  className="hover:text-accent transition-colors"
                >
                  info@tripevent.co.il
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} TripEvent. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
