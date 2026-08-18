import { ExternalLink, Github, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CampusNest",
      description: "Cross-platform housing marketplace for university students on iOS, Android, and Web featuring university-only auth, real-time listing sync, and map discovery.",
      bullets: [
        "University-only authentication, listing, filtering, and Google Maps-based discovery.",
        "Real-time saved listing sync across active views using change subscriptions.",
        "Scalable PostgreSQL backend with real-time messaging, admin moderation, and storage cleanup.",
        "Integrated CodeRabbit to cut PR review cycle times by 30%."
      ],
      tech: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Google Maps SDK"],
      github: "https://github.com/siddhantgoel7",
      stars: 120,
      image: "🏠"
    },
    {
      title: "PromptEd",
      description: "Real-time AI interactive learning platform serving 200+ concurrent users with instructor dashboard, live session engine, and RAG pipelines.",
      bullets: [
        "Shipped instructor dashboard, live session engine, and student client for 200+ concurrent users.",
        "Provider-agnostic RAG system embedding content (pgvector), Whisper STT, and GPT-4o-mini outputs.",
        "80+ unit, API, and E2E tests in GitLab CI/CD pipeline achieving regression-free deployments."
      ],
      tech: ["Next.js", "TypeScript", "OpenAI GPT-4o", "PostgreSQL", "pgvector", "Whisper STT", "Playwright"],
      github: "https://github.com/siddhantgoel7",
      stars: 110,
      image: "⚡"
    },
    {
      title: "Elevated",
      description: "Gamified learning web platform featuring automated game generation (Crosswords, Trivia, Jeopardy) and real-time multiplayer.",
      bullets: [
        "Automated gamification engine for interactive academic games.",
        "Real-time multiplayer over WebSockets (Django Channels & Redis) with live leaderboards.",
        "LLM-powered RAG microservice converting uploaded lecture PDFs into grounded game questions."
      ],
      tech: ["React", "TypeScript", "Django REST", "WebSockets", "Redis", "LangChain", "RAG"],
      github: "https://github.com/siddhantgoel7",
      stars: 98,
      image: "🎮"
    },
    {
      title: "Mood Tracker App",
      description: "Android app for mood logging with real-time sync, emotion-mapped UI, geotagged pins, social features, and Firebase integration.",
      bullets: [
        "Android app for mood logging with real-time sync and emotion-mapped UI.",
        "Geotagged pins, social features, and Firebase backend integration."
      ],
      tech: ["Android SDK", "Firebase", "Java", "JUnit", "Espresso"],
      github: "https://github.com/siddhantgoel7/project-kernelcrew",
      stars: 82,
      image: "📱"
    },
    {
      title: "ConsoleTweeter CLI",
      description: "A Python-based social media CLI with tweeting, hashtag parsing, user auth, follow system, and MongoDB + SQLite integration.",
      bullets: [
        "CLI social media client supporting tweets, hashtag indexing, and user relationships.",
        "Dual persistence layer using MongoDB and SQLite."
      ],
      tech: ["Python", "MongoDB", "SQLite", "CLI"],
      github: "https://github.com/siddhantgoel7/ConsoleTweeter-CLI-v2", 
      stars: 66,
      image: "🖥️"
    },
    {
      title: "RareQuest Web Game",
      description: "Pixel-style RPG browser game built in a healthcare hackathon to raise awareness about rare diseases through gameplay.",
      bullets: [
        "Pixel RPG browser game highlighting health challenges.",
        "Interactive gameplay built with Phaser.js and HTML5 Canvas."
      ],
      tech: ["Phaser.js", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/siddhantgoel7/RareQuest",
      stars: 94,
      image: "🕹️"
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-minecraft-grass font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {Math.random() > 0.5 ? '01' : '10'}
          </div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-pixel mb-4 glitch-text" data-text="PROJECTS.LOG">PROJECTS.LOG</h2>
          <div className="w-16 h-1 bg-minecraft-grass mx-auto animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="retro-card group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl sm:text-4xl group-hover:animate-bounce">{project.image}</div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground pixel-border bg-muted/50 px-2 py-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-minecraft-gold" />
                  {project.stars}
                </div>
              </div>

              <h3 className="font-pixel text-sm sm:text-lg mb-3 group-hover:text-minecraft-grass transition-colors">{project.title}</h3>
              <p className="text-xs sm:text-sm mb-4 leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="pixel-border bg-muted/70 px-2 py-1 text-xs font-mono hover:bg-accent transition-colors cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 text-xs sm:text-sm hover:text-minecraft-grass transition-colors group-hover:animate-pulse">
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  Code
                </a>
                
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://github.com/siddhantgoel7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="retro-button-blue flex items-center justify-center gap-2 animate-pulse group">
              <Github className="w-4 h-4 group-hover:animate-bounce" />
              View All Projects
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
