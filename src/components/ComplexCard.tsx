import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { ResidentialComplex } from "@/types";
import { formatPrice } from "@/lib/format";

interface ComplexCardProps {
  complex: ResidentialComplex;
}

const statusStyles: Record<string, string> = {
  "сдан": "bg-primary/10 text-primary backdrop-blur",
  "строится": "bg-accent/90 text-primary-dark backdrop-blur",
  "старт продаж": "bg-primary-dark text-white backdrop-blur",
};

export function ComplexCard({ complex }: ComplexCardProps) {
  return (
    <Link
      href={`/zhk/${complex.slug}`}
      className="group block overflow-hidden rounded-2xl border border-primary/10 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
        <Image
          src={complex.coverImage}
          alt={complex.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[complex.status]}`}
        >
          {complex.status}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-primary-dark group-hover:text-primary transition-colors">
          {complex.name}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-primary-dark/60">
          <MapPin className="h-4 w-4 shrink-0" />
          {complex.address}
        </p>
        <p className="mt-3 text-sm text-primary-dark/70 line-clamp-2">
          {complex.shortDescription}
        </p>
        <div className="mt-5 flex items-baseline justify-between border-t border-primary/10 pt-4">
          <span className="text-xs uppercase tracking-wider text-primary-dark/50">от</span>
          <span className="text-lg font-semibold text-primary">
            {formatPrice(complex.priceFrom)}
          </span>
        </div>
      </div>
    </Link>
  );
}
