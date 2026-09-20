import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Users, Award, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ComplexCard } from "@/components/ComplexCard";
import { LeadForm } from "@/components/LeadForm";
import { complexes } from "@/data/complexes";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/format";

const values = [
  { icon: Award, title: "Качество", text: "Каждый проект выполняется с вниманием к деталям и строгим соблюдением стандартов." },
  { icon: ShieldCheck, title: "Надёжность", text: "Мы выполняем обещания, сдавая объекты в срок и в рамках бюджета." },
  { icon: Users, title: "Открытость", text: "Честное общение с клиентами, партнёрами и сотрудниками." },
  { icon: Sparkles, title: "Инновации", text: "Внедряем передовые строительные решения для повышения эффективности." },
];

const stats = [
  { value: "12+", label: "лет на рынке" },
  { value: "18", label: "сданных объектов" },
  { value: "2400", label: "семей заселено" },
  { value: "320", label: "тыс. м² построено" },
];

export default function HomePage() {
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/mainpage.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark/90 to-primary/60" />
        </div>
        <Container className="relative py-28 lg:py-40">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">
            Меъморӣ аз орзу то воқеият
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Строим пространства, где хочется жить
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/75 sm:text-lg leading-relaxed">
            Надёжные, современные и экологичные жилые комплексы в Душанбе.
            Квартиры от застройщика с рассрочкой 0%.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/zhk" variant="secondary" size="lg">
              Смотреть ЖК
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#lead" variant="outline" size="lg">
              Записаться на просмотр
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-primary/10 bg-white">
        <Container className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold text-primary sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-primary-dark/60">{stat.label}</div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary/70">Наши объекты</p>
              <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
                Жилые комплексы
              </h2>
            </div>
            <Link
              href="/zhk"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition"
            >
              Все объекты
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {complexes.map((c) => (
              <ComplexCard key={c.slug} complex={c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70">Наши принципы</p>
            <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
              Почему выбирают нас
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-primary/10 bg-bg p-7 transition hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary-dark">{v.title}</h3>
                  <p className="mt-2 text-sm text-primary-dark/65 leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-primary-dark py-20 text-white lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Рассрочка 0%</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Квартира от застройщика без переплат
            </h2>
            <p className="mt-5 max-w-lg text-white/75 leading-relaxed">
              Первоначальный взнос от 30%, срок до 24 месяцев. Без банков,
              справок и переплат. Оформление за один день.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/rassrochka" variant="secondary" size="lg">
                Рассчитать рассрочку
              </Button>
              <Button href="/kontakty" variant="outline" size="lg">
                Получить консультацию
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
              <div className="text-3xl font-semibold text-accent">0%</div>
              <div className="mt-2 text-sm text-white/70">переплат по рассрочке</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
              <div className="text-3xl font-semibold text-accent">24</div>
              <div className="mt-2 text-sm text-white/70">месяца срок</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
              <div className="text-3xl font-semibold text-accent">30%</div>
              <div className="mt-2 text-sm text-white/70">первый взнос</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
              <div className="text-3xl font-semibold text-accent">1</div>
              <div className="mt-2 text-sm text-white/70">день на оформление</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary/70">Блог и новости</p>
              <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
                Последние обновления
              </h2>
            </div>
            <Link
              href="/novosti"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition"
            >
              Все записи
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/novosti/${post.slug}`}
                className="group rounded-2xl border border-primary/10 bg-white p-6 transition hover:shadow-md"
              >
                <div className="text-xs uppercase tracking-wider text-primary/70">
                  {post.category}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-primary-dark group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-primary-dark/65 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-5 text-xs text-primary-dark/50">
                  {formatDate(post.date)}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="lead" className="bg-white py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70">Консультация</p>
            <h2 className="mt-3 text-3xl font-semibold text-primary-dark sm:text-4xl">
              Запишитесь на просмотр
            </h2>
            <p className="mt-5 max-w-md text-primary-dark/70 leading-relaxed">
              Покажем квартиры вживую, расскажем об условиях рассрочки и поможем
              выбрать подходящий вариант. Без навязывания.
            </p>
            <div className="mt-8 space-y-3 text-sm text-primary-dark/70">
              <p>Позвоните: <a href="tel:+992550015000" className="font-medium text-primary hover:underline">+992 550 015 000</a></p>
              <p>Напишите: <a href="mailto:info@inshootisol.tj" className="font-medium text-primary hover:underline">info@inshootisol.tj</a></p>
            </div>
          </div>
          <LeadForm />
        </Container>
      </section>
    </>
  );
}
