
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const generateGreeting = async (username: string): Promise<string> => {
  if (!username || username.length < 2) return "你好！请输入您的用户名。";
  
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `为名为 "${username}" 的用户生成一个简短（最多10个字）、友好且热情的中文欢迎语。不要使用表情符号。`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        maxOutputTokens: 20,
      }
    });

    return response.text || `欢迎回来，${username}！`;
  } catch (error) {
    console.error("Gemini Greeting Error:", error);
    return `很高兴见到你，${username}。`;
  }
};
