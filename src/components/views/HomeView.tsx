import type { Post, Work } from "contentlayer/generated";
import HomeContact from "@/components/views/HomeContact";
import HomeHero from "@/components/views/HomeHero";
import HomeLatestBlog from "@/components/views/HomeLatestBlog";
import HomeLatestWork from "@/components/views/HomeLatestWork";

type HomeViewProps = {
  posts: Post[];
  works: Work[];
};

const HomeView = ({ posts, works }: HomeViewProps) => (
  <>
    <div className="container pt-24 pb-16">
      <main className="flex flex-col gap-12">
        <HomeHero />
        <HomeLatestBlog posts={posts} />
        <HomeLatestWork works={works} />
      </main>
    </div>
    <HomeContact />
  </>
);

export default HomeView;
