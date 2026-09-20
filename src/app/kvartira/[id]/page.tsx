import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { LeadForm } from "@/components/LeadForm";
import { ApartmentDetails } from "@/components/ApartmentDetails";
import { getApartmentById } from "@/data/apartments";
import { getComplexBySlug } from "@/data/complexes";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const apartment = getApartmentById(id);

  if (!apartment) {
    return buildMetadata({ title: "Квартира не найдена" });
  }

  const complex = getComplexBySlug(apartment.complexSlug);
  const title = `Квартира №${apartment.number} в ${complex?.name || "ЖК"}`;

  return buildMetadata({
    title,
    description: `${apartment.rooms}-комнатная квартира, ${apartment.area} м², этаж ${apartment.floor}. Цена ${apartment.price.toLocaleString("ru-RU")} с.`,
    path: `/kvartira/${id}`,
  });
}

export default async function ApartmentPage({ params }: PageProps) {
  const { id } = await params;
  const apartment = getApartmentById(id);

  if (!apartment) {
    notFound();
  }

  const complex = getComplexBySlug(apartment.complexSlug);

  if (!complex) {
    notFound();
  }

  return (
    <>
      <section className="bg-primary-dark text-white">
        <Container className="py-14 lg:py-16">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <span>/</span>
            <Link href="/zhk" className="hover:text-white transition">ЖК</Link>
            <span>/</span>
            <Link href={`/zhk/${complex.slug}`} className="hover:text-white transition">
              {complex.name}
            </Link>
            <span>/</span>
            <Link
              href={`/zhk/${complex.slug}/kvartiry`}
              className="hover:text-white transition"
            >
              Квартиры
            </Link>
            <span>/</span>
            <span className="text-white">№{apartment.number}</span>
          </div>

          <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
            Квартира №{apartment.number}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/75 leading-relaxed">
            {apartment.rooms}-комнатная · {apartment.area} м² · этаж {apartment.floor}
          </p>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <ApartmentDetails apartment={apartment} complex={complex} />
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70">
              Забронировать
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
              Записаться на просмотр
            </h2>
            <p className="mt-5 max-w-md text-primary-dark/70 leading-relaxed">
              Оставьте заявку — покажем квартиру №{apartment.number} вживую,
              расскажем об условиях покупки и рассрочки.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`/zhk/${complex.slug}/kvartiry`} variant="ghost" size="lg">
                Другие квартиры
              </Button>
            </div>
          </div>
          <LeadForm title={`Заявка на квартиру №${apartment.number}`} />
        </Container>
      </section>
    </>
  );
}
