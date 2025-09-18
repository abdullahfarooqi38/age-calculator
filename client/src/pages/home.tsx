import AgeCalculator from "@/components/age-calculator";
import ParticleBackground from "@/components/particle-background";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10">
        <AgeCalculator />
      </div>
    </div>
  );
}
