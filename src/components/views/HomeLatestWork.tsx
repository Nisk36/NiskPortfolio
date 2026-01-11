import Link from "next/link";
import type { Work } from "contentlayer/generated";
import WorkCardHome from "@/components/WorkCardHome";

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
        <WorkCardHome key={work._id} work={work} />
      ))}
    </div>
  </section>
);

export default HomeLatestWork;
