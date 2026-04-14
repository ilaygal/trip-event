"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="ניווט ראשי">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-accent">✈</span>
            <span>TripEvent</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="hover:text-accent transition-colors duration-200"
            >
              דף ראשי
            </Link>
            <Link
              href="/about"
              className="hover:text-accent transition-colors duration-200"
            >
              אודות
            </Link>
            <Link
              href="/faq"
              className="hover:text-accent transition-colors duration-200"
            >
              שאלות נפוצות
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md hover:bg-primary-light transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-primary-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                דף ראשי
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md hover:bg-primary-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                אודות
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 rounded-md hover:bg-primary-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                שאלות נפוצות
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
