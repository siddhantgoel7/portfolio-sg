import { GraduationCap, Award, BookOpen, Users, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const awards = [
    "Dean’s Honour Roll",
    "International Admission Scholarship",
    "Regional Excellence Scholarship"
  ];

  const courses = [
    "Data Structures",
    "Algorithms",
    "Databases",
    "Software Engineering",
    "Product Management"
  ];

  const activities = [
    {
      role: "Software Team",
      organization: "SPEAR Robotics",
      description: "Sensor integration & ROS-based autonomous navigation for University Rover Challenge."
    },
    {
      role: "ML Developer",
      organization: "UAIS (Undergraduate AI Society)",
      description: "Full-stack ML web development integrating NLP models and LLM APIs for automated analysis."
    }
  ];

  return (
    <section className="section-padding bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-12 left-12 w-6 h-6 bg-minecraft-gold animate-pulse"></div>
        <div className="absolute bottom-12 right-12 w-6 h-6 bg-minecraft-diamond animate-pulse"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-pixel mb-4 glitch-text" data-text="EDUCATION.LOG">EDUCATION.LOG</h2>
          <div className="w-16 h-1 bg-minecraft-gold mx-auto animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Education Card */}
          <div className="minecraft-block from-card to-background p-6 sm:p-8 hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 minecraft-block from-minecraft-gold to-yellow-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-pixel text-lg sm:text-xl text-primary mb-1">University of Alberta</h3>
                  <p className="text-minecraft-emerald font-mono font-bold text-sm sm:text-base">
                    B.Sc. (Honours), Computing Science
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-1 text-xs sm:text-sm text-muted-foreground font-mono">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-minecraft-gold" />
                  <span>Expected: May 2027</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-minecraft-redstone" />
                  <span>Edmonton, AB</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border/50">
              {/* Awards */}
              <div>
                <h4 className="font-pixel text-sm flex items-center gap-2 mb-3 text-minecraft-gold">
                  <Award className="w-4 h-4" />
                  Honours & Awards
                </h4>
                <div className="space-y-2">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs sm:text-sm font-mono text-muted-foreground">
                      <span className="text-minecraft-gold">★</span>
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coursework */}
              <div>
                <h4 className="font-pixel text-sm flex items-center gap-2 mb-3 text-minecraft-diamond">
                  <BookOpen className="w-4 h-4" />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <span
                      key={index}
                      className="pixel-border bg-muted/60 px-2 py-1 text-xs font-mono text-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Activities / Extracurriculars */}
          <div className="minecraft-block from-card/80 to-background/80 p-6 sm:p-8">
            <h4 className="font-pixel text-base sm:text-lg flex items-center gap-2 mb-6 text-minecraft-emerald">
              <Users className="w-5 h-5" />
              University Activities & Teams
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((act, index) => (
                <div key={index} className="retro-card p-4">
                  <div className="font-pixel text-sm text-minecraft-emerald mb-1">{act.organization}</div>
                  <div className="font-mono text-xs text-minecraft-gold font-bold mb-2">{act.role}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{act.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
