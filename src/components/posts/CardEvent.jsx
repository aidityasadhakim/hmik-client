"use client";
import { Card, Button } from "flowbite-react";
import "./event.module.css";
import Link from "next/link";

const CardEvent = ({ post }) => {
  return (
    <div className="max-w-sm card-container">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={
          post.image
            ? post.image
            : "https://flowbite.com/docs/images/blog/image-1.jpg"
        }
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {post.excerpt}
        </p>
        <Link href={`/competition/${post.slug}`}>
          <Button gradientDuoTone={"purpleToBlue"}>Read More</Button>
        </Link>
      </Card>
    </div>
  );
};

export default CardEvent;
