import { StepCard } from "@/app/components/StepCard";
import { Button } from "@/app/components/button";
import { ArrowRight } from "@/app/components/icons/arrow-right-icon";
import { Secure } from "@/app/components/icons/secure-icon";
import { steps } from "@/app/constants";

export function Steps() {
  return (
    <section className="flex flex-col gap-y-8 px-4 py-8">
      <div className="grid gap-y-4">
        <h2 className="text-center text-3xl font-semibold">
          Get An Online Doctor's Note In 3 Easy Steps
        </h2>
        <p className="text-dark-gray font-medium">
          With our online platform, we make it quick and simple for you to
          obtain a doctors note, so you can focus on rest and recovery.
        </p>
      </div>
      <ul className="grid gap-y-4">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </ul>
      <div className="flex flex-col gap-y-4">
        <Button type="button">
          Get your Note Now
          <ArrowRight />
        </Button>
        <span className="text-dark-gray flex items-center justify-center gap-x-2 text-sm font-semibold">
          <Secure />
          100% Risk-Free Money Back Guarantee
        </span>
      </div>
    </section>
  );
}
