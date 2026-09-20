import type { Metadata } from "next";
import { Calculator, FileCheck, Wallet, CalendarCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Рассрочка 0%",
  description:
    "Рассрочка от застройщика «Иншооти Сол»: 0% переплат, первоначальный взнос от 30%, срок до 24 месяцев. Оформление за один день.",
  path: "/rassrochka",
});

const steps = [
  { icon: Calculator, title: "1. Расчёт", text: "Выбираете квартиру и рассчитываете ежемесячный платёж." },
  { icon: FileCheck, title: "2. Заявка", text: "Оставляете заявку — мы проверяем и подтверждаем условия." },
  { icon: Wallet, title: "3. Первый взнос", text: "Вносите от 30% стоимости — подписываем договор." },
  { icon: CalendarCheck, title: "4. Платежи", text: "Платите равными долями до 24 месяцев без процентов." },
];

const faq = [
  { q: "Кто может оформить рассрочку?", a: "Любой гражданин Таджикистана с подтверждением дохода. Решение принимаем за 1 день." },
  { q: "Какой минимальный первоначальный взнос?", a: "От 30% стоимости квартиры. При взносе 50%+ возможна индивидуальная скидка." },
  { q: "Есть ли переплата?", a: "Нет. Рассрочка 0% — вы платите ровно стоимость квартиры, разбитую на платежи." },
  { q: "Что с документами?", a: "Договор купли-продажи с рассрочкой, график платежей, акт приёма-передачи после полной оплаты." },
];

export default function RassrochkaPage() {
  return (
    <>
      <PageHero
        eyebrow="Рассрочка 0%"
        title="Квартира от застройщика без переплат"
        description="Первоначальный взнос от 30%, срок до 24 месяцев. Без банков, справок и скрытых комиссий. Оформление за один день."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Рассрочка" }]}
      />

      <section className="border-b border-primary/10 bg-white py-12">
        <Container className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { value: "0%", label: "переплат по рассрочке" },
            { value: "24", label: "месяца максимальный срок" },
            { value: "30%", label: "минимальный первый взнос" },
            { value: "1", label: "день на оформление" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-4xl font-semibold text-primary">{item.value}</div>
              <div className="mt-2 text-sm text-primary-dark/60">{item.label}</div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70">
              Как это работает
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
              4 простых шага
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-2xl border border-primary/10 bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-primary-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary-dark/65 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-primary-dark py-16 text-white lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent">
                Пример расчёта
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Квартира 64 м² за 1 408 000 с.
              </h2>
              <p className="mt-5 max-w-lg text-white/75 leading-relaxed">
                Первоначальный взнос 30% — 422 400 с. Остаток 985 600 с.
                На 24 месяца — 41 067 с. в месяц. Без процентов.
              </p>
              <div className="mt-8">
                <Button href="/zhk" variant="secondary" size="lg">
                  Выбрать квартиру
                </Button>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-wider text-white/60">
                Ежемесячный платёж
              </p>
              <p className="mt-3 text-4xl font-semibold text-accent">
                41 067 с.
              </p>
              <p className="mt-3 text-sm text-white/60">
                при первоначальном взносе 30% и сроке 24 месяца
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
              Частые вопросы
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-primary/10 bg-white p-6 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-base font-medium text-primary-dark marker:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm text-primary-dark/70 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70">
              Заявка
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
              Рассчитать мою рассрочку
            </h2>
            <p className="mt-5 max-w-md text-primary-dark/70 leading-relaxed">
              Оставьте заявку — рассчитаем платёж под вашу квартиру и срок,
              расскажем об условиях оформления.
            </p>
          </div>
          <LeadForm title="Рассчитать рассрочку" />
        </Container>
      </section>
    </>
  );
}
