import CardList from "./CardList";
import api from "@/api";

async function getPosts(page) {
  const response = await api.get(`/posts?category=${page}`);
  const posts = await response.data.data.posts;
  // console.log(posts);
  return posts;
}

const CardArticle = async ({ page }) => {
  const posts = await getPosts(page);
  return (
    <div>
      <CardList posts={posts} />
    </div>
  );
};

export default CardArticle;
