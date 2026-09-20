import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Новости и статьи",
  description:
    "Новости компании «Иншооти Сол», ход строительства, старты продаж и полезные статьи о покупке квартир в Душанбе.",
  path: "/novosti",
});

export default function NewsPage() {
  const news = posts.filter((p) => p.category === "новость");
  const articles = posts.filter((p) => p.category === "статья");

  return (
    <>
      <PageHero
        eyebrow="Блог"
        title="Новости и статьи"
        description="Обновления по стройке, старты продаж и полезные материалы о недвижимости."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Новости" }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-primary-dark sm:text-3xl">
            Новости компании
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-primary-dark sm:text-3xl">
            Полезные статьи
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link
      href={`/novosti/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white transition hover:shadow-lg hover:-translate-y-0.5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-primary-dark">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-primary-dark group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm text-primary-dark/70 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-5 border-t border-primary/10 pt-4 text-xs text-primary-dark/50">
          {formatDate(post.date)}
        </div>
      </div>
    </Link>
  );
}
