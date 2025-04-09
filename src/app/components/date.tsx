import { FC } from "react";
import Flowers from "./flowers";
import Header from "./header";

const DateSection: FC = (): JSX.Element => {
  return (
    <div className="relative mt-32">
      <Flowers />
      <Header
        text="Assalomu alaykum"
        // paragraph="Hurmatli qadrdonlar! Sizlarni aziz farzandlarimiz Sharofiddin va Shahlolarning nikoh to‘ylari munosabati bilan 2025-yil 3-may kuni soat 18:00 da bo‘lib o‘tadigan to‘y dasturxonimizga taklif etamiz!"
        paragraph={
          "Hurmatli qadrdonlar! Sizlarga katta hurmat va ehtirom bilan shuni ma’lum qilamizki, biz uchun eng quvonchli va baxtiyor kunlarimizdan biri — nikoh to‘yimiz yaqinlashmoqda. Ushbu ezgu kunda Sizni yaqinlarimiz davrasida ko‘rish biz uchun katta baxt va sharaf bo‘ladi! \n\n Shu munosabat bilan sizni 2025-yil 3-may kuni, Guvalak qishlog'i Bahor to‘yxonasida bo‘lib o‘tadigan to‘yimizga taklif qilamiz."
        }
        p="Hurmat va ehtirom ila, Abriyevlar va Isoqovlar oilasi"
      />

      <div className="my-7 w-3/6 mx-auto flex items-center" data-aos="zoom-in">
        <span className="w-2 h-2 rounded-full border-1 border-[#a9a05c]"></span>
        <div className="w-full h-px bg-[#a9a05c]"></div>
        <span className="w-2 h-2 rounded-full border-1 border-[#a9a05c]"></span>
      </div>

      <h3
        className="text-center text-3xl text-[#a9a05c] font-serif"
        data-aos="zoom-in"
      >
        <div>
          03 <span className="mx-1">May</span> 2025
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>19</span>
          <span className="w-1 h-1 rounded-full bg-[#a9a05c]"></span>
          <span>00</span>
        </div>
      </h3>
    </div>
  );
};

export default DateSection;
