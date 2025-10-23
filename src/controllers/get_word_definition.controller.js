import { GoogleGenAI } from "@google/genai";
import { envVars } from "../config/env.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const ai = new GoogleGenAI({
  apiKey: envVars.GEMINI_API_KEY,
});

const getWordDefinition = asyncHandler(async (req, res) => {
  const word = req.params.word;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Give me the definition of the Word in simple english and withing 10 word. Word: ${word}`,
  });

  return res.status(200).json({
    definition: response.text,
    success: true,
    statusCode: 200,
  });
});

export { getWordDefinition };
