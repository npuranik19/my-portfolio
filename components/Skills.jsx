"use client"

/**
 * Skills & Certifications Component
 * Displays Nishant Puranik's technical skills and professional certifications
 * Features: Interactive hover effects, responsive grid layout, smooth scrolling navigation
 */
export default function Skills() {
  const skills = [
    { name: "Java", logo: "☕", color: "from-orange-600 to-red-600" },
    { name: "Python", logo: "🐍", color: "from-blue-500 to-yellow-400" },
    { name: "JavaScript", logo: "🟨", color: "from-yellow-400 to-yellow-600" },
    { name: "C#", logo: "🔷", color: "from-purple-600 to-blue-600" },
    { name: "C++", logo: "🔵", color: "from-blue-600 to-indigo-600" },
    { name: "C", logo: "🔸", color: "from-gray-600 to-gray-800" },
    { name: "HTML", logo: "🌐", color: "from-orange-500 to-red-500" },
    { name: "CSS", logo: "🎨", color: "from-blue-400 to-blue-600" },
    { name: "SQL", logo: "🗄️", color: "from-indigo-500 to-purple-600" },
    { name: "Git", logo: "🌿", color: "from-orange-600 to-red-600" },
    { name: "MATLAB", logo: "📊", color: "from-orange-500 to-orange-700" },
    { name: "React", logo: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Tailwind", logo: "💨", color: "from-teal-400 to-cyan-500" },
    { name: "TypeScript", logo: "🔷", color: "from-blue-600 to-blue-800" },
    { name: "Node.js", logo: "🟢", color: "from-green-500 to-green-700" },
    { name: "AWS", logo: "☁️", color: "from-orange-400 to-yellow-500" },
  ]

  const certifications = [
    {
      name: "Microsoft 365 Certifications",
      issuer: "Microsoft",
      image: "/microsoft-certificate-placeholder.jpg",
    },
    {
      name: "Machine Learning Fundamentals",
      issuer: "Udemy",
      image: "/udemy-certificate-placeholder.jpg",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      image: "/aws-certificate-placeholder.jpg",
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker",
      image: "/docker-certificate-placeholder.jpg",
    },
    {
      name: "React Developer",
      issuer: "Meta",
      image: "/react-certificate-placeholder.jpg",
    },
    {
      name: "Node.js Application Developer",
      issuer: "OpenJS Foundation",
      image: "/nodejs-certificate-placeholder.jpg",
    },
  ]

  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience")
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-neutral-800 relative flex flex-col">
      <div className="max-w-6xl mx-auto flex-1">
        <h2 className="text-5xl font-bold text-center text-purple-400 mb-20 mt-8">Skills & Certifications</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto mb-6">
            {certifications.slice(0, 3).map((cert) => (
              <div
                key={cert.name}
                className="group relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm text-white rounded-xl border border-purple-500/30 font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400/60"
              >
                <div className="p-4">
                  <div className="text-center mb-3">
                    <div className="font-bold text-sm group-hover:text-purple-300 transition-colors duration-300 leading-tight mb-2">
                      {cert.name}
                    </div>
                    <div className="text-xs text-purple-300 mb-3">{cert.issuer}</div>
                  </div>

                  <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-dashed border-purple-400/50 flex items-center justify-center group-hover:border-purple-300 transition-colors duration-300">
                    <div className="text-center text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                      <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="text-xs font-medium">Certificate</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
            {certifications.slice(3, 6).map((cert) => (
              <div
                key={cert.name}
                className="group relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm text-white rounded-xl border border-purple-500/30 font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400/60"
              >
                <div className="p-4">
                  <div className="text-center mb-3">
                    <div className="font-bold text-sm group-hover:text-purple-300 transition-colors duration-300 leading-tight mb-2">
                      {cert.name}
                    </div>
                    <div className="text-xs text-purple-300 mb-3">{cert.issuer}</div>
                  </div>

                  <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-dashed border-purple-400/50 flex items-center justify-center group-hover:border-purple-300 transition-colors duration-300">
                    <div className="text-center text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                      <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="text-xs font-medium">Certificate</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`group relative overflow-hidden bg-gradient-to-r ${skill.color} backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/30 hover:border-white/40`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                    {skill.logo}
                  </span>
                  <span className="group-hover:text-white transition-colors duration-300 text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToExperience}
          className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
          aria-label="Scroll to Experience section"
        >
          <svg
            className="w-8 h-8 text-purple-400 hover:text-purple-300 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
