// This is a Server Component, which is the default in Next.js App Router.

// You can import the Font here if you want to use it
import { Inter } from 'next/font/google';

// Define the root component for the home page
export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50 text-gray-900 font-sans">
      {/* Tailwind Test: Centered, large text, professional font styling */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-600 tracking-tight mb-4">
        My Professional Portfolio
      </h1>
      <p className="text-xl text-gray-700">
        Status: Stack successfully deployed! Ready to build.
      </p>
    </main>
  );
}
