'use client';

import { useState, use } from "react";

// Note: Ensure these images exist in the public folder or the same directory
// For now, using placeholders to prevent build errors if they are missing
const ellipse6 = "/ellipse-6.png"; 
const geminiGeneratedImageWmgr7Ewmgr7Ewmgr1 = "/gemini-generated-image-wmgr7ewmgr7ewmgr-1.png"; 

export default function Screen({ params }: { params: Promise<{ locale: string }> }): React.ReactElement { 
  const { locale } = use(params);
  const [isHovered, setIsHovered] = useState(false); 

  const navigationItems = [ 
    { text: "الرئيســية", isActive: true }, 
    { text: "تواصــل", isActive: false }, 
  ]; 

  return ( 
    <main className="bg-[linear-gradient(180deg,rgba(226,199,170,0.45)_0%,rgba(254,254,254,0.45)_51%)] w-full min-w-[1440px] min-h-[1024px] relative"> 
      <img 
        className="absolute top-0 left-0 w-[1440px] h-[1024px] aspect-[1] object-cover" 
        alt="خلفية المملكة العربية السعودية" 
        src={geminiGeneratedImageWmgr7Ewmgr7Ewmgr1} 
      /> 

      <div className="absolute top-0 left-0 w-[1440px] h-[1024px] bg-[linear-gradient(180deg,rgba(58,43,30,1)_24%,rgba(58,43,30,0)_100%)]" /> 

      <header 
        className="absolute top-10 left-0 w-full px-[150px] flex items-center justify-between flex-row-reverse" 
        role="banner" 
      > 
        <div className="flex items-center gap-4"> 
          <img className="w-[74px] h-[74px]" alt="شعار تباين" src={ellipse6} /> 
          <h1 className="font-title font-bold text-white text-[64px] text-center tracking-[0] leading-[normal] [direction:rtl]"> 
            تبايـــن 
          </h1> 
        </div> 

        <nav 
          className="flex items-center gap-[137px]" 
          role="navigation" 
          aria-label="التنقل الرئيسي" 
        > 
          {navigationItems.map((item, index) => ( 
            <a 
              key={index} 
              href={item.isActive ? "#" : `#${item.text}`} 
              className={`font-title font-bold text-white text-4xl text-center tracking-[0] leading-[normal] [direction:rtl] ${ 
                item.isActive ? "underline" : "" 
              } hover:underline transition-all duration-200`} 
              aria-current={item.isActive ? "page" : undefined} 
            > 
              {item.text} 
            </a> 
          ))} 
        </nav> 
      </header> 

      <section 
        className="absolute top-[226px] left-[156px] w-[1128px] flex flex-col items-center" 
        aria-labelledby="hero-heading" 
      > 
        <h2 
          id="hero-heading" 
          className="w-full font-title font-bold text-white text-8xl text-center tracking-[0] leading-[normal] [direction:rtl]" 
        > 
          استكشف قوانيــن 
          <br /> 
          المملكة العربية السعـــودية 
        </h2> 

        <p className="mt-[279px] w-[1136px] font-title font-normal text-white text-4xl text-center tracking-[0] leading-[normal] [direction:rtl]"> 
          تباين دليلك لفهم الفروقات بين القوانين في المملكة العربية السعودية 
          <br /> وتلك المطبقة في بلدك، بأسلوب مبسط وواضح يناسب الجميع 
        </p> 

        <button 
          className="mt-[152px] relative w-[422px] h-[90px] bg-white rounded-[156px] hover:bg-opacity-90 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
          aria-label="سجل واكتشف الآن" 
        > 
          <span className="font-title font-bold text-[#3d2b19] text-5xl text-center tracking-[0] leading-[normal] [direction:rtl]"> 
            سجل و اكتشف الآن 
          </span> 
        </button> 
      </section> 
    </main> 
  ); 
}

