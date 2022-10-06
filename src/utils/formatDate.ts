export default function formatDate(date: Date | string): string {
  const currentDate = new Date(date)
  const formatted = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  }).format(currentDate)

  return formatted
}
