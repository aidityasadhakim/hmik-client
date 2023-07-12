import CardEvent from "./CardEvent";

const CardList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-9 my-20 mx-32">
      {posts.map((post, i) => {
        return <CardEvent key={post.id} post={post} />;
      })}
    </div>
  );
};

export default CardList;
