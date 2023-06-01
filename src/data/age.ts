// calculate age in years from date
export const PRECISE_AGE =
  (new Date().getTime() - new Date(2003, 5, 1).getTime()) /
  (1000 * 60 * 60 * 24 * 365);

export const AGE = Math.floor(PRECISE_AGE);
