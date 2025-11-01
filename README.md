🧠 Podcast Digest Agent

  An AI-powered podcast summarization tool that automatically extracts, transcribes, and summarizes podcast episodes using n8n, Google Gemini, and a React dashboard.
  Users can enter a YouTube or podcast link and receive a concise, well-structured summary via email.

🚀 High-Level Overview

  Goal: Automate podcast content summarization and email delivery using AI and automation workflows.

Key Features:

  🎙 AI-driven transcription: Converts podcast or video audio into clean, readable text.

  🧩 Summarization with Gemini: Generates structured summaries and key takeaways.

  🔗 URL-based automation: Users just paste a YouTube or podcast link or manual transcripts.

  📧 Automated email delivery: The summary is sent directly to the user’s inbox.

  🖥 Interactive React dashboard: Simple, modern UI to input links and track status.

🔁 Workflow pipeline: Webhook → Transcriber → Summarizer → Email Formatter → Gmail Send.

🏗 Architecture Diagram
```text
+-------------------+        +------------------+        +-----------------+
|  React Dashboard  | --->   | n8n Webhook Node | --->   | Transcriber     |
| (User inputs link)|        | (Receives link)  |        | (Audio to text) |
+-------------------+        +------------------+        +-----------------+
                                                   |
                                                   v
                                           +--------------------+
                                           | Summarizer Agent   |
                                           | (Gemini AI model)  |
                                           +--------------------+
                                                   |
                                                   v
                                           +--------------------+
                                           | Formatter Node     |
                                           | (Organizes summary)|
                                           +--------------------+
                                                   |
                                                   v
                                           +--------------------+
                                           | Email Designer     |
                                           | + Gmail Send       |
                                           +--------------------+
```

⚙ Low-Level Details
1️⃣ React Frontend

  Framework: React + Axios + Framer Motion

  Functionality: Takes YouTube/podcast URL and sends it to the n8n webhook.

  API Call Example:

  await axios.post("http://localhost:5678/webhook-test/podcast-digest", {
    podcastUrl,
    email,
  });


Styling: TailwindCSS + animated transitions

Output: Displays real-time statuses — “Processing…”, “Summarizing…”, “Sent ✅”

2️⃣ n8n Workflow
Node	Purpose	Key Configurations
Webhook	Receives input (podcastUrl, email)	POST endpoint
Transcriber Node	Extracts and transcribes audio from YouTube/podcast	Uses Gemini Audio API or external transcription service
Summarizer Agent	Summarizes transcript using Gemini	Prompt uses {{ $json.body.transcript }}
Formatter Node	Cleans and structures the summary into sections	Title, Highlights, Key Takeaways
Email Designer	Creates a readable email layout	HTML template
Gmail Send	Sends the summary email	Auth via Gmail credentials
🔄 Workflow Flow Diagram

Flow:
User Input → Webhook → Transcriber → Summarizer → Formatter → Email Designer → Gmail Send

You can also visualize this flow easily using draw.io or Lucidchart for your documentation.

🧠 Sample Input & Output

Input:

{
  "podcastUrl": "https://www.youtube.com/watch?v=abcd1234",
  "email": "example@gmail.com"
}


Output (Email):

Subject: Podcast Digest: “How AI is Changing the World”

Body:
A short, AI-generated summary highlighting key insights, guest perspectives, and discussion points.
Includes timestamps and key takeaways formatted for quick reading.

🧩 Tech Stack
Layer	Technology
Frontend	React, Axios, Framer Motion
Backend Workflow	n8n
AI Models	Google Gemini
Transcription	Gemini Audio / Whisper API
Email Service	Gmail Node in n8n
💡 Future Improvements

🧠 Multi-language transcription

📊 Keyword-based indexing

🎯 Personalized digest formatting options

🔄 Direct integration with Spotify & Apple Podcasts APIs

PPT:
https://www.canva.com/design/DAG3cCOfSDU/MIenaEfTi8EfHxh031Djyw/edit?utm_content=DAG3cCOfSDU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
