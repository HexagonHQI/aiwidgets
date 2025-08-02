'use client';

import Link from 'next/link';

const featuredTools = [
  {
    name: 'Email Writer AI',
    description: 'Generate professional emails quickly with AI-powered suggestions.',
  },
  {
    name: 'Resume Optimizer',
    description: 'Improve your CV instantly with AI feedback.',
  },
  {
    name: 'Client Meeting Summarizer',
    description: 'Turn your meeting transcripts into clear summaries.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Hero Section */}
      <section className="max-w-3xl text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to AI Tools Hub 🤖
        </h1>
        <p className="text-xl mb-8 drop-shadow-md">
          Discover powerful, easy-to-use AI micro-tools for freelancers, coaches, HR, e-commerce, and more.
        </p>
        <Link
          href="/tools"
          className="inline-block bg-white text-indigo-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Explore Tools
        </Link>
      </section>

      {/* Featured Tools Preview */}
      <section className="max-w-5xl w-full grid gap-8 md:grid-cols-3">
        {featuredTools.map((tool, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl transition cursor-default"
          >
            <h2 className="text-2xl font-semibold mb-3">{tool.name}</h2>
            <p className="text-white/90">{tool.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

