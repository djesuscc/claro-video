'use client';

import { Video } from "@/interfaces/video";
import Image from "next/image";

interface Props extends Video {
  onClick: () => void;
}

export const VideoCircle = ({ id, title, img, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="w-full xl:h-56 xl:w-56 rounded-full flex flex-col items-center cursor-pointer"
    >
      <Image
        src={img}
        width={'192'}
        height={'192'}
        alt={title}
        layout="responsive"
        className="w-full h-full p-0 rounded-full"
      />
      <span className="uppercase text-white font-semibold text-center">{title}</span>
    </div>
  )
}
