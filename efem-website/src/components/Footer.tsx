import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-base font-semibold text-slate-900">Pizzeria EFEm</p>
          <p className="text-slate-500">Pizzeria &amp; Grill – Geschmack, der begeistert.</p>
          <p className="text-xs text-slate-400">
            © {currentYear} Pizzeria EFEm. Alle Rechte vorbehalten.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="#"
            className="transition hover:text-rose-500"
          >
            Impressum
          </Link>
          <Link
            href="#"
            className="transition hover:text-rose-500"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
