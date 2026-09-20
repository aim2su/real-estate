export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value) + " с.";
}

export function formatArea(value: number): string {
  return value.toFixed(1) + " м²";
}

export function formatDate(value: string): string {
  const date = new Date(value);
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatRooms(rooms: number): string {
  if (rooms === 0) return "Студия";
  return `${rooms}-комнатная`;
}
