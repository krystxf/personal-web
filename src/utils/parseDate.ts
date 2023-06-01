// import { NOW } from "$data";

type ParseDate = (date: Date | "now") => string;

export const parseDate: ParseDate = (date) => {
  if (date === "now") return "now";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

type GetDate = (year: number, month: number) => Date;

// receives month as 1-12
export const getDate: GetDate = (year, month) => new Date(year, month - 1);

export const getDuration = (from: Date, to: Date | "now") => {
  const parsedTo = to === "now" ? new Date() : to;

  const fromMonths = from.getFullYear() * 12 + from.getMonth();
  const toMonths = parsedTo.getFullYear() * 12 + parsedTo.getMonth();

  const months = toMonths - fromMonths;

  const years = Math.floor(months / 12);
  const restMonths = months % 12;

  return `${years ? `${years} years` : ""} ${restMonths} months`;
};
