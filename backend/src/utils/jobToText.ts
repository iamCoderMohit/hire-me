export function jobToText(job: {
  title: string
  company?: string
  location?: string
  description?: string
}) {
  return `
  Job Title: ${job.title}.
  Company: ${job.company || "Unknown"}.
  Location: ${job.location || "Not specified"}.
  Description: ${job.description || ""}.
  `
    .replace(/\s+/g, " ")
    .trim()
}
