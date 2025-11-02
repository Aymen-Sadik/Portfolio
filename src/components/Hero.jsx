'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import profileImg from '@/profile.jpg.jpg';

export default function Hero({ scrollToSection }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'Web Developer',
    'React Enthusiast',
    'Problem Solver',
    'Tech Learner'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-purple-400">Aymen Sadik</span>
        </h1>
        
        <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 h-12">
          I'm a <span className="text-purple-400">{text}</span>
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm a second-year Full-Stack Developer student at CMC, driven by a passion for technology, creativity, and innovation. When I'm not coding, you'll probably find me riding my bike or mixing music — always exploring new ways to connect tech and art.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-purple-600 text-purple-400 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-16 flex justify-center space-x-6">
       <a href="https://github.com/Aymen-Sadik" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
       <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
       <a href="mailto:aymensadikpro@gmail.com" 
             className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
        {/* Image column */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <div className="rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-600/30">
            <Image
              src={profileImg}
              alt="Aymen Sadik"
              width={320}
              height={320}
              className="object-cover w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64"
              priority
            />
          </div>
        </div>
    </section>
  );
}