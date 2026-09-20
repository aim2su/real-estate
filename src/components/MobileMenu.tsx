"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./Button";

const navItems = [
  { href: "/zhk", label: "ЖК" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/rassrochka", label: "Рассрочка" },
  { href: "/khod-stroitelstva", label: "Ход строительства" },
  { href: "/novosti", label: "Новости" },
  { href: "/kontakty", label: "Контакты" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Открыть меню"
        onClick={() => setOpen(true)}
        className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 text-primary-dark hover:bg-primary/5 transition"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-0 h-screen w-80 max-w-full bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <span className="text-sm font-semibold uppercase text-gray-500">
                Меню
              </span>
              <button
                type="button"
                aria-label="Закрыть меню"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-100 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-gray-200 px-6 py-6 space-y-4">
              <a
                href="tel:+992550015000"
                className="flex items-center gap-3 text-sm font-medium text-gray-800 hover:text-primary transition"
              >
                <Phone className="h-4 w-4" />
                +992 550 015 000
              </a>
              <Button
                href="/kontakty"
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Записаться
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
