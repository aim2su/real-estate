import Link from "next/link";
import Image from "next/image";
import { siTelegram, siInstagram, siFacebook } from "simple-icons";
import { Container } from "./Container";

const socials = [siTelegram, siInstagram, siFacebook];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-primary/10 bg-primary-dark text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-block rounded-xl bg-white p-3">
            <Image
              src="/logo.png"
              alt="Иншооти Сол"
              width={180}
              height={44}
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-5 max-w-md text-sm text-white/70 leading-relaxed">
            Меъморӣ аз орзу то воқеият. Строим надёжные, современные и экологичные
            жилые комплексы в Душанбе.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((icon) => (
              <a
                key={icon.slug}
                href="#"
                aria-label={icon.title}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-primary-dark transition"
              >
                <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
            Навигация
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/zhk" className="hover:text-accent transition">Жилые комплексы</Link></li>
            <li><Link href="/o-kompanii" className="hover:text-accent transition">О компании</Link></li>
            <li><Link href="/rassrochka" className="hover:text-accent transition">Рассрочка</Link></li>
            <li><Link href="/novosti" className="hover:text-accent transition">Новости</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
            Контакты
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="tel:+992550015000" className="hover:text-accent transition">
                +992 550 015 000
              </a>
            </li>
            <li>
              <a href="mailto:info@inshootisol.tj" className="hover:text-accent transition">
                info@inshootisol.tj
              </a>
            </li>
            <li>г. Душанбе, ул. Н. Махсум, 71/1</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Иншооти Сол. Все права защищены.</p>
          <Link href="/politika" className="hover:text-white transition">
            Политика конфиденциальности
          </Link>
        </Container>
      </div>
    </footer>
  );
}
