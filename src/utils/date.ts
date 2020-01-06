/** Returns a date formatted with the format DD.MM.YYYY */
export const getFormattedDate = (date: string): string => {
  const formattedDate = new Date(date)
  return `${formattedDate.getDate()}.${formattedDate.getMonth() +
    1}.${formattedDate.getFullYear()}`
}
