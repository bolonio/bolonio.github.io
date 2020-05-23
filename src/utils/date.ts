const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

/**
 * Returns a date formatted with the format DD mm YYYY
 * @param date
 */
export const getFormattedDate = (date: string): string => {
  const formattedDate = new Date(date)
  return `${formattedDate.getDate()} ${
    MONTHS[formattedDate.getMonth()]
  } ${formattedDate.getFullYear()}`
}
