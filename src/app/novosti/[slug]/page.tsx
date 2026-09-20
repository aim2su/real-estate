import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";
import { posts, getPostBySlug } from "@/data/posts";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return buildMetadata({ title: "Запись не найдена" });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    image: post.coverImage,
    path: `/novosti/${post.slug}`,
  });
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-primary-dark text-white">
        <Container className="py-12 lg:py-16">
          <Link
            href="/novosti"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Все новости
          </Link>

          <div className="mt-6 inline-flex rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-primary-dark">
            {post.category}
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-sm text-white/60">{formatDate(post.date)}</p>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container className="max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-primary/5">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="mt-10 text-base text-primary-dark/80 leading-relaxed">
            <p>{post.content}</p>
          </div>

          <div className="mt-12 rounded-2xl border border-primary/10 bg-bg p-6 text-center">
            <p className="text-primary-dark/70">
              Хотите узнать больше о квартирах в наших ЖК?
            </p>
            <Link
              href="/zhk"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition"
            >
              Смотреть жилые комплексы
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
