import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ComplexCard } from "@/components/ComplexCard";
import { complexes } from "@/data/complexes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Жилые комплексы",
  description:
    "Каталог жилых комплексов от компании «Иншооти Сол» в Душанбе: сданные, строящиеся и новые объекты. Квартиры от застройщика.",
  path: "/zhk",
});

export default function ZhkPage() {
  return (
    <>
      <section className="bg-primary-dark text-white">
        <Container className="py-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">
            Каталог объектов
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Жилые комплексы
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/75 leading-relaxed sm:text-lg">
            Три действующих проекта в разных районах Душанбе — от сданных
            домов до старта продаж с рассрочкой 0%.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {complexes.map((complex) => (
              <ComplexCard key={complex.slug} complex={complex} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
