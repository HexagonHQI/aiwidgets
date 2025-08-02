'use client';

import { useState } from 'react';

export default function EmailWriterAI() {
  const [topic, setTopic] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const generateEmail = async () => {
    setLoading(true);
    // Simulated API call – Replace with real backend later
    setTimeout(() => {
      setEmail(`Dear client,\n\nThis email is about: ${topic}...\n\nBest regards,\nAI Assistant`);
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Email Writer AI</h1>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic"
        className="p-3 rounded text-black mb-4 w-full max-w-md"
      />
      <button
        onClick={generateEmail}
        className="bg-white text-indigo-700 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Email'}
      </button>

      {email && (
        <div className="bg-white/10 backdrop-blur-md mt-6 p-4 rounded w-full max-w-xl whitespace-pre-wrap">
          {email}
        </div>
      )}
    </main>
  );
}
