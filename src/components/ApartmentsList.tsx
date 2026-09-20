"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import type { Apartment } from "@/types";
import { formatPrice, formatArea } from "@/lib/format";
import { cn } from "@/lib/cn";

interface ApartmentsListProps {
  apartments: Apartment[];
  complexSlug: string;
}

const roomsOptions = [
  { value: 0, label: "Все" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
];

const statusStyles: Record<string, string> = {
  "свободна": "bg-primary/10 text-primary",
  "бронь": "bg-accent/90 text-primary-dark",
  "продана": "bg-gray-200 text-gray-500",
};

export function ApartmentsList({ apartments, complexSlug }: ApartmentsListProps) {
  const [rooms, setRooms] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("все");
  const [sort, setSort] = useState<"price-asc" | "price-desc" | "area-asc">("price-asc");

  const filtered = useMemo(() => {
    let list = apartments.slice();

    if (rooms !== null) {
      list = list.filter((a) => a.rooms === rooms);
    }

    if (status !== "все") {
      list = list.filter((a) => a.status === status);
    }

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "area-asc") list.sort((a, b) => a.area - b.area);

    return list;
  }, [apartments, rooms, status, sort]);

  return (
    <>
      <div className="mb-8 rounded-2xl border border-primary/10 bg-white p-5">
        <div className="flex items-center gap-2 text-sm font-medium text-primary-dark">
          <SlidersHorizontal className="h-4 w-4" />
          Фильтр
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div>
            <label className="text-xs uppercase tracking-wider text-primary-dark/50">
              Комнат
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setRooms(null)}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-sm transition",
                  rooms === null
                    ? "border-primary bg-primary text-white"
                    : "border-primary/20 text-primary-dark hover:border-primary/40"
                )}
              >
                Все
              </button>
              {roomsOptions.slice(1).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setRooms(opt.value)}
                  className={cn(
                    "rounded-lg border px-3 py-1.5 text-sm transition",
                    rooms === opt.value
                      ? "border-primary bg-primary text-white"
                      : "border-primary/20 text-primary-dark hover:border-primary/40"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-primary-dark/50">
              Статус
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {["все", "свободна", "бронь"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStatus(s)}
                  className={cn(
                    "rounded-lg border px-3 py-1.5 text-sm transition capitalize",
                    status === s
                      ? "border-primary bg-primary text-white"
                      : "border-primary/20 text-primary-dark hover:border-primary/40"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-primary-dark/50">
              Сортировка
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="mt-2 w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary-dark outline-none focus:border-primary transition"
            >
              <option value="price-asc">Сначала дешёвые</option>
              <option value="price-desc">Сначала дорогие</option>
              <option value="area-asc">По площади</option>
            </select>
          </div>
        </div>

        <div className="mt-5 text-sm text-primary-dark/60">
          Найдено: <span className="font-medium text-primary-dark">{filtered.length}</span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-primary/10 bg-white p-10 text-center">
          <p className="text-primary-dark/70">
            По вашим фильтрам ничего не найдено. Попробуйте изменить параметры.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((apartment) => (
            <Link
              key={apartment.id}
              href={`/kvartira/${apartment.id}`}
              className="group rounded-2xl border border-primary/10 bg-white p-6 transition hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary-dark/50">
                    Квартира
                  </p>
                  <p className="mt-1 text-xl font-semibold text-primary-dark">
                    №{apartment.number}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[apartment.status]}`}
                >
                  {apartment.status}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-primary-dark/50">Комнат</p>
                  <p className="mt-0.5 font-medium text-primary-dark">
                    {apartment.rooms}
                  </p>
                </div>
                <div>
                  <p className="text-primary-dark/50">Площадь</p>
                  <p className="mt-0.5 font-medium text-primary-dark">
                    {formatArea(apartment.area)}
                  </p>
                </div>
                <div>
                  <p className="text-primary-dark/50">Этаж</p>
                  <p className="mt-0.5 font-medium text-primary-dark">
                    {apartment.floor} / {apartment.totalFloors}
                  </p>
                </div>
                <div>
                  <p className="text-primary-dark/50">Окна</p>
                  <p className="mt-0.5 font-medium text-primary-dark">
                    {apartment.windowsSide}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-primary/10 pt-4">
                <p className="text-xs uppercase tracking-wider text-primary-dark/50">
                  Цена
                </p>
                <p className="mt-1 text-lg font-semibold text-primary">
                  {formatPrice(apartment.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
