import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siTelegram, siInstagram, siFacebook } from "simple-icons";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Контакты",
  description:
    "Свяжитесь с компанией «Иншооти Сол»: телефон, email, адрес офиса в Душанбе. Запись на просмотр квартир.",
  path: "/kontakty",
});

const socials = [
  { icon: siTelegram, href: "#" },
  { icon: siInstagram, href: "#" },
  { icon: siFacebook, href: "#" },
];

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Связь"
        title="Контакты"
        description="Позвоните, напишите или приезжайте в офис — ответим на все вопросы и запишем на просмотр."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
      />

      <section className="py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-primary-dark">
              Офис продаж
            </h2>
            <p className="mt-4 text-primary-dark/70 leading-relaxed">
              Работаем ежедневно с 9:00 до 19:00. Приезжайте на консультацию —
              покажем планировки, расскажем о рассрочке и покажем квартиры вживую.
            </p>

            <div className="mt-8 space-y-5">
              <ContactRow
                icon={Phone}
                label="Телефон"
                value="+992 550 015 000"
                href="tel:+992550015000"
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value="info@inshootisol.tj"
                href="mailto:info@inshootisol.tj"
              />
              <ContactRow
                icon={MapPin}
                label="Адрес"
                value="г. Душанбе, ул. Н. Махсум, 71/1"
              />
              <ContactRow
                icon={Clock}
                label="Режим работы"
                value="Ежедневно 9:00 – 19:00"
              />
            </div>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-wider text-primary-dark/50">
                Мы в соцсетях
              </p>
              <div className="mt-4 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.icon.slug}
                    href={s.href}
                    aria-label={s.icon.title}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition"
                  >
                    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                      <path d={s.icon.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <LeadForm title="Напишите нам" />
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="rounded-2xl border border-primary/10 bg-bg p-10 text-center">
            <MapPin className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-primary-dark">
              Как нас найти
            </h3>
            <p className="mt-2 text-primary-dark/70">
              г. Душанбе, ул. Н. Махсум, 71/1 — ориентир: бизнес-центр «82 Residence»
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-primary-dark/50">
          {label}
        </p>
        <p className="mt-1 text-base font-medium text-primary-dark">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition">
        {content}
      </a>
    );
  }

  return content;
}
