import { Users, Cpu, Palette } from "lucide-react";

const activities = [
  {
    name: "Build with AI Cebu 2026",
    organizer: "Google Developers Cebu",
    Icon: Cpu,
  },
  {
    name: "Exploring Career Paths in AI Space",
    organizer: "AI Pilipinas",
    Icon: Users,
  },
  {
    name: "Graphic Artist — ACT Research Team",
    organizer: "2020",
    Icon: Palette,
  },
];

export function Activities() {
  return (
    <div className="w-full border-t border-b border-border divide-y divide-border/60">
      {activities.map((activity) => (
        <div
          key={activity.name}
          className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 md:py-5 px-2 hover:bg-muted/30 transition-spring"
        >
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 flex-shrink-0">
              <activity.Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-sm md:text-base font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                {activity.name}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {activity.organizer}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}