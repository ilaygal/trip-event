import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-surface">
      <div className="text-center px-4">
        <span className="text-8xl mb-6 block">🗺️</span>
        <h1 className="text-4xl font-bold text-primary mb-4">
          הדף לא נמצא
        </h1>
        <p className="text-lg text-text-light mb-8">
          נראה שהלכתם לאיבוד... אבל אל דאגה, יש לנו הרבה יעדים אחרים!
        </p>
        <Link
          href="/"
          className="inline-block bg-accent hover:bg-accent-light text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg text-lg"
        >
          חזרה לדף הראשי ✈
        </Link>
      </div>
    </div>
  );
}
