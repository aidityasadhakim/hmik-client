"use client";

import CarouselEvent from "@/components/event/CarouselEvent";
import CardList from "@/components/event/CardList";
import { EVENT_LIST } from "@/constant/EventDummy";

const page = () => {
  return (
    <div>
      <CarouselEvent />
      <CardList events={EVENT_LIST} />
    </div>
  );
};

export default page;
