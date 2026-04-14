import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות | TripEvent",
  description: "הסיפור מאחורי TripEvent — איך נולד הרעיון לשלב חופשות עם אירועים",
};

export default function AboutPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-primary-light text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">הסיפור שלנו</h1>
          <p className="text-xl text-white/80">
            איך תסכול אישי הפך לפלטפורמה שחוסכת לכם שעות של חיפושים
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-md space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              הכל התחיל מחיפוש אחד
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              רציתי לטוס לראות הופעה של האמן האהוב עליי באירופה. נשמע פשוט, נכון?
              רק שבשביל לסגור את הכל — כרטיס להופעה, טיסה, מלון קרוב לאולם,
              ולהבין אם צריך גם רכבת — בזבזתי שעות על גוגל, עשרות טאבים פתוחים,
              ומלא תסכול.
            </p>
            <p className="text-secondary leading-relaxed">
              אז שאלתי את עצמי: למה אין מקום אחד שעושה את הכל? מקום שאני אומר לו
              &quot;אני רוצה לראות כדורגל במדריד&quot; והוא מחזיר לי חבילה מוכנה — טיסה,
              מלון, כרטיס למשחק?
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              הפתרון: חופשה שמתוכננת סביב החוויה
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              TripEvent נולד מהבנה פשוטה — אנשים לא מחפשים סתם טיסה זולה או
              מלון טוב. הם מחפשים <strong>חוויה</strong>. ההופעה, המשחק,
              הפסטיבל — זה הלב של הטיול. כל השאר צריך להתאים אליו.
            </p>
            <p className="text-secondary leading-relaxed">
              אנחנו עושים את העבודה הקשה בשבילכם: מוצאים את הטיסה הכי נוחה,
              המלון הכי קרוב לאולם, ואפילו דואגים לתחבורה פנימית. אתם רק
              צריכים לבחור את האירוע ולהגיע.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              איך אנחנו עובדים?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <span className="text-4xl mb-3 block">🎯</span>
                <h3 className="font-bold text-primary mb-2">בחרו אירוע</h3>
                <p className="text-sm text-text-light">
                  מלאו את השאלון או בחרו מהדילים החמים
                </p>
              </div>
              <div className="text-center p-4">
                <span className="text-4xl mb-3 block">🤖</span>
                <h3 className="font-bold text-primary mb-2">המערכת עובדת</h3>
                <p className="text-sm text-text-light">
                  מחפשת טיסות, מלונות וכרטיסים ובונה מסלול
                </p>
              </div>
              <div className="text-center p-4">
                <span className="text-4xl mb-3 block">✈️</span>
                <h3 className="font-bold text-primary mb-2">טסים!</h3>
                <p className="text-sm text-text-light">
                  תזמינו לבד או שנסגור לכם הכל
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
