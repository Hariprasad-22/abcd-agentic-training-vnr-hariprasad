import React, { useState } from "react";
import "./index.css";

function App() {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    setSummary("");

    try {
      const response = await fetch("http://localhost:5678/webhook-test/podcast-transcript", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcript }),
      });

      const data = await response.json();
      setSummary(data.summary || "No summary returned.");
    } catch (error) {
      console.error(error);
      setSummary("Error fetching summary.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🎧 AI Podcast Summarizer</h1>
      <textarea
        placeholder="Paste your podcast transcript here..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
      />
      <button onClick={handleSummarize} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {summary && (
        <div className="output">
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
