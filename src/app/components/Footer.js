'use client';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white/5 dark:bg-black/5 backdrop-blur-xs text-gray-900 dark:text-gray-300 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center">

        {/* 🔹 Centered Logo */}
        <h3 className="text-3xl font-extrabold tracking-wide font-[Caveat]">
          SplitExpense
        </h3>

        {/* 🔹 Social Links (Centered) */}
        <div className="flex space-x-4 mt-4">
          <Link href="https://github.com/swapnilsanap7" target="_blank" aria-label="GitHub">
            <Github className="w-6 h-6 text-gray-300 dark:text-gray-100 transition hover:scale-110 hover:text-blue-400" />
          </Link>
          <Link href="https://linkedin.com/in/swapnilsanap7" target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-gray-300 dark:text-gray-100 transition hover:scale-110 hover:text-blue-400" />
          </Link>
          <Link href="mailto:swapnilsanap7@gmail.com" aria-label="Email">
            <Mail className="w-6 h-6 text-gray-300 dark:text-gray-100 transition hover:scale-110 hover:text-blue-400" />
          </Link>
        </div>

        {/* 🔹 Navigation Links (Centered) */}
        <div className="flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-300 mt-4">
          <Link href="#about" className="hover:text-blue-500 transition">About</Link>
          <Link href="#features" className="hover:text-blue-500 transition">Features</Link>
          <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
          <Link href="#privacy" className="hover:text-blue-500 transition">Privacy</Link>
        </div>

        {/* 🔹 Copyright (Centered) */}
        <div className="text-xs opacity-70 mt-6 text-gray-600 dark:text-gray-400">
          <p>© 2025 SplitExpense Inc. | Built with ❤️ by <Link href="https://swapnilsanap7.com" target="_blank" className="hover:text-blue-500">Swapnilsanap7</Link></p>
          <p className="mt-2">
            <Link href="/terms" className="hover:text-blue-500 transition">Terms</Link> · 
            <Link href="/privacy" className="hover:text-blue-500 transition"> Privacy Policy</Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
