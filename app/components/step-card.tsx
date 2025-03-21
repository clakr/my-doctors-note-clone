import { Step } from "@/app/types";
import Image from "next/image";

export function StepCard({ step }: { step: Step }) {
  return (
    <li className="bg-light-blue grid place-items-center gap-y-4 rounded-lg p-6 pb-12">
      <Image src={step.image} alt="" width={205} height={205} />
      <h3 className="text-center text-2xl font-semibold capitalize">
        {step.heading}
      </h3>
      <p className="text-dark-gray leading-none">{step.description}</p>
    </li>
  );
}
