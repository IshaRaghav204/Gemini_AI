//node --version # Should be >= 18
// npm install @google/generative-a i
import{
    GoogleGenerativeAI,
  } from "@google/generative-ai"
  
  const YOUR_API_KEY = "AIzaSyCYEq7mEbofy11ZF_fIRUll2zxZ5oEnROA";
  const genAI = new GoogleGenerativeAI(YOUR_API_KEY);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
  });
  
  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
  }
  
  export default run;