import { Card, Button } from "flowbite-react";
import "./event.module.css";
import Link from "next/link";

const printLn = () => {
  console.log("1");
};

const CardEvent = ({ title, description, eventUrl }) => {
  return (
    <div className="max-w-sm card-container">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link href={eventUrl}>
          <Button onClick={printLn} gradientDuoTone={"purpleToBlue"}>
            Read More
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default CardEvent;
