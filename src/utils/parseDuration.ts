const parseDuration = (months: number): string => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const yearString = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthString = remainingMonths > 0 ? `${remainingMonths} mos` : "";

  if (years > 0 && remainingMonths > 0) {
    return `${yearString} ${monthString}`;
  } else if (years > 0) {
    return yearString;
  } else {
    return monthString;
  }
};

export default parseDuration;
