"use client";
import { useEffect } from "react";
import Showcase from "./components/showcase";
import Line from "./components/line";
import DateSection from "./components/date";
import Location from "./components/location";
import Music from "./components/music";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <main className="max-w-[450px] p-2 bg-[#ececec] w-full min-h-svh overflow-x-hidden">
      <Showcase />
      <div className="my-20">
        <Line />
      </div>
      <DateSection />
      <Location />
      <Music />
      <a
        href="https://t.me/bakhodir_abdullaev"
        target="_blank"
        className="block mt-20 text-right text-sm text-[#a9a05c] font-serif italic pr-2 pb-2 underline"
      >
        by Abdullaev
      </a>
    </main>
  );
}
