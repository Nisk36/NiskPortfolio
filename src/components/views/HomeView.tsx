import type { Post, Work } from "contentlayer/generated";
import HomeContact from "@/components/views/HomeContact";
import HomeHero from "@/components/views/HomeHero";
import HomeLatestBlog from "@/components/views/HomeLatestBlog";
import HomeLatestWork from "@/components/views/HomeLatestWork";
import PageContainer from "@/components/PageContainer";

type HomeViewProps = {
  posts: Post[];
  works: Work[];
};

const HomeView = ({ posts, works }: HomeViewProps) => (
  <>
    <PageContainer>
      <main className="flex flex-col gap-12">
        <HomeHero />
        <HomeLatestBlog posts={posts} />
        <HomeLatestWork works={works} />
      </main>
    </PageContainer>
    <HomeContact />
  </>
);

export default HomeView;
