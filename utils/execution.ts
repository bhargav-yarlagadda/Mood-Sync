import axios from "axios";

const API_HOST = "judge0-ce.p.rapidapi.com";
const API_KEY = "3227ef37f5msh5691e5eed3dbf2fp111b32jsn156cc78ec597"; // Store securely

export async function createSubmission(code: string,input:string) {
  const encodedCode = btoa(code);
  const encodedInput = btoa(input)
  const options = {
    method: "POST",
    url: `https://${API_HOST}/submissions`,
    params: {
      base64_encoded: "true",
      fields: "*",
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
      "Content-Type": "application/json",
    },
    data: {
      language_id: 71, // Python 3
      source_code: encodedCode,
      stdin: encodedInput,
    },
  };

  try {
    const response = await axios.request(options);
    const { token } = response.data;

    if (!token) throw new Error("Failed to get submission token.");

    console.log("Submission created. Token:", token);

    // Polling for result
    let statusCode = 1; // 1 = In queue, 2 = Processing
    let result = null;

    while (statusCode === 1 || statusCode === 2) {
      await new Promise((res) => setTimeout(res, 1000)); // Delay before polling again
      result = await getSubmission(token);
      statusCode = result?.status?.id ?? -1;
    }

    console.log("Final Submission Result:", result);
    console.log("Final Submission Result:", atob(result.stdout));

    return result;
  } catch (error) {
    console.error("Error creating submission:", error);
    return null;
  }
}

async function getSubmission(token: string) {
  const options = {
    method: "GET",
    url: `https://${API_HOST}/submissions/${token}`,
    params: {
      base64_encoded: "true",
      fields: "*",
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error getting submission:", error);
    return null;
  }
}


export const getBackgroundColor = (exp: string) => {
    switch (exp) {
      case "neutral":
        return "#000"; // Soft black – keeps it neutral
      case "happy":
        return "#FF6600"; // Warm Orange – enhances joy but isn’t overwhelming
      case "angry":
        return "#4A90E2"; // Cool blue – calms down intensity
      case "sad":
        return "#F4A261"; // Warm peach – provides warmth and comfort
      case "surprised":
        return "#FA812F"; // Soft Yellow – brings balance and reduces shock
      case "disgusted":
        return "#A29BFE"; // Gentle lavender – soothes unease
      case "fearful":
        return "#FFB6B9"; // Soft pink – reassures and provides a sense of safety
      default:
        return "#1A1A1D"; // Default dark gray
    }
  };