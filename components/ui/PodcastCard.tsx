import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
}: {
  imgUrl: string;
  title: string;
  description: string;
  podcastId: number;
}) => {
  const router = useRouter();

  const handleViews = () => {
    // increase plays

    router.push(`/podcasts/${podcastId}`, { scroll: true });
  };
  return (
    <div className="cursor-point" onClick={handleViews}>
      <figure className="flex flex-col gap-2">
        {/* <div className="relative  aspect-square h-fit w-full rounded-xl 2xl:size-[200px]">
          <Image
            src={imgUrl}
            //   width={174}
            //   height={174}
            fill
            className="object-cover rounded-lg"
            alt={title}
          />
        </div> */}
        <Image
          src={imgUrl}
          width={174}
          height={174}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
          alt={title}
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1"> {title} </h1>

          <h2 className="text-12 truncate font-normal capitalize text-white-4 ">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
