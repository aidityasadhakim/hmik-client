import CardEvent from "./CardEvent";

const CardList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-9 my-20 mx-32">
      {events.map((event, i) => {
        return (
          <CardEvent
            key={i}
            title={event.title}
            description={event.description}
            eventUrl={event.eventUrl}
          />
        );
      })}
    </div>
  );
};

export default CardList;
