import { groq } from "../config/ai.js"

const systemPrompt = `
You are a resume parsing engine.

Extract the following fields from the resume text and return STRICT JSON only.

Required structure:

{
  "name": string | null,
  "email": string | null,
  "phone": string | null,
  "skills": string[],
  "projects": [
    {
      "title": string,
      "description": string,
      "technologies": string[]
    }
  ],
  "education": [
    {
      "degree": string,
      "institution": string,
      "year": string
    }
  ]
}

Rules:
- If a field is missing, return null.
- Do NOT invent information.
- Do NOT include extra fields.
- Do NOT wrap JSON in markdown.
- Output valid JSON only.
`

export async function parseResumeWithAI(rawText: string) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
messages: [
  { role: "system", content: systemPrompt },
  { role: "user", content: rawText }
],
    response_format: { type: "json_object" },
  })

  return JSON.parse(response.choices[0]!.message.content!)
}