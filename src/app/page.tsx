import HomeView from "../components/views/HomeView";
import { getLatestPosts } from "../models/posts";
import { getLatestWorks } from "../models/works";

const Home = () => {
  const posts = getLatestPosts(3);
  const works = getLatestWorks(3);

  return <HomeView posts={posts} works={works} />;
};

export default Home;
