"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import { useState } from "react";

export default function Switcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isSwitched, setIsSwitched] = useState(locale !== 'en');
  
  const switchLocale = () => {
    const newLocale = isSwitched ? 'en' : 'zh';
    
    setIsSwitched(!isSwitched);
    
    router.replace(pathname, { locale: newLocale as typeof routing.locales[number] });
  };

  

  return (
    <>
      <button className="bg-slate-600 rounded-full p-2 cursor-pointer" onClick={() => switchLocale()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg>
      </button>
    </>
  )
}