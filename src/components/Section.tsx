'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Video } from "@/interfaces/video";
import { VideoCircle } from "./VideoCircle";
import { VideoPlayer } from "./VideoPlayer";
import { LIST_ITEMS } from '@/common/constants';
import { useState } from "react";

interface Props {
  title: string;
}

export const Section = ({ title }: Props) => {
  const [videoId, setVideoId] = useState('rKmnuiDDnAo')
  const listVideos: Video[] = LIST_ITEMS;

  return (
    <div className="w-full h-full flex flex-col items-center border-b border-gray-400">
      <VideoPlayer id={videoId} />

      <div className="bg-[#232323] w-full mt-10 flex flex-col items-center justify-center pt-8 pb-12 h-full space-y-5">
        <h1 className="text-2xl lg:first-letter:text-4xl text-white font-thin uppercase">{title}</h1>
        <Carousel
          className="w-full max-w-5xl"
        >
          <CarouselContent className="flex">
            {listVideos.map((video) => (
              <CarouselItem key={video.id} className="flex justify-center basis-1/2 md:basis-1/3 lg:basis-1/4 p-0">
                <VideoCircle key={video.id} {...video} onClick={() => setVideoId(video.id)} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
