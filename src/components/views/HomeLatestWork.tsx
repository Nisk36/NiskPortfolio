import Link from "next/link";
import type { Work } from "contentlayer/generated";
import WorkCard from "@/components/WorkCard";

type HomeLatestWorkProps = {
  works: Work[];
};

const HomeLatestWork = ({ works }: HomeLatestWorkProps) => (
  <section className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold">Latest Work</h2>
      <Link href="/works" className="text-sm">
        すべて見る
      </Link>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {works.map((work) => (
        <WorkCard
          key={work._id}
          work={work}
          variant="home"
          summaryFallback="詳細を見る"
        />
      ))}
    </div>
  </section>
);

export default HomeLatestWork;
