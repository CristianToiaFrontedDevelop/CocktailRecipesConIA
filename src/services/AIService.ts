import { streamText } from "ai";
import { openRouter } from "../lib/ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
      prompt,
      system: "Eres un Bartender de Argentina especialista y conocedor de los tragos y bebiodas regionales de cada provincia y ciudad",
      temperature: 1
    })
    return result.textStream
  }
}