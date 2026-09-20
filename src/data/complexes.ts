import type { ResidentialComplex } from "@/types";

export const complexes: ResidentialComplex[] = [
  {
    slug: "sol",
    name: "ЖК «Сол»",
    status: "сдан",
    address: "г. Душанбе, ул. Рудаки, 120",
    shortDescription: "Современный жилой комплекс бизнес-класса в центре города.",
    description:
      "ЖК «Сол» — это 12-этажный дом бизнес-класса с панорамными окнами и подземным паркингом. Комплекс сдан в 2024 году, все квартиры готовы к заселению. На первых этажах расположены коммерческие помещения под кафе и офисы.",
    coverImage: "/images/zhk/sol-cover.jpg",
    gallery: ["/images/zhk/sol-cover.jpg"],
    features: ["Подземный паркинг", "Детская площадка", "Охрана 24/7", "Панорамные окна"],
    priceFrom: 850000,
    completionDate: "2024-06-01",
    floors: 12,
    apartmentsCount: 96,
    coordinates: [38.5598, 68.787],
  },
  {
    slug: "parviz",
    name: "ЖК «Парвиз»",
    status: "строится",
    address: "г. Душанбе, ул. Айни, 45",
    shortDescription: "Строящийся комплекс комфорт-класса с закрытой территорией.",
    description:
      "ЖК «Парвиз» — 16-этажный жилой комплекс комфорт-класса с закрытой охраняемой территорией, ландшафтным дизайном и подземным паркингом на 120 мест. Планируемая сдача — конец 2026 года.",
    coverImage: "/images/zhk/parviz-cover.jpg",
    gallery: ["/images/zhk/parviz-cover.jpg"],
    features: ["Закрытая территория", "Подземный паркинг", "Ландшафтный дизайн", "Фитнес-зал"],
    priceFrom: 620000,
    completionDate: "2026-12-01",
    floors: 16,
    apartmentsCount: 180,
    coordinates: [38.5734, 68.7867],
  },
  {
    slug: "dushanbe-city",
    name: "ЖК «Душанбе Сити»",
    status: "старт продаж",
    address: "г. Душанбе, пр. Сомони, 78",
    shortDescription: "Новый проект бизнес-класса с рассрочкой от застройщика.",
    description:
      "ЖК «Душанбе Сити» — новый проект бизнес-класса в самом центре столицы. 20-этажный комплекс с собственным фитнес-центром, коммерческой галереей на первых двух этажах и подземным паркингом. Старт продаж — рассрочка на 24 месяца без процентов.",
    coverImage: "/images/zhk/dushanbe-city-cover.jpg",
    gallery: ["/images/zhk/dushanbe-city-cover.jpg"],
    features: ["Рассрочка 0%", "Фитнес-центр", "Коммерция на 1 этаже", "Подземный паркинг"],
    priceFrom: 780000,
    completionDate: "2027-09-01",
    floors: 20,
    apartmentsCount: 240,
    coordinates: [38.5744, 68.7945],
  },
];

export function getComplexBySlug(slug: string) {
  return complexes.find((c) => c.slug === slug);
}
