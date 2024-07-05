import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode
}

export const Banner = ({ title, children }: Props) => {
  return (
    <div
      className="flex flex-col items-center h-full bg-[url('/assets/images/background.jpg')] bg-no-repeat bg-[center_top_3rem] bg-contain space-y-6 pt-24 "
    >
      <h1 className="font-semibold text-white text-center text-2xl uppercase">
        {title}
      </h1>
      {children}
    </div>
  )
}
