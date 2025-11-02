'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'SQL', level: 65 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Terminal', level: 70 }
      ]
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-purple-400 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-semibold text-purple-400">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['TypeScript', 'Next.js', 'GraphQL', 'Docker', 'AWS', 'Testing'].map((item, index) => (
                <span
                  key={index}
                  className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-400/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Education & Certifications</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <div>
                  <strong>Technician specialized in Fullstack</strong>
                  <p className="text-sm text-gray-400">Currently in 2nd Year</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <div>
                  <strong>JavaScript Algorithms</strong>
                  <p className="text-sm text-gray-400">Online Certification - 2024</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <div>
                  <strong>Bac en science Physique</strong>
                  <p className="text-sm text-gray-400">2022</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Soft Skills</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Problem Solving & Critical Thinking
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Team Collaboration & Communication
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Time Management & Organization
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Quick Learning & Adaptability
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">•</span>
                Attention to Detail
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}