import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-xl text-center">
        <p className="text-7xl font-semibold text-primary/20 sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-semibold text-primary-dark sm:text-4xl">
          Страница не найдена
        </h1>
        <p className="mt-4 text-primary-dark/65 leading-relaxed">
          Возможно, страница была перемещена или удалена. Вернитесь на главную
          или посмотрите наши жилые комплексы.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            <Home className="h-4 w-4" />
            На главную
          </Button>
          <Button href="/zhk" variant="ghost" size="lg">
            <Search className="h-4 w-4" />
            Смотреть ЖК
          </Button>
        </div>
      </Container>
    </section>
  );
}
