'use client';

import { useState } from 'react';

export default function ClientMeetingSummarizer() {
  const [transcript, setTranscript] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const summarizeMeeting = () => {
    setLoading(true);
    // Simulated summary
    setTimeout(() => {
      setSummary('Summary:\n• Client wants feature X\n• Delivery expected by end of month\n• Follow-up next Tuesday');
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Client Meeting Summarizer</h1>
      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Paste meeting transcript"
        className="p-3 rounded text-black mb-4 w-full max-w-xl h-40"
      />
      <button
        onClick={summarizeMeeting}
        className="bg-white text-indigo-700 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        disabled={loading}
      >
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>

      {summary && (
        <div className="bg-white/10 backdrop-blur-md mt-6 p-4 rounded w-full max-w-xl whitespace-pre-wrap">
          {summary}
        </div>
      )}
    </main>
  );
}


