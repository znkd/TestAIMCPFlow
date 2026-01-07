
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const generateGreeting = async (username: string): Promise<string> => {
  if (!username || username.length < 2) return "Hello there! Please enter your name.";
  
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a very short (max 10 words), friendly, and welcoming greeting for a user named "${username}" who is logging into a premium app. No emojis.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        maxOutputTokens: 20,
      }
    });

    return response.text || `Welcome back, ${username}!`;
  } catch (error) {
    console.error("Gemini Greeting Error:", error);
    return `Great to see you, ${username}.`;
  }
};
