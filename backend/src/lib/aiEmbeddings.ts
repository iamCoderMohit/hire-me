import axios from "axios"

const JINA_API_KEY = process.env.JINA_API_KEY

export async function parseJsonWithAI(text: string) {
    const data = {
      model: "jina-embeddings-v4",
      task: "text-matching",
      input: [text],
    }

    const response = await axios.post("https://api.jina.ai/v1/embeddings", data, {
        headers: {
            Authorization: `Bearer ${JINA_API_KEY}`,
            "Content-Type": "application/json"
        }
    })
    
    const json = response.data
    return json.data[0].embedding
}