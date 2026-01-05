import HomeView from "../components/views/HomeView";
import { getLatestPosts } from "../models/posts";

const Home = () => {
  const posts = getLatestPosts(3);

  return <HomeView posts={posts} />;
};

export default Home;
