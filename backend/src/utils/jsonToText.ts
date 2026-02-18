export function jsonToText(resume: any) {
  const skills = resume.skills?.join(", ") || ""

  const projects = resume.projects
    ?.map((p: any) =>
      `Project: ${p.title}. Technologies used: ${p.technologies.join(", ")}.`
    )
    .join(" ")

  const education = resume.education
    ?.map((e: any) =>
      `Degree: ${e.degree} from ${e.institution}.`
    )
    .join(" ")

  return `
  Skills: ${skills}.
  ${projects}
  ${education}
  `
}
