import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { href: "/zhk", label: "ЖК" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/rassrochka", label: "Рассрочка" },
  { href: "/khod-stroitelstva", label: "Ход строительства" },
  { href: "/novosti", label: "Новости" },
  { href: "/kontakty", label: "Контакты" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Иншооти Сол"
            width={180}
            height={44}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-dark hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+992550015000"
            className="hidden xl:flex items-center gap-2 text-sm font-medium text-primary-dark hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            +992 550 015 000
          </a>
          <Button href="/kontakty" size="md" className="hidden sm:inline-flex">
            Записаться
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
