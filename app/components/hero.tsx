import { ArrowRight } from "@/app/components/icons/arrow-right-icon";
import { Secure } from "@/app/components/icons/secure-icon";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate flex flex-col items-center gap-y-4 bg-[url(/hero.jpeg)] bg-cover bg-center px-4 py-16 text-center before:absolute before:inset-0 before:-z-10 before:bg-black/60">
      <h1 className="mb-4 text-3xl font-bold text-white">
        Your Doctor's Note In{" "}
        <span className="relative whitespace-nowrap">
          1 Minute, for $29,99!
          <Image
            src="/line-1.svg"
            alt=""
            width={250}
            height={6}
            className="absolute top-[calc(100%+.5rem)] left-4"
          />
        </span>
      </h1>
      <button
        type="button"
        className="bg-vivid-blue flex items-center justify-center gap-x-2 self-stretch rounded-xl p-4.5 font-semibold text-white"
      >
        Get your Note Now
        <ArrowRight />
      </button>
      <span className="flex items-center justify-center gap-x-2 text-sm font-semibold text-white">
        <Secure />
        100% Risk-Free Money Back Guarantee
      </span>
    </section>
  );
}
