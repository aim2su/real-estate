import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  MapPin,
  Calendar,
  Building2,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { LeadForm } from "@/components/LeadForm";
import { complexes, getComplexBySlug } from "@/data/complexes";
import { formatPrice, formatDate } from "@/lib/format";
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
    title: complex.name,
    description: complex.shortDescription,
    path: `/zhk/${complex.slug}`,
  });
}

export default async function ComplexPage({ params }: PageProps) {
  const { slug } = await params;
  const complex = getComplexBySlug(slug);

  if (!complex) {
    notFound();
  }

  const specs = [
    { icon: Building2, label: "Этажность", value: `${complex.floors} этажей` },
    { icon: Layers, label: "Квартир", value: `${complex.apartmentsCount}` },
    { icon: Calendar, label: "Срок сдачи", value: formatDate(complex.completionDate) },
    { icon: MapPin, label: "Адрес", value: complex.address },
  ];

  return (
    <>
      <section className="relative bg-primary-dark text-white">
        <div className="absolute inset-0">
          <Image
            src={complex.coverImage}
            alt={complex.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-primary-dark/40" />
        </div>

        <Container className="relative py-20 lg:py-28">
          <div className="flex items-center gap-3 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition">Главная</Link>
            <span>/</span>
            <Link href="/zhk" className="hover:text-white transition">ЖК</Link>
            <span>/</span>
            <span className="text-white">{complex.name}</span>
          </div>

          <div className="mt-6 inline-flex rounded-full bg-accent/90 px-4 py-1.5 text-xs font-medium text-primary-dark">
            {complex.status}
          </div>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            {complex.name}
          </h1>

          <p className="mt-4 flex items-center gap-2 text-base text-white/75 sm:text-lg">
            <MapPin className="h-5 w-5 shrink-0" />
            {complex.address}
          </p>

          <div className="mt-8 flex flex-wrap items-end gap-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50">
                Квартиры от
              </p>
              <p className="mt-1 text-2xl font-semibold text-accent sm:text-3xl">
                {formatPrice(complex.priceFrom)}
              </p>
            </div>
            <Button href={`/zhk/${complex.slug}/kvartiry`} variant="secondary" size="lg">
              Выбрать квартиру
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-primary/10 bg-white">
        <Container className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec) => {
            const Icon = spec.icon;
            return (
              <div key={spec.label} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary-dark/50">
                    {spec.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-primary-dark">
                    {spec.value}
                  </p>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-primary-dark sm:text-3xl">
              О жилом комплексе
            </h2>
            <p className="mt-5 text-base text-primary-dark/75 leading-relaxed">
              {complex.description}
            </p>

            <h3 className="mt-12 text-xl font-semibold text-primary-dark">
              Инфраструктура
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {complex.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-primary/10 bg-white px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-primary-dark">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-primary/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-primary-dark">
                Выбрать квартиру
              </h3>
              <p className="mt-2 text-sm text-primary-dark/65">
                Посмотрите свободные квартиры в этом ЖК
              </p>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-primary/10 pb-3">
                  <span className="text-primary-dark/60">Площади</span>
                  <span className="font-medium text-primary-dark">от 42 до 112 м²</span>
                </div>
                <div className="flex items-center justify-between border-b border-primary/10 pb-3">
                  <span className="text-primary-dark/60">Комнатность</span>
                  <span className="font-medium text-primary-dark">1–4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary-dark/60">Цена за м²</span>
                  <span className="font-medium text-primary-dark">{formatPrice(22000)}</span>
                </div>
              </div>

              <Button
                href={`/zhk/${complex.slug}/kvartiry`}
                size="lg"
                className="mt-6 w-full"
              >
                Смотреть квартиры
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70">
              Консультация
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
              Записаться на просмотр
            </h2>
            <p className="mt-5 max-w-md text-primary-dark/70 leading-relaxed">
              Покажем квартиры в {complex.name} вживую, ответим на вопросы
              и поможем выбрать подходящий вариант.
            </p>
            <div className="mt-8 space-y-2 text-sm text-primary-dark/70">
              <p>Телефон: <a href="tel:+992550015000" className="font-medium text-primary hover:underline">+992 550 015 000</a></p>
              <p>Email: <a href="mailto:info@inshootisol.tj" className="font-medium text-primary hover:underline">info@inshootisol.tj</a></p>
            </div>
          </div>
          <LeadForm />
        </Container>
      </section>
    </>
  );
}
