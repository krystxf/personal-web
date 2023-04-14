type ParseDate = (date: any) => Date | string | number | undefined;

const parseDate: ParseDate = (date) => {
  if (date instanceof Date) {
    return date.getUTCFullYear();
  } else if (typeof date === "string") {
    const parsedDate = new Date(date);

    return parsedDate.toString() === "Invalid Date"
      ? date
      : parsedDate.getUTCFullYear();
  } else {
    return undefined;
  }
};

export default parseDate;
