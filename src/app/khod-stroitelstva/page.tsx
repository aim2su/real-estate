import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { complexes } from "@/data/complexes";
import { formatDate, formatPrice } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ход строительства",
  description:
    "Актуальный статус строительства жилых комплексов «Иншооти Сол» в Душанбе. Фотоотчёты и график работ.",
  path: "/khod-stroitelstva",
});

const progressBySlug: Record<string, number> = {
  sol: 100,
  parviz: 75,
  "dushanbe-city": 15,
};

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Прозрачность"
        title="Ход строительства"
        description="Следите за прогрессом наших объектов. Обновляем статус каждый месяц."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Ход строительства" }]}
      />

      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          {complexes.map((complex) => {
            const progress = progressBySlug[complex.slug] ?? 0;
            return (
              <div
                key={complex.slug}
                className="overflow-hidden rounded-2xl border border-primary/10 bg-white"
              >
                <div className="grid gap-0 lg:grid-cols-5">
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-2 bg-primary/5">
                    <Image
                      src={complex.coverImage}
                      alt={complex.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 lg:col-span-3">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-primary-dark/50">
                          {complex.status}
                        </p>
                        <h3 className="mt-1 text-2xl font-semibold text-primary-dark">
                          {complex.name}
                        </h3>
                        <p className="mt-1 text-sm text-primary-dark/60">
                          {complex.address}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xs uppercase tracking-wider text-primary-dark/50">
                          Квартиры от
                        </p>
                        <p className="mt-1 text-lg font-semibold text-primary">
                          {formatPrice(complex.priceFrom)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary-dark/60">Готовность</span>
                        <span className="font-semibold text-primary-dark">{progress}%</span>
                      </div>
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-primary/10">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm text-primary-dark/75">
                          {progress === 100 && "Объект сдан и введён в эксплуатацию"}
                          {progress >= 50 && progress < 100 && "Монолитный каркас возведён"}
                          {progress < 50 && "Земляные работы и фундамент"}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm text-primary-dark/75">
                          Срок сдачи: {formatDate(complex.completionDate)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={`/zhk/${complex.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition"
                      >
                        Подробнее о комплексе →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
