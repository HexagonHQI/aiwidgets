'use client';

import { useState } from 'react';

export default function ResumeOptimizer() {
  const [resumeText, setResumeText] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const optimizeResume = () => {
    setLoading(true);
    // Simulated AI feedback
    setTimeout(() => {
      setFeedback('• Add more action verbs\n• Highlight achievements\n• Tailor resume to the job');
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Resume Optimizer</h1>
      <textarea
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Paste your resume text here"
        className="p-3 rounded text-black mb-4 w-full max-w-xl h-40"
      />
      <button
        onClick={optimizeResume}
        className="bg-white text-indigo-700 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Get Feedback'}
      </button>

      {feedback && (
        <div className="bg-white/10 backdrop-blur-md mt-6 p-4 rounded w-full max-w-xl whitespace-pre-wrap">
          {feedback}
        </div>
      )}
    </main>
  );
}
