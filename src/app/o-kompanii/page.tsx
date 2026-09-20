import type { Metadata } from "next";
import { Award, ShieldCheck, Users, Sparkles, Target, Eye } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "О компании",
  description:
    "Миссия, видение и ценности компании «Иншооти Сол». Строим надёжные жилые комплексы в Душанбе с 2014 года.",
  path: "/o-kompanii",
});

const values = [
  { icon: Award, title: "Качество", text: "Каждый проект выполняется с вниманием к деталям и строгим соблюдением стандартов." },
  { icon: ShieldCheck, title: "Надёжность", text: "Мы выполняем обещания, сдавая объекты в срок и в рамках бюджета." },
  { icon: Users, title: "Открытость", text: "Честное общение с клиентами, партнёрами и сотрудниками." },
  { icon: Sparkles, title: "Инновации", text: "Внедряем передовые строительные решения для повышения эффективности." },
];

const milestones = [
  { year: "2014", text: "Основание компании. Первый жилой объект в Душанбе." },
  { year: "2018", text: "Сдан второй ЖК. Выход на рынок коммерческой недвижимости." },
  { year: "2022", text: "Начало строительства ЖК «Парвиз» комфорт-класса." },
  { year: "2024", text: "Сдача ЖК «Сол» бизнес-класса. 96 квартир переданы дольщикам." },
  { year: "2026", text: "Старт продаж ЖК «Душанбе Сити» — нового проекта бизнес-класса." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О нас"
        title="Иншооти Сол"
        description="Строим надёжные, современные и экологичные жилые комплексы в Душанбе с 2014 года."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "О компании" }]}
      />

      <section className="py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-primary/10 bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-primary-dark">Миссия</h2>
            <p className="mt-4 text-primary-dark/75 leading-relaxed">
              Создавать надёжные, современные и экологичные строительные объекты,
              которые улучшают качество жизни наших клиентов. Мы строим не просто
              здания, а пространства, где люди чувствуют себя комфортно, безопасно
              и уверенно в завтрашнем дне.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/10 bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-primary-dark">Видение</h2>
            <p className="mt-4 text-primary-dark/75 leading-relaxed">
              Стать лидером строительной отрасли в регионе, сочетая инновационные
              технологии, высокие стандарты качества и заботу об окружающей среде.
              Каждый проект «Иншооти Сол» — ориентир надёжности и профессионализма.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70">
              Наши принципы
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
              Ценности компании
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-primary/10 bg-bg p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary-dark">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary-dark/65 leading-relaxed">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70">
              История
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
              Ключевые этапы
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="flex gap-6 rounded-2xl border border-primary/10 bg-white p-6"
              >
                <div className="text-2xl font-semibold text-primary shrink-0">
                  {m.year}
                </div>
                <p className="text-primary-dark/75 leading-relaxed pt-1">{m.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70">
              Консультация
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
              Есть вопросы?
            </h2>
            <p className="mt-5 max-w-md text-primary-dark/70 leading-relaxed">
              Оставьте заявку — расскажем о компании подробнее, покажем объекты
              и ответим на все вопросы.
            </p>
          </div>
          <LeadForm title="Связаться с нами" />
        </Container>
      </section>
    </>
  );
}
