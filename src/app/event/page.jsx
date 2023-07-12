import CarouselEvent from "@/components/posts/CarouselEvent";
import CardArticle from "@/components/posts/CardArticle";

const page = () => {
  return (
    <div>
      <CarouselEvent />
      <CardArticle page={"event"} />
    </div>
  );
};

export default page;
