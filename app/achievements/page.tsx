import type { Metadata } from "next";
import AchievementItem from "@/components/AchievementItem";
import Reveal from "@/components/Reveal";
import { achievements } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Hackathon placements and competition results: ONDC, Execute 4.0, RBIH, and Google Solution Challenge.",
};

export default function AchievementsPage() {
  return (
    <div className="container-site section-pad">
      <Reveal>
        <header className="page-header">
          <p className="page-eyebrow">Recognition</p>
          <h1 className="page-title">Achievements</h1>
          <p className="page-lead">
            Competitive placements across national hackathons and industry
            challenges. Building under pressure, shipping under constraints.
          </p>
        </header>
      </Reveal>

      <div className="max-w-3xl divide-y-0 border-t border-border">
        {achievements.map((item) => (
          <Reveal key={item.name}>
            <AchievementItem item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
