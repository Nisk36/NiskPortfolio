import type { Work } from "contentlayer/generated";
import LatestSection from "@/components/LatestSection";
import WorkCard from "@/components/WorkCard";

type HomeLatestWorkProps = {
  works: Work[];
};

const HomeLatestWork = ({ works }: HomeLatestWorkProps) => (
  <LatestSection title="Latest Work" href="/works">
    {works.map((work) => (
      <WorkCard key={work._id} work={work} variant="home" />
    ))}
  </LatestSection>
);

export default HomeLatestWork;
