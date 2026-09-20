import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Политика конфиденциальности",
  path: "/politika",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Политика конфиденциальности"
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Политика" }]}
      />

      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <div className="prose prose-slate max-w-none text-primary-dark/80">
            <h2 className="text-2xl font-semibold text-primary-dark">
              1. Общие положения
            </h2>
            <p className="mt-4 leading-relaxed">
              Настоящая политика конфиденциальности определяет порядок обработки
              и защиты персональных данных пользователей сайта inshootisol.tj
              (далее — Сайт), оператором которого является компания «Иншооти Сол».
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-primary-dark">
              2. Какие данные мы собираем
            </h2>
            <p className="mt-4 leading-relaxed">
              Мы собираем только те данные, которые пользователь добровольно
              оставляет через формы на Сайте: имя, номер телефона, адрес
              электронной почты, комментарий к заявке.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-primary-dark">
              3. Как мы используем данные
            </h2>
            <p className="mt-4 leading-relaxed">
              Персональные данные используются исключительно для связи с
              пользователем по вопросам, связанным с покупкой квартир, записью
              на просмотр и консультациями.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-primary-dark">
              4. Передача данных третьим лицам
            </h2>
            <p className="mt-4 leading-relaxed">
              Мы не передаём персональные данные третьим лицам, кроме случаев,
              предусмотренных законодательством Республики Таджикистан.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-primary-dark">
              5. Защита данных
            </h2>
            <p className="mt-4 leading-relaxed">
              Мы принимаем организационные и технические меры для защиты
              персональных данных от несанкционированного доступа, изменения
              или распространения.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-primary-dark">
              6. Контакты
            </h2>
            <p className="mt-4 leading-relaxed">
              По вопросам обработки персональных данных обращайтесь по адресу
              info@inshootisol.tj или по телефону +992 550 015 000.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
