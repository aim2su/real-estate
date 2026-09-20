import type { Apartment } from "@/types";

function generateApartments(
  complexSlug: string,
  totalFloors: number,
  countPerFloor: number
): Apartment[] {
  const list: Apartment[] = [];
  const layouts = [
    { rooms: 1, area: 42.5 },
    { rooms: 2, area: 64.0 },
    { rooms: 3, area: 85.5 },
    { rooms: 4, area: 112.0 },
  ];

  for (let floor = 1; floor <= totalFloors; floor++) {
    for (let i = 1; i <= countPerFloor; i++) {
      const layout = layouts[(floor + i) % layouts.length];
      const basePrice = 22000;
      const price = Math.round(layout.area * basePrice);
      const status =
        (floor + i) % 7 === 0 ? "продана" : (floor + i) % 5 === 0 ? "бронь" : "свободна";

      list.push({
        id: `${complexSlug}-${floor}-${i}`,
        complexSlug,
        number: `${floor}${String(i).padStart(2, "0")}`,
        rooms: layout.rooms,
        area: layout.area,
        floor,
        totalFloors,
        price,
        pricePerM2: basePrice,
        status,
        planImage: "/images/plans/homescheme.webp",
        windowsSide: ["юг", "север", "восток", "запад"][(floor + i) % 4],
        balcony: i % 2 === 0,
      });
    }
  }

  return list;
}

export const apartments: Apartment[] = [
  ...generateApartments("sol", 12, 3),
  ...generateApartments("parviz", 16, 4),
  ...generateApartments("dushanbe-city", 20, 5),
];

export function getApartmentById(id: string) {
  return apartments.find((a) => a.id === id);
}

export function getApartmentsByComplex(slug: string) {
  return apartments.filter((a) => a.complexSlug === slug);
}
