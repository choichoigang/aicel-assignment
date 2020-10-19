export function changeToElement(value: string | number) {
  if (typeof value === "number") return value.toString();
  if (typeof value === "string") return value.toLowerCase();
}
