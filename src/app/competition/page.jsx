import CarouselEvent from "@/components/posts/CarouselEvent";
import CardArticle from "@/components/posts/CardArticle";

const page = () => {
  return (
    <div>
      <CarouselEvent />
      <CardArticle page={"competition"} />
    </div>
  );
};

export default page;
