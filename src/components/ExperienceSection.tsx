import { Calendar, MapPin, Trophy } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Wisethink Solutions",
      location: "New Delhi, India",
      period: "May 2025 – Present",
      description: `Built custom business applications using Zoho Creator, Deluge, and Python with Java/JavaScript integrations. 
      Developed backend workflows for fintech, e-governance, and healthcare clients like BharatPe and NSDC, collaborating across teams to ship production-ready features.`,
      skills: ["Zoho Creator", "Deluge", "Python", "JavaScript"],
      color: "from-minecraft-diamond to-blue-400"
    },
    {
      title: "Full Stack ML Web Developer Intern",
      company: "Undergraduate Artificial Intelligence Society",
      location: "Edmonton, AB",
      period: "Jan 2024 – April 2024",
      description: `Integrated ML and NLP models with a full-stack web platform to automate industrial risk report analysis. 
      Used ChatGPT APIs to enhance report generation and risk prediction, optimizing safety control workflows.`,
      skills: ["Python", "React", "Flask", "NLP", "ChatGPT API"],
      color: "from-minecraft-emerald to-green-400"
    },
    {
      title: "Software Engineer - Sensor Integration",
      company: "SPEAR, University of Alberta",
      location: "Edmonton, AB",
      period: "Sept 2023 – Apr 2025",
      description: `Contributed to the University Rover Challenge by engineering camera and radio subsystems. 
      Developed ROS-based autonomous navigation algorithms for obstacle avoidance and real-time decision-making.`,
      skills: ["ROS", "C++", "Python", "Robotics"],
      color: "from-minecraft-gold to-yellow-400"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-blue-900/20 relative overflow-hidden">
      {/* Pixel art background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-sm animate-pulse"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-sm animate-pulse"></div>
        <div className="absolute bottom-20 left-32 w-4 h-4 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-sm animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-sm animate-pulse"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-pixel mb-4 glitch-text" data-text="EXPERIENCE.LOG">EXPERIENCE.LOG</h2>
          <div className="w-16 h-1 bg-minecraft-diamond mx-auto animate-pulse"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-minecraft-diamond via-minecraft-emerald to-minecraft-gold rounded-full"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-6 sm:gap-8 group">
                <div className="flex-shrink-0 relative">
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 minecraft-block bg-gradient-to-br ${exp.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 z-10`}>
                    <Trophy className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="absolute top-4 sm:top-6 -left-4 sm:-left-8 w-4 sm:w-8 h-0.5 bg-gradient-to-r from-current to-transparent"></div>
                </div>

                <div className="flex-1 minecraft-block from-card to-background p-4 sm:p-6 group-hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-pixel text-sm sm:text-lg mb-1">{exp.title}</h3>
                      <p className="text-minecraft-emerald font-mono text-xs sm:text-sm font-bold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base mb-4 leading-relaxed whitespace-pre-line">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inventory-slot !w-auto !h-auto px-2 py-1 text-xs bg-minecraft-grass/20 border-2 border-minecraft-grass text-minecraft-grass font-mono hover:bg-minecraft-grass hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
