'use client';

import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

interface Props {
  id: string;
}
const baseOpts = {
  playerVars: {
    autoplay: 0,
    controls: 1,
  },
};


const getOptsForScreenSize = () => {
  if (typeof window === 'undefined') return {
    ...baseOpts,
    height: '400',
    width: '763',
  };
  const screenWidth = window.innerWidth;

  if (screenWidth < 600) {
    return {
      ...baseOpts,
      height: '200',
      width: '350',
    };
  } else if (screenWidth < 900) {
    return {
      ...baseOpts,
      height: '300',
      width: '550',
    };
  } else {
    return {
      ...baseOpts,
      height: '400',
      width: '763',
    };
  }
};

export const VideoPlayer = ({ id }: Props) => {
  const [playerReady, setPlayerReady] = useState(false);
  const opts = getOptsForScreenSize();

  useEffect(() => {
    setPlayerReady(true);
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const opts = getOptsForScreenSize();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  if (!playerReady) return <></>

  return (
    <YouTube videoId={id} opts={opts} />
  )
}
