import { Card, Button } from "flowbite-react";
import "./event.module.css";

const printLn = () => {
  console.log("1");
};

const CardEvent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-9 my-20 mx-32">
      <div className="max-w-sm card-container">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.gi
          </p>
          <Button onClick={printLn} gradientDuoTone={"purpleToBlue"}>
            Read More
          </Button>
        </Card>
      </div>

      <div className="max-w-sm card-container">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>

      <div className="max-w-sm card-container ">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
      <div className="max-w-sm card-container">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
      <div className="max-w-sm card-container">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
      <div className="max-w-sm card-container">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CardEvent;
