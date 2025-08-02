'use client';

import Link from 'next/link';
import { useState } from 'react';

const featuredTools = [
  {
    id: 'email-writer-ai',
    name: 'Email Writer AI',
    description: 'Generate professional emails quickly with AI-powered suggestions.',
    href: '/tools/email-writer-ai',
  },
  {
    id: 'resume-optimizer',
    name: 'Resume Optimizer',
    description: 'Improve your CV instantly with AI feedback.',
    href: '/tools/resume-optimizer',
  },
  {
    id: 'client-meeting-summarizer',
    name: 'Client Meeting Summarizer',
    description: 'Turn your meeting transcripts into clear summaries.',
    href: '/tools/client-meeting-summarizer',
  },
];

export default function Tools() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-12 drop-shadow-lg text-center sm:text-left w-full max-w-5xl">
        Our AI Tools
      </h1>

      <section className="max-w-5xl w-full grid gap-8 md:grid-cols-3">
        {featuredTools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.href}
            className={`
              block rounded-xl p-6 shadow-lg transition-transform transform
              bg-white bg-opacity-10 backdrop-blur-md
              hover:bg-opacity-20 hover:shadow-2xl hover:scale-[1.03]
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400
              cursor-pointer
              ${hovered === tool.id ? 'ring-4 ring-indigo-400' : ''}
            `}
            onMouseEnter={() => setHovered(tool.id)}
            onMouseLeave={() => setHovered(null)}
            tabIndex={0}
            aria-label={`Navigate to ${tool.name}`}
          >
            <h2 className="text-2xl font-semibold mb-3">{tool.name}</h2>
            <p className="text-white/90">{tool.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}

