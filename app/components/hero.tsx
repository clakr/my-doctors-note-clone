import { Button } from "@/app/components/button";
import { ArrowRight } from "@/app/components/icons/arrow-right-icon";
import { Secure } from "@/app/components/icons/secure-icon";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate flex flex-col items-center justify-center gap-y-4 bg-[url(/hero.jpeg)] bg-cover bg-center px-4 py-16 text-center before:absolute before:inset-0 before:-z-10 before:bg-black/60 md:min-h-[500px]">
      <h1 className="mb-4 max-w-[30ch] text-3xl font-bold text-white md:text-5xl lg:mb-8 lg:max-w-[20ch]">
        Your Doctor&apos;s Note{" "}
        <span className="relative whitespace-nowrap">
          In 1 Minute, for $29,99!
          <Image
            src="/line-1.svg"
            alt=""
            width={250}
            height={6}
            className="absolute top-[calc(100%+.5rem)] left-1/2 w-4/5 -translate-x-1/2"
          />
        </span>
      </h1>
      <Button type="button">
        Get your Note Now
        <ArrowRight />
      </Button>
      <span className="flex items-center justify-center gap-x-2 text-sm font-semibold text-white md:text-lg">
        <Secure />
        100% Risk-Free Money Back Guarantee
      </span>
    </section>
  );
}
