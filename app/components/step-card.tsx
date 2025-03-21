import { Step } from "@/app/types";
import Image from "next/image";

export function StepCard({ step }: { step: Step }) {
  return (
    <li className="bg-light-blue row-span-3 grid grid-rows-subgrid place-items-center gap-y-4 rounded-lg p-6 pb-12 md:place-items-start">
      <Image src={step.image} alt="" width={205} height={205} />
      <h3 className="text-center text-2xl font-semibold capitalize">
        {step.heading}
      </h3>
      <p className="text-dark-gray leading-none">{step.description}</p>
    </li>
  );
}
