
import { User, MapPin, Calendar, Coffee } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: "Graduation", value: "May 2027" },
    { icon: User, label: "Degree", value: "B.Sc. (Honours)" },
    { icon: MapPin, label: "Location", value: "Edmonton, AB" },
    { icon: Coffee, label: "Specialization", value: "AI & Systems" }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-pixel mb-4 glitch-text" data-text="ABOUT.EXE">ABOUT.EXE</h2>
          <div className="w-16 h-1 bg-minecraft-grass mx-auto animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-minecraft-redstone"></div>
                <div className="terminal-dot bg-minecraft-gold"></div>
                <div className="terminal-dot bg-minecraft-emerald"></div>
              </div>
              <div className="font-mono text-xs sm:text-sm space-y-2">
                <div><span className="text-minecraft-emerald">class</span> <span className="text-minecraft-diamond">SoftwareEngineer</span> {`{`}</div>
                <div className="ml-4"><span className="text-minecraft-gold">constructor</span>() {`{`}</div>
                <div className="ml-8">this.name = <span className="text-minecraft-redstone">"Siddhant Goel"</span>;</div>
                <div className="ml-8">this.school = <span className="text-minecraft-redstone">"University of Alberta"</span>;</div>
                <div className="ml-8">this.focus = [<span className="text-minecraft-redstone">"AI"</span>, <span className="text-minecraft-redstone">"RAG Pipelines"</span>, <span className="text-minecraft-redstone">"Backend Systems"</span>];</div>
                <div className="ml-8">this.status = <span className="text-minecraft-diamond">"Building Production Software"</span>;</div>
                <div className="ml-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg leading-relaxed">
              I'm a B.Sc. (Honours) Computing Science student at the University of Alberta with internship experience 
              building AI-integrated tools, multi-tenant backend architectures, and full-stack cloud applications. 
              Passionate about shipping high-impact software from RAG microservices to real-time multiplayer platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="retro-card group hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 text-minecraft-grass group-hover:animate-bounce" />
                  <div className="font-pixel text-sm sm:text-base mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
