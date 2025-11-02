'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16">
          About <span className="text-purple-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Who Am I?</h3>
              <p className="text-gray-300 leading-relaxed">
                I’m Aymen Sadik, a second-year Full-Stack Developer student at CMC, passionate about web development, new technologies, and creative digital experiences. I love bikes and have a strong interest in DJs and how technology connects with music and innovation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently in my second year of bachelor's studies, I've been focusing on modern web 
                technologies, particularly React and JavaScript. I enjoy building projects that solve 
                real problems and help me grow as a developer.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">What I Love</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">▸</span>
                  Building creative and responsive web applications
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">▸</span>
                  Exploring new technologies and full-stack tools
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">▸</span>
                  Mixing my love for music, DJing, and technology
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">▸</span>
                  Riding bikes and finding inspiration on the road
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Education</span>
                  <span className="text-white font-medium">Full-Stack Development Student</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Year</span>
                  <span className="text-white font-medium">2nd Year</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Focus</span>
                  <span className="text-white font-medium">Web Development</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-white font-medium">2+ Years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Location</span>
                  <span className="text-white font-medium">Casablanca</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Current Goals</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm working on mastering React and exploring backend technologies. My goal is to become 
                a full-stack developer and contribute to meaningful projects that impact people's lives 
                positively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}