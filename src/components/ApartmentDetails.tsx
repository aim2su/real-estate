"use client";

import { useState } from "react";
import Image from "next/image";
import { Calculator } from "lucide-react";
import type { Apartment, ResidentialComplex } from "@/types";
import { formatPrice, formatArea } from "@/lib/format";
import { cn } from "@/lib/cn";

interface ApartmentDetailsProps {
  apartment: Apartment;
  complex: ResidentialComplex;
}

export function ApartmentDetails({ apartment, complex }: ApartmentDetailsProps) {
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [months, setMonths] = useState(24);

  const downPayment = Math.round((apartment.price * downPaymentPercent) / 100);
  const remaining = apartment.price - downPayment;
  const monthlyPayment = Math.round(remaining / months);

  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <div className="rounded-2xl border border-primary/10 bg-white p-6">
          <h2 className="text-lg font-semibold text-primary-dark">Планировка</h2>
          <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl bg-bg">
            <Image
              src={apartment.planImage}
              alt={`Планировка квартиры №${apartment.number}`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain p-4"
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-primary/10 bg-white p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-dark">
            <Calculator className="h-5 w-5 text-primary" />
            Калькулятор рассрочки
          </h3>

          <div className="mt-6 space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-primary-dark/70">
                  Первоначальный взнос
                </label>
                <span className="text-sm font-semibold text-primary-dark">
                  {downPaymentPercent}% · {formatPrice(downPayment)}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={90}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="mt-3 w-full accent-primary"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-primary-dark/70">Срок</label>
                <span className="text-sm font-semibold text-primary-dark">
                  {months} мес.
                </span>
              </div>
              <input
                type="range"
                min={6}
                max={36}
                step={6}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="mt-3 w-full accent-primary"
              />
            </div>

            <div className="rounded-xl bg-primary/5 p-5">
              <p className="text-xs uppercase tracking-wider text-primary-dark/60">
                Ежемесячный платёж
              </p>
              <p className="mt-2 text-3xl font-semibold text-primary">
                {formatPrice(monthlyPayment)}
              </p>
              <p className="mt-2 text-xs text-primary-dark/60">
                Остаток {formatPrice(remaining)} · без процентов
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="sticky top-24 rounded-2xl border border-primary/10 bg-white p-6">
          <p className="text-xs uppercase tracking-wider text-primary-dark/50">
            Квартира в {complex.name}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-primary-dark">
            №{apartment.number}
          </h2>

          <div className="mt-6 space-y-3 text-sm">
            <Row label="Комнат" value={`${apartment.rooms}`} />
            <Row label="Площадь" value={formatArea(apartment.area)} />
            <Row label="Этаж" value={`${apartment.floor} из ${apartment.totalFloors}`} />
            <Row label="Окна" value={apartment.windowsSide} />
            <Row label="Балкон" value={apartment.balcony ? "Есть" : "Нет"} />
            <Row label="Цена за м²" value={formatPrice(apartment.pricePerM2)} />
          </div>

          <div className="mt-6 border-t border-primary/10 pt-6">
            <p className="text-xs uppercase tracking-wider text-primary-dark/50">
              Полная стоимость
            </p>
            <p className="mt-2 text-2xl font-semibold text-primary">
              {formatPrice(apartment.price)}
            </p>
          </div>

          <div
            className={cn(
              "mt-6 rounded-xl px-4 py-3 text-center text-sm font-medium",
              apartment.status === "свободна" && "bg-primary/10 text-primary",
              apartment.status === "бронь" && "bg-accent/90 text-primary-dark",
              apartment.status === "продана" && "bg-gray-100 text-gray-500"
            )}
          >
            {apartment.status === "свободна" && "Свободна для покупки"}
            {apartment.status === "бронь" && "Забронирована"}
            {apartment.status === "продана" && "Продана"}
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-primary/10 pb-3 last:border-0">
      <span className="text-primary-dark/60">{label}</span>
      <span className="font-medium text-primary-dark">{value}</span>
    </div>
  );
}
