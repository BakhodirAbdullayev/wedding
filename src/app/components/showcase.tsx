import { FC } from "react";
import Image from "next/image";
import { greatVibes } from "@/fonts";
import Flowers from "./flowers";
import Line from "@/app/components/line";
import ScrollDown from "@/app/components/scroll-down";

const Showcase: FC = (): JSX.Element => {
  return (
    <div className="h-svh flex flex-col gap-5">
      <nav
        className="flex items-center justify-between p-4 px-8 mb-12"
        data-aos="fade-down"
      >
        <div className="flex items-center justify-center py-8 rounded-t-full rounded-b-full border-2 border-[#a9a05c]">
          <Image src="/logo.png" alt="sh" width={100} height={100} />
        </div>
        <div
          className={`font-serif pr-8 text-3xl text-[#a9a05c] [text-shadow:2px_2px_2px_#757261] italic`}
        >
          Taklifnoma
        </div>
      </nav>
      <div
        className={`${greatVibes.className} relative text-6xl [text-shadow:2px_2px_2px_#6b6b6b] py-5 text-sky-600 space-y-5`}
      >
        <Flowers />
        <h1 className="pl-10" data-aos="fade-right">
          Sharofiddin
        </h1>
        <h1 className="text-center" data-aos="zoom-in">
          &
        </h1>
        <h1 className="pr-10 flex justify-end" data-aos="fade-left">
          Shahlo
        </h1>
      </div>
        <div className="flex-1 flex flex-col items-center justify-between pt-16">
            <Line />
            <ScrollDown />
        </div>
    </div>
  );
};

export default Showcase;
