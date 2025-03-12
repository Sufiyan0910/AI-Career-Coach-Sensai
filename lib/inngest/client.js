import { Inngest } from "inngest";

// Create a client to send and recieve events
export const inngest = new Inngest({
    id: "sensai",
    name: "Sensai",
    credentials: {
        gemini: {
            apiKey: process.env.GEMINI_API_KEY,
        },
    },
});