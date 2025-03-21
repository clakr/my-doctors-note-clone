import { Button } from "@/app/components/button";
import { ArrowRight } from "@/app/components/icons/arrow-right-icon";
import { Secure } from "@/app/components/icons/secure-icon";
import { StepCard } from "@/app/components/step-card";
import { steps } from "@/app/constants";

export function Steps() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-y-8 px-4 py-8">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="max-w-[20ch] text-center text-3xl font-semibold md:text-5xl">
          Get An Online Doctor&apos;s Note In 3 Easy Steps
        </h2>
        <p className="text-dark-gray max-w-[60ch] font-medium md:text-lg">
          With our online platform, we make it quick and simple for you to
          obtain a doctors note, so you can focus on rest and recovery.
        </p>
      </div>
      <ul className="grid grid-rows-[repeat(3,max-content)] gap-y-4 md:grid-cols-3 md:gap-x-6">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </ul>
      <div className="flex flex-col items-center gap-y-4">
        <Button type="button">
          Get your Note Now
          <ArrowRight />
        </Button>
        <span className="text-dark-gray flex items-center justify-center gap-x-2 text-sm font-semibold md:text-lg">
          <Secure />
          100% Risk-Free Money Back Guarantee
        </span>
      </div>
    </section>
  );
}
