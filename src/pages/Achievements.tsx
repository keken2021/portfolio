import { Award, Building2 } from "lucide-react";

const achievements = [
  {
    Icon: Award,
    text: "Capstone project (Ciudad App) featured on the official website of Cebu Technological University, recognizing its innovation and impact on barangay healthcare digitization.",
    link: "https://www.ctu.edu.ph/2026/01/ctu-main-ccict-equips-barangay-san-roque-personnel-with-essential-digital-skills/"
},
  {
    Icon: Building2,
    text: "Streamlined and systematized workflow processes for Barangay San Roque Ciudad, improving operational efficiency across barangay services.",
  },
];

export function Achievements() {
  return (
    <div className="w-full space-y-4">
      {achievements.map((item, index) => (
        <div
  key={index}
  className="relative group flex items-start gap-5 p-5 rounded-2xl border border-border bg-card shadow-soft hover:shadow-ambient hover:border-slate-300 transition-spring-slow"
>
  <div className="h-8 w-8 ...">
    <item.Icon className="h-3.5 w-3.5" />
  </div>

  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
    {item.text}
  </p>

  {item.link && (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="absolute inset-0 z-10"
      aria-label="View achievement details"
    />
  )}
</div>
      ))}
    </div>
  );
}