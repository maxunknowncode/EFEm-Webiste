"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/bestellen", label: "Bestellen" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-white/60 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900 transition hover:text-rose-600"
          onClick={closeMenu}
        >
          Pizzeria EFEm
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-rose-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/bestellen"
            className="rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-rose-600 hover:shadow-lg"
          >
            Jetzt bestellen
          </Link>
        </nav>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-rose-400 hover:text-rose-500 md:hidden"
          onClick={toggleMenu}
          aria-label="Menü öffnen"
          aria-expanded={isOpen}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen ? (
        <div className="md:hidden">
          <div className="space-y-2 border-t border-slate-100 bg-white px-4 py-4 shadow-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-rose-50 text-rose-600"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/bestellen"
              className="block rounded-xl bg-rose-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-rose-600"
              onClick={closeMenu}
            >
              Jetzt bestellen
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
