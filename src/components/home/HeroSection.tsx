import SearchForm from "./SearchForm";

export default function HeroSection() {
  return (
    <section className="relative bg-primary min-h-[600px] flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary-light" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            ההופעה עלינו,
            <br />
            <span className="text-accent">כל השאר — המערכת מתכננת</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            מצאו את החופשה המושלמת סביב ההופעה או משחק הספורט שאתם אוהבים.
            טיסות, מלונות ואירועים — הכל במקום אחד, בלי כאב ראש.
          </p>
        </div>

        <SearchForm />
      </div>
    </section>
  );
}
