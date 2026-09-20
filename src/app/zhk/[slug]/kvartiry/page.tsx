import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ApartmentsList } from "@/components/ApartmentsList";
import { getComplexBySlug, complexes } from "@/data/complexes";
import { getApartmentsByComplex } from "@/data/apartments";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return complexes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const complex = getComplexBySlug(slug);

  if (!complex) {
    return buildMetadata({ title: "ЖК не найден" });
  }

  return buildMetadata({
    title: `Квартиры в ${complex.name}`,
    description: `Свободные квартиры в жилом комплексе ${complex.name}. Планировки, площади, цены от застройщика.`,
    path: `/zhk/${complex.slug}/kvartiry`,
  });
}

export default async function ApartmentsPage({ params }: PageProps) {
  const { slug } = await params;
  const complex = getComplexBySlug(slug);

  if (!complex) {
    notFound();
  }

  const apartments = getApartmentsByComplex(slug);

  return (
    <>
      <section className="bg-primary-dark text-white">
        <Container className="py-14 lg:py-16">
          <div className="flex items-center gap-3 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <span>/</span>
            <Link href="/zhk" className="hover:text-white transition">ЖК</Link>
            <span>/</span>
            <Link href={`/zhk/${complex.slug}`} className="hover:text-white transition">
              {complex.name}
            </Link>
            <span>/</span>
            <span className="text-white">Квартиры</span>
          </div>

          <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
            Квартиры в {complex.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/75 leading-relaxed">
            {apartments.length} вариантов от {complex.floors} этажей.
            Отфильтруйте по комнатности и статусу.
          </p>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <ApartmentsList apartments={apartments} complexSlug={slug} />
        </Container>
      </section>
    </>
  );
}
