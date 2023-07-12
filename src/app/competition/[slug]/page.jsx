import ViewPost from "@/components/posts/ViewPost";

const page = ({ params }) => {
  return (
    <div>
      <ViewPost params={params} />
    </div>
  );
};

export default page;
